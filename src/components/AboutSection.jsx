'use client';
import React from 'react';
import { Briefcase, MapPin, GraduationCap, Layers, Compass, Target, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    "Clean, Modular & Maintainable Architecture",
    "High-Performance Web & Flutter Mobile Apps",
    "Secure RESTful APIs & Database Optimization",
    "Agile Sprint Delivery & Production Deployment"
  ];

  const quickInfo = [
    {
      icon: Briefcase,
      label: "Experience",
      value: "1.5+ Yrs @ Digicoders Pvt. Ltd."
    },
    {
      icon: Layers,
      label: "Core Stack",
      value: "MERN Stack, Next.js & Flutter"
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.Tech (IT) – ITM Lucknow"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, India (Open Remote)"
    }
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20 bg-white border-t border-gray-100"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
        <span className="inline-block text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-tight mb-3">
          Passionate Engineer <span className="text-emerald-600">Behind the Code</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Full Stack MERN &amp; Flutter Developer focused on clean architecture, smooth UI/UX, and production-ready digital products.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* LEFT COLUMN: Custom Generated Illustration */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[460px] overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_36px_rgba(5,150,105,0.12)] transition-shadow duration-300">
            <img
              src="/about-illustration.jpg"
              alt="Vivek Chaurasiya - Full Stack & Flutter Architecture"
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Story, Goals, Quick Info */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Developer Journey */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <Compass className="w-4 h-4" />
              <span>Developer Journey</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              I&apos;m <strong className="text-gray-900 font-semibold">Vivek Chaurasiya</strong>, a <strong className="text-gray-900 font-semibold">MERN Stack &amp; Flutter Developer</strong> with <strong className="text-emerald-700 font-semibold">1.5+ years</strong> of experience at <strong className="text-gray-900 font-semibold">Digicoders Private Limited</strong>, building enterprise ERPs, CRMs, and mobile apps.
            </p>
          </div>

          {/* Career Goals */}
          <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-1.5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(5,150,105,0.08)] transition-all">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <Target className="w-4 h-4" />
              <span>Career Goal</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Engineering high-performance web and mobile systems with <strong className="text-gray-800">React, Next.js, Node.js, MongoDB &amp; Flutter</strong> that deliver real business value.
            </p>
          </div>

          {/* Quick Info 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {quickInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200/80 shadow-[0_4px_18px_rgba(15,23,42,0.06)] hover:border-emerald-300 hover:shadow-[0_10px_28px_rgba(5,150,105,0.12)] transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-500">{item.label}</div>
                    <div className="text-sm font-semibold text-gray-900 mt-0.5">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {highlights.map((text, idx) => (
              <div key={idx} className="flex items-center gap-2.5 py-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-sm font-medium text-gray-700">{text}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
