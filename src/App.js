import React, { useState } from 'react';
import './App.css';

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
              <a href="#work" className="nav-link active">work</a>
              <a href="#resume" className="nav-link">resume</a>
              <a href="#contact" className="nav-link">contact</a>
              <a href="#play" className="nav-link">play</a>
            </div>
            <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '×' : '☰'}
            </div>
          </div>
        </nav>
        
        <main className="main-content">
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
              *Prakhar is a product designer and a creative technologist
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
