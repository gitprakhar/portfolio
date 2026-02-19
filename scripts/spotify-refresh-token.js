const readline = require('readline');

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, (answer) => resolve(answer.trim())));
}

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  try {
    const clientId = await ask(rl, 'Spotify Client ID: ');
    const clientSecret = await ask(rl, 'Spotify Client Secret: ');
    const redirectUri = await ask(rl, 'Redirect URI (exact, as in Spotify app settings): ');
    const code = await ask(rl, 'Authorization code (from the redirect URL): ');

    if (!clientId || !clientSecret || !redirectUri || !code) {
      throw new Error('All fields are required.');
    }

    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    });

    const res = await fetch(SPOTIFY_TOKEN_URL, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    const text = await res.text();
    if (!res.ok) {
      throw new Error(`Spotify token error (${res.status}): ${text}`);
    }

    const data = JSON.parse(text);
    if (!data.refresh_token) {
      throw new Error('No refresh_token returned. Re-authorize with show_dialog=true and use a fresh code.');
    }

    console.log('\nRefresh token:\n');
    console.log(data.refresh_token);
    console.log('\nSave it as SPOTIFY_REFRESH_TOKEN in Vercel and .env.local.\n');
  } finally {
    rl.close();
  }
}

main().catch((err) => {
  console.error(`\nError: ${err.message}\n`);
  process.exit(1);
});
