import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, ChevronDown, ChevronUp, Cpu, Brain } from 'lucide-react';
import {
  SiPython,
  SiCplusplus,
  SiRaspberrypi,
  SiPlatformio,
  SiGit,
  SiGithub,
  SiPytorch,
  SiOpencv,
  SiPandas,
} from 'react-icons/si';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  summary: string;
  image: string;
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
      'An AI-powered speed governance system that detects road speed-limit signs using YOLOv8 and computer vision to control vehicle speed in real-time.',
    image: '/projects/speedsense-ai.jpg',
    lines: [
      'Line 01 [System Goal]: Developed an AI-powered speed governance system detecting road speed-limit signs using YOLOv8 and computer vision.',
      'Line 02 [Hardware Control]: Integrated ESP32, GPS, and motor-control hardware to translate detected speed limits into real-time vehicle speed control.',
      'Line 03 [Fallback Mechanism]: Implemented a fallback mechanism using GPS-based speed-limit data for when traffic-sign detection is unavailable.',
      'Line 04 [OLED Display]: Built an ESP32-based dashboard with an OLED display showing real-time speed limit and system status information.',
      'Line 05 [Edge Inferencing]: Executed real-time YOLOv8 object detection inferencing on a Raspberry Pi single-board computer.',
      'Line 06 [Microcontroller Firmware]: Programmed ESP32 microcontroller logic via PlatformIO for rapid signal processing and hardware triggers.',
      'Line 07 [Motor Actuation]: Interfaced L298N motor driver modules to govern hardware motor response dynamically based on vision data.',
      'Line 08 [Vision Pipeline]: Optimized image frames for rapid low-latency detection under variable lighting and road conditions.',
      'Line 09 [Project Outcome]: Delivered a fully functional embedded prototype combining vision AI with hardware speed regulation.',
      'Line 10 [Key Learnings]: Gained hands-on experience in edge AI optimization, micro-controller interfacing, and real-time vision pipelines.',
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
    github: 'https://github.com/Shubham-Chowdhury',
    demo: '',
  },
  {
    id: 2,
    title: 'Burha Luit',
    category: 'AI & Geospatial Flood Intelligence',
    summary:
      'An AI-powered flood intelligence system assessing flood risk for individual locations, delivering early warnings and computing safe evacuation routes.',
    image: '/projects/burha-luit.jpg',
    lines: [
      'Line 01 [System Purpose]: Built an AI-powered flood intelligence system assessing location-specific flood risk and providing early warnings.',
      'Line 02 [ML Risk Pipeline]: Developed a machine learning pipeline analyzing rainfall, river levels, elevation, terrain, and historical flood patterns.',
      'Line 03 [Evacuation Module]: Designed an intelligent evacuation module identifying safer routes during flood events via GIS road-network data.',
      'Line 04 [Centralized Platform]: Engineered a centralized platform for flood-risk visualization, enabling users to assess location vulnerability.',
      'Line 05 [Deep Learning]: Applied PyTorch and Scikit-learn models for predictive flood-risk scoring based on environmental parameters.',
      'Line 06 [Data Analytics]: Utilized Pandas and NumPy for spatial data preprocessing, rainfall metrics analysis, and terrain raster modeling.',
      'Line 07 [Computer Vision]: Integrated OpenCV for processing aerial elevation maps and satellite flood extent imagery.',
      'Line 08 [API & GPS Integration]: Connected REST APIs and GPS telemetry to track dynamic flood conditions and update evacuation routes.',
      'Line 09 [Achieved Impact]: Created a unified solution for location vulnerability assessment, risk monitoring, and informed evacuation decisions.',
      'Line 10 [Key Learnings]: Advanced skills in geospatial analytics, deep learning prediction, and route optimization algorithms under dynamic constraints.',
    ],
    tags: [
      { name: 'Python', icon: SiPython },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Scikit-learn', icon: Brain },
      { name: 'Pandas', icon: SiPandas },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'Deep Learning', icon: Brain },
      { name: 'GIS / GPS', icon: SiGithub },
    ],
    github: 'https://github.com/Shubham-Chowdhury',
    demo: '',
  },
  {
    id: 3,
    title: 'UrbanPath — Smart City Planner',
    category: 'Software & Urban Graph Analytics',
    summary:
      'An algorithmic city planning and path optimization tool designed to model urban connectivity, graph networks, and resource allocation.',
    image: '/projects/urbanpath.jpg',
    lines: [
      'Line 01 [Purpose]: Developed to model urban road networks and compute optimal infrastructure planning decisions.',
      'Line 02 [Planning Challenge]: Addresses traffic congestion and inefficient municipal expansion through graph-based modeling.',
      'Line 03 [User Experience]: Offers an intuitive command and visual workspace for planning simulated urban layouts.',
      'Line 04 [Core Functionality]: Enables dynamic graph creation with customized nodes (districts) and weighted edges (roads).',
      'Line 05 [Algorithmic Routing]: Applies Dijkstra and Shortest Path algorithms for efficient route finding across city sectors.',
      'Line 06 [Zone Analysis]: Evaluates spatial density metrics and bottleneck nodes to recommend planning adjustments.',
      'Line 07 [Technology Stack]: Implemented in C++ utilizing Standard Template Library (STL) data structures.',
      'Line 08 [System Structure]: Designed with modular OOP principles separating graph representation from solver algorithms.',
      'Line 09 [Accomplishment]: Demonstrates reliable O(N log N) graph traversal and network evaluation on complex topologies.',
      'Line 10 [Key Learnings]: Reinforced advanced graph algorithm implementations, spatial data structures, and clean C++ software architecture.',
    ],
    tags: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'Data Structures', icon: Cpu },
      { name: 'Graph Theory', icon: Cpu },
      { name: 'Algorithms', icon: Brain },
    ],
    github: 'https://github.com/Shubham-Chowdhury',
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
                    <div className="mt-4 pt-4 border-t border-zinc-900/80 space-y-4 bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/60 animate-in fade-in duration-200">
                      
                      {/* Project Screenshot */}
                      {project.image && (
                        <div className="relative w-full overflow-hidden rounded-xl border border-zinc-700/60 shadow-2xl group/img">
                          <img
                            src={project.image}
                            alt={`${project.title} dashboard screenshot`}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-zinc-700/60 text-[10px] font-mono text-zinc-300">
                              📸 Project Preview
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="text-xs font-mono text-zinc-300 font-semibold">
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
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                      >
                        <SiGithub className="w-4 h-4" />
                        GitHub Repository
                      </a>
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

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


