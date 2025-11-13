// src/components/FloatingHearts.js
import React from 'react';
import './FloatingHearts.css';

function FloatingHearts() {
  const hearts = Array.from({ length: 15 });

  const HeartSVG = () => (
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 24 24" 
      fill="#ff2e2e" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 21s-6.2-4.35-9.4-8.55C-1.2 7.55 1.55 2 6.1 2 8.5 2 10.2 3.4 12 5.3 13.8 3.4 15.5 2 17.9 2c4.55 0 7.3 5.55 3.5 10.45C18.2 16.65 12 21 12 21z"/>
    </svg>
  );

  return (
    <div className="hearts-container">
      {hearts.map((_, index) => (
        <div 
          key={index}
          className="heart"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <HeartSVG />
        </div>
      ))}
    </div>
  );
}

export default FloatingHearts;
  