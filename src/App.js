import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navigation">
          <div className="nav-left">
            <span className="nav-name">Prakhar Mittal</span>
          </div>
          <div className="nav-right">
            <a href="#work" className="nav-link underlined">work</a>
            <a href="#resume" className="nav-link">resume</a>
            <a href="#contact" className="nav-link">contact</a>
            <a href="#play" className="nav-link">play</a>
          </div>
        </nav>
        
        <main className="main-content">
          <div className="project-item">
            <a href="#" className="project-link">Quickbooks <span className="highlight">developer dashboard</span></a>
          </div>
          <div className="project-item">
            <a href="#" className="project-link"><span className="highlight">Bland Canvas</span> — AI furniture upcycling</a>
          </div>
          <div className="project-item">
            <a href="#" className="project-link">Intuit <span className="highlight">app recommendations</span></a>
          </div>
          <div className="project-item">
            <a href="#" className="project-link"><span className="highlight">Potluck</span>, a social music listening app</a>
          </div>
          <div className="author-description">
            Prakhar is a product designer and a creative technologist
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
