import React, { useEffect, useRef } from 'react';

function RandomPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    let animationFrame;
    let time = 0;

    function animate() {
      time += 0.01; // Control speed - smaller values = slower movement
      
      if (pageRef.current) {
        // Create smooth, slow-moving circular motion
        const centerX = 50; // Center X position (50% of viewport)
        const centerY = 50; // Center Y position (50% of viewport)
        const radiusX = 20; // Horizontal movement radius
        const radiusY = 15; // Vertical movement radius
        
        // Calculate position using sine and cosine for smooth circular motion
        const x = centerX + Math.sin(time) * radiusX;
        const y = centerY + Math.cos(time * 0.8) * radiusY; // Different frequency for more organic movement
        
        pageRef.current.style.setProperty('--mx', `${x}%`);
        pageRef.current.style.setProperty('--my', `${y}%`);
      }
      
      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div 
      ref={pageRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'radial-gradient(circle 50vh at var(--mx, 50%) var(--my, 50%), #04D125 0%, rgba(4,209,37,0.8) 20%, rgba(4,209,37,0.3) 50%, rgba(4,209,37,0.05) 80%, rgba(4,209,37,0) 100%), #F0EFEB',
        zIndex: 9999
      }}
    />
  );
}

export default RandomPage;