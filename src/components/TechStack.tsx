import React from 'react';
import { Code2, Layout, Database, Brain, Wrench, Layers } from 'lucide-react';

const techCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'C++', desc: 'Primary for DSA & Systems' },
      { name: 'Python', desc: 'AI/ML & Data Science' },
      { name: 'JavaScript', desc: 'Web Logic & Scripting' },
      { name: 'TypeScript', desc: 'Type-Safe Applications' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React', desc: 'Component Architecture' },
      { name: 'HTML5', desc: 'Semantic Structure' },
      { name: 'CSS3', desc: 'Responsive Layouts' },
      { name: 'Tailwind CSS', desc: 'Utility Design System' },
    ],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: [
      { name: 'Node.js', desc: 'Server-Side JS Runtime' },
      { name: 'PostgreSQL', desc: 'Relational Database' },
      { name: 'SQL', desc: 'Queries & Data Modeling' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      { name: 'Python ML', desc: 'NumPy, Pandas, Scikit' },
      { name: 'Machine Learning', desc: 'Supervised & Unsupervised' },
      { name: 'Artificial Intelligence', desc: 'Neural Networks & Models' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', desc: 'Version Control System' },
      { name: 'GitHub', desc: 'Code Collaboration' },
      { name: 'VS Code', desc: 'Primary IDE Setup' },
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
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900 hover:border-zinc-700 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{skill.name}</div>
                        <div className="text-[11px] text-zinc-500">{skill.desc}</div>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
