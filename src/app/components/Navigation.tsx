import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
const resumeUrl = '/Shamim_Mahbub_Resume_GenAI.pdf';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map((i) => document.querySelector(i.href))
      .filter((el): el is Element => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#070914]/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(34,211,238,0.25)]">
        <div className="flex items-center justify-between px-5 py-3">
          <button
            onClick={() => scrollToSection('#home')}
            className="font-tech font-bold text-lg tracking-tight text-white cursor-pointer"
            aria-label="Go to top"
          >
            <span className="text-gradient">SM</span>
            <span className="text-cyan-400">/</span>
            <span className="text-white/50 text-sm font-normal">ai</span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-white/10 border border-cyan-400/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              );
            })}
            <a
              href={resumeUrl}
              download
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg text-[#04060d] bg-gradient-to-r from-cyan-400 to-violet-500 hover:brightness-110 transition"
            >
              <Download size={15} />
              CV
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="p-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-3 py-2 rounded-lg ${
                      active === item.href ? 'bg-white/10 text-white' : 'text-white/70'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a href={resumeUrl} download className="px-3 py-2 text-cyan-400">
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
