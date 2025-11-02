import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ProjectPage from './ProjectPage';
import avmImg from './images/art_direction/avm.jpg';
import icImg from './images/art_direction/ic.jpg';
import stirfriGif from './images/art_direction/stirfri.gif';
import fifaArenasImg from './images/art_direction/fifa-arenas.jpg';
import stirringDreamsGif from './images/art_direction/stirring-dreams.gif';
import panelsImg from './images/physical/panels.jpg';
import fckplasticImg from './images/physical/f*ckplastic.jpg';
import appRecommendationsGif from './images/app-recommendations/app-recommendations.gif';
import blandcanvasImg from './images/bland-canvas/bland-canvas.jpg';
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

// Register icons in the library per Font Awesome React usage docs
library.add(faBars, faTimes);

function App() {
  // Check URL path on initial load to determine which page to show
  const getInitialPage = () => {
    const path = window.location.pathname;
    if (path === '/not-product-design') return 'not-product-design';
    if (path.startsWith('/project/')) return path; // Support project pages
    return 'product-design';
  };
  
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  
  // Update URL path when page changes
  useEffect(() => {
    if (currentPage === 'not-product-design') {
      window.history.pushState(null, '', '/not-product-design');
    } else if (currentPage === 'product-design') {
      window.history.pushState(null, '', '/product-design');
    } else if (currentPage.startsWith('/project/')) {
      window.history.pushState(null, '', currentPage);
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
                href="/not-product-design" 
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
                  href="/product-design" 
                  className={`mobile-nav-link ${currentPage === 'product-design' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setCurrentPage('product-design'); setIsMenuOpen(false); }}
                >
                  Product Design
                </a>
                <a 
                  href="/not-product-design" 
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
                  Prakhar is a product designer and creative technologist*, bridging design, code, and storytelling. Some of his recent work includes <a href="/project/app-recommendations" onClick={(e) => { e.preventDefault(); setCurrentPage('/project/app-recommendations'); }} className="highlight">QuickBooks App Recommendations</a>, an AI tool for furniture upcycling called <a href="/project/bland-canvas" onClick={(e) => { e.preventDefault(); setCurrentPage('/project/bland-canvas'); }} className="highlight">Bland Canvas</a>, the new <span className="highlight">Intuit Developer Portal</span>, and a social music listening app called <span className="highlight">Potluck</span>.
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

          {currentPage === '/project/app-recommendations' && (
            <ProjectPage
              title="Contextual app recommendations"
              description="I designed and tested an AI-powered app recommendation system for QuickBooks, improving user adoption by delivering contextual, task-based suggestions after user actions. My work included user interviews, iterative prototyping, and optimizing app discovery for small business owners."
              role="UX Designer"
              team="Senior Product Designer: Daniel Klein"
              heroImage={appRecommendationsGif}
            >
              <div className="project-section">
                <h3 className="section-label">PROBLEM</h3>
                <h2 className="section-title">Low app adoption among businesses</h2>
                <p className="section-body">Mid-Market and Alpha customers strongly rely on 3rd Party applications (7 – 25 apps) in addition to QuickBooks to manage their businesses for foundational and vertical needs. However today, only 60% of Alpha customers, and 43% of MM customers are actually connecting their apps to QuickBooks.</p>
              </div>

              <div className="project-section">
                <h3 className="section-label">WHY THIS MATTERS?</h3>
                <h2 className="section-title">Retention grows when users connect apps</h2>
                <p className="section-body">Making it easy for our customers to connect more apps is a key factor in increasing retention.</p>
                <div className="section-image">
                  <img src={graphImg} alt="Retention graph" />
                </div>
              </div>

              <div className="project-section">
                <h3 className="section-label">SOLUTION</h3>
                <h2 className="section-title">App recommendations after a task</h2>
                <p className="section-body">Recommending apps to people as soon as they performed a certain task by using an AI system that tracked people's repetitive tasks that could be done faster with an app</p>
                <div className="section-image">
                  <img src={actionbasedGif} alt="Action-based recommendations" />
                </div>
              </div>

              <div className="project-section">
                <h3 className="section-label">RESULTS</h3>
                <h2 className="section-title">Outcomes & Impact</h2>
                <p className="section-body"><strong>Increased app adoption</strong> rates among mid-market, small business, and solopreneur QuickBooks users.</p>
                <p className="section-body"><strong>Improved user understanding and trust</strong> regarding why specific apps are being recommended, by surfacing recommendations after relevant tasks and clearly explaining integration benefits.</p>
                <p className="section-body"><strong>Reduced user confusion and anxiety</strong> about app recommendations, achieved by shifting from ad-like banners to task-based and action-contextual suggestions.</p>
              </div>

              <div className="project-section">
                <h3 className="section-label">UNDERSTANDING THE DESIGN CHALLENGE</h3>
                <h2 className="section-title">Why people aren't connecting apps?</h2>
                <p className="section-body">The first part of the user research was understanding why customers are not connecting apps & problems with the current app discovery points. I interviewed a group of 10 customers who had not connected any apps to their quickbooks.</p>
                
                <div className="subsection">
                  <h3 className="subsection-title">Initial Research Questions</h3>
                  
                  <h4 className="subsection-heading">Barriers to app connections</h4>
                  <ul>
                    <li>Are users unsure how to find apps, or hesitant to connect them?</li>
                    <li>What drives this hesitation, and how can we reduce it?</li>
                  </ul>
                  
                  <h4 className="subsection-heading">Lack of Awareness</h4>
                  <ul>
                    <li>Why are some users unaware of the app connection feature?</li>
                    <li>What gaps in current discovery patterns contribute to this?</li>
                  </ul>
                </div>

                <div className="subsection">
                  <h3 className="subsection-title">Interviewee criteria</h3>
                  
                  <h4 className="subsection-heading">Solopreneurs and small businesses (1-10 employees)</h4>
                  <p className="subsection-text">The other half of our interviewees were solopreneurs and small businesses. Small businesses make up 55% of the total QuickBooks user base, but their retention rates are lower due to the ease of switching to competitors. This presented a significant opportunity to explore strategies for improving their retention.</p>
                  
                  <h4 className="subsection-heading">Mid market customers (10-100 employees)</h4>
                  <p className="subsection-text">Mid-market customers were a key strategic focus for the company, presenting a significant opportunity. Despite this, only 43% of mid-market customers were utilizing apps. Since app connections were shown to directly impact retention rates, half of our interviewees were selected from this segment.</p>
                </div>

                <div className="subsection">
                  <h3 className="subsection-title">Findings</h3>
                  
                  <h4 className="subsection-heading">Lack of Context</h4>
                  <p className="subsection-text">People didn't understand why an app is being recommended, people wanted more context to download an app.</p>
                  
                  <h4 className="subsection-heading">Problems with the current discovery points:</h4>
                  
                  <div className="subsection-image">
                    <img src={onboardingflowGif} alt="Onboarding flow" />
                    <p className="subsection-image-caption">People just want to start doing their books and skip app integration</p>
                  </div>
                  
                  <div className="subsection-image">
                    <img src={flyoutmenuGif} alt="Flyout menu" />
                    <p className="subsection-image-caption">The small app icon on the dashboard is often overlooked</p>
                  </div>
                  
                  <div className="subsection-image">
                    <img src={appmarketplacePng} alt="App marketplace" />
                    <p className="subsection-image-caption">The small app icon on the dashboard is often overlooked</p>
                  </div>
                </div>
              </div>

              <div className="project-section-highlight">
                <h3 className="section-label">KEY OPPORTUNITY</h3>
                <h2 className="section-title">How can we create app discovery patterns centered around context?</h2>
              </div>

              <div className="project-section">
                <h3 className="section-label">EXPLORATIONS</h3>
                <h2 className="section-title">Pattern 1 - Evergreen banners</h2>
                <p className="section-body">Our first pattern displayed relevant app recommendations within different sections of the dashboard, providing context through placement inside those sections.</p>
                <div className="section-image">
                  <img src={salesappplaceholderPng} alt="Sales app placeholder" />
                </div>

                <div className="subsection">
                  <h3 className="subsection-title">Variations - Content</h3>
                  <p className="subsection-text">To understand how much context users need without overwhelming them, I tested three banner styles — one with just text, one that introduced brand visuals, and another that used a short video to explain the app instantly.</p>
                  
                  <div className="subsection-image">
                    <img src={evergreenTextPng} alt="Evergreen text" />
                    <p className="subsection-image-caption">only text</p>
                  </div>
                  
                  <div className="subsection-image">
                    <img src={evergreenLogoPng} alt="Evergreen logo" />
                    <p className="subsection-image-caption">text with logo</p>
                  </div>
                  
                  <div className="subsection-image">
                    <img src={evergreenVideoPng} alt="Evergreen video" />
                    <p className="subsection-image-caption">text with video</p>
                  </div>
                </div>

                <div className="subsection">
                  <h3 className="subsection-title">More variations - Dismissal</h3>
                  <p className="subsection-text">I also tested how users responded to two options: adding the app recommendation as a QuickBooks task or snoozing it for later.</p>
                  
                  <div className="subsection-images-row">
                    <div className="subsection-image">
                      <img src={addAsTaskGif} alt="Add as a task" />
                      <p className="subsection-image-caption">Add as a task</p>
                    </div>
                    
                    <div className="subsection-image">
                      <img src={snoozeGif} alt="Snooze" />
                      <p className="subsection-image-caption">Snooze</p>
                    </div>
                  </div>
                </div>

                <div className="subsection">
                  <h3 className="subsection-title">Feedback - "We love adding app connection as a task, but we are too comfortable with ads"</h3>
                  <p className="subsection-text">Users often mistook the cards for ads.</p>
                  <p className="subsection-text">They preferred the familiar "Add as task" option and found short videos more useful than text.</p>
                  <p className="subsection-text">Even without the "learn more" step, they still wanted to see how the app integrates before installing.</p>
                </div>
              </div>

              <div className="project-section">
                <h3 className="section-label">EXPLORATIONS</h3>
                <h2 className="section-title">Pattern 2 - Time saver widget</h2>
                <p className="section-body">This pattern highlighted apps based on the time they could save users, providing context through the value each app offered. After interviewing small business owners—often solo or on small, stretched teams—I focused on showcasing each app's key benefit: saving time. The widget displayed recommended apps users could explore and learn more about.</p>
                <div className="section-image">
                  <img src={timesaverwidgetPng} alt="Time saver widget" />
                </div>

                <div className="subsection">
                  <h3 className="subsection-title">Variations - Content</h3>
                  <p className="subsection-text">I wanted to understand how much information people need in a banner to get a clear sense of the app without feeling overwhelmed.</p>
                  
                  <div className="subsection-image">
                    <img src={differenttimesaverpatternsPng} alt="Different time saver patterns" />
                  </div>
                </div>

                <div className="subsection">
                  <h3 className="subsection-title">Feedback - Hard to believe</h3>
                  <p className="subsection-text">"It's like an ad that's trying too hard not to look like one"</p>
                  <p className="subsection-text">Users found it hard to believe QuickBooks could track their behavior in detail, as they were used to repeating tasks without assistance.</p>
                  <p className="subsection-text">The insight felt new and made some uncomfortable. Despite efforts to avoid looking like an ad, many still perceived it as one—just less overt.</p>
                </div>
              </div>

              <div className="project-section">
                <h3 className="section-label">EXPLORATION</h3>
                <h2 className="section-title">Pattern 3 - Action-based recommendations</h2>
                <p className="section-body">This pattern suggested apps after users repeatedly completed certain tasks. By analyzing their behavior on the backend, we surfaced time-saving app recommendations with a brief explanation of how each could improve their workflow.</p>

                <div className="subsection">
                  <h3 className="subsection-title">Variations - Delivery</h3>
                  <p className="subsection-text">I tested popups and embedded suggestions for action-based recommendations. Popups grabbed attention but felt intrusive, while embedded suggestions were more contextual and better integrated into the workflow.</p>
                  
                  <div className="subsection-images-row">
                    <div className="subsection-image">
                      <img src={actionbasedembeddedPng} alt="Embedded" />
                      <p className="subsection-image-caption">Embedded</p>
                    </div>
                    
                    <div className="subsection-image">
                      <img src={actionbasedpopupPng} alt="Popup" />
                      <p className="subsection-image-caption">Popup</p>
                    </div>
                  </div>
                </div>

                <div className="subsection">
                  <h3 className="subsection-title">Feedback - Very clear where it's coming from</h3>
                  <p className="subsection-text">People appreciated this the most, the biggest reason being that it was very clear to them as to why they were being recommended this particular app.</p>
                  <p className="subsection-text">People also felt that this was the ideal time when they would want to look at an app, after they have finished their task</p>
                  
                  <div className="subsection-image">
                    <img src={actionbasedGif} alt="Action-based recommendation" />
                  </div>
                </div>
              </div>

              <div className="project-section">
                <h3 className="section-label">LEARNINGS</h3>
                <h2 className="section-title">What I learned?</h2>
                <p className="section-body">I found that mid-market businesses often assign tasks to team members, so app recommendations need to be useful for more than just the owner. Even when users already use an app, they still want to see how it integrates with QuickBooks.</p>
                <p className="section-body">While consistent patterns improve usability, overusing them can cause banner blindness. Videos, on the other hand, were highly valued as a quick way to understand app benefits.</p>
                <p className="section-body">Action-based recommendations worked best—they cut through banner fatigue by appearing at the right time and in context, unlike broader, less targeted onboarding flows or flyouts.</p>
              </div>

              <div className="project-section">
                <h3 className="section-label">GOING FORWARD</h3>
                <h2 className="section-title">What's next?</h2>
                <p className="section-body">Expand the rollout to a larger user base.</p>
                <p className="section-body">Refine the experience based on user feedback and engagement metrics.</p>
              </div>
            </ProjectPage>
          )}

          {currentPage === '/project/bland-canvas' && (
            <ProjectPage
              title="Bland Canvas AI"
              description="Bland Canvas is an AI-powered platform that transforms the basic IKEA MARIUS stool into personalized designs. By blending creative AI with DIY hacks, it reimagines disposable furniture as a canvas for self-expression and meaningful reuse."
              role="Product Designer & Developer"
              team="Solo Project"
              heroImage={blandcanvasImg}
              noGradient={true}
            />
          )}
        </main>
  {/* Footer only for mobile, handled in CSS if needed */}
      </div>
    </div>
  );
}

export default App;
