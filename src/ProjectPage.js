import React from 'react';
import './ProjectPage.css';
import graphImg from './images/app-recommendations/graph.png';
import actionbasedGif from './images/app-recommendations/actionbased.gif';
import onboardingflowGif from './images/app-recommendations/onboardingflow.gif';
import flyoutmenuGif from './images/app-recommendations/flyoutmenu.gif';
import appmarketplacePng from './images/app-recommendations/appmarketplace.png';
import salesappplaceholderPng from './images/app-recommendations/salesappplaceholder.png';
import evergreenTextPng from './images/app-recommendations/evergreen_text.png';
import evergreenLogoPng from './images/app-recommendations/evergreen_logo.png';
import evergreenVideoPng from './images/app-recommendations/evergreen_video.png';
import addAsTaskGif from './images/app-recommendations/add-as-a-task.gif';
import snoozeGif from './images/app-recommendations/snooze.gif';
import timesaverwidgetPng from './images/app-recommendations/timesaverwidget.png';
import differenttimesaverpatternsPng from './images/app-recommendations/differenttimesaverpatterns.png';
import actionbasedembeddedPng from './images/app-recommendations/actionbasedembedded.png';
import actionbasedpopupPng from './images/app-recommendations/actionbasedpopup.png';

function ProjectPage({ 
  title, 
  description, 
  focus, 
  team, 
  timeline,
  heroImage,
  noGradient,
  children 
}) {
  return (
    <div className={`project-page ${noGradient ? 'no-gradient' : ''}`}>
      <div className="project-hero">
        <div className="project-header">
          <h1 className="project-title">{title}</h1>
          <p className="project-description">{description}</p>
        </div>
        
        <div className="project-meta">
          <div className="project-meta-section">
            <h3 className="meta-label">Focus</h3>
            <div className="meta-value">
              {focus.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
          
          {team && (
            <div className="project-meta-section">
              <h3 className="meta-label">Team</h3>
              <div className="meta-value">
                {team.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>
          )}
          
          <div className="project-meta-section">
            <h3 className="meta-label">Timeline</h3>
            <p className="meta-value">{timeline}</p>
          </div>
        </div>
      </div>
      
      <div className="project-hero-image">
        {heroImage ? (
          <img src={heroImage} alt={title} />
        ) : (
          <div className="image-placeholder">Hero Image</div>
        )}
      </div>

      {children}
    </div>
  );
}

export default ProjectPage;
