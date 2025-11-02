import React from 'react';
import './ProjectPage.css';

function ProjectPage({ 
  title, 
  description, 
  role, 
  team, 
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
            <h3 className="meta-label">Role</h3>
            <p className="meta-value">{role}</p>
          </div>
          
          <div className="project-meta-section">
            <h3 className="meta-label">Team</h3>
            <p className="meta-value">{team}</p>
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
