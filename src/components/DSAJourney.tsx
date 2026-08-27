import React from 'react';
import { Terminal } from 'lucide-react';

const dsaTopics = [
  {
    topic: 'C++ Fundamentals & STL',
    status: 'Practicing',
    desc: 'Vectors, Maps, Sets, Iterators, Custom Comparators, Fast I/O, Pointers & Memory Management.',
    stage: 'Core Stage 1',
    progress: 90,
  },
  {
    topic: 'Arrays, Strings & Two Pointers',
    status: 'Practicing',
    desc: 'Sliding Window, Prefix Sums, Binary Search, Kadane Algorithm, Sorting & Searching techniques.',
    stage: 'Core Stage 2',
    progress: 85,
  },
  {
    topic: 'Linked Lists & Stacks / Queues',
    status: 'Practicing',
    desc: 'Singly/Doubly Linked Lists, Fast & Slow Pointers, Monotonic Stack, Queue Operations.',
    stage: 'Core Stage 3',
    progress: 80,
  },
  {
    topic: 'Recursion & Backtracking',
    status: 'Learning',
    desc: 'Subsets, Permutations, N-Queens, Combination Sum & State Space Tree explorations.',
    stage: 'Core Stage 4',
    progress: 70,
  },
  {
    topic: 'Trees & Binary Search Trees',
    status: 'Learning',
    desc: 'Traversals (DFS/BFS), LCA, BST Operations, Tree DP, Height & Diameter algorithms.',
    stage: 'Core Stage 5',
    progress: 65,
  },
  {
    topic: 'Graphs & Shortest Paths',
    status: 'Exploring',
    desc: 'BFS, DFS, Dijkstra, Bellman-Ford, Topological Sort, Disjoint Set Union (DSU).',
    stage: 'Core Stage 6',
    progress: 55,
  },
  {
    topic: 'Dynamic Programming',
    status: 'Currently Studying',
    desc: '1D & 2D Memoization, Tabulation, Knapsack variations, LCS, LIS implementations.',
    stage: 'Core Stage 7',
    progress: 45,
  },
];

export const DSAJourney: React.FC = () => {
  return (
    <section id="dsajourney" className="py-24 bg-black border-b border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-zinc-300" />
            Problem Solving & Logic
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Data Structures & Algorithms Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Summary Card */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-mono text-xl font-bold">
              C++
            </div>

            <div>
              <h3 className="text-xl font-display font-bold text-white">
                Algorithmic Learning Roadmap
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Consistent learning and practice of computational thinking, algorithm design, and core Data Structures using C++.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Primary Language</span>
                <span className="font-mono font-bold text-white">C++ (Standard Library)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Learning Approach</span>
                <span className="font-mono font-bold text-white">First Principles & Practice</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Current Focus</span>
                <span className="font-mono font-bold text-white">Core DSA Topics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Topic Milestone Timeline & Progress */}
          <div className="lg:col-span-8 space-y-4">
            {dsaTopics.map((item, index) => (
              <div
                key={item.topic}
                className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-200 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-mono font-bold text-white">
                      0{index + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white font-display">
                      {item.topic}
                    </h4>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-[11px]">
                      {item.status}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-400">
                      {item.stage}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed pl-9">
                  {item.desc}
                </p>

                {/* Progress Bar reflecting learning progression */}
                <div className="pl-9">
                  <div className="w-full h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                    <div
                      className="h-full bg-zinc-200 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

