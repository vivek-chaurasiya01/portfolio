'use client';
import React from 'react';
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFlutter,
  SiDart,
  SiSocketdotio,
  SiMysql,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa6';
import { TbApi } from 'react-icons/tb';
import { toast } from 'react-toastify';

const skillsList = [
  {
    name: "React.js",
    category: "Frontend",
    icon: SiReact,
    color: "#087EA4",
    bg: "bg-sky-50",
  },
  {
    name: "Next.js",
    category: "Full Stack",
    icon: SiNextdotjs,
    color: "#0F172A",
    bg: "bg-slate-100",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
    color: "#339933",
    bg: "bg-emerald-50",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    color: "#0F172A",
    bg: "bg-gray-100",
  },
  {
    name: "Nest.js",
    category: "Backend",
    icon: SiNestjs,
    color: "#E0234E",
    bg: "bg-rose-50",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    color: "#47A248",
    bg: "bg-green-50",
  },
  {
    name: "Flutter",
    category: "Mobile App",
    icon: SiFlutter,
    color: "#02569B",
    bg: "bg-blue-50",
  },
  {
    name: "Dart",
    category: "Mobile Lang",
    icon: SiDart,
    color: "#0175C2",
    bg: "bg-sky-50",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: SiJavascript,
    color: "#CA8A04",
    bg: "bg-yellow-50",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: SiTailwindcss,
    color: "#06B6D4",
    bg: "bg-cyan-50",
  },
  {
    name: "HTML5",
    category: "Markup",
    icon: SiHtml5,
    color: "#E34F26",
    bg: "bg-orange-50",
  },
  {
    name: "CSS3",
    category: "Styling",
    icon: FaCss3Alt,
    color: "#1572B6",
    bg: "bg-blue-50",
  },
  {
    name: "Bootstrap",
    category: "UI Framework",
    icon: SiBootstrap,
    color: "#7952B3",
    bg: "bg-purple-50",
  },
  {
    name: "REST APIs",
    category: "Architecture",
    icon: TbApi,
    color: "#059669",
    bg: "bg-emerald-50",
  },
  {
    name: "Socket.io",
    category: "Real-Time",
    icon: SiSocketdotio,
    color: "#0F172A",
    bg: "bg-slate-100",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
    color: "#4479A1",
    bg: "bg-sky-50",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: SiGit,
    color: "#F05032",
    bg: "bg-red-50",
  },
  {
    name: "GitHub",
    category: "Collaboration",
    icon: SiGithub,
    color: "#181717",
    bg: "bg-gray-100",
  },
];

const SkillsSection = () => {
  const handleSkillClick = (skill) => {
    toast.info(`${skill.name} • ${skill.category} ⚡`);
  };

  return (
    <section
      id="skills"
      className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20 bg-white border-t border-gray-100"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
        <span className="inline-block text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
          Technical Skills
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-tight mb-3">
          Technologies &amp; <span className="text-emerald-600">Tools</span> I Work With
        </h2>
        <p className="text-gray-600 text-base">
          Every core technology I use to architect scalable web portals, backend APIs, and cross-platform mobile applications.
        </p>
      </div>

      {/* Individual Skill Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {skillsList.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSkillClick(skill)}
              className="group p-5 rounded-md border border-gray-100 bg-white shadow-[0_4px_18px_rgba(15,23,42,0.06)] hover:border-emerald-400 hover:shadow-[0_10px_28px_rgba(5,150,105,0.15)] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded ${skill.bg} shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}
              >
                <Icon className="w-6 h-6" style={{ color: skill.color }} />
              </div>

              <h3 className="text-sm font-bold text-gray-900 mt-3.5 group-hover:text-emerald-700 transition-colors">
                {skill.name}
              </h3>

              <span className="text-[11px] font-mono text-gray-500 mt-0.5">
                {skill.category}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
