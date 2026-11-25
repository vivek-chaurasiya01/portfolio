'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Code2, Download, Mail, Briefcase, FolderGit2, Layers, Zap } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { GithubIcon, LinkedinIcon } from './common/TechIcons';
import { toast } from 'react-toastify';

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.from('.hero-left-anim > *', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
    });

    gsap.from('.hero-image-anim', {
      opacity: 0,
      scale: 0.98,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.1,
    });
  }, { scope: heroRef });

  const handleDownloadResume = () => {
    toast.success("Resume download initiated! 📄");
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-24 pb-10 sm:pb-14 lg:pb-16 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* LEFT COLUMN: Hero Typography, CTAs, Socials */}
        <div className="hero-left-anim lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-gray-900 tracking-[-0.015em] leading-[1.15] mb-3">
            Vivek <span className="text-emerald-600 font-extrabold">Chaurasiya</span>
          </h1>

          {/* Typing Subtitle */}
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 tracking-normal mb-5 flex items-center gap-2.5">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 stroke-[2.5] shrink-0" />
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Flutter Developer',
                2000,
                'Full Stack Engineer',
                2000,
                'React.js & Node.js Specialist',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="text-gray-800 font-semibold"
            />
          </div>

          {/* Bio Paragraph */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
            Passionate <strong className="text-gray-900 font-semibold">Full Stack &amp; Flutter Developer</strong> with 1.5+ years of production experience at <span className="text-emerald-700 font-bold">Digicoders Private Limited</span>. Crafting high-performance web &amp; mobile applications with <strong className="text-gray-900 font-semibold">React.js, Next.js, Node.js, Express.js, MongoDB, Flutter,</strong> and <strong className="text-gray-900 font-semibold">Tailwind CSS</strong>—backed by scalable REST APIs and clean, responsive UI.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-gray-900 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-gray-300 hover:border-emerald-600 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Bottom Strip: Socials + Quick Stats */}
          <div className="pt-6 border-t border-gray-100 w-full space-y-4">

            {/* Social Buttons Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest hidden sm:block">Connect</span>
              <a
                href="https://github.com/vivekchaurasiya"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold border border-gray-800 transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-chaurasiya-84919029b"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0a66c2] hover:bg-[#004182] text-white text-sm font-semibold border border-[#0a66c2] transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:vivekchaurasiya.dev@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-800 text-sm font-semibold border border-emerald-200 hover:border-emerald-600 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>
            </div>

            {/* Quick Stats Chips */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Work
              </div>
              <div className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700">
                🚀 1.5+ Yrs Experience
              </div>
              <div className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700">
                📦 20+ Projects
              </div>
              <div className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700">
                🛠 18+ Technologies
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: Profile Photo */}
        <div className="hero-image-anim lg:col-span-5 flex justify-center lg:justify-end">
          <div className="max-w-[420px] w-full">
            <img
              src="/563533e7-57db-4829-8fb4-cdb11255cb67.png"
              alt="Vivek Chaurasiya - MERN Stack & Flutter Developer"
              className="w-full h-auto object-cover object-center select-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;