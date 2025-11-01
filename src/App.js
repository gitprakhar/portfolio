import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import avmImg from './images/art_direction/avm.jpg';
import icImg from './images/art_direction/ic.jpg';
import stirfriGif from './images/art_direction/stirfri.gif';
import fifaArenasImg from './images/art_direction/fifa-arenas.jpg';
import stirringDreamsGif from './images/art_direction/stirring-dreams.gif';
import panelsImg from './images/physical/panels.jpg';
import fckplasticImg from './images/physical/f*ckplastic.jpg';

// Register icons in the library per Font Awesome React usage docs
library.add(faBars, faTimes);

function App() {
  // Check URL hash on initial load to determine which page to show
  const getInitialPage = () => {
    const hash = window.location.hash;
    if (hash === '#not-product-design') return 'not-product-design';
    return 'product-design';
  };
  
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  
  // Update URL hash when page changes
  useEffect(() => {
    if (currentPage === 'not-product-design') {
      window.history.pushState(null, '', '#not-product-design');
    } else {
      window.history.pushState(null, '', '#product-design');
    }
  }, [currentPage]);
  
  // Move the gradient with the cursor on desktop
  // Soft delay for gradient following the cursor
  useEffect(() => {
    let targetX = 50, targetY = 50; // default center
    let currentX = 50, currentY = 50;
    let animationFrame;
    let initialized = false;

    function handleAnyMouseEvent(e) {
      if (window.innerWidth > 480) {
        targetX = (e.clientX / window.innerWidth) * 100;
        targetY = (e.clientY / window.innerHeight) * 100;
        // Snap to cursor position on first detection
        if (!initialized) {
          currentX = targetX;
          currentY = targetY;
          initialized = true;
        }
      }
    }

    function animate() {
      // interpolate current toward target
  currentX += (targetX - currentX) * 0.007;
  currentY += (targetY - currentY) * 0.007;
      if (appRef.current) {
        appRef.current.style.setProperty('--mx', `${currentX}vw`);
        appRef.current.style.setProperty('--my', `${currentY}vh`);
      }
      animationFrame = requestAnimationFrame(animate);
    }

    // Listen to multiple events to catch cursor position as early as possible
    document.body.addEventListener('mouseover', handleAnyMouseEvent, { once: true, capture: true });
    document.body.addEventListener('mouseenter', handleAnyMouseEvent, { once: true, capture: true });
    window.addEventListener('mousemove', handleAnyMouseEvent);
    
    animationFrame = requestAnimationFrame(animate);
    return () => {
      document.body.removeEventListener('mouseover', handleAnyMouseEvent, { capture: true });
      document.body.removeEventListener('mouseenter', handleAnyMouseEvent, { capture: true });
      window.removeEventListener('mousemove', handleAnyMouseEvent);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);
  const appRef = useRef(null);
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

  // measure the nav height and expose it as a CSS variable on the root App element
  useEffect(() => {
    function setNavHeight() {
      const navEl = navRef.current;
      const appEl = appRef.current;
      if (navEl && appEl) {
        const h = Math.round(navEl.getBoundingClientRect().height);
        appEl.style.setProperty('--nav-height', `${h}px`);
      }
    }
    setNavHeight();
    window.addEventListener('resize', setNavHeight);
    // also update after safe-area insets might change (orientation change)
    window.addEventListener('orientationchange', setNavHeight);
    return () => {
      window.removeEventListener('resize', setNavHeight);
      window.removeEventListener('orientationchange', setNavHeight);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen && menuMounted) {
      // wait for exit animation to complete before unmounting
      const t = setTimeout(() => setMenuMounted(false), MENU_EXIT_MS);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [isMenuOpen, menuMounted]);

  return (
    <div className={`App ${menuMounted ? 'menu-mounted' : ''} ${isMenuOpen ? 'menu-open' : ''}`} ref={appRef}>
      <div className="container">
        <nav className="navigation" ref={navRef}>
          <div className="nav-left">
            <div className="nav-name">Prakhar Mittal</div>
          </div>
            <div className="nav-right">
            <div className="nav-links">
              <a 
                href="#product-design" 
                className={`nav-link ${currentPage === 'product-design' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrentPage('product-design'); }}
              >
                Product Design
              </a>
              <a 
                href="#not-product-design" 
                className={`nav-link ${currentPage === 'not-product-design' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrentPage('not-product-design'); }}
              >
                Not Product Design
              </a>
              <a href="mailto:prakhar@newschool.edu" className="nav-link">Contact</a>
              <a href="https://drive.google.com/file/d/1C2fQ-lbqyClcVI79zR1kmDnMl6nh9JN2/view?usp=share_link" className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
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
                <a 
                  href="#product-design" 
                  className={`mobile-nav-link ${currentPage === 'product-design' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setCurrentPage('product-design'); setIsMenuOpen(false); }}
                >
                  Product Design
                </a>
                <a 
                  href="#not-product-design" 
                  className={`mobile-nav-link ${currentPage === 'not-product-design' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setCurrentPage('not-product-design'); setIsMenuOpen(false); }}
                >
                  Not Product Design
                </a>
                <a href="mailto:prakhar@newschool.edu" className="mobile-nav-link">Contact</a>
                <a href="https://drive.google.com/file/d/1C2fQ-lbqyClcVI79zR1kmDnMl6nh9JN2/view?usp=share_link" className="mobile-nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
              </div>
              <div className="mobile-author-description">
                Prakhar is a product designer and creative technologist*, bridging design, code, and strategy. Some of his recent work includes <span className="highlight">QuickBooks App Recommendations</span>, an AI tool for furniture upcycling called <span className="highlight">Bland Canvas</span>, the new <span className="highlight">Intuit Developer Portal</span>, and a social music listening app called <span className="highlight">Potluck</span>.
              </div>
            </div>
          </div>
        )}
        
  {/* show main content as soon as the menu is closed (isMenuOpen=false)
      while `menuMounted` remains true to allow the overlay exit animation to finish */}
  <main className="main-content" style={{ display: isMenuOpen ? 'none' : undefined }}>
          {currentPage === 'product-design' && (
            <div className="content-container">
              <div className="projects-container">
                <div className="project-item">
                  Prakhar is a product designer and creative technologist*, bridging design, code, and storytelling. Some of his recent work includes <span className="highlight">QuickBooks App Recommendations</span>, an AI tool for furniture upcycling called <span className="highlight">Bland Canvas</span>, the new <span className="highlight">Intuit Developer Portal</span>, and a social music listening app called <span className="highlight">Potluck</span>.
                </div>
              </div>
              <div className="author-description">
                *also a visual and motion designer
              </div>
            </div>
          )}

          {currentPage === 'not-product-design' && (
            <div className="content-container">
              <div className="work-units-container">
                <div className="work-unit">
                  <div className="work-unit-text">
                    <h2 className="work-unit-title">Art Direction</h2>
                    <p className="work-unit-description">Led art direction for 10+ editorial series at STIRworld.</p>
                  </div>
                  <div className="work-unit-images">
                    <a href="https://www.stirworld.com/think-opinions-art-voices-matter-stir-original-series-on-issues-of-communities-at-the-margins" target="_blank" rel="noopener noreferrer">
                      <img src={avmImg} alt="Art Direction work 1" className="work-unit-image" />
                    </a>
                    <a href="https://www.stirworld.com/see-features-illustrative-chronicles-a-series-examining-works-from-the-world-of-illustration" target="_blank" rel="noopener noreferrer">
                      <img src={icImg} alt="Art Direction work 2" className="work-unit-image" />
                    </a>
                    <a href="https://www.stirworld.com/stirfri" target="_blank" rel="noopener noreferrer">
                      <img src={stirfriGif} alt="Art Direction work 3" className="work-unit-image" />
                    </a>
                    <a href="https://www.stirworld.com/see-features-fifa-arenas-better-together" target="_blank" rel="noopener noreferrer">
                      <img src={fifaArenasImg} alt="Art Direction work 4" className="work-unit-image" />
                    </a>
                    <a href="https://www.stirworld.com/see-features-stirring-dreams-best-of-the-venice-art-biennale-2022" target="_blank" rel="noopener noreferrer">
                      <img src={stirringDreamsGif} alt="Art Direction work 5" className="work-unit-image" />
                    </a>
                  </div>
                </div>

                <div className="work-unit">
                  <div className="work-unit-text">
                    <h2 className="work-unit-title">Film & Motion</h2>
                    <p className="work-unit-description">Led motion, graphics, editing, and sound for 100+ videos.</p>
                  </div>
                  <div className="work-unit-videos">
                    <iframe 
                      className="work-unit-video"
                      src="https://www.youtube.com/embed/AkFt5hvt-uQ" 
                      title="Video 1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                    <iframe 
                      className="work-unit-video"
                      src="https://www.youtube.com/embed/myOx96Eo-2E" 
                      title="Video 2"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                    <iframe 
                      className="work-unit-video"
                      src="https://www.youtube.com/embed/nWG7ThzuoXM" 
                      title="Video 3"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                    <iframe 
                      className="work-unit-video"
                      src="https://www.youtube.com/embed/Z-NUv6z49MU?start=132" 
                      title="Video 4"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="work-unit">
                  <div className="work-unit-text">
                    <h2 className="work-unit-title">Print/Physical</h2>
                    <p className="work-unit-description">Physical design work and print materials</p>
                  </div>
                  <div className="work-unit-images">
                    <img src={panelsImg} alt="Print/Physical work 1" className="work-unit-image" />
                    <img src={fckplasticImg} alt="Print/Physical work 2" className="work-unit-image" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
  {/* Footer only for mobile, handled in CSS if needed */}
      </div>
    </div>
  );
}

export default App;
