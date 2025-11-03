import React from 'react';
import ProjectPage from '../ProjectPage';
import potluckHeroImg from '../images/potluck/potluck-hero.png';
import washingtonImg from '../images/potluck/washington.jpeg';
import abbaImg from '../images/potluck/abba.gif';
import abcdImg from '../images/potluck/abcd.png';
import potluckLooksImg from '../images/potluck/potluck-looks.jpeg';
import channelsAnywhereImg from '../images/potluck/channels-anywhere.jpeg';
import channelsImg from '../images/potluck/channels.gif';
import channelPageImg from '../images/potluck/channel-page.jpeg';
import suggestionsImg from '../images/potluck/suggestions.jpeg';

function PotluckPage() {
  return (
    <ProjectPage
      title="Potluck"
      description="Potluck is a social music app that connects people in shared spaces through collaborative playlists. Users join public channels to listen, suggest, and vote on songs together, turning music into a fun, community-driven experience that goes beyond just playing tunes in the background."
      focus={`UI design`}
      timeline="4 weeks"
      heroImage={potluckHeroImg}
    >

      <div className="project-section">
        <h3 className="section-label">PROBLEM</h3>
        <h2 className="section-title">People avoid interactions</h2>
        <p className="section-body">It all started with a social experiement to make people interact with each other. While people interacted with the installation, they barely interacted with each other.</p>
        <div className="section-image" style={{ 
          aspectRatio: '16/9', 
          backgroundColor: '#000000', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          width: '100%'
        }}>
          <img src={washingtonImg} alt="Washington social experiment" style={{ 
            height: '90%', 
            width: 'auto', 
            objectFit: 'contain',
            display: 'block'
          }} />
        </div>
      </div>
      <div className="project-section">
        <h2 className="section-title">Was there a way to connect people without the need of an explicit interaction?</h2>
    </div>
    <div className="project-section">
        <h2 className="section-title">ABBA at the supermarket</h2>
        <p className="section-body">Have you ever been in a supermarket when a famous song starts playing, and suddenly, everyone is vibing to the same rhythm, sharing an implicit connection?</p>
        <div className="section-image" style={{ 
          aspectRatio: '16/9', 
          backgroundColor: '#000000', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          width: '100%'
        }}>
          <img src={abbaImg} alt="ABBA at the supermarket" style={{ 
            height: '90%', 
            width: 'auto', 
            objectFit: 'contain',
            display: 'block'
          }} />
        </div>
    </div>
    <div className="project-section">
        <h2 className="section-title">I wanted to take that moment at the supermarket, of blasting boomboxes on the streets in the '90s, and make it available everywhere. Thus was born, Potluck. Potluck let people in a space share a music listening experience.</h2>
    </div>

    <div className="project-section">
        <h3 className="section-label">EXISTING APP DISCOVERY POINTS</h3>
        <h2 className="section-title">What does Potluck look like?</h2>
        <p className="section-body">(hint: it's all in the name)</p>
        <div className="section-image">
          <img src={abcdImg} alt="Potluck app interface" />
        </div>
        <div className="section-image">
          <img src={potluckLooksImg} alt="Potluck app design" />
        </div>
    </div>

    <div className="project-section">
        <h2 className="section-title">Channels anywhere</h2>
        <p className="section-body">The goal was to make it simple for anyone anywhere to either start a channel that others could join, or join an existing channel.</p>
        <div className="section-image" style={{ 
          aspectRatio: '16/9', 
          backgroundColor: '#000000', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          width: '100%'
        }}>
          <img src={channelsAnywhereImg} alt="Channels anywhere interface" style={{ 
            height: '90%', 
            width: 'auto', 
            objectFit: 'contain',
            display: 'block'
          }} />
        </div>
    </div>

    <div className="project-section">
        <h2 className="section-title">Not another infinite scroll.</h2>
        <p className="section-body">I wanted people to be able to go back and forth between channels with ease, without having to scroll. People also associated music with album art, making it easier for them to switch without having to read the channel name again. (Also reminiscent of stacking vinyl records).</p>
        <div className="section-image" style={{ 
          aspectRatio: '16/9', 
          backgroundColor: '#000000', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          width: '100%'
        }}>
          <img src={channelsImg} alt="Channel navigation interface" style={{ 
            height: '90%', 
            width: 'auto', 
            objectFit: 'contain',
            display: 'block'
          }} />
        </div>
    </div>

    <div className="project-section">
        <h2 className="section-title">Discovering new music.</h2>
        <p className="section-body">A common theme between my conversations with people and if they would use this app was that they would also love to discover new music through this app. So along with showing how many people are listening, inside each channel, there is a button to save the music as a playlist to their spotify.</p>
        <div className="section-image" style={{ 
          aspectRatio: '16/9', 
          backgroundColor: '#000000', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          width: '100%'
        }}>
          <img src={channelPageImg} alt="Channel page with Spotify integration" style={{ 
            height: '90%', 
            width: 'auto', 
            objectFit: 'contain',
            display: 'block'
          }} />
        </div>
    </div>

    <div className="project-section">
        <h2 className="section-title">The only interaction</h2>
        <p className="section-body">Suggesting a song and liking a song suggested by someone else were the only interactions people had with the channel. People could move a song up the queue by liking it.</p>
        <div className="section-image" style={{ 
          aspectRatio: '16/9', 
          backgroundColor: '#000000', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          width: '100%'
        }}>
          <img src={suggestionsImg} alt="Song suggestions interface" style={{ 
            height: '90%', 
            width: 'auto', 
            objectFit: 'contain',
            display: 'block'
          }} />
        </div>
    </div>

    <div className="project-section">
        <h2 className="section-title">Connections</h2>
        <p className="section-body">The name, the logo, and the color scheme are all aimed at evoking a sense of connections, community, and sharing.</p>
        <div className="section-image" style={{ 
          aspectRatio: '16/9', 
          backgroundColor: '#000000', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          width: '100%'
        }}>
          <img src={channelsAnywhereImg} alt="Potluck connections and community" style={{ 
            height: '90%', 
            width: 'auto', 
            objectFit: 'contain',
            display: 'block'
          }} />
        </div>
    </div>

    </ProjectPage>
  );
}

export default PotluckPage;