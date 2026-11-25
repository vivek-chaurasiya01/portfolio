'use client';
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './common/TechIcons';
import { toast } from 'react-toastify';

const categories = ["All", "Website", "Software", "App"];

const projects = [
  {
    id: 1,
    title: "HRMS / ERP System",
    description: "Enterprise Human Resource & ERP portal managing staff attendance, payroll calculations, leave workflows, and role-based permissions.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://example.com/hrms",
    github: "https://github.com",
    tag: "Enterprise ERP",
    category: "Software",
    image: "/projects/hrms.jpg"
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: "Healthcare operations platform facilitating doctor appointments, inpatient records, pharmacy billing, and medical reports generation.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap"],
    liveDemo: "https://example.com/hospital",
    github: "https://github.com",
    tag: "Healthcare Portal",
    category: "Software",
    image: "/projects/hospital.jpg"
  },
  {
    id: 3,
    title: "Cab Booking System (KwikCabs)",
    description: "Real-time fleet telematics and ride-booking dispatch system with driver tracking, automated fare computation, and live ride dispatching.",
    techStack: ["Flutter", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://example.com/kwikcabs",
    github: "https://github.com",
    tag: "Real-time App",
    category: "App",
    image: "/projects/kwikcabs.jpg"
  },
  {
    id: 4,
    title: "Business CRM",
    description: "High-throughput operational CRM dashboard featuring lead pipeline tracking, deal conversions, sales telemetry, and automated follow-up scheduling.",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://example.com/crm",
    github: "https://github.com",
    tag: "SaaS CRM",
    category: "Software",
    image: "/projects/crm.jpg"
  },
  {
    id: 5,
    title: "AI Book Generator",
    description: "Intelligent web platform leveraging generative AI models to outline, draft, format, and export custom eBooks and research documentation.",
    techStack: ["React.js", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://example.com/aibook",
    github: "https://github.com",
    tag: "AI Web Platform",
    category: "Website",
    image: "/projects/aibook.jpg"
  },
  {
    id: 6,
    title: "Donation Management System",
    description: "Transparent charity and NGO donation portal featuring secure payment gateways, campaign goal trackers, and automated donor tax receipts.",
    techStack: ["React.js", "Node.js", "Stripe API", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://example.com/donation",
    github: "https://github.com",
    tag: "FinTech / NGO",
    category: "Website",
    image: "/projects/donation_mgmt.jpg"
  }
];

const RecentWorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((proj) => proj.category === activeCategory);

  const handleLiveDemo = (title) => {
    toast.success(`Opening Live Demo for ${title} 🚀`);
  };

  const handleGithub = (title) => {
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

        {/* Filter Tabs: All, Website, Software, App */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-md text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                activeCategory === cat
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:border-emerald-400 hover:text-emerald-700 hover:bg-white shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-lg border border-gray-200 hover:border-emerald-400 bg-white overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-[0_8px_25px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_36px_rgba(5,150,105,0.16)] hover:-translate-y-1"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100 border-b border-gray-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-white/95 text-emerald-700 border border-emerald-200 shadow-sm">
                    {proj.category}
                  </span>
                </div>

                <div className="p-6 pb-0">
                  {/* Tag & ID */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {proj.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-gray-400">
                      0{proj.id} / 06
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-emerald-700 transition-colors mb-2 font-['Roboto',sans-serif]">
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
                        className="px-2.5 py-0.5 rounded bg-gray-50 border border-gray-200 text-[11px] font-mono font-bold text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Live Demo + GitHub */}
              <div className="grid grid-cols-2 gap-2.5 p-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleLiveDemo(proj.title)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleGithub(proj.title)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded text-xs font-bold text-gray-800 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-700 border border-gray-200 transition-all cursor-pointer shadow-sm"
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
