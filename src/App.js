import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <nav className="navigation">
          <div className="nav-right">
            {!isMenuOpen ? (
              <div className="nav-links">
                <a href="#ux" className="nav-link underlined">UX</a>
                <a href="#not-ux" className="nav-link">not UX</a>
                <a href="#resume" className="nav-link">resume</a>
                <a href="#contact" className="nav-link">contact</a>
              </div>
            ) : (
              <div className="mobile-menu-inline">
                <div className="mobile-menu-links">
                  <a href="#ux" className="mobile-nav-link underlined">UX</a>
                  <a href="#not-ux" className="mobile-nav-link">not UX</a>
                  <a href="#resume" className="mobile-nav-link">resume</a>
                  <a href="#contact" className="mobile-nav-link">contact</a>
                </div>
              </div>
            )}
            <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '×' : '☰'}
            </div>
          </div>
        </nav>
        
        <main className="main-content">
          <div className="project-item">
            <a href="#" className="project-link">Quickbooks <span className="highlight">Developer Portal</span></a>
          </div>
          <div className="project-item">
            <a href="#" className="project-link">Generative furniture upcycling with <span className="highlight">Bland Canvas</span></a>
          </div>
          <div className="project-item">
            <a href="#" className="project-link">Intuit <span className="highlight">App Recommendations</span></a>
          </div>
          <div className="project-item">
            <a href="#" className="project-link">A social music listening app called <span className="highlight">Potluck</span> </a>
          </div>
          <div className="author-description">
            I'm Prakhar, a product designer, and this is some of my work.
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
