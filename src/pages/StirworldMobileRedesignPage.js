import React from 'react';
import ProjectPage from '../ProjectPage';
import heroImg from '../images/stirworld-redesign/homepage-hero.jpg';
import oldNavigationImg from '../images/stirworld-redesign/old-navigation.jpg';
import oldLandingPageImg from '../images/stirworld-redesign/old-landing-page.png';
import newLandingPageImg from '../images/stirworld-redesign/new-landing-page.png';
import bigBeautifulImagesImg from '../images/stirworld-redesign/big-beautiful-images.png';
import desktopMobileImg from '../images/stirworld-redesign/desktop&mobile.png';
import oldFilterSystemImg from '../images/stirworld-redesign/old-filter-system.jpg';
import newFilterSystemImg from '../images/stirworld-redesign/new-filter-system.jpg';

function StirworldMobileRedesignPage({ onNavigate }) {
  return (
    <ProjectPage
      title="STIRworld Mobile Redesign"
      description="STIRworld is an online design publication covering architecture, art, and design. The mobile website was experiencing low engagement compared to desktop, with users dropping off before discovering content. This redesign transformed the mobile experience from abstract category navigation to a content-first browsing model."
      focus={`UI/UX Design`}
      timeline="4 weeks"
      heroImage={heroImg}
      prevProject={{
        title: "Intuit Developer Portal",
        url: "/project/developer-portal",
        onClick: (e) => { e.preventDefault(); onNavigate('/project/developer-portal'); }
      }}
      nextProject={{
        title: "Bland Canvas",
        url: "/project/bland-canvas",
        onClick: (e) => { e.preventDefault(); onNavigate('/project/bland-canvas'); }
      }}
    >
      <div className="project-section">
        <h3 className="section-label">THE CHALLENGE</h3>
        <h2 className="section-title">Users Dropping Off Before Finding Content</h2>
        <p className="section-body">Stirworld's mobile website showed significantly lower engagement compared to desktop. Users were spending less time on the platform, and session duration metrics indicated people were dropping off early in their browsing experience.</p>
        <p className="section-body">The mobile homepage presented users with four abstract categories—See, Think, Inspire, Reflect—requiring them to choose a conceptual path before accessing any actual content. This created an immediate friction point: users arriving at a design publication wanted to browse articles, not categorize their browsing intent upfront.</p>
        <div className="section-image">
          <img src={oldNavigationImg} alt="Old navigation showing abstract categories" />
        </div>
      </div>

      <div className="project-section">
        <h3 className="section-label">THE PROBLEM</h3>
        <h2 className="section-title">The Problem with Abstract Navigation</h2>
        <div className="side-by-side-layout">
          <div className="side-by-side-text">
            <p className="section-body">Through heuristic evaluation, we identified several issues with the existing structure:</p>

            <p className="section-body"><strong>Cognitive load before value.</strong> Users had to interpret what "See, Think, Inspire, Reflect" meant and decide which matched their interests before seeing a single article headline or image.</p>

            <p className="section-body"><strong>Hidden content.</strong> All editorial content lived behind these category walls. There was no way to quickly scan what was new or trending without committing to a navigation path first.</p>

            <p className="section-body"><strong>Misaligned mental models.</strong> Editorial websites typically prioritize recency and content type (articles, features, interviews) over philosophical framing. The existing structure asked users to think differently than they would on comparable platforms.</p>
          </div>
          <div className="side-by-side-image">
            <img src={oldLandingPageImg} alt="Old landing page design" style={{ width: '100%', borderRadius: '1vh' }} />
          </div>
        </div>
      </div>

      <div className="project-section">
        <h3 className="section-label">THE SOLUTION</h3>
        <h2 className="section-title">Content-First Homepage</h2>
        <div className="side-by-side-layout">
          <div className="side-by-side-text">
            <p className="section-body">We redesigned the mobile experience to prioritize immediate content discovery. The new homepage surfaces articles directly in a scrollable feed, reducing the path to content from three steps to one.</p>
            <p className="section-body">Key changes:</p>
            <p className="section-body"><strong>Immediate access to content.</strong> Article cards now display on the homepage with headlines, images, dates, and categories—no intermediary navigation required.</p>
            <p className="section-body"><strong>Taxonomy as optional filters.</strong> See, Think, Inspire, and Reflect moved to a persistent top navigation bar, becoming tools for refinement rather than mandatory gates.</p>
            <p className="section-body"><strong>One-step navigation.</strong> Users can now tap directly into articles from the homepage instead of navigating through category layers.</p>
          </div>
          <div className="side-by-side-image">
            <img src={newLandingPageImg} alt="New landing page design" style={{ width: '100%', borderRadius: '1vh' }} />
          </div>
        </div>
      </div>

      <div className="project-section">
        <h3 className="section-label">CARD REDESIGN</h3>
        <h2 className="section-title">What Worked on Desktop Failed on Mobile</h2>
        <p className="section-body">The original cards overlaid text on article images—headlines, author names, dates, and read time all competing for the same space. This approach worked on desktop where larger card dimensions and hero image treatments provided enough room for legible text, but translated poorly to mobile.</p>

        <div className="subsection-image">
          <img src={desktopMobileImg} alt="Desktop and mobile comparison" />
          {/* <p className="subsection-image-caption">Text overlays worked on desktop's larger canvas but became cramped and illegible on mobile screens</p> */}
        </div>

        <p className="section-body">On mobile's constrained viewport, the overlay approach created two problems:</p>

        <p className="section-body"><strong>Reduced accessibility.</strong> Text overlaid on images had poor contrast and legibility, making it difficult to read headlines and metadata on smaller screens.</p>

        <p className="section-body"><strong>Lost visual impact.</strong> The photography—central to a design publication's appeal—was obscured by multiple text layers competing for limited screen real estate.</p>

        <p className="section-body">The solution: We separated text from imagery. Images now display full-bleed without overlays, while all article information sits cleanly below. Only the bookmark icon remains on the image—a single-purpose action that doesn't interfere with visual impact.</p>

        <div className="subsection-image">
          <img src={bigBeautifulImagesImg} alt="Big, beautiful images redesign" />
        </div>

         <p className="section-body">Impact: This change improved text readability, let the photography breathe, and made the feed easier to scan.</p>
      </div>

      <div className="project-section">
        <h3 className="section-label">IMPROVING FILTERS</h3>
        <h2 className="section-title">Streamlining Category Navigation</h2>
        <p className="section-body">Beyond the homepage redesign, we made it easier for users to explore content within categories. Previously, filtering required opening a dedicated filter modal, selecting options, and applying them—a multi-step process for a common action.</p>

        <div className="subsection-image">
          <img src={oldFilterSystemImg} alt="Old filter system" />
        </div>

        <p className="section-body"><strong>The improvement:</strong> Users can now tap category tags directly on article cards to instantly view all content in that category. The traditional filter modal still exists for more complex filtering (by location, medium, etc.), but single-category browsing became a one-tap action.</p>

        <div className="subsection-image">
          <img src={newFilterSystemImg} alt="New filter system" />
        </div>

        <p className="section-body"><strong>Impact:</strong> This reduced friction for category-based browsing while maintaining power-user functionality through the filter modal.</p>
      </div>

      <div className="project-section">
        <h3 className="section-label">IMPACT</h3>
        <h2 className="section-title">35% Increase in User Retention</h2>
        <p className="section-body">The redesigned mobile experience launched and delivered measurable improvements in user engagement.</p>

        <p className="section-body">35% increase in mobile user retention following the launch, indicating that the content-first approach successfully reduced drop-off and kept users browsing longer.</p>

        <p className="section-body">The redesign aligned Stir's mobile experience with industry standards for editorial platforms while maintaining the publication's unique editorial taxonomy as an optional filtering layer.</p>
      </div>

      <div className="project-section">
        <h3 className="section-label">REFLECTION</h3>
        <h2 className="section-title">Lessons & Next Steps</h2>
        <p className="section-body"><strong>What I learned:</strong> Sometimes the most effective UX improvements come from aligning with established patterns rather than reinventing interaction models. Abstract navigation can work in specific contexts, but content-heavy platforms benefit from putting content front and center.</p>

        <p className="section-body"><strong>What I'd do differently:</strong> With more time and resources, I would have established baseline metrics before launch and conducted post-launch user interviews to understand why retention improved—whether it was the reduced navigation steps, improved card readability, or a combination of factors. This qualitative insight would have informed future iterations.</p>
      </div>
    </ProjectPage>
  );
}

export default StirworldMobileRedesignPage;
