import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
  download?: string;
  isDownload?: boolean;
}

const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Tech Stack', href: '#techstack' },
  { name: 'DSA Journey', href: '#dsajourney' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'CV', href: '/Shubham-Chowdhury-CV.pdf', download: 'Shubham-Chowdhury-CV.pdf', isDownload: true },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCentralNav, setShowCentralNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Dynamic Hero Intersection Observer (no fixed scrollY thresholds)
    const heroElement = document.querySelector('main > section:first-child') || document.querySelector('section');
    if (!heroElement) {
      setShowCentralNav(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero is fully visible at top of page (> 85% visible), hide central nav
        // When hero begins leaving viewport, smoothly reveal central nav
        if (entry.isIntersecting && entry.intersectionRatio > 0.85) {
          setShowCentralNav(false);
        } else {
          setShowCentralNav(true);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 0.85, 1.0],
      }
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800/60 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Shubham Chowdhury Portfolio Home"
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-display font-bold text-white tracking-tighter group-hover:border-white transition-colors">
              SC
            </div>
            <span className="font-display font-semibold text-white tracking-tight text-lg hidden sm:inline-block">
              Shubham <span className="text-zinc-500 font-normal">Chowdhury</span>
            </span>
          </a>

          {/* Central Navigation Menu with Smooth Fade & Slide Transition */}
          <nav
            className={`hidden md:flex items-center space-x-1 lg:space-x-2 bg-zinc-950/70 border border-zinc-800/80 px-4 py-1.5 rounded-full backdrop-blur-md transition-all duration-300 ease-out transform ${
              showCentralNav
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-3 pointer-events-none'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                download={link.download}
                className="px-2.5 lg:px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-zinc-800/50 inline-flex items-center gap-1"
              >
                {link.name}
                {link.isDownload && <Download className="w-3 h-3 text-zinc-400" />}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all rounded-md shadow-sm active:scale-95"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 pt-4 pb-6 backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                download={link.download}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-md flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.isDownload && (
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    PDF <Download className="w-3 h-3" />
                  </span>
                )}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-black bg-white rounded-md text-center"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

