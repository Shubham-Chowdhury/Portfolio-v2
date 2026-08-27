import React from 'react';
import { Cpu, Terminal, Sparkles, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-black border-b border-zinc-800/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Architecting Logic from First Principles
          </h2>
        </div>

        {/* Asymmetric Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Provided Photo Container */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-2 shadow-2xl transition-all duration-300 group-hover:border-zinc-600">
              
              {/* Photo Wrapper */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900">
                <img
                  src="/shubham.png"
                  alt="Shubham Chowdhury"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Subtle Monochrome Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Photo Caption Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-800/80">
                <p className="text-xs font-semibold text-white tracking-wide">Shubham Chowdhury</p>
                <p className="text-[11px] text-zinc-400 font-mono">B.Tech CSE (AI & ML) • LPU</p>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Description & Stats */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
                First-Principles Engineer & AI Specialist
              </h3>
              <p className="text-zinc-300 leading-relaxed text-base">
                I am a B.Tech Computer Science and Engineering student at Lovely Professional University, 
                specializing in Artificial Intelligence and Machine Learning. Driven by curiosity and a commitment to 
                first-principles thinking, I build software solutions rooted in deep algorithmic understanding and optimal systemic design.
              </p>
              <p className="text-zinc-400 leading-relaxed text-base">
                My primary expertise centers around <strong className="text-white">C++ Data Structures and Algorithms</strong>, 
                exploring low-level memory efficiency, system architecture, and cutting-edge AI model implementation. Whether developing 
                intelligent software applications or engineering embedded solutions, my target remains constant: 
                <span className="text-white font-medium"> to evolve into a world-class software engineer who solves complex computational challenges.</span>
              </p>
            </div>

            {/* Core Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-b border-zinc-900 py-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  9.29
                </div>
                <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider font-mono">
                  CGPA
                </div>
              </div>

              <div className="space-y-1 border-l border-zinc-900 pl-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  97
                </div>
                <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider font-mono">
                  Highest Score
                </div>
              </div>

              <div className="space-y-1 border-l border-zinc-900 pl-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  4+
                </div>
                <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider font-mono">
                  Core Projects
                </div>
              </div>
            </div>

            {/* Minimal Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-white">
                  <Terminal className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Core Fundamentals</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Rigorous focus on C++, Memory Management, OOP, and Algorithmic Problem Solving.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Artificial Intelligence</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Machine Learning workflows, model architecture, and predictive intelligent systems.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-white">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Embedded & Software</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Hardware-software interface exploration, firmware logic, and full-stack integration.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-white">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Ultimate Mission</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Building high-performance, impactful software engineering systems at scale.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
