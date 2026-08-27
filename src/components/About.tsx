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
            Building Strong Foundations in Software & AI
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
                Computer Science & Systems Student
              </h3>
              <p className="text-zinc-300 leading-relaxed text-base">
                I am a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Lovely Professional University. I am focused on building strong computer science fundamentals and understanding how systems work from first principles rather than relying solely on high-level frameworks.
              </p>
              <p className="text-zinc-400 leading-relaxed text-base">
                I am actively learning and practicing Data Structures and Algorithms using <strong className="text-white">C++</strong>. My technical interests span software engineering, artificial intelligence, machine learning, embedded systems, and computer vision. My goal is to continuously improve through hands-on projects, rigorous problem solving, and practical technology that addresses meaningful real-world challenges.
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
                  3
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
                  Focus on C++, memory layout, object-oriented concepts, and structured problem solving.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">AI & Machine Learning</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Exploring machine learning models, computer vision applications, and intelligence workflows.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-white">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Embedded Systems</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Hardware-software interface concepts using Raspberry Pi, ESP32, and sensor integrations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-white">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Practical Engineering</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Dedicated to building software solutions that solve real-world engineering problems.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

