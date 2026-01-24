import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Analytics } from "@vercel/analytics/react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import PasswordModal from './PasswordModal';
import AppRecommendationsPage from './pages/AppRecommendationsPage';
import BlandCanvasPage from './pages/BlandCanvasPage';
import DeveloperPortalPage from './pages/DeveloperPortalPage';
import PotluckPage from './pages/PotluckPage';
import StirworldMobileRedesignPage from './pages/StirworldMobileRedesignPage';
import AboutPage from './pages/AboutPage';
import avmImg from './images/art_direction/avm.jpg';
import icImg from './images/art_direction/ic.jpg';
import stirfriGif from './images/art_direction/stirfri.gif';
import fifaArenasImg from './images/art_direction/fifa-arenas.jpg';
import stirringDreamsGif from './images/art_direction/stirring-dreams.gif';
import panelsImg from './images/physical/panels2.jpeg';
import toteImg from './images/physical/tote.jpg';
import noWrongAnswersImg from './images/installations/nowronganswers.jpeg';
import oblivionImg from './images/installations/oblivion.jpg';
import quantumImg from './images/installations/quantum.jpg';
import quantumImg2 from './images/installations/quantum2.jpg';
import quantumImg3 from './images/installations/quantum3.jpg';
import vibeAnyColorsImg from './images/vibe-coding/any-colors-you-like.png';
import vibeAlmostAnythingImg from './images/vibe-coding/almost-anything.png';
import blandCanvasImg from './images/bland-canvas/bland-canvas.jpg';

// Register icons in the library per Font Awesome React usage docs
library.add(faBars, faTimes);

// PASSWORD LOCK CONFIGURATION
// Set to false to disable password protection for QuickBooks and Developer Portal
const ENABLE_PASSWORD_LOCK = false;
const LOCKED_PASSWORD = "password";

// Define image arrays for lightbox
const physicalImages = [
  { 
    src: panelsImg, 
    alt: "Design panels",
    title: "Exhibition Panels",
    description: "Custom designed information panels for art exhibition display"
  },
  { 
    src: toteImg, 
    alt: "Tote bag design",
    title: "Branded Tote Bag",
    description: "Limited edition tote bag design featuring custom typography and branding"
  }
  // You can add more images here that won't show on the main page:
  // { 
  //   src: additionalImage1, 
  //   alt: "Additional work",
  //   title: "Additional Project",
  //   description: "More details about this piece"
  // }
];

const installationImages = [
  { 
    src: noWrongAnswersImg, 
    alt: "No Wrong Answers installation",
    title: "No Wrong Answers",
    description: "An immersive installation that invites visitors to reflect on the core of human identity in the age of AI."
  },
  { 
    src: oblivionImg, 
    alt: "Oblivion installation",
    title: "Projection Mapping Oblivion",
    description: "This setup hides collapse behind perfect projections, pulling viewers into a tech-induced oblivion."
  },
  { 
    src: quantumImg, 
    alt: "Quantum installation",
    title: "Fleeting States + Measured Values",
    description: "Fleeting States & Measured Values – the two worlds of quantum computing is a project that aims to explain concepts of quantum computing through a physical interactive installation."
  },
  { 
    src: quantumImg2, 
    alt: "Quantum installation detail",
    title: "Fleeting States + Measured Values",
    description: "Additional view showcasing the interactive elements and quantum state visualization."
  },
  { 
    src: quantumImg3, 
    alt: "Quantum installation process",
    title: "Fleeting States + Measured Values",
    description: "Behind-the-scenes view of the installation setup and technical implementation."
  }
];

function App() {
  // Check URL path on initial load to determine which page to show
  const getInitialPage = () => {
    const path = window.location.pathname;
    if (path === '/not-product-design') return 'not-product-design';
    if (path === '/vibe-coding') return 'vibe-coding';
    if (path === '/about') return 'about';
    if (path.startsWith('/project/')) return path; // Support project pages
    return 'product-design';
  };
  
  const [currentPage, setCurrentPage] = useState(() => {
    // Check if we need to redirect protected pages before initial render
    const initialPath = getInitialPage();
    const protectedPaths = ['/project/app-recommendations', '/project/developer-portal'];
    const isProtected = ENABLE_PASSWORD_LOCK && protectedPaths.includes(initialPath);

    // If it's a protected page, start at homepage and let useEffect handle auth
    return isProtected ? 'product-design' : initialPath;
  });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCheckedInitialAuth, setHasCheckedInitialAuth] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);

  // List of protected project paths
  const protectedPaths = ['/project/app-recommendations', '/project/developer-portal'];

  // Check if a path is protected
  const isProtectedPath = (path) => {
    return ENABLE_PASSWORD_LOCK && protectedPaths.includes(path);
  };

  // Get project name from path
  const getProjectName = (path) => {
    const projectNames = {
      '/project/app-recommendations': 'QuickBooks App Recommendations',
      '/project/developer-portal': 'Intuit Developer Portal'
    };
    return projectNames[path] || 'This project';
  };

  // Function to open lightbox with specific image set
  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Handle image load state
  const handleImageLoad = (imageName) => {
    setLoadedImages(prev => ({ ...prev, [imageName]: true }));
  };

  // Handle password submission
  const handlePasswordSubmit = (enteredPassword) => {
    if (enteredPassword === LOCKED_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordModalOpen(false);
      if (pendingNavigation) {
        setCurrentPage(pendingNavigation);
        setPendingNavigation(null);
      }
      return true;
    } else {
      return false;
    }
  };

  // Handle password modal cancel
  const handlePasswordCancel = () => {
    setPasswordModalOpen(false);
    setPendingNavigation(null);
  };

  // Handle request password
  const handleRequestPassword = () => {
    window.location.href = 'mailto:prakhar@newschool.edu?subject=Password Request for Portfolio Projects';
  };

  // Handle password-protected navigation
  const handleProtectedNavigation = (e, projectPath) => {
    e.preventDefault();

    if (!ENABLE_PASSWORD_LOCK) {
      // If password lock is disabled, navigate directly
      setCurrentPage(projectPath);
      return;
    }

    if (isAuthenticated) {
      // If already authenticated, navigate directly
      setCurrentPage(projectPath);
      return;
    }

    // Show password modal
    setPendingNavigation(projectPath);
    setPasswordModalOpen(true);
  };
  
  // Check for password protection on initial load
  useEffect(() => {
    const initialPath = window.location.pathname;
    if (isProtectedPath(initialPath)) {
      setPendingNavigation(initialPath);
      setPasswordModalOpen(true);
      setHasCheckedInitialAuth(true);
    } else {
      // Not a protected path, mark as checked
      setHasCheckedInitialAuth(true);
    }
  }, []); // Only run on initial mount

  // Update URL path when page changes
  useEffect(() => {
    if (currentPage === 'not-product-design') {
      window.history.pushState(null, '', '/not-product-design');
    } else if (currentPage === 'vibe-coding') {
      window.history.pushState(null, '', '/vibe-coding');
    } else if (currentPage === 'about') {
      window.history.pushState(null, '', '/about');
    } else if (currentPage === 'product-design') {
      window.history.pushState(null, '', '/product-design');
    } else if (currentPage.startsWith('/project/')) {
      window.history.pushState(null, '', currentPage);
    }
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  // Listen for browser back/forward button clicks
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;

      // Check if navigating to a protected page
      if (isProtectedPath(path) && !isAuthenticated) {
        setPendingNavigation(path);
        setPasswordModalOpen(true);
        return;
      }

      if (path === '/not-product-design') {
        setCurrentPage('not-product-design');
      } else if (path === '/vibe-coding') {
        setCurrentPage('vibe-coding');
      } else if (path === '/about') {
        setCurrentPage('about');
      } else if (path.startsWith('/project/')) {
        setCurrentPage(path);
      } else {
        setCurrentPage('product-design');
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isAuthenticated]);
  
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
            <a 
              href="/product-design" 
              className="nav-name"
              onClick={(e) => { e.preventDefault(); setCurrentPage('product-design'); }}
            >
              Prakhar Mittal
            </a>
          </div>
            <div className="nav-right">
            <div className="nav-links">
              <a 
                href="/product-design" 
                className={`nav-link ${currentPage === 'product-design' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrentPage('product-design'); }}
              >
                Product Design
              </a>
              <a
                href="/vibe-coding"
                className={`nav-link ${currentPage === 'vibe-coding' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrentPage('vibe-coding'); }}
              >
                Vibe Code
              </a>
              <a
                href="/not-product-design"
                className={`nav-link ${currentPage === 'not-product-design' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrentPage('not-product-design'); }}
              >
                Visual Design
              </a>
              <a
                href="/about"
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}
              >
                About
              </a>
              <a href="https://drive.google.com/file/d/1IHGyugHp6ajmqUXbKpvFxZ96nWFkUqqn/view?usp=sharing" className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
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
                  href="/product-design" 
                  className={`mobile-nav-link ${currentPage === 'product-design' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setCurrentPage('product-design'); setIsMenuOpen(false); }}
                >
                  Product Design
                </a>
                <a
                  href="/vibe-coding"
                  className={`mobile-nav-link ${currentPage === 'vibe-coding' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setCurrentPage('vibe-coding'); setIsMenuOpen(false); }}
                >
                  Vibe Code
                </a>
                <a
                  href="/not-product-design"
                  className={`mobile-nav-link ${currentPage === 'not-product-design' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setCurrentPage('not-product-design'); setIsMenuOpen(false); }}
                >
                  Visual Design
                </a>
                <a
                  href="/about"
                  className={`mobile-nav-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setCurrentPage('about'); setIsMenuOpen(false); }}
                >
                  About Me
                </a>
                <a href="https://drive.google.com/file/d/1IHGyugHp6ajmqUXbKpvFxZ96nWFkUqqn/view?usp=sharing" className="mobile-nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
              </div>
              <div className="mobile-author-description">
                Prakhar is a product designer and creative technologist who bridges design, code, and storytelling. Recent work includes <span className="highlight">QuickBooks App Recommendations</span>, the new <span className="highlight">Intuit Developer Portal</span>, a redesign of <span className="highlight">STIRworld's mobile website</span>, and <span className="highlight">Bland Canvas</span>, an AI tool for furniture upcycling.
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
                <div className="project-item desktop-text">
                  Prakhar is a product designer and creative technologist who bridges design, code, and storytelling. Recent work includes <a href="/project/app-recommendations" onClick={(e) => handleProtectedNavigation(e, '/project/app-recommendations')} className="highlight">QuickBooks App Recommendations {ENABLE_PASSWORD_LOCK && <svg xmlns="http://www.w3.org/2000/svg" width="0.6em" height="0.6em" viewBox="0 0 24 24" style={{ display: 'inline', verticalAlign: 'baseline', position: 'relative', top: '0.05em' }}><path fill="#000" stroke="#000" strokeWidth="0.5" d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9069372 8 4 8.9069372 4 10 L 4 20 C 4 21.093063 4.9069372 22 6 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 10 C 20 8.9069372 19.093063 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 6 10 L 18 10 L 18 20 L 6 20 L 6 10 z M 12 13 C 10.9 13 10 13.9 10 15 C 10 16.1 10.9 17 12 17 C 13.1 17 14 16.1 14 15 C 14 13.9 13.1 13 12 13 z"></path></svg>}</a>, the new <a href="/project/developer-portal" onClick={(e) => handleProtectedNavigation(e, '/project/developer-portal')} className="highlight">Intuit Developer Portal {ENABLE_PASSWORD_LOCK && <svg xmlns="http://www.w3.org/2000/svg" width="0.6em" height="0.6em" viewBox="0 0 24 24" style={{ display: 'inline', verticalAlign: 'baseline', position: 'relative', top: '0.05em' }}><path fill="#000" stroke="#000" strokeWidth="0.5" d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9069372 8 4 8.9069372 4 10 L 4 20 C 4 21.093063 4.9069372 22 6 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 10 C 20 8.9069372 19.093063 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 6 10 L 18 10 L 18 20 L 6 20 L 6 10 z M 12 13 C 10.9 13 10 13.9 10 15 C 10 16.1 10.9 17 12 17 C 13.1 17 14 16.1 14 15 C 14 13.9 13.1 13 12 13 z"></path></svg>}</a>, a redesign of <a href="/project/stirworld-mobile-redesign" onClick={(e) => { e.preventDefault(); setCurrentPage('/project/stirworld-mobile-redesign'); }} className="highlight">STIRworld's mobile website</a>, and <a href="/project/bland-canvas" onClick={(e) => { e.preventDefault(); setCurrentPage('/project/bland-canvas'); }} className="highlight">Bland Canvas</a>, an AI tool for furniture upcycling.
                </div>
                <div className="project-item mobile-text">
                  Prakhar is a product designer and creative technologist who bridges design, code, and storytelling. Recent work includes <a href="/project/app-recommendations" onClick={(e) => handleProtectedNavigation(e, '/project/app-recommendations')} className="highlight">QuickBooks {ENABLE_PASSWORD_LOCK && <svg xmlns="http://www.w3.org/2000/svg" width="0.6em" height="0.6em" viewBox="0 0 24 24" style={{ display: 'inline', verticalAlign: 'baseline', position: 'relative', top: '0.05em' }}><path fill="#000" stroke="#000" strokeWidth="0.5" d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9069372 8 4 8.9069372 4 10 L 4 20 C 4 21.093063 4.9069372 22 6 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 10 C 20 8.9069372 19.093063 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 6 10 L 18 10 L 18 20 L 6 20 L 6 10 z M 12 13 C 10.9 13 10 13.9 10 15 C 10 16.1 10.9 17 12 17 C 13.1 17 14 16.1 14 15 C 14 13.9 13.1 13 12 13 z"></path></svg>}</a> App Recommendations, the new <a href="/project/developer-portal" onClick={(e) => handleProtectedNavigation(e, '/project/developer-portal')} className="highlight">Intuit {ENABLE_PASSWORD_LOCK && <svg xmlns="http://www.w3.org/2000/svg" width="0.6em" height="0.6em" viewBox="0 0 24 24" style={{ display: 'inline', verticalAlign: 'baseline', position: 'relative', top: '0.05em' }}><path fill="#000" stroke="#000" strokeWidth="0.5" d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9069372 8 4 8.9069372 4 10 L 4 20 C 4 21.093063 4.9069372 22 6 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 10 C 20 8.9069372 19.093063 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 6 10 L 18 10 L 18 20 L 6 20 L 6 10 z M 12 13 C 10.9 13 10 13.9 10 15 C 10 16.1 10.9 17 12 17 C 13.1 17 14 16.1 14 15 C 14 13.9 13.1 13 12 13 z"></path></svg>}</a> Developer Portal, a redesign of <a href="/project/stirworld-mobile-redesign" onClick={(e) => { e.preventDefault(); setCurrentPage('/project/stirworld-mobile-redesign'); }} className="highlight">STIRworld's</a> mobile website, and <a href="/project/bland-canvas" onClick={(e) => { e.preventDefault(); setCurrentPage('/project/bland-canvas'); }} className="highlight">Bland Canvas</a>, an AI tool for furniture upcycling.
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
                    <p className="work-unit-description">Designed and directed 10+ editorial series at STIRworld, from visual concept to final production.</p>
                  </div>
                  <div className="work-unit-images">
                    <a href="https://www.stirworld.com/think-opinions-art-voices-matter-stir-original-series-on-issues-of-communities-at-the-margins" target="_blank" rel="noopener noreferrer">
                      <img
                        src={avmImg}
                        alt="Art Direction work 1"
                        className="work-unit-image"
                        loading="lazy"
                        onLoad={() => handleImageLoad('avm')}
                        style={{ opacity: loadedImages['avm'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                      />
                    </a>
                    <a href="https://www.stirworld.com/see-features-illustrative-chronicles-a-series-examining-works-from-the-world-of-illustration" target="_blank" rel="noopener noreferrer">
                      <img
                        src={icImg}
                        alt="Art Direction work 2"
                        className="work-unit-image"
                        loading="lazy"
                        onLoad={() => handleImageLoad('ic')}
                        style={{ opacity: loadedImages['ic'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                      />
                    </a>
                    <a href="https://www.stirworld.com/stirfri" target="_blank" rel="noopener noreferrer">
                      <img
                        src={stirfriGif}
                        alt="Art Direction work 3"
                        className="work-unit-image"
                        loading="lazy"
                        onLoad={() => handleImageLoad('stirfri')}
                        style={{ opacity: loadedImages['stirfri'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                      />
                    </a>
                    <a href="https://www.stirworld.com/see-features-fifa-arenas-better-together" target="_blank" rel="noopener noreferrer">
                      <img
                        src={fifaArenasImg}
                        alt="Art Direction work 4"
                        className="work-unit-image"
                        loading="lazy"
                        onLoad={() => handleImageLoad('fifaArenas')}
                        style={{ opacity: loadedImages['fifaArenas'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                      />
                    </a>
                    <a href="https://www.stirworld.com/see-features-stirring-dreams-best-of-the-venice-art-biennale-2022" target="_blank" rel="noopener noreferrer">
                      <img
                        src={stirringDreamsGif}
                        alt="Art Direction work 5"
                        className="work-unit-image"
                        loading="lazy"
                        onLoad={() => handleImageLoad('stirringDreams')}
                        style={{ opacity: loadedImages['stirringDreams'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                      />
                    </a>
                  </div>
                </div>

                <div className="work-unit">
                  <div className="work-unit-text">
                    <h2 className="work-unit-title">Film & Motion</h2>
                    <p className="work-unit-description">Designed and produced motion graphics, editing, and sound for 100+ videos.</p>
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
                      src="https://www.youtube.com/embed/Z-NUv6z49MU" 
                      title="Video 4"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                    <iframe
                      className="work-unit-video"
                      src="https://www.youtube.com/embed/6o74wbYpIZ8?start=26"
                      title="Video 5"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="work-unit">
                  <div className="work-unit-text">
                    <h2 className="work-unit-title">Print & Physical</h2>
                    <p className="work-unit-description">Designed posters, objects, and booth materials.</p>
                  </div>
                  <div className="work-unit-images">
                    <img
                      src={panelsImg}
                      alt="Print/Physical work 1"
                      className="work-unit-image"
                      loading="lazy"
                      onLoad={() => handleImageLoad('panels')}
                      onClick={() => openLightbox(physicalImages, 0)}
                      style={{ cursor: 'pointer', opacity: loadedImages['panels'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                    />
                    <img
                      src={toteImg}
                      alt="Tote bag design"
                      className="work-unit-image"
                      loading="lazy"
                      onLoad={() => handleImageLoad('tote')}
                      onClick={() => openLightbox(physicalImages, 1)}
                      style={{ cursor: 'pointer', opacity: loadedImages['tote'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                    />
                  </div>
                </div>

                <div className="work-unit">
                  <div className="work-unit-text">
                    <h2 className="work-unit-title">Installations</h2>
                    <p className="work-unit-description">Built interactive installations using physical computing and projection mapping.</p>
                  </div>
                  <div className="work-unit-images">
                    <img
                      src={noWrongAnswersImg}
                      alt="No Wrong Answers installation"
                      className="work-unit-image"
                      loading="lazy"
                      onLoad={() => handleImageLoad('noWrongAnswers')}
                      onClick={() => openLightbox(installationImages, 0)}
                      style={{ cursor: 'pointer', opacity: loadedImages['noWrongAnswers'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                    />
                    <img
                      src={oblivionImg}
                      alt="Oblivion installation"
                      className="work-unit-image"
                      loading="lazy"
                      onLoad={() => handleImageLoad('oblivion')}
                      onClick={() => openLightbox(installationImages, 1)}
                      style={{ cursor: 'pointer', opacity: loadedImages['oblivion'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                    />
                    <img
                      src={quantumImg}
                      alt="Quantum installation"
                      className="work-unit-image"
                      loading="lazy"
                      onLoad={() => handleImageLoad('quantum')}
                      onClick={() => openLightbox(installationImages, 2)}
                      style={{ cursor: 'pointer', opacity: loadedImages['quantum'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'vibe-coding' && (
            <div className="content-container">
              <div className="work-units-container vibe-coding">
                <div className="work-unit">
                  <div className="work-unit-text">
                    <h2 className="work-unit-title">Experiments and tools</h2>
                    <p className="work-unit-description">Built with React using Cursor.</p>
                  </div>
                  <div className="work-unit-images">
                    <a href="https://anycolorsyoulike.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={vibeAnyColorsImg}
                        alt="Any Colors You Like"
                        className="work-unit-image"
                        loading="lazy"
                        onLoad={() => handleImageLoad('vibeAnyColors')}
                        style={{ opacity: loadedImages['vibeAnyColors'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                      />
                    </a>
                    <a href="https://almostanything.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={vibeAlmostAnythingImg}
                        alt="Almost Anything"
                        className="work-unit-image"
                        loading="lazy"
                        onLoad={() => handleImageLoad('vibeAlmostAnything')}
                        style={{ opacity: loadedImages['vibeAlmostAnything'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                      />
                    </a>
                    <a href="/project/bland-canvas" onClick={(e) => { e.preventDefault(); setCurrentPage('/project/bland-canvas'); }} style={{ cursor: 'pointer' }}>
                      <img
                        src={blandCanvasImg}
                        alt="Bland Canvas"
                        className="work-unit-image"
                        loading="lazy"
                        onLoad={() => handleImageLoad('vibeBlandCanvas')}
                        style={{ opacity: loadedImages['vibeBlandCanvas'] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === '/project/app-recommendations' && hasCheckedInitialAuth && (
            <AppRecommendationsPage onNavigate={setCurrentPage} handleProtectedNavigation={handleProtectedNavigation} enablePasswordLock={ENABLE_PASSWORD_LOCK} />
          )}

          {currentPage === '/project/bland-canvas' && (
            <BlandCanvasPage onNavigate={setCurrentPage} handleProtectedNavigation={handleProtectedNavigation} enablePasswordLock={ENABLE_PASSWORD_LOCK} />
          )}

          {currentPage === '/project/developer-portal' && hasCheckedInitialAuth && (
            <DeveloperPortalPage onNavigate={setCurrentPage} handleProtectedNavigation={handleProtectedNavigation} enablePasswordLock={ENABLE_PASSWORD_LOCK} />
          )}

          {currentPage === '/project/potluck' && (
            <PotluckPage onNavigate={setCurrentPage} handleProtectedNavigation={handleProtectedNavigation} enablePasswordLock={ENABLE_PASSWORD_LOCK} />
          )}

          {currentPage === '/project/stirworld-mobile-redesign' && (
            <StirworldMobileRedesignPage onNavigate={setCurrentPage} handleProtectedNavigation={handleProtectedNavigation} enablePasswordLock={ENABLE_PASSWORD_LOCK} />
          )}

          {currentPage === 'about' && (
            <AboutPage />
          )}
        </main>
  {/* Footer only for mobile, handled in CSS if needed */}
      </div>
      
      {/* Lightbox component */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages}
        index={lightboxIndex}
        plugins={[Captions]}
      />

      {/* Password Modal */}
      <PasswordModal
        isOpen={passwordModalOpen}
        onSubmit={handlePasswordSubmit}
        onCancel={handlePasswordCancel}
        onRequestPassword={handleRequestPassword}
        projectName={pendingNavigation ? getProjectName(pendingNavigation) : null}
      />

      <Analytics />
    </div>
  );
}

export default App;
