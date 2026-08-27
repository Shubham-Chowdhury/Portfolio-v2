import React from 'react';
import { ChevronDown } from 'lucide-react';
import LiquidGlassCluster from './originkit/ui/glass-icon-custom-style-2';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* Full-Screen WebGL Liquid Glass Cluster */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidGlassCluster
          style={{
            minWidth: 0,
            minHeight: 0,
            width: '100%',
            height: '100%',
            background: '#000000',
          }}
          backdrop={{
            type: 'Text',
            text: 'SHUBHAM\nCHOWDHURY',
            textColor: '#FFFFFF',
            font: {
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: '120px',
              fontWeight: 800,
              lineHeight: 1.0,
              textAlign: 'center',
            },
          }}
          glass={{
            tint: '#FFFFFF',
            frost: 40,
            chromatic: 80,
          }}
          speed={60}
          shape="Torus"
        />
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-all group focus:outline-none"
        aria-label="Scroll to About Section"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 group-hover:text-zinc-300">
          Scroll Down
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-zinc-400 group-hover:text-white" />
      </a>

    </section>
  );
};
