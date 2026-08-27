import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, ChevronDown, ChevronUp, Cpu, Brain, Lock } from 'lucide-react';
import {
  SiPython,
  SiCplusplus,
  SiRaspberrypi,
  SiPlatformio,
  SiGit,
  SiGithub,
} from 'react-icons/si';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  summary: string;
  lines: string[];
  tags: { name: string; icon?: React.ComponentType<{ className?: string }> }[];
  github?: string;
  demo?: string;
}

const realProjects: ProjectItem[] = [
  {
    id: 1,
    title: 'SpeedSense AI',
    category: 'Embedded AI / Computer Vision',
    summary:
      'An intelligent speed-governance system combining real-time computer vision, edge processing, and hardware motor control.',
    lines: [
      'Line 01 [Problem]: Addresses vehicle overspeeding and road safety risks caused by missed or unobserved speed limit signs.',
      'Line 02 [Context]: Traditional manual compliance relies strictly on driver attention, which can be prone to human oversight.',
      'Line 03 [Computer Vision]: Leverages real-time computer vision streams to actively scan and recognize road signage.',
      'Line 04 [YOLOv8 Model]: Utilizes a custom-trained YOLOv8 object detection model optimized for speed limit sign identification.',
      'Line 05 [Edge Processing]: Runs real-time vision inferencing onboard a Raspberry Pi edge computing unit.',
      'Line 06 [Hardware Integration]: Communicates with an ESP32 microcontroller for direct hardware actuation and signal processing.',
      'Line 07 [GPS Fallback]: Integrates a GPS module as a secondary fallback reference when visual sign visibility is degraded.',
      'Line 08 [Motor Control]: Interfaces with an L298N motor driver via PlatformIO firmware logic for governed speed regulation.',
      'Line 09 [Prototype Result]: Successfully built a proof-of-concept embedded system showcasing automated speed-governance behavior.',
      'Line 10 [Key Learnings]: Gained deep experience in edge model optimization, hardware-software interfacing, and real-time vision pipelines.',
    ],
    tags: [
      { name: 'Python', icon: SiPython },
      { name: 'C++', icon: SiCplusplus },
      { name: 'YOLOv8', icon: Brain },
      { name: 'Computer Vision', icon: Brain },
      { name: 'Raspberry Pi', icon: SiRaspberrypi },
      { name: 'ESP32', icon: Cpu },
      { name: 'PlatformIO', icon: SiPlatformio },
    ],
    github: '',
    demo: '',
  },
  {
    id: 2,
    title: 'Burha Luit',
    category: 'Software & Community Technology',
    summary:
      'A specialized software application designed to address real-world community challenges and local environmental workflows.',
    lines: [
      'Line 01 [Overview]: Burha Luit is a software solution named in honor of the river Brahmaputra.',
      'Line 02 [Problem]: Formulated to address regional information access and community awareness challenges.',
      'Line 03 [Target Audience]: Intended for local communities, civic participants, and public stakeholders.',
      'Line 04 [Core Purpose]: Delivers structured data views and accessible information tracking for local workflows.',
      'Line 05 [Key Feature 1]: Implements responsive dashboard interfaces for clear information dissemination.',
      'Line 06 [Key Feature 2]: Provides structured modular components for data analysis and reporting.',
      'Line 07 [Tech Stack]: Built using core software engineering practices, C++, and modern script logic.',
      'Line 08 [Architecture]: Utilizes lightweight data structures to maintain low latency and operational efficiency.',
      'Line 09 [Current Status]: Functions as a working prototype demonstrating localized software engineering.',
      'Line 10 [Learnings & Notes]: Taught fundamental lessons in domain-specific problem formulation and UI state logic. [Editable Slot: Insert exact GitHub repo URL / extra live details when ready].',
    ],
    tags: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'Python', icon: SiPython },
      { name: 'Software Engineering', icon: SiGithub },
      { name: 'Git', icon: SiGit },
    ],
    github: '',
    demo: '',
  },
  {
    id: 3,
    title: 'UrbanPath — Smart City Planner',
    category: 'Software & Urban Graph Analytics',
    summary:
      'An algorithmic city planning and path optimization tool designed to model urban connectivity and resource allocation.',
    lines: [
      'Line 01 [Purpose]: Developed to model urban road networks and compute optimal infrastructure planning decisions.',
      'Line 02 [Planning Challenge]: Addresses congestion and inefficient municipal expansion through graph-based modeling.',
      'Line 03 [User Experience]: Offers an intuitive command and visual workspace for planning simulated urban layouts.',
      'Line 04 [Core Functionality]: Enables dynamic graph creation with customized nodes (districts) and weighted edges (roads).',
      'Line 05 [Algorithmic Routing]: Applies Dijkstra and Shortest Path algorithms for efficient route finding across city sectors.',
      'Line 06 [Zone Analysis]: Evaluates spatial density metrics and bottleneck nodes to recommend planning adjustments.',
      'Line 07 [Technology Stack]: Implemented in C++ utilizing Standard Template Library (STL) data structures.',
      'Line 08 [System Structure]: Designed with modular OOP principles separating graph representation from solver algorithms.',
      'Line 09 [Accomplishment]: Demonstrates reliable O(N log N) graph traversal and network evaluation on complex topologies.',
      'Line 10 [Learnings]: Reinforced advanced graph algorithm implementations, spatial data structures, and software architecture.',
    ],
    tags: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'Data Structures', icon: Cpu },
      { name: 'Graph Theory', icon: Cpu },
      { name: 'Algorithms', icon: Brain },
    ],
    github: '',
    demo: '',
  },
];

export const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
              Featured Projects
            </h2>
          </div>

          <p className="text-xs text-zinc-400 max-w-xs leading-relaxed font-mono">
            * Real technical implementations with 10-line structured architecture breakdowns.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {realProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xl"
              >
                <div className="space-y-4">
                  
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 font-mono">
                      Real Project
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-zinc-200 transition-colors flex items-center justify-between gap-2">
                    <span>{project.title}</span>
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors focus:outline-none text-xs flex items-center gap-1 font-mono font-normal"
                    >
                      {isExpanded ? (
                        <>
                          Hide Details <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Expand 10-Line Breakdown <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech Stack Tags with Logos */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => {
                      const TagIcon = tag.icon;
                      return (
                        <span
                          key={tag.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                        >
                          {TagIcon && <TagIcon className="w-3 h-3 text-zinc-400" />}
                          {tag.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* Expanded 10-Line Technical Narrative */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-zinc-900/80 space-y-2.5 bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/60 animate-in fade-in duration-200">
                      <div className="text-xs font-mono text-zinc-300 font-semibold mb-2">
                        Technical Architecture & Implementation Story (10 Lines):
                      </div>
                      <div className="space-y-1.5 font-mono text-[11px] sm:text-xs text-zinc-300 leading-relaxed">
                        {project.lines.map((line, idx) => (
                          <div
                            key={idx}
                            className="p-2 rounded bg-black/60 border border-zinc-900 flex items-start gap-2"
                          >
                            <span className="text-zinc-500 shrink-0 font-bold">
                              {String(idx + 1).padStart(2, '0')}.
                            </span>
                            <span>{line}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Card Footer Links */}
                <div className="pt-6 border-t border-zinc-900 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                      >
                        <SiGithub className="w-4 h-4" />
                        Code Repository
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 cursor-not-allowed">
                        <Lock className="w-3.5 h-3.5" />
                        Repository Available Upon Request / Coming Soon
                      </span>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

