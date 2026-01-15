
import React, { useState, useEffect } from 'react';
import { Command, Ghost, Lock, Code2, ListTree, Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'adversaries' | 'api-docs' | 'sources') => void;
  currentView: 'home' | 'adversaries' | 'api-docs' | 'sources';
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Logo = () => {
  const [error, setError] = useState(false);

  return (
    <div className="w-10 h-10 relative flex items-center justify-center rounded-xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a]">
      {!error ? (
        <img 
          src="https://try.orionintelligence.org/api/s/static/system/logo_url_default.png" 
          alt="Orion Logo" 
          className="w-full h-full object-cover scale-105"
          onError={() => setError(true)}
        />
      ) : (
        <div className="text-blue-600 dark:text-blue-500 font-black text-xl tracking-tighter">O</div>
      )}
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView, theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = (open: boolean) => {
    if (open) {
      setIsAnimating(true);
      setIsMenuOpen(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  const handleNavigate = (view: 'home' | 'adversaries' | 'api-docs' | 'sources') => {
    onNavigate(view);
    toggleMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-[60] border-b border-slate-200 dark:border-white/5 bg-white/40 dark:bg-black/40 backdrop-blur-xl transition-colors duration-300">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div 
              className="flex items-center gap-4 group cursor-pointer" 
              onClick={() => handleNavigate('home')}
            >
              <div className="relative group-hover:scale-110 transition-transform duration-500">
                 <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <Logo />
              </div>
              <span className="text-xl font-black tracking-[0.4em] text-slate-900 dark:text-white uppercase leading-none">
                Orion
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <button 
                onClick={() => handleNavigate('home')} 
                className={`${currentView === 'home' ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-white/40'} hover:text-blue-600 dark:hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest`}
              >
                Intelligence OS
              </button>
              <button 
                onClick={() => handleNavigate('adversaries')} 
                className={`${currentView === 'adversaries' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-white/40'} hover:text-blue-600 dark:hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest flex items-center gap-2`}
              >
                <Ghost className="w-3 h-3" />
                Adversaries
              </button>
              <button 
                onClick={() => handleNavigate('sources')} 
                className={`${currentView === 'sources' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-white/40'} hover:text-blue-600 dark:hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest flex items-center gap-2`}
              >
                <ListTree className="w-3 h-3" />
                Sources
              </button>
              <button 
                onClick={() => handleNavigate('api-docs')} 
                className={`${currentView === 'api-docs' ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-white/40'} hover:text-blue-600 dark:hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest flex items-center gap-2`}
              >
                <Code2 className="w-3 h-3" />
                API Docs
              </button>
              
              <div className="h-4 w-px bg-slate-200 dark:bg-white/10"></div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={onToggleTheme}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60 hover:text-blue-600 dark:hover:text-white transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </button>
                <a 
                  href="https://calendly.com/msmannan/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-blue-50 transition-all rounded-xl shadow-lg shadow-black/5 dark:shadow-white/5 active:scale-95"
                >
                  <Command className="w-3 h-3" />
                  Get Access
                </a>
                <a 
                  href="https://try.orionintelligence.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-[10px] font-bold uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-white/10 transition-all rounded-xl border-slate-300 dark:hover:border-white/20 active:scale-95"
                >
                  <Lock className="w-3 h-3 text-blue-600 dark:text-blue-500" />
                  Login
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
               <button 
                onClick={onToggleTheme}
                className="p-2 text-slate-400 dark:text-white/60 hover:text-blue-600 dark:hover:text-white transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <button 
                className="p-2 text-slate-400 dark:text-white/60 hover:text-blue-600 dark:hover:text-white transition-colors"
                onClick={() => toggleMenu(true)}
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className={`md:hidden fixed inset-0 w-full h-full bg-white dark:bg-[#050505] z-[9999] transition-all duration-300 ease-in-out ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className={`flex flex-col h-full w-full transition-transform duration-300 ease-out ${
              isAnimating ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Menu Header - Exactly synced with Main Navbar for Y-Position and letter spacing */}
            <div className="flex items-center justify-between h-20 px-6 border-b border-slate-100 dark:border-white/5 shrink-0">
              <div 
                className="flex items-center gap-4 group cursor-pointer" 
                onClick={() => handleNavigate('home')}
              >
                <div className="relative">
                  <Logo />
                </div>
                <span className="text-xl font-black tracking-[0.4em] text-slate-900 dark:text-white uppercase leading-none">
                  Orion
                </span>
              </div>
              <button 
                className="p-2 text-slate-400 dark:text-white/60 hover:text-blue-600 dark:hover:text-white transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-white/5"
                onClick={() => toggleMenu(false)}
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-8 flex-1 justify-center pb-12 px-6">
              <button 
                onClick={() => handleNavigate('home')} 
                className={`text-center text-[12px] font-bold uppercase tracking-[0.25em] ${currentView === 'home' ? 'text-slate-900 dark:text-white' : 'text-slate-300 dark:text-white/30'}`}
              >
                Intelligence OS
              </button>
              <button 
                onClick={() => handleNavigate('adversaries')} 
                className={`text-center text-[12px] font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-4 ${currentView === 'adversaries' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-300 dark:text-white/30'}`}
              >
                <Ghost className="w-5 h-5" />
                Adversaries
              </button>
              <button 
                onClick={() => handleNavigate('sources')} 
                className={`text-center text-[12px] font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-4 ${currentView === 'sources' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-300 dark:text-white/30'}`}
              >
                <ListTree className="w-5 h-5" />
                Sources
              </button>
              <button 
                onClick={() => handleNavigate('api-docs')} 
                className={`text-center text-[12px] font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-4 ${currentView === 'api-docs' ? 'text-slate-900 dark:text-white' : 'text-slate-300 dark:text-white/30'}`}
              >
                <Code2 className="w-5 h-5" />
                API Docs
              </button>
              
              <div className="h-px w-16 bg-slate-100 dark:bg-white/5 mx-auto my-4"></div>
              
              <div className="flex flex-col gap-4 px-4">
                <a 
                  href="https://calendly.com/msmannan/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-black text-[11px] font-bold uppercase tracking-widest rounded-xl shadow-xl active:scale-95"
                >
                  <Command className="w-4 h-4" />
                  Get Access
                </a>
                <a 
                  href="https://try.orionintelligence.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 px-6 py-4 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-[11px] font-bold uppercase tracking-widest rounded-xl active:scale-95"
                >
                  <Lock className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                  Login
                </a>
              </div>
            </div>
            
            {/* Menu Footer */}
            <div className="py-8 px-6 border-t border-slate-100 dark:border-white/5 text-center shrink-0">
               <span className="text-[9px] font-bold text-slate-300 dark:text-white/10 uppercase tracking-[0.3em]">
                 Orion Intelligence Grid // Node: Mobile-V4
               </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
