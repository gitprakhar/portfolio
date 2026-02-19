const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing?additional_types=track,episode';
const SPOTIFY_RECENTLY_PLAYED_URL = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

function getEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env var: ${name}`);
  }
  return value;
}

async function getAccessToken() {
  const clientId = getEnv('SPOTIFY_CLIENT_ID');
  const clientSecret = getEnv('SPOTIFY_CLIENT_SECRET');
  const refreshToken = getEnv('SPOTIFY_REFRESH_TOKEN');

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const res = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Spotify token error: ${res.status} ${text}`);
  }

  const data = await res.json();
  return data.access_token;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const accessToken = await getAccessToken();
    const nowPlayingRes = await fetch(SPOTIFY_NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (nowPlayingRes.status === 204 || nowPlayingRes.status === 404) {
      const recent = await fetch(SPOTIFY_RECENTLY_PLAYED_URL, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!recent.ok) {
        return res.status(200).json({ isPlaying: false });
      }
      const recentData = await recent.json();
      const recentItem = recentData?.items?.[0]?.track;
      if (!recentItem) {
        return res.status(200).json({ isPlaying: false });
      }
      return res.status(200).json({
        isPlaying: false,
        isRecent: true,
        title: recentItem.name,
        artists: recentItem.artists?.map((a) => a.name).join(', ') || '',
        album: recentItem.album?.name,
        url: recentItem.external_urls?.spotify,
        image: recentItem.album?.images?.[0]?.url,
        type: 'track',
      });
    }

    if (!nowPlayingRes.ok) {
      const text = await nowPlayingRes.text();
      return res.status(nowPlayingRes.status).json({ error: text });
    }

    const data = await nowPlayingRes.json();
    const item = data.item;

    if (!item) {
      return res.status(200).json({ isPlaying: false });
    }

    const isTrack = item.type === 'track';
    const artists = isTrack ? item.artists?.map((a) => a.name).join(', ') : item.show?.publisher;
    const image = isTrack ? item.album?.images?.[0]?.url : item.images?.[0]?.url;

    return res.status(200).json({
      isPlaying: Boolean(data.is_playing),
      isRecent: false,
      title: item.name,
      artists: artists || '',
      album: isTrack ? item.album?.name : item.show?.name,
      url: item.external_urls?.spotify,
      image,
      type: item.type,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
