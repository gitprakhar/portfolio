import React from 'react';
import ProjectPage from '../ProjectPage';
import blandcanvasImg from '../images/bland-canvas/bland-canvas.jpg';
import madeonblandcanvasImg from '../images/bland-canvas/made-on-bland-canvas-1.jpg';
import madeonblandcanvasImg2 from '../images/bland-canvas/made-on-bland-canvas-2.jpg';
import madeonblandcanvasImg3 from '../images/bland-canvas/made-on-bland-canvas-3.jpg';
import startingpointImg from '../images/bland-canvas/starting-point.jpg';
import datasetImg from '../images/bland-canvas/dataset.jpeg';
import transformationImg from '../images/bland-canvas/transformation.png';
import homepageGif from '../images/bland-canvas/homepage-1.gif';
import homepageImg from '../images/bland-canvas/homepage-1.jpg';
import diyImg from '../images/bland-canvas/diy.jpg';
import promptisavibeImg from '../images/bland-canvas/prompt-is-a-vibe.jpg';
import whileyouwaitGif from '../images/bland-canvas/while-you-wait.gif';
import fromaiImg from '../images/bland-canvas/from-ai.jpeg';
import fromothersImg from '../images/bland-canvas/from-others.jpg';



function BlandCanvasPage() {
  return (
    <ProjectPage
      title="Bland Canvas AI"
      description="Bland Canvas is an AI-powered platform that transforms the basic IKEA MARIUS stool into personalized designs. By blending creative AI with DIY hacks, it reimagines disposable furniture as a canvas for self-expression and meaningful reuse."
      focus={`Human–AI Collaboration
Generative AI
DIY Furniture
Creative Tools`}
      timeline="6 months"
      heroImage={blandcanvasImg}
    >
      {/* Content for Bland Canvas will be added here */}
    <div className="project-section">
        <h3 className="section-label">CONTEXT</h3>
        <h2 className="section-title">The Most Boring Furniture Gets a Second Life</h2>
        <p className="section-body">Using a custom-trained AI and creative DIY, this project transforms the IKEA MARIUS from disposable to meaningful—showing how technology and imagination can challenge design waste.</p>
    </div>
     <div className="project-section">
        <h3 className="section-label">PROBLEM</h3>
        <h2 className="section-title">Design for the Designed-to-Die</h2>
        <p className="section-body">Bland Canvas is a speculative design project that transforms the most boring furniture ever built — the IKEA MARIUS — using AI-generated visuals and DIY workflows. It explores how emotional connection, personal effort, and creative reuse can turn disposable furniture into something worth keeping. Built on a custom-trained LoRA model, the platform reimagines mass-produced objects as blank canvases, inviting users to co-create with AI and resist the culture of fast, forgettable design.</p>
            <div className="section-image">
          <img src={madeonblandcanvasImg} alt="Made on Bland Canvas" />
        </div>
    </div>
    <div className="project-section">
        <h3 className="section-label">EXECUTION</h3>
        <h2 className="section-title">Finding the starting point</h2>
        <p className="section-body">I chose the IKEA MARIUS because it’s the most boring piece of furniture ever built. Which made it perfect. You’re not afraid to ruin a $20 stool — that makes it a creative playground.</p>
            <div className="section-image">
          <img src={startingpointImg} alt="Starting Point" />
        </div>
    </div>
    <div className="project-section">
        <h3 className="section-label">EXECUTION</h3>
        <h2 className="section-title">No Dataset, No Problem: Making My Own for Bland Canvas</h2>
        <p className="section-body">To train the AI, I needed 100+ images of the IKEA MARIUS in its original form — same angles, same lighting, same object. But those images simply didn’t exist. Not online, not in datasets, not anywhere. So I wrote a script to render my own: rotating a 3D model of the stool, capturing it from multiple perspectives, and building a clean, consistent dataset from scratch.</p>
            <div className="section-image">
          <img src={datasetImg} alt="Dataset" />
        </div>
    </div>
    <div className="project-section">
        <h3 className="section-label">EXECUTION</h3>
        <h2 className="section-title">What Does “Transformation” Look Like?</h2>
        <p className="section-body">To teach the model what transformation actually meant, I needed examples — not just styled stools, but ones that were truly reimagined. I scraped 30+ images of creatively hacked MARIUS stools from IKEA Hackers and Pinterest: crochet-wrapped legs, stacked planter versions, baroque makeovers, and everything in between.</p>
            <div className="section-image">
          <img src={transformationImg} alt="Transformation" />
        </div>
    </div>
    <div className="project-section">
        <h3 className="section-label">THE PLATFORM</h3>
        <h2 className="section-title">The Homepage Had to Say It All</h2>
        <p className="section-body">
I wanted the very first screen to tell the story — without words. The homepage shows dull IKEA furniture falling into a pool of bright green paint. It’s absurd, loud, and just surreal enough to stick. That single image became the visual metaphor for Bland Canvas: transformation as rebellion, as play, as something joyful instead of utilitarian.

“I didn’t want to say ‘transform your furniture.’ I wanted people to feel it.”</p>
            <div className="section-image">
          <img src={homepageGif} alt="Homepage Gif" />
        </div>
        <div className="section-image">
          <img src={homepageImg} alt="Homepage Image" />
        </div>
    </div>
        <div className="project-section">
        <h3 className="section-label">THE PLATFORM</h3>
        <h2 className="section-title">Do-it-yourself</h2>
        <p className="section-body">The core of the platform is a page called Do-it-yourself — where users upload their own boring furniture and describe a vibe. That’s it. No dropdowns, no filters. Just a photo and a feeling.

The AI takes that input and generates a reimagined version of the furniture, using what it’s learned from real transformations. The goal wasn’t to spit out perfect results — it was to give users a starting point. Something weird, unexpected, and personal enough to make them want to build.</p>
            <div className="section-image">
          <img src={diyImg} alt="Do-it-yourself" />
        </div>
    </div>
        <div className="project-section">
        <h3 className="section-label">THE PLATFORM</h3>
        <h2 className="section-title">The Prompt is a Vibe, Not a Command</h2>
        <p className="section-body">I didn’t want users to feel like they were writing to a robot. The platform treats the prompt as a vibe, not a technical instruction. You don’t have to say “Generate a velvet seat with a gold base”. You can just type “cozy and colorful”, or “brutalist jungle”.</p>
            <div className="section-image">
          <img src={promptisavibeImg} alt="Prompt is a Vibe" />
        </div>
    </div>
    <div className="project-section">
        <h3 className="section-label">THE PLATFORM</h3>
        <h2 className="section-title">While you wait</h2>
        <p className="section-body">While the AI processed your image, you could drag and rotate a 3D IKEA KALLAX shelf — a symbol of mass-produced furniture that shows up everywhere and means nothing. Inside the shelf: soft, bloated letters spelling BLAND CANVAS. Interactive, yes, but pointless — just like the shelf itself.</p>
            <div className="section-image">
          <img src={whileyouwaitGif} alt="While you wait" />
        </div>
    </div>
        <div className="project-section">
        <h3 className="section-label">THE PLATFORM</h3>
        <h2 className="section-title">From AI</h2>
        <p className="section-body">Once the AI finished transforming your image, it didn’t just give you a pretty picture. It gave you a plan.

Each transformation came with a name, a short description, materials you’d need, and an estimated time to make it. Like this one — the Whimsical Blossom Transformation — which turned the IKEA MARIUS into a soft, storybook seat with bows, hearts, and a smiling cushion face.</p>
            <div className="section-image">
          <img src={fromaiImg} alt="From AI" />
        </div>
    </div>
        <div className="project-section">
        <h3 className="section-label">THE PLATFORM</h3>
        <h2 className="section-title">From others</h2>
        <p className="section-body">Alongside your AI-powered transformation, you can also explore how others reimagined the same stool. Based on your prompt, the platform curates projects that share a similar vibe — offering alternate directions, techniques, and inspiration.</p>
            <div className="section-image">
          <img src={fromothersImg} alt="From others" />
        </div>
    </div>
    <div className="project-section">
        <h3 className="section-label">THE PLATFORM</h3>
        <h2 className="section-title">Made on Bland Canvas</h2>
        <p className="section-body">This isn’t just a gallery — it’s proof. From fluffy cloudscapes to punk explosions, people took the same $20 IKEA stool and turned it into something completely their own. Each project was inspired by a vibe, sparked by AI, and shaped by human hands. This is what happens when you stop scrolling and start making.</p>
            <div className="section-image">
          <img src={madeonblandcanvasImg} alt="Made on Bland Canvas" />
        </div>
        <div className="section-image">
          <img src={madeonblandcanvasImg2} alt="Made on Bland Canvas " />
        </div>
        <div className="section-image">
          <img src={madeonblandcanvasImg3} alt="Made on Bland Canvas" />
        </div>
    </div>
    <div className="project-section">
        <h3 className="section-label">WHAT'S NEXT</h3>
        <h2 className="section-title">Two Brains Are Better Than One</h2>
        <p className="section-body">This is just the beginning. I imagine Bland Canvas as a truly collaborative platform — where AI doesn’t just suggest ideas, but co-creates with you. A system that adapts in real time: you tell it, “I don’t have yellow paint,” and it shifts the design. You say, “I only have cardboard,” and it rethinks the materials. The future of DIY is flexible, conversational, and human — and Bland Canvas is my first step toward that future.</p>
    </div>
    </ProjectPage>
  );
}

export default BlandCanvasPage;