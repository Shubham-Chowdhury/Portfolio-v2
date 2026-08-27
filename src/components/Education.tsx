import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';

const courses = [
  { name: 'Data Structures & Algorithms in C++', score: 98, status: 'Mastered' },
  { name: 'Object Oriented Programming', score: 96, status: 'Completed' },
  { name: 'Artificial Intelligence & ML', score: 95, status: 'In Progress' },
  { name: 'Database Management Systems', score: 94, status: 'Completed' },
  { name: 'Operating Systems & Architecture', score: 92, status: 'Completed' },
  { name: 'Discrete Mathematics & Logic', score: 96, status: 'Completed' },
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-black border-b border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-300" />
            Academic Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Education & Academic Performance
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Institution Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden group">
            {/* Ambient glass glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-zinc-900 pb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-white">
                  CGPA: <span className="font-bold text-white">9.29</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  Lovely Professional University
                </h3>
                <p className="text-sm font-semibold text-zinc-300 mt-1">
                  B.Tech in Computer Science & Engineering
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Specialization: Artificial Intelligence & Machine Learning
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-zinc-500" />
                  <span>2023 - 2027 (Expected)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-zinc-500" />
                  <span>Consistently ranked in top percentile of department</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-zinc-500" />
                  <span>Focus on Theoretical CS & Systems Engineering</span>
                </div>
              </div>

              {/* Key Stat Highlight */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400">Highest Course Grade</div>
                  <div className="text-lg font-bold text-white">97 / 100</div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>

            </div>
          </div>

          {/* Subject Performance Visualization */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
            
            <div>
              <h3 className="text-lg font-display font-bold text-white">
                Coursework & Domain Proficiency
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Monochrome evaluation of core computer science subjects.
              </p>
            </div>

            <div className="space-y-5">
              {courses.map((course) => (
                <div key={course.name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-zinc-200">{course.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-zinc-400">{course.score}%</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 font-mono">
                        {course.status}
                      </span>
                    </div>
                  </div>

                  {/* Elegant Monochrome Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-zinc-900 overflow-hidden p-0.5 border border-zinc-800/60">
                    <div
                      className="h-full rounded-full bg-white transition-all duration-700 ease-out"
                      style={{ width: `${course.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
