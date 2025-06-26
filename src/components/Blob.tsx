// src/components/Blob.tsx
import React from 'react';

interface BlobProps {
  color: string;
  className?: string;
  style?: React.CSSProperties;
}

const Blob: React.FC<BlobProps> = ({ color, className = '', style }) => (
  <div
    className={`absolute z-[-10] pointer-events-none ${className}`}
    style={style}
  >
    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g transform="translate(300,300)">
        <path
          d="M186.7,-220.7C239.1,-185.6,277.2,-119.5,275.5,-58.9C273.7,1.8,232.2,57,193.7,115.6C155.2,174.2,119.7,236.2,59.8,265.5C-0.2,294.8,-84.4,291.3,-145.6,252.1C-206.9,212.8,-245.2,137.7,-263.5,60.5C-281.9,-16.7,-280.2,-96.1,-241.5,-145.6C-202.8,-195.1,-127.2,-214.7,-57.3,-237.4C12.6,-260.2,25.2,-286,77.1,-283.8C129,-281.7,216.6,-251.7,186.7,-220.7Z"
          fill={color}
        />
      </g>
    </svg>
  </div>
);

export default Blob;
