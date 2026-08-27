import React from 'react';
import { Code2, Layout, Database, Brain, Wrench, Layers, Cpu } from 'lucide-react';
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiRaspberrypi,
  SiPlatformio,
  SiOpencv,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const techCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'C++', desc: 'Primary for DSA & Systems', icon: SiCplusplus },
      { name: 'Python', desc: 'AI/ML & Automation', icon: SiPython },
      { name: 'JavaScript', desc: 'Web Logic & Scripting', icon: SiJavascript },
      { name: 'TypeScript', desc: 'Type-Safe Applications', icon: SiTypescript },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React', desc: 'Component Architecture', icon: SiReact },
      { name: 'HTML5', desc: 'Semantic Markup', icon: SiHtml5 },
      { name: 'CSS3', desc: 'Responsive Styling', icon: SiCss },
      { name: 'Tailwind CSS', desc: 'Utility Design System', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: [
      { name: 'Node.js', desc: 'Server-Side JS Runtime', icon: SiNodedotjs },
      { name: 'PostgreSQL', desc: 'Relational Database', icon: SiPostgresql },
      { name: 'SQL', desc: 'Queries & Data Modeling', icon: Database },
    ],
  },
  {
    title: 'AI & Computer Vision',
    icon: Brain,
    skills: [
      { name: 'Python ML', desc: 'NumPy, Pandas, Scikit-Learn', icon: SiPython },
      { name: 'Computer Vision / YOLO', desc: 'Object Detection & Inference', icon: Brain },
      { name: 'OpenCV', desc: 'Image Processing & Filters', icon: SiOpencv },
    ],
  },
  {
    title: 'Embedded Systems',
    icon: Cpu,
    skills: [
      { name: 'Raspberry Pi', desc: 'Single-Board Processing', icon: SiRaspberrypi },
      { name: 'ESP32', desc: 'Microcontroller & Wireless', icon: Cpu },
      { name: 'PlatformIO', desc: 'Embedded Development IDE', icon: SiPlatformio },
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', desc: 'Version Control System', icon: SiGit },
      { name: 'GitHub', desc: 'Code Collaboration', icon: SiGithub },
      { name: 'VS Code', desc: 'Primary IDE Environment', icon: VscVscode },
    ],
  },
];

export const TechStack: React.FC = () => {
  return (
    <section id="techstack" className="py-24 bg-black border-b border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <Layers className="w-3.5 h-3.5 text-zinc-300" />
            Engineering Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Technical Stack & Expertise
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-600 transition-all duration-300 space-y-4 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-display font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Cards */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900 hover:border-zinc-700 transition-colors flex items-center justify-between group/skill"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover/skill:text-white transition-colors">
                            <SkillIcon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">{skill.name}</div>
                            <div className="text-[11px] text-zinc-500">{skill.desc}</div>
                          </div>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/skill:bg-zinc-300 transition-colors" />
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

