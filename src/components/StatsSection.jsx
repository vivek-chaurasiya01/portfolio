'use client';
import React from 'react';
import { TrendingUp, Clock, FolderGit2, Code2, GitCommit, GitPullRequest, Flame, Users } from 'lucide-react';

const stats = [
  {
    label: "Years of Experience",
    value: "1.5+",
    sub: "Full Stack & MERN @ DigiCoders",
    icon: Clock
  },
  {
    label: "Projects Completed",
    value: "20+",
    sub: "Enterprise Portals, ERPs & Apps",
    icon: FolderGit2
  },
  {
    label: "Technologies Mastered",
    value: "18+",
    sub: "MERN, Next.js, Nest.js & Flutter",
    icon: Code2
  },
  {
    label: "Happy Clients & Teams",
    value: "15+",
    sub: "Domestic & International Clients",
    icon: Users
  }
];

const contributions = [
  {
    title: "Production Commits",
    metric: "1,420+",
    desc: "Consistent daily Git push history and zero-breakage feature shipping.",
    icon: GitCommit
  },
  {
    title: "Pull Requests Merged",
    metric: "42+",
    desc: "Clean code review records with modular, maintainable architecture.",
    icon: GitPullRequest
  },
  {
    title: "Active Code Streak",
    metric: "48 Days",
    desc: "Continuous coding consistency across sprint cycles and releases.",
    icon: Flame
  },
  {
    title: "Deployment Success",
    metric: "99.8%",
    desc: "Reliable cloud deployments with Nginx reverse proxy and SSL.",
    icon: TrendingUp
  }
];

const StatsSection = () => {
  return (
    <section
      id="statistics"
      className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20 bg-white border-t border-gray-100"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
        <span className="inline-block text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
          Achievements &amp; Statistics
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-tight mb-3">
          Key Statistics &amp; <span className="text-emerald-600">Professional Impact</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Quantifiable milestones and code metrics reflecting dedication to consistent software delivery.
        </p>
      </div>

      {/* 4 Main Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group p-6 rounded-none border border-gray-200 bg-white hover:border-emerald-500 transition-all duration-200 shadow-[0_4px_14px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_24px_rgba(5,150,105,0.10)]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-none shadow-none bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-none">
                  0{idx + 1}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-1">
                {item.value}
              </div>
              <div className="text-sm font-bold text-gray-800 mb-1">
                {item.label}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.sub}
              </p>
            </div>
          );
        })}
      </div>

      {/* Engineering Contributions Grid (Clean & Borderless Outer Container) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
            Professional Engineering Contributions
          </h3>
          <div className="h-px flex-1 bg-gray-100 ml-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contributions.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-none bg-gray-50/70 border border-gray-200/80 hover:bg-white hover:border-emerald-400 transition-all duration-200 shadow-[0_4px_14px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_24px_rgba(5,150,105,0.10)]"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-none shadow-none bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono font-bold text-base text-gray-900">
                    {c.metric}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-gray-800 mb-1">
                  {c.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
