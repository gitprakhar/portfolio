import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Register icons in the library per Font Awesome React usage docs
library.add(faBars, faTimes);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <nav className="navigation">
          <div className="nav-left">
            <div className="nav-name">Prakhar*</div>
          </div>
            <div className="nav-right">
            <div className="nav-links">
              <a href="#product-design" className="nav-link active">Product Design</a>
              <a href="#not-product-design" className="nav-link">Not Product Design</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a href="#resume" className="nav-link">Resume</a>
            </div>
            <button
              className="menu-toggle"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon icon={isMenuOpen ? ['fass', 'times'] : ['fass', 'bars']} />
            </button>
          </div>
        </nav>
        
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <div className="mobile-menu-links">
                <a href="#product-design" className="mobile-nav-link active" onClick={() => setIsMenuOpen(false)}>Product Design</a>
                <a href="#not-product-design" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Not Product Design</a>
                <a href="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <a href="#resume" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Resume</a>
              </div>
              <div className="mobile-author-description">
                *Prakhar is a product designer & creative technologist
              </div>
            </div>
          </div>
        )}
        
  <main className="main-content" style={{ display: isMenuOpen ? 'none' : undefined }}>
          <div className="content-container">
            <div className="projects-container">
              <div className="project-item">
                <a href="#" className="project-link">Intuit <span className="highlight">developer dashboard</span></a>
              </div>
              <div className="project-item">
                <a href="#" className="project-link">Upcycling furniture with <span className="highlight">Bland Canvas</span></a>
              </div>
              <div className="project-item">
                <a href="#" className="project-link">Quickbooks <span className="highlight">app recommendations</span></a>
              </div>
              <div className="project-item">
                <a href="#" className="project-link">Social music listening with <span className="highlight">Potluck</span></a>
              </div>
            </div>
            <div className="author-description">
              *Prakhar is a product designer & creative technologist
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
