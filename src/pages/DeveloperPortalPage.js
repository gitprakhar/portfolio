import React from 'react';
import ProjectPage from '../ProjectPage';
import devPortalImg from '../images/dev-portal/dev-portal-mockup.png';
import graphmacroImg from '../images/dev-portal/graph-macro.gif';
import graphmicroImg from '../images/dev-portal/graph-micro.gif';
import findingusers1Img from '../images/dev-portal/finding-users-1.png';
import findingusers2Img from '../images/dev-portal/finding-users-2.png';
import competitionImg1 from '../images/dev-portal/competition-1.png';
import competitionImg2 from '../images/dev-portal/competition-2.png';
import affinitymapImg from '../images/dev-portal/affinity-map.png';
import solutionImg2 from '../images/dev-portal/solution-2.gif';
import solutionImg3 from '../images/dev-portal/solution-3.gif';
import solutionImg4 from '../images/dev-portal/solution-4.gif';
import requestsImg from '../images/dev-portal/requests.png';
import errorsImg from '../images/dev-portal/errors.png';
import latencyImg from '../images/dev-portal/latency.png';
import apiEndpointsImg from '../images/dev-portal/api_endpoints.png';

function DeveloperPortalPage() {
  return (
    <ProjectPage
      title="Intuit Developer Portal"
      description="I redesigned the QuickBooks Developer Portal to empower small and indie developers with built-in analytics, error monitoring, and connection search tools. The redesign improves visibility and troubleshooting for smaller teams, making app health tracking more accessible while preserving enterprise-grade functionality."
            focus={`UX Research
UI Design`}
      team={`Senior Product Designer: Adam Beasley
Product Manager: Riya Gayasen`}
      timeline="6 weeks"
      heroImage={devPortalImg}
    >
      {/* Content for Developer Portal will be added here */}
          <div className="project-section">
        <h3 className="section-label">PROBLEM</h3>
        <h2 className="section-title">Small Developers Were Being Left Behind</h2>
        <p className="section-body">While 99% of apps had fewer than 1,000 connections, the developer portal provided no built-in analytics or monitoring.</p>
        <p className="section-body">This wasn't an issue for large enterprise developers; they had their own advanced dashboards and internal tooling.</p>
        <p className="section-body">For small developers, however:</p>
        <ul>
          <li>There was no way to monitor app health, spot errors, or track growth inside the portal.</li>
          <li>Key workflows (finding a connection, debugging problems, validating adoption) were painstakingly manual.</li>
          <li>The lack of support directly blocked small teams from growing or even sustaining their integrations.</li>
        </ul>
        <p className="section-body"><em>"If you're not big enough to have your own analytics, you're basically flying blind."</em></p>
    </div>
        <div className="project-section">
        <h3 className="section-label">GOALS & SOLUTION VISION</h3>
        <h2 className="section-title">Put Small Devs at the Center</h2>
        <ul>
          <li>Build analytics into the portal, so every developer—regardless of size or resourcing—could see, track, and improve their apps.</li>
          <li>Enhance core workflows: connection search, error diagnosis, and growth tracking.</li>
          <li>Maintain options for heavy-duty usage, so advanced teams never lost control.</li>
        </ul>
        <div className="section-image">
          <img src={graphmacroImg} alt="Graph Macro" />
        </div>
    </div>
     <div className="project-section">
        <h3 className="section-label">DEFINING & FINDING OUR USERS</h3>
        <h2 className="section-title">Letting Data Lead to Insight</h2>
        <ul>
          <li>Analyzed platform-wide data: 99% small devs, 1% enterprise.</li>
          <li>Ran targeted outreach to 300+ developers; selected interviewees reflected real app scales and backgrounds.</li>
          <li>Created/validated simple personas:
            <ul>
                <li>The Indie Builder: wears many hats, craves clarity.</li>
                <li>The Agency Admin: manages several small clients, limited development bandwidth.</li>
                <li>The Product-Focused Startup: small but ambitious, wants actionable signals.</li>
            </ul>
          </li>
        </ul>
        <div className="section-image">
          <img src={findingusers1Img} alt="Finding users" />
        </div>
    </div>
         <div className="project-section">
        <h3 className="section-label">DEFINING & FINDING OUR USERS</h3>
        <h2 className="section-title">Research Approach</h2>
        <div className="subsection">
          <h3 className="subsection-title">User Interviews</h3>
          <p className="subsection-text">1:1 interviews revealed daily roadblocks (lack of monitoring, error tracking, pointless manual work).</p>
            <div className="subsection-image">
            <img src={findingusers2Img} alt="Interviews" />
          </div>
        </div>
        <div className="subsection">
          <h3 className="subsection-title">Competitive landscape</h3>
        <p className="subsection-text">1:1 interviews revealed daily roadblocks (lack of monitoring, error tracking, pointless manual work).</p>
          <h4 className="subsection-heading">XERO</h4>
          <ul>
            <li>“What has somewhat helpful with XERO is that we can search by a specific tenant or have filters like status codes and methods”</li>
          </ul>
            <div className="subsection-image">
            <img src={competitionImg1} alt="XERO" />
          </div>
           <h4 className="subsection-heading">GRAFANA</h4>
          <ul>
            <li>“We like Grafana's ability to monitor the latency of the error requests. Some failed requests can be served quickly but others can be timed out which is even worse”</li>
          </ul>
            <div className="subsection-image">
            <img src={competitionImg2} alt="Grafana" />
          </div>
        </div>
        
        <div className="subsection">
          <h3 className="subsection-title">Affinity Mapping & Theming</h3>
          <p className="subsection-text">Grouped feedback into major clusters:</p>
          <ul>
            <li>Connection Management & Visibility</li>
            <li>Analytics & Monitoring</li>
            <li>Troubleshooting & Error Resolution</li>
            <li>Feature Requests & Opportunities</li>
            <li>Competitive Insights</li>
          </ul>
        <div className="subsection-image">
            <img src={affinitymapImg} alt="Grafana" />
          </div>
        </div>
    </div>
    
    <div className="project-section">
        <h3 className="section-label">INSIGHTS</h3>
        <h2 className="section-title">Key Insights (Synthesized, Actionable)</h2>
        <ul>
          <li>Connection management was confusing and fragmented—users wanted paginated lists and search by company name (not Realm ID).</li>
          <li>Native analytics were missing for most users—small devs relied on DIY solutions or gave up.</li>
          <li>Competitors offered better monitoring and error tracking—users expected parity.</li>
          <li>Direct user feedback surfaced strong desire for quick troubleshooting, real-time error notifications, and flexible, easy-to-read reports.</li>
        </ul>
    </div>
    
    <div className="project-section">
        <h3 className="section-label">SOLUTION</h3>
        <h2 className="section-title">Searchable, Personal Connections</h2>
        <p className="section-body">I added company name next to RealmID, so developers can instantly search any connection—by name or ID—without digging through monthly reports.</p>
          <div className="subsection-images-row">
            <div className="subsection-image">
              <img src={solutionImg2} alt="Before: Manual monthly digging" />
              <p className="subsection-image-caption">Before: "Manual monthly digging"</p>
            </div>
            
            <div className="subsection-image">
              <img src={solutionImg3} alt="After: Instant, searchable connections" />
              <p className="subsection-image-caption">After: "Instant, searchable connections"</p>
            </div>
          </div>
    </div>
    
    <div className="project-section">
        <h3 className="section-label">SOLUTION</h3>
        <h2 className="section-title">Legacy View for Enterprises</h2>
        <p className="section-body">To ensure enterprise customers could continue using their familiar workflows, I added an option to revert to the classic monthly view—making sure the upgrade works for every scale.</p>
        <div className="section-image">
          <img src={solutionImg4} alt="Legacy view for enterprises" />
        </div>
    </div>
    
    <div className="project-section">
        <h3 className="section-label">SOLUTION</h3>
        <h2 className="section-title">Analytics Built In—for Everyone</h2>
        <p className="section-body">I built analytics based directly on what developers told me they needed—like tracking errors, monitoring API endpoints, and seeing what's running slow.</p>
        <p className="section-body">Alongside the features developers loved in Grafana and Xero, I added new ways to spot trouble and optimize performance—making powerful insights available right in the portal, for every developer.</p>
        
        <div className="subsection">
          <h3 className="subsection-title">Requests</h3>
          <p className="subsection-text">The priority of all new developers was to optimise and look for errors. First and foremost they need an overview of the total requests, and a clear indication of the successes and failures. So if in case there is a sudden spike in errors, the developers can easily understand that through a graph.</p>
          <div className="subsection-image">
            <img src={requestsImg} alt="Requests analytics dashboard" />
          </div>
        </div>
        
        <div className="subsection">
          <h3 className="subsection-title">Error distribution</h3>
          <p className="subsection-text">Just showing errors is not enough. Developers want a distribution of the errors, what kind of errors have happened and what caused it.</p>
          <div className="subsection-image">
            <img src={errorsImg} alt="Error distribution analytics" />
          </div>
        </div>
        
        <div className="subsection">
          <h3 className="subsection-title">Latency</h3>
          <p className="subsection-text">One of the most important things we realised talking with our developers and looking at the tools they use is that getting the latency of errors is just as important as getting the latency of the successes for optimisation and learning quickly what the cause of the error might be. Learning about the latency works in the following way:</p>
          <p className="subsection-text">"If the latency is very high of the error its most likely a server side error while if the latency of the errors is low, it indicates an error on the client side"</p>
          <div className="subsection-image">
            <img src={latencyImg} alt="Latency analytics dashboard" />
          </div>
        </div>
        
        <div className="subsection">
          <h3 className="subsection-title">API Endpoints</h3>
          <p className="subsection-text">Lastly, it's important for developers to know more details about each of those requests. API endpoints let the developers know what resources were being accessed. Through this they know exactly where to look.</p>
          <div className="subsection-image">
            <img src={apiEndpointsImg} alt="API endpoints analytics" />
          </div>
        </div>
        
        <div className="subsection">
          <h3 className="subsection-title">Macro vs Micro Navigation</h3>
          <p className="subsection-text">Which do developers prefer—streamlined high-level navigation for fast scanning, or the ability to directly edit and filter each chart for granular insight?</p>
          <div className="subsection-images-row">
            <div className="subsection-image">
              <img src={graphmicroImg} alt="Micro: Edit Each Graph" />
              <p className="subsection-image-caption">Micro: Edit Each Graph</p>
            </div>
            
            <div className="subsection-image">
              <img src={graphmacroImg} alt="Macro: Unified Controls" />
              <p className="subsection-image-caption">Macro: Unified Controls</p>
            </div>
          </div>
        </div>
        
        <div className="subsection">
          <h3 className="subsection-title">Macro Navigation worked seamlessly</h3>
          <p className="subsection-text">Macro navigation made analytics fast and intuitive. Filtering by time period, response status, method, and API endpoint gave users a simple way to slice complex data—helping them spot patterns, solve issues, and gain insights without getting lost in unnecessary detail.</p>
        </div>
    </div>
    
    <div className="project-section">
        <h3 className="section-label">RESULTS</h3>
        <h2 className="section-title">Outcomes & Impact</h2>
        <ul>
          <li>85% adoption in first week</li>
          <li>External analytics usage dropped 60%</li>
          <li>Error identification became 4x faster</li>
          <li>Developer satisfaction &gt; 90%</li>
        </ul>
    </div>
    </ProjectPage>
  );
}

export default DeveloperPortalPage;