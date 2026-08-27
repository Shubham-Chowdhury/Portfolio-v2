import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "laptop.sc.me@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Monochromatic Banner */}
        <div className="p-8 sm:p-14 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden text-center space-y-8">
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            Get In Touch
          </div>

          {/* Large CTA Heading */}
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Let's Build Something <br />
            <span className="text-zinc-400">Meaningful.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            I am always open to discussing software engineering opportunities, computer science fundamentals, 
            AI/ML projects, or technical collaborations.
          </p>

          {/* Quick Copy Email Box */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
            <div className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="truncate">{email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-white transition-colors focus:outline-none ml-2 shrink-0"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-black bg-white hover:bg-zinc-200 transition-all rounded-xl shadow-lg active:scale-95"
            >
              Send Email
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social Media Links */}
          <div className="pt-8 border-t border-zinc-900 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors font-medium"
            >
              <Mail className="w-4 h-4 text-zinc-500" />
              Email
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors font-medium"
            >
              <SiGithub className="w-4 h-4 text-zinc-500" />
              GitHub Profile
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors font-medium"
            >
              <FaLinkedin className="w-4 h-4 text-zinc-500" />
              LinkedIn Profile
            </a>
          </div>

        </div>

        {/* Minimal Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <div>
            © {new Date().getFullYear()} Shubham Chowdhury. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-zinc-500">
            Pure Monochrome Dark Design • WebGL Liquid Glass Engine
          </div>
        </div>

      </div>
    </section>
  );
};

