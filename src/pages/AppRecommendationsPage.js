import React from 'react';
import ProjectPage from '../ProjectPage';
import appRecommendationsGif from '../images/app-recommendations/app-recommendations.gif';
import graphImg from '../images/app-recommendations/graph.png';
import actionbasedGif from '../images/app-recommendations/actionbased.gif';
import onboardingflowGif from '../images/app-recommendations/onboardingflow.gif';
import flyoutmenuGif from '../images/app-recommendations/flyoutmenu.gif';
import appmarketplacePng from '../images/app-recommendations/appmarketplace.png';
import salesappplaceholderPng from '../images/app-recommendations/salesappplaceholder.png';
import evergreenTextPng from '../images/app-recommendations/evergreen_text.png';
import evergreenLogoPng from '../images/app-recommendations/evergreen_logo.png';
import evergreenVideoPng from '../images/app-recommendations/evergreen_video.png';
import addAsTaskGif from '../images/app-recommendations/add-as-a-task.gif';
import snoozeGif from '../images/app-recommendations/snooze.gif';
import timesaverwidgetPng from '../images/app-recommendations/timesaverwidget.png';
import differenttimesaverpatternsPng from '../images/app-recommendations/differenttimesaverpatterns.png';
import actionbasedembeddedPng from '../images/app-recommendations/actionbasedembedded.png';
import actionbasedpopupPng from '../images/app-recommendations/actionbasedpopup.png';

function AppRecommendationsPage() {
  return (
    <ProjectPage
      title="Quickbooks App Recommendations"
      description="I designed and tested an AI-powered app recommendation system for QuickBooks, improving user adoption by delivering contextual, task-based suggestions after user actions. My work included user interviews, iterative prototyping, and optimizing app discovery for small business owners."
      focus={`UX Research
UI Design`}
      team={`Senior Product Designer: Daniel Klein
Product Manager: Anna Kippley`}
      timeline="6 weeks"
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
            <p className="subsection-image-caption">Low dashboard placement leads to limited App Store visibility.</p>
          </div>
        </div>
      </div>

      <div className="project-section">
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
  );
}

export default AppRecommendationsPage;