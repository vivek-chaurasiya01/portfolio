'use client';
import React from 'react';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './common/TechIcons';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  const scrollToSection = (e, targetId) => {
    if (e) e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Technical Skills', id: 'skills' },
    { name: 'Work Experience', id: 'experience' },
    { name: 'Featured Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Services', id: 'services' },
    { name: 'Statistics', id: 'statistics' },
    { name: 'Contact Me', id: 'contact' },
  ];

  const instagramUrl =
    'https://www.instagram.com/vivek_chaurasiya2332?utm_source=ig_web_button_share_sheet&knvt=ZDNlZDc0MzIxNw==';
  const linkedinUrl = 'https://www.linkedin.com/in/vivek-chaurasiya-84919029b';
  const whatsappUrl = 'https://wa.me/917068767516';
  const phoneHref = 'tel:+917068767516';

  return (
    <footer className="relative z-10 bg-gray-50/50 border-t border-gray-200 text-gray-700 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-8">
        
        {/* Main 3-Column Modern Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-gray-200">
          
          {/* Column 1: Brand Logo, Bio & Social Links */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Vivek Chaurasiya"
                className="h-14 sm:h-16 w-auto max-w-[260px] object-contain select-none"
              />
            </div>

            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              Full Stack <strong className="text-gray-900">MERN &amp; Flutter Developer</strong> crafting scalable web portals, backend APIs, and cross-platform mobile apps with clean code and modern UI/UX.
            </p>

            {/* Social Media Links */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition-all"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-emerald-600 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all"
                aria-label="WhatsApp"
                title="WhatsApp (+91 7068767516)"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-rose-600 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>

              <a
                href="mailto:vivekchaurasiya.dev@gmail.com"
                className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-xs sm:text-sm font-medium text-gray-600 hover:text-emerald-600 text-left transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Direct Connect (Call Now & WhatsApp) + Location */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider">
              Direct Connect
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
              <a
                href="mailto:vivekchaurasiya.dev@gmail.com"
                className="flex items-center gap-2.5 hover:text-emerald-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>vivekchaurasiya.dev@gmail.com</span>
              </a>
            </div>

            {/* Call Now & WhatsApp Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={phoneHref}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono font-bold uppercase text-gray-400">Call Now</div>
                  <div className="text-xs font-bold text-gray-900 truncate">+91 7068767516</div>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-gray-200 hover:border-[#25D366] hover:bg-emerald-50/50 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono font-bold uppercase text-gray-400">WhatsApp</div>
                  <div className="text-xs font-bold text-gray-900 truncate">+91 7068767516</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Sub-Footer: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-gray-900 font-bold">Vivek Chaurasiya</strong> • All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-emerald-500 hover:text-emerald-700 bg-white text-gray-800 font-bold transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-600" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
