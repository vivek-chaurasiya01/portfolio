'use client';
import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './common/TechIcons';
import { toast } from 'react-toastify';

const projects = [
  {
    id: 1,
    title: "HRMS / ERP System",
    description: "Enterprise Human Resource & ERP portal managing staff attendance, payroll calculations, leave workflows, and role-based permissions.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://example.com/hrms",
    github: "https://github.com",
    tag: "Enterprise ERP"
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: "Healthcare operations platform facilitating doctor appointments, inpatient records, pharmacy billing, and medical reports generation.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap"],
    liveDemo: "https://example.com/hospital",
    github: "https://github.com",
    tag: "Healthcare Portal"
  },
  {
    id: 3,
    title: "Cab Booking System (KwikCabs)",
    description: "Real-time fleet telematics and ride-booking dispatch system with driver tracking, automated fare computation, and live ride dispatching.",
    techStack: ["React.js", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://example.com/kwikcabs",
    github: "https://github.com",
    tag: "Real-time Telematics"
  },
  {
    id: 4,
    title: "Business CRM",
    description: "High-throughput operational CRM dashboard featuring lead pipeline tracking, deal conversions, sales telemetry, and automated follow-up scheduling.",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://example.com/crm",
    github: "https://github.com",
    tag: "SaaS CRM"
  },
  {
    id: 5,
    title: "AI Book Generator",
    description: "Intelligent web platform leveraging generative AI models to outline, draft, format, and export custom eBooks and research documentation.",
    techStack: ["React.js", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://example.com/aibook",
    github: "https://github.com",
    tag: "AI / GenAI App"
  },
  {
    id: 6,
    title: "Donation Management System",
    description: "Transparent charity and NGO donation portal featuring secure payment gateways, campaign goal trackers, and automated donor tax receipts.",
    techStack: ["React.js", "Node.js", "Stripe API", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://example.com/donation",
    github: "https://github.com",
    tag: "FinTech / NGO"
  }
];

const RecentWorkSection = () => {
  const handleLiveDemo = (title, url) => {
    toast.success(`Opening Live Demo for ${title} 🚀`);
  };

  const handleGithub = (title, url) => {
    toast.info(`Opening GitHub Repository for ${title} 💻`);
  };

  return (
    <section id="projects" className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16 bg-white border-t border-gray-100">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
            Featured Projects
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-2">
            Featured <span className="text-emerald-600">Projects</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Production applications engineered with clean code architecture, live deployment links, and accessible source code repositories.
          </p>
        </div>

        {/* 6 Projects Grid - Flat Sharp */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="border border-gray-200 hover:border-emerald-600 bg-white p-6 flex flex-col justify-between transition-all rounded-none shadow-none group"
            >
              <div>
                {/* Tag & ID */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-none shadow-none">
                    {proj.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-400">
                    0{proj.id} / 06
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-gray-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-gray-50 border border-gray-200 text-[11px] font-mono font-bold text-gray-700 rounded-none shadow-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live Demo + GitHub */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleLiveDemo(proj.title, proj.liveDemo)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 border border-emerald-700 rounded-none shadow-none transition-all cursor-pointer"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleGithub(proj.title, proj.github)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-gray-800 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-700 border border-gray-200 rounded-none shadow-none transition-all cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </button>
              </div>
            </div>
          ))}
        </div>

    </section>
  );
};

export default RecentWorkSection;
