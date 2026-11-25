'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Mail, 
  Code2, 
  GraduationCap, 
  FolderGit2, 
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './common/TechIcons';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Skills', id: 'skills', icon: Code2 },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Projects', id: 'projects', icon: FolderGit2 },
    { name: 'Education', id: 'education', icon: GraduationCap },
    { name: 'Services', id: 'services', icon: Sparkles },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  // Smooth scroll to section
  const scrollToSection = (e, targetId) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname !== '/') {
      router.push(`/#${targetId}`);
      return;
    }

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  // Scroll spy to update active section indicator
  useEffect(() => {
    if (pathname !== '/') return;

    const sections = ['contact', 'services', 'education', 'projects', 'experience', 'skills', 'about', 'home'];
    const handleScrollSpy = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 180;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLetsTalk = (e) => {
    if (e) e.preventDefault();
    scrollToSection(e, 'contact');
    toast.info("Connecting to Contact Section ✉️");
  };

  return (
    <header 
      className="fixed top-0 inset-x-0 z-50 w-full transition-all duration-200 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        
        {/* ========================================================================= */}
        {/* BRAND LOGO - /logo.png */}
        {/* ========================================================================= */}
        <button 
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center group cursor-pointer py-1 select-none text-left"
          aria-label="Vivek Chaurasiya Home"
        >
          <img 
            src="/logo.png" 
            alt="Vivek Chaurasiya - MERN Stack Developer" 
            className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto max-w-[240px] sm:max-w-[280px] md:max-w-[340px] object-contain select-none transition-transform group-hover:scale-105" 
          />
        </button>

        {/* ========================================================================= */}
        {/* DESKTOP NAVIGATION ITEMS */}
        {/* ========================================================================= */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id && pathname === '/';
            return (
              <button
                key={item.name}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`py-1 text-sm xl:text-base font-semibold transition-colors cursor-pointer select-none ${
                  isActive
                    ? 'text-emerald-600 font-extrabold'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* ========================================================================= */}
        {/* RIGHT ACTION BUTTONS */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-3">
          
          <button
            onClick={handleLetsTalk}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all cursor-pointer rounded-none shadow-none"
          >
            <span className="tracking-wide">Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center transition-all cursor-pointer ${
              mobileMenuOpen
                ? 'bg-emerald-600 text-white'
                : 'bg-transparent text-gray-900 hover:text-emerald-600'
            }`}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE DRAWER MENU */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 sm:top-24 z-40 bg-white overflow-y-auto flex flex-col justify-between p-6">
          
          <div className="flex flex-col gap-5">
            
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 flex items-center justify-between rounded-none shadow-none">
              <img 
                src="/logo.png" 
                alt="Vivek Chaurasiya" 
                className="h-12 sm:h-14 w-auto max-w-[220px] object-contain select-none" 
              />
              <span className="text-xs font-bold text-emerald-800 bg-white px-2 py-0.5 border border-emerald-300 rounded-none">
                Available
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id && pathname === '/';
                return (
                  <button
                    key={item.name}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`flex items-center gap-2.5 p-3 text-xs sm:text-sm font-bold transition-all rounded-none shadow-none text-left ${
                      isActive
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-50 text-gray-800 hover:bg-emerald-50 hover:text-emerald-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleLetsTalk}
              className="w-full py-3.5 font-bold text-white bg-emerald-600 hover:bg-emerald-700 border border-emerald-700 flex items-center justify-center gap-2 text-sm rounded-none shadow-none cursor-pointer"
            >
              <span>Let's Discuss Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          <div className="pt-4 mt-6 border-t border-gray-200 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-700 hover:text-emerald-600 hover:border-emerald-600 rounded-none shadow-none"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-chaurasiya-84919029b"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-700 hover:text-[#0a66c2] hover:border-[#0a66c2] rounded-none shadow-none"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-gray-500 text-center font-mono">
              © {new Date().getFullYear()} Vivek Chaurasiya • All rights reserved.
            </p>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;
