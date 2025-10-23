import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <nav className="navigation">
          <div className="nav-right">
            <div className="nav-links">
              <a href="#work" className="nav-link underlined">work</a>
              <a href="#resume" className="nav-link">resume</a>
              <a href="#contact" className="nav-link">contact</a>
              <a href="#play" className="nav-link">play</a>
            </div>
            <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '×' : '☰'}
            </div>
            {isMenuOpen && (
              <div className="mobile-menu-inline">
                <div className="mobile-menu-links">
                  <a href="#work" className="mobile-nav-link underlined">work</a>
                  <a href="#play" className="mobile-nav-link">play</a>
                  <a href="#resume" className="mobile-nav-link">resume</a>
                  <a href="#contact" className="mobile-nav-link">contact</a>
                </div>
              </div>
            )}
          </div>
        </nav>
        
        <main className="main-content">
          <div className="project-item">
            <a href="#" className="project-link">Quickbooks <span className="highlight">Developer Portal</span></a>
          </div>
          <div className="project-item">
            <a href="#" className="project-link"><span className="highlight">Bland Canvas</span>, generative furniture upcycling</a>
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
