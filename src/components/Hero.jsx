'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Code2, Download, Mail, Phone } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { GithubIcon, LinkedinIcon } from './common/TechIcons';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa6';
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
    const link = document.createElement('a');
    link.href = '/Vievk_Resume (4).pdf';
    link.download = 'Vivek_Chaurasiya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <div className="flex flex-row items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={handleDownloadResume}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap rounded-lg shadow-sm"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={scrollToContact}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-gray-900 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-gray-300 hover:border-emerald-600 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap rounded-lg shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Bottom Strip: Socials Icons */}
          <div className="pt-6 border-t border-gray-100 w-full">

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/917068767516"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp (+91 7068767516)"
                className="w-10 h-10 rounded-full bg-emerald-50 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-emerald-200 hover:border-[#25D366] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vivek_chaurasiya2332?utm_source=ig_web_button_share_sheet&knvt=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram (@vivek_chaurasiya2332)"
                className="w-10 h-10 rounded-full bg-pink-50 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-[#e1306c] hover:text-white border border-pink-200 hover:border-transparent flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              {/* Call Now */}
              <a
                href="tel:+917068767516"
                aria-label="Call Now"
                title="Call Now (+91 7068767516)"
                className="w-10 h-10 rounded-full bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 hover:border-emerald-600 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vivek-chaurasiya-84919029b"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-sky-50 hover:bg-[#0a66c2] text-[#0a66c2] hover:text-white border border-sky-200 hover:border-[#0a66c2] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/vivek-chaurasiya01"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub Profile"
                className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-900 text-gray-800 hover:text-white border border-gray-200 hover:border-gray-900 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: Profile Photo */}
        <div className="hero-image-anim lg:col-span-5 flex justify-center lg:justify-end">
          <div className="max-w-[420px] w-full">
            <img
              src="/image copy 8.png"
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