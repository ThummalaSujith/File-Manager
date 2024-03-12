// SpeedTest.js
import React from 'react';
import './SpeedTest.css';

const SpeedTest = () => {
  return (
    <div className="speed-meter">
      <svg viewBox="0 0 100 100" className="gauge">
        {/* The background part of the arc */}
        <path
          d="M 10,50 A 40,40 0 0,1 90,50"
          fill="none"
          stroke="#000"
          strokeWidth="8"
        />
        {/* The gradient for the filled part of the arc */}
        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00dbde" />
          <stop offset="100%" stopColor="#fc00ff" />
        </linearGradient>
        {/* Filled to 50% with gradient */}
        <path
          d="M 10,50 A 40,40 0 0,1 90,50"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="8"
          strokeDasharray="125.6 251.2" // Exact values for 50% fill on a 40 radius arc
          strokeDashoffset="62.8" // Start from the top
        />
        {/* The arrow */}
        <polygon
          points="50,20 48,30 52,30"
          fill="#fff"
        />
        {/* Rotating the arrow group */}
        <g transform="rotate(90, 50, 50)">
          <polygon
            points="50,20 48,30 52,30"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};

export default SpeedTest;

