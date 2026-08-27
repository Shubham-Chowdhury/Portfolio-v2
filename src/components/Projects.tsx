import React from 'react';
import { FolderGit2, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Code Refactoring & Optimization Engine',
    category: 'Artificial Intelligence / C++',
    description:
      'High-performance C++ static analysis and machine learning optimization tool designed to parse Abstract Syntax Trees (AST) and suggest algorithmic optimizations for speed and memory efficiency.',
    tags: ['C++', 'Python', 'Machine Learning', 'AST Parser', 'LLM Integration'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    isPlaceholder: true,
  },
  {
    id: 2,
    title: 'Liquid Refractive WebGL Visualizer',
    category: 'Interactive Graphics / WebGL',
    description:
      'A real-time 3D optical refraction simulation engine using raw WebGL shaders, raymarching signed distance fields (SDF), and dynamic studio lighting built natively in React & TypeScript.',
    tags: ['React', 'TypeScript', 'WebGL', 'GLSL Shaders', 'Raymarching'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    isPlaceholder: false,
  },
  {
    id: 3,
    title: 'Embedded System Sensor Data Processor',
    category: 'Embedded Systems & Software',
    description:
      'Low-latency micro-controller firmware and data telemetry pipeline written in C++ for processing high-frequency sensor streams with real-time anomaly detection models.',
    tags: ['C++', 'Embedded Systems', 'IoT', 'Data Pipeline', 'Machine Learning'],
    github: 'https://github.com',
    demo: '',
    isPlaceholder: true,
  },
  {
    id: 4,
    title: 'Algorithmic DSA Visualizer & Benchmark Suite',
    category: 'Data Structures / Software',
    description:
      'Interactive execution visualizer for complex graph algorithms, dynamic programming state tables, and tree structures with custom benchmarking against standard C++ STL containers.',
    tags: ['TypeScript', 'React', 'C++ Transpiler', 'Algorithms', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    isPlaceholder: true,
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-black border-b border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
              <FolderGit2 className="w-3.5 h-3.5 text-zinc-300" />
              Featured Artifacts
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Engineering Projects & Systems
            </h2>
          </div>

          <p className="text-xs text-zinc-400 max-w-xs leading-relaxed font-mono">
            * Placeholder project cards are clearly marked below and easily editable in <code className="text-white">Projects.tsx</code>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xl"
            >
              <div className="space-y-4">
                
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.isPlaceholder && (
                    <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 font-mono">
                      Editable Placeholder
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-zinc-200 transition-colors flex items-center gap-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Links */}
              <div className="pt-6 border-t border-zinc-900 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Code Repository
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>

                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
