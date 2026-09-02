import React, { useState } from 'react';
import { Award, Trophy, Star, Zap, ExternalLink, X, Image as ImageIcon, Sparkles, Terminal, Code2 } from 'lucide-react';
import { SiGeeksforgeeks, SiHackerrank, SiGithub } from 'react-icons/si';

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  desc: string;
}

const certifications: CertificateItem[] = [
  {
    id: 'codextreme-c',
    title: 'CodeXtreme 4.0 – C Programming',
    issuer: 'iamneo / LPU',
    date: 'April 2, 2026',
    image: '/certificates/codextreme-c.png',
    desc: 'Certificate of Appreciation for securing Top 30 Position in CodeXtreme 4.0 – C Programming event held at Lovely Professional University.',
  },
  {
    id: 'gfg-cpp',
    title: 'C++ Programming Course - Self Paced',
    issuer: 'GeeksforGeeks',
    date: 'Course Completion',
    image: '/certificates/gfg-cpp.png',
    desc: 'Comprehensive self-paced certification covering C++ syntax, Object-Oriented Programming, and Standard Template Library (STL) fundamentals.',
  },
  {
    id: 'python-part-1',
    title: 'Programming Fundamentals using Python - Part 1',
    issuer: 'Infosys Springboard',
    date: 'June 29, 2026',
    image: '/certificates/python-part-1.png',
    desc: 'Verified foundational certification covering Python control flow, functions, modular programming, and procedural logic.',
  },
  {
    id: 'python-part-2',
    title: 'Programming Fundamentals using Python - Part 2',
    issuer: 'Infosys Springboard',
    date: 'July 11, 2026',
    image: '/certificates/python-part-2.png',
    desc: 'Advanced Python certification focusing on data structures, object-oriented principles, exception handling, and algorithm design.',
  },
];

const achievements = [
  {
    icon: Code2,
    title: 'Top 30 — CodeXtreme 4.0 (C Programming)',
    category: 'Coding Achievement',
    desc: 'Secured Top 30 Position in CodeXtreme 4.0 – C Programming event held at Lovely Professional University, organized by iamneo (Cert No: 18ch6Bi1C12c66CJ2BK1).',
    date: 'Apr 2026',
  },
  {
    icon: SiHackerrank,
    title: 'HackerRank Gold Badge',
    category: 'Coding Achievement',
    desc: 'Earned a Gold Badge on HackerRank for consistent, high-level programming practice and algorithmic problem solving.',
    date: 'Verified',
  },
  {
    icon: SiGithub,
    title: 'All GitHub Badges Unlocked',
    category: 'Developer Profile',
    desc: 'Active developer profile with all achievement badges unlocked on GitHub (github.com/Shubham-Chowdhury).',
    date: 'Profile Honor',
  },
  {
    icon: Sparkles,
    title: 'IIT Guwahati — Alcheringa',
    category: 'Recognition / Hackathon',
    desc: 'Achieved 5th runner-up at the IIT Guwahati Alcheringa Hackathon.',
    date: 'Hackathon Milestone',
  },
  {
    icon: Award,
    title: 'Strong Academic Performance (9.29 CGPA)',
    category: 'Academic Achievement',
    desc: 'Maintaining a 9.29 CGPA in B.Tech Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning at Lovely Professional University.',
    date: 'Aug 2025 - Present',
  },
];

export const Achievements: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="achievements" className="py-24 bg-black border-b border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <Trophy className="w-3.5 h-3.5 text-zinc-300" />
            Recognition & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Key Achievements & Certifications
          </h2>
        </div>

        {/* Part 1: Certifications Area */}
        <div className="mb-16 space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-zinc-400" />
              Verified Certifications
            </h3>
            <span className="text-xs font-mono text-zinc-500">
              {certifications.length} Official Certificates
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {/* Certificate Image Slot */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/11] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/80 cursor-pointer group/img"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-300 filter brightness-95"
                      onError={(e) => {
                        // Fallback UI if image missing
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-black/80 border border-zinc-700 text-xs font-mono text-white flex items-center gap-1.5 opacity-90 group-hover/img:opacity-100 transition-opacity">
                        <ImageIcon className="w-3.5 h-3.5" /> View Certificate
                      </span>
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs mb-1">
                      <span className="font-mono text-zinc-400 font-semibold">{cert.issuer}</span>
                      <span className="font-mono text-zinc-500 text-[11px]">{cert.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white font-display group-hover:text-zinc-200">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>

                {/* View Modal Trigger */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Full Document Preview
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Academic & Technical Achievements Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-display font-bold text-white flex items-center gap-2 border-b border-zinc-900 pb-4">
            <Trophy className="w-5 h-5 text-zinc-400" />
            Academic & Technical Milestones
          </h3>

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

      </div>

      {/* Certificate Dark Modal View */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  Issued by {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 overflow-auto flex-1 flex items-center justify-center bg-black">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[65vh] object-contain rounded-lg border border-zinc-800 shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-zinc-900 bg-zinc-950 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Verified Certificate Document</span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-lg bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

