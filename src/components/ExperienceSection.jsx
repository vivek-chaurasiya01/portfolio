'use client';
import React from 'react';
import { Calendar, CheckCircle2, ExternalLink, MapPin, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const responsibilities = [
    "Architecting and developing full-stack client web portals and administrative dashboards using React.js, Next.js, Node.js, Express.js, and MongoDB.",
    "Designing and integrating secure RESTful APIs, JWT role-based authentication, and third-party payment & messaging gateways.",
    "Optimizing complex MongoDB aggregation pipelines and database schemas for fast, reliable retrieval under production load.",
    "Collaborating closely with UI/UX designers, QA teams, and clients to ship scalable web & Flutter solutions on tight sprint schedules.",
    "Implementing responsive, cross-browser user interfaces using Tailwind CSS and modular, reusable component architecture.",
    "Managing production deployments, environment configurations, Git workflows, and Core Web Vitals optimization."
  ];

  const techStack = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Nest.js",
    "MongoDB",
    "Flutter",
    "Tailwind CSS",
    "REST APIs",
    "Git"
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20 bg-white border-t border-gray-100"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
        <span className="inline-block text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
          Work Experience
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-tight mb-3">
          Work <span className="text-emerald-600">Experience</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Hands-on professional engineering journey delivering production applications for real-world clients.
        </p>
      </div>

      {/* Modern Company Experience Card */}
      <div className="rounded-xl border border-gray-200/80 bg-white shadow-[0_6px_24px_rgba(15,23,42,0.06)] hover:border-emerald-400 hover:shadow-[0_12px_32px_rgba(5,150,105,0.12)] overflow-hidden transition-all duration-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left: Company Image & Brand Card */}
          <div className="lg:col-span-4 relative bg-gray-100 min-h-[260px] lg:min-h-full overflow-hidden group flex flex-col justify-between">
            <img
              src="/digicoders-company.jpg"
              alt="DigiCoders Technologies Private Limited, Lucknow"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/20 to-transparent" />

            {/* Top Location Tag */}
            <div className="relative z-10 p-4 flex justify-between items-start">
              <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md border border-gray-200 flex items-center gap-1.5 text-xs font-semibold text-gray-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Lucknow, UP</span>
              </div>
            </div>

            {/* Bottom Company Overlay Info */}
            <div className="relative z-10 p-5 text-white">
              <div className="inline-block bg-white px-3 py-1.5 rounded-md mb-3">
                <img
                  src="/digicoders-logo.png"
                  alt="DigiCoders Technologies Logo"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="text-sm font-bold text-white">
                DigiCoders Technologies Pvt. Ltd.
              </div>
              <div className="text-xs text-emerald-300 font-mono mt-0.5">
                Software &amp; App Development Company
              </div>
            </div>
          </div>

          {/* Right: Role, Responsibilities & Tech Stack */}
          <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Top Title & Duration Row */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 mb-5 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2 text-emerald-700 font-mono font-bold text-xs uppercase tracking-wider mb-1.5">
                    <Briefcase className="w-4 h-4" />
                    <span>Full-Time Software Engineer</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1.5">
                    MERN Stack Developer
                  </h3>
                  <a
                    href="https://digicoders.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-emerald-700 hover:text-emerald-800 hover:underline underline-offset-4 group/link"
                  >
                    <span>DigiCoders Technologies Private Limited</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-emerald-600 text-white font-mono font-bold text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>1.5+ Years Experience</span>
                </span>
              </div>

              {/* Responsibilities Grid */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-3.5">
                  Key Responsibilities &amp; Achievements
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-lg bg-white border border-gray-100 shadow-xs hover:border-emerald-200 hover:shadow-sm transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Tech Stack & Visit Website */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-gray-500 mr-1">
                  Stack:
                </span>
                {techStack.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs font-mono font-semibold text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://digicoders.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 hover:border-emerald-600 text-xs font-bold transition-colors shrink-0"
              >
                <span>Visit Company Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
