import React, { useEffect, useRef, useState } from 'react';
import './AboutPage.css';
import profilePicture from '../images/about-me/profile-picture.jpg';

function AboutPage() {
  const [spotifyStatus, setSpotifyStatus] = useState('idle');
  const [spotifyData, setSpotifyData] = useState(null);
  const hasFetchedSpotifyRef = useRef(false);

  useEffect(() => {
    let isMounted = true;

    const fetchNowPlaying = async () => {
      if (!hasFetchedSpotifyRef.current) {
        setSpotifyStatus('loading');
      }
      try {
        const res = await fetch(`/api/spotify-now-playing?t=${Date.now()}`, {
          cache: 'no-store',
        });
        if (!res.ok) {
          throw new Error(`Spotify API error: ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          setSpotifyData(data);
          setSpotifyStatus('success');
          hasFetchedSpotifyRef.current = true;
        }
      } catch (err) {
        if (isMounted) {
          if (!hasFetchedSpotifyRef.current) {
            setSpotifyStatus('error');
          }
          hasFetchedSpotifyRef.current = true;
        }
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 15 * 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const isPlaying = Boolean(spotifyData?.isPlaying);

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-image-section">
          <div className="about-image-wrap">
            <img src={profilePicture} alt="Prakhar Mittal" className="about-profile-picture" />
          </div>
        </div>
        <div className="about-content-section">
          <h1 className="about-title">Hi, I am Prakhar</h1>
          <div className="about-text">
            <p>
              I'm a designer who codes, bringing together 4 years of experience across product, visual, and motion design with a background in engineering. I recently graduated with an MFA in Design & Technology from Parsons School of Design in New York.
            </p>
            <p>
              I started my career as a full-stack engineer, but I found myself increasingly drawn to the creative side—not just how things work, but how they feel and communicate. I've since worked on everything from QuickBooks at Intuit to leading design at STIRworld. What sets me apart is my ability to bridge both worlds—I'm equally comfortable in Figma as I am writing React code or experimenting with computer vision and motion capture.
            </p>
            {spotifyStatus === 'success' && isPlaying && spotifyData?.title && spotifyData?.artists ? (
              <p className="about-now-playing-line">
                Currently vibecoding while blasting {spotifyData.title} by {spotifyData.artists}
              </p>
            ) : (
              <p>
                These days, I'm exploring AI-native interfaces, building tools that blend interaction with emerging technology.
              </p>
            )}
          </div>
          <div className="about-links">
            <a href="https://drive.google.com/file/d/1IHGyugHp6ajmqUXbKpvFxZ96nWFkUqqn/view?usp=sharing" className="about-link" target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="https://www.linkedin.com/in/prakhar-mittal-0aba201a2/" className="about-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:prakhar@newschool.edu" className="about-link">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
