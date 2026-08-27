import React from 'react';
import { Terminal } from 'lucide-react';

const dsaTopics = [
  {
    topic: 'C++ Fundamentals & STL',
    status: 'Mastered',
    desc: 'Vectors, Maps, Sets, Iterators, Custom Comparators, Fast I/O, Pointers & Memory Management.',
    level: 95,
  },
  {
    topic: 'Arrays, Strings & Two Pointers',
    status: 'Mastered',
    desc: 'Sliding Window, Prefix Sums, Binary Search, Kadane Algorithm, Sorting & Searching techniques.',
    level: 92,
  },
  {
    topic: 'Linked Lists & Stacks / Queues',
    status: 'Mastered',
    desc: 'Singly/Doubly Linked Lists, Fast & Slow Pointers, Monotonic Stack, Queue Operations.',
    level: 90,
  },
  {
    topic: 'Recursion & Backtracking',
    status: 'Advanced',
    desc: 'Subsets, Permutations, N-Queens, Sudoku Solver, Combination Sum & State Space Trees.',
    level: 88,
  },
  {
    topic: 'Trees & Binary Search Trees',
    status: 'Advanced',
    desc: 'Traversals (DFS/BFS), LCA, BST Operations, Tree DP, Height & Diameter optimizations.',
    level: 85,
  },
  {
    topic: 'Graphs & Shortest Paths',
    status: 'Proficient',
    desc: 'BFS, DFS, Dijkstra, Bellman-Ford, Topological Sort, Disjoint Set Union (DSU), Kruskal.',
    level: 82,
  },
  {
    topic: 'Dynamic Programming',
    status: 'Proficient',
    desc: '1D & 2D Memoization, Tabulation, Knapsack variations, LCS, LIS, Matrix Chain Multiplication.',
    level: 80,
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
                Algorithmic Foundations
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Systematic mastery of computational efficiency, time & space complexities, and core Data Structures in modern C++.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Primary Language</span>
                <span className="font-mono font-bold text-white">C++17 / C++20</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Problem Solving Methodology</span>
                <span className="font-mono font-bold text-white">First Principles</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Target Complexity</span>
                <span className="font-mono font-bold text-white">O(N log N) / O(N)</span>
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
                    <span className="font-mono font-semibold text-zinc-400">
                      {item.level}%
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed pl-9">
                  {item.desc}
                </p>

                {/* Progress Bar */}
                <div className="pl-9">
                  <div className="w-full h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                    <div
                      className="h-full bg-zinc-200 rounded-full"
                      style={{ width: `${item.level}%` }}
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
