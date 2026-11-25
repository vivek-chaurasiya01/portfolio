'use client';
import React from 'react';
import { Award, BadgeCheck, Calendar, ShieldCheck, Trophy, Rocket, Zap, Server, Layers } from 'lucide-react';

const certifications = [
  {
    title: "Full Stack MERN Development Certification",
    issuer: "DigiCoders Technologies Pvt. Ltd.",
    date: "2025",
    type: "Training Certificate",
    description:
      "Intensive 6-month hands-on training mastering MongoDB, Express.js, React.js, Node.js, REST APIs, and production deployment."
  },
  {
    title: "Cross-Platform Mobile App Development (Flutter)",
    issuer: "Technical Skill Credential",
    date: "2025",
    type: "Mobile Engineering",
    description:
      "Built responsive Android & iOS applications using Flutter & Dart with clean state management and REST API integration."
  },
  {
    title: "Advanced JavaScript, React.js & Next.js Mastery",
    issuer: "Online Technical Certification",
    date: "2024",
    type: "Frontend Certification",
    description:
      "Deep dive into modern ES6+, asynchronous paradigms, custom hooks, server-side rendering, and Core Web Vitals optimization."
  },
  {
    title: "Node.js, Nest.js & Backend Architecture",
    issuer: "Developer Credential",
    date: "2025",
    type: "Backend Certification",
    description:
      "Server-side microservices, modular API design, JWT authentication, and high-concurrency MongoDB & MySQL integration."
  }
];

const achievements = [
  {
    title: "20+ Commercial Web & App Projects Delivered",
    metric: "20+ Shipped",
    icon: Rocket,
    desc: "Successfully engineered and delivered production portals across HRMS/ERP, Healthcare, Cab Booking, CRM, and FinTech domains."
  },
  {
    title: "1.5+ Years Continuous Production Delivery",
    metric: "99.8% On-Time",
    icon: BadgeCheck,
    desc: "Maintained consistent sprint delivery and feature ownership across active client deployments at DigiCoders Technologies."
  },
  {
    title: "Optimized Database Queries by 65%",
    metric: "65% Faster",
    icon: Zap,
    desc: "Refactored MongoDB schemas and applied compound indexing & aggregation pipelines to keep API latency under 120ms."
  },
  {
    title: "Reusable Component & API Boilerplates",
    metric: "Team Impact",
    icon: Layers,
    desc: "Built modular React UI kits and scalable Node.js/Express backend templates adopted across multiple engineering projects."
  }
];

const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20 bg-white border-t border-gray-100"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
        <span className="inline-block text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
          Certifications &amp; Achievements
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-tight mb-3">
          Certifications &amp; <span className="text-emerald-600">Achievements</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Recognized technical milestones, validated skill credentials, and measurable engineering impact.
        </p>
      </div>

      {/* 2-Column Modern Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Column: Technical Certifications */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                Technical Certifications &amp; Training
              </h3>
              <p className="text-xs text-gray-500 font-mono">Verified Credentials</p>
            </div>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-emerald-400 transition-all duration-200 shadow-[0_4px_18px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_28px_rgba(5,150,105,0.12)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {cert.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-gray-500">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    {cert.date}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">
                  {cert.title}
                </h4>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 mb-2.5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Professional Achievements */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                Professional Achievements &amp; Impact
              </h3>
              <p className="text-xs text-gray-500 font-mono">Production Milestones</p>
            </div>
          </div>

          <div className="space-y-4">
            {achievements.map((ach, idx) => {
              const Icon = ach.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-xl border border-gray-200 bg-white hover:border-emerald-400 transition-all duration-200 flex items-start gap-4 shadow-[0_4px_18px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_28px_rgba(5,150,105,0.12)]"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-base font-bold text-gray-900">
                        {ach.title}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-600 text-white font-mono text-[11px] font-bold shrink-0">
                        {ach.metric}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
