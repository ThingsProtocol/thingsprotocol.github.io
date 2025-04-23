"use client";

import Orb from './Orb';

interface OrbBackgroundProps {
  children?: React.ReactNode;
  hueRotationSpeed?: number; // controls how fast the hue cycles
}

export default function OrbBackground({ 
  children,
  hueRotationSpeed = 1 
}: OrbBackgroundProps) {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Orb 
          initialHue={0} 
          hueRotationSpeed={hueRotationSpeed} 
          hoverIntensity={0.2} 
          rotateOnHover={true} 
          forceHoverState={false}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
} 