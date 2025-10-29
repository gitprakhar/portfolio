import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Register icons in the library per Font Awesome React usage docs
library.add(faBars, faTimes);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const mobileMenuRef = useRef(null);
  // time to keep the menu mounted while exit animations run (ms)
  // increased to match longer animation durations so the exit animation can finish
  // before the menu is unmounted.
  const MENU_EXIT_MS = 860;

  useEffect(() => {
    if (menuMounted && mobileMenuRef.current) {
      // initialize CSS vars if mounted
      const el = mobileMenuRef.current;
      el.style.setProperty('--mx', `50%`);
      el.style.setProperty('--my', `12%`);
    }
  }, [menuMounted]);

  useEffect(() => {
    if (!isMenuOpen && menuMounted) {
      // wait for exit animation to complete before unmounting
      const t = setTimeout(() => setMenuMounted(false), MENU_EXIT_MS);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [isMenuOpen, menuMounted]);

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
              onClick={() => {
                if (!isMenuOpen) setMenuMounted(true);
                setIsMenuOpen(prev => !prev);
              }}
            >
              <FontAwesomeIcon icon={isMenuOpen ? ['fas', 'times'] : ['fas', 'bars']} />
            </button>
          </div>
        </nav>
        
        {menuMounted && (
          <div
            className={`mobile-menu ${isMenuOpen ? 'open' : 'closing'}`}
            ref={mobileMenuRef}
            onMouseMove={(e) => {
              // update radial gradient center on pointer move
              if (mobileMenuRef.current) {
                const rect = mobileMenuRef.current.getBoundingClientRect();
                const xPct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
                const yPct = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
                mobileMenuRef.current.style.setProperty('--mx', `${xPct}%`);
                mobileMenuRef.current.style.setProperty('--my', `${yPct}%`);
              }
            }}
            onTouchMove={(e) => {
              if (mobileMenuRef.current && e.touches && e.touches[0]) {
                const rect = mobileMenuRef.current.getBoundingClientRect();
                const xPct = Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100));
                const yPct = Math.max(0, Math.min(100, ((e.touches[0].clientY - rect.top) / rect.height) * 100));
                mobileMenuRef.current.style.setProperty('--mx', `${xPct}%`);
                mobileMenuRef.current.style.setProperty('--my', `${yPct}%`);
              }
            }}
            onMouseLeave={() => {
              if (mobileMenuRef.current) {
                mobileMenuRef.current.style.setProperty('--mx', `50%`);
                mobileMenuRef.current.style.setProperty('--my', `12%`);
              }
            }}
          >
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
        
  {/* show main content as soon as the menu is closed (isMenuOpen=false)
      while `menuMounted` remains true to allow the overlay exit animation to finish */}
  <main className="main-content" style={{ display: isMenuOpen ? 'none' : undefined }}>
          <div className="content-container">
            <div className="projects-container">
              <div className="project-item">
                <a href="#" className="project-link">Intuit <span className="highlight">Developer Dashboard</span></a>
              </div>
              <div className="project-item">
                <a href="#" className="project-link">Upcycling Furniture with <span className="highlight">Bland Canvas</span></a>
              </div>
              <div className="project-item">
                <a href="#" className="project-link">Quickbooks <span className="highlight">App Recommendations</span></a>
              </div>
              <div className="project-item">
                <a href="#" className="project-link">Social Music Listening with <span className="highlight">Potluck</span></a>
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
