import React from 'react';
import { Award, Trophy, Star, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Top Academic Performer (9.29 CGPA)',
    category: 'Academic Honor',
    desc: 'Maintained 9.29 CGPA in B.Tech Computer Science Engineering with specialization in AI & ML.',
    date: '2023 - Present',
  },
  {
    icon: Trophy,
    title: '97% Highest Course Score',
    category: 'Academic Milestone',
    desc: 'Achieved 97 marks out of 100 in core computer science foundational coursework.',
    date: '2024',
  },
  {
    icon: Star,
    title: 'Advanced DSA Mastery in C++',
    category: 'Technical Milestone',
    desc: 'Solved 300+ algorithmic problems across Arrays, Linked Lists, Trees, Graphs, and Dynamic Programming.',
    date: '2024 - 2025',
  },
  {
    icon: Zap,
    title: 'AI/ML Engineering Architecture',
    category: 'Project & Learning',
    desc: 'Built intelligent models and WebGL interactive shaders integrating AI logic and computer vision primitives.',
    date: '2025',
  },
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-black border-b border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <Trophy className="w-3.5 h-3.5 text-zinc-300" />
            Recognition & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Key Achievements
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-200 flex items-start gap-4 space-y-0"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0 mt-1">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">{item.date}</span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
