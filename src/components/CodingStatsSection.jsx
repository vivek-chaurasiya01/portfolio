import React, { useMemo } from 'react';
import { 
  GitCommit, 
  GitPullRequest, 
  GitBranch, 
  Flame, 
  TrendingUp
} from 'lucide-react';

const CodingStatsSection = () => {
  // Generate a realistic 52-week commit activity matrix (40 cols x 7 rows)
  const commitGrid = useMemo(() => {
    const weeks = 40;
    const days = 7;
    const grid = [];

    for (let w = 0; w < weeks; w++) {
      const col = [];
      for (let d = 0; d < days; d++) {
        const rand = (w * 13 + d * 7 + (w % 5) * 11) % 100;
        let intensity = 0;
        if (rand > 80) intensity = 4;
        else if (rand > 55) intensity = 3;
        else if (rand > 30) intensity = 2;
        else if (rand > 15) intensity = 1;
        else intensity = 0;
        col.push(intensity);
      }
      grid.push(col);
    }
    return grid;
  }, []);

  const stats = [
    {
      title: 'Total Commits',
      value: '1,420+',
      label: 'Production & OSS pushes',
      icon: GitCommit,
      color: 'text-emerald-600',
    },
    {
      title: 'Active Repositories',
      value: '28+',
      label: 'MERN & Full-Stack tools',
      icon: GitBranch,
      color: 'text-teal-600',
    },
    {
      title: 'Pull Requests Merged',
      value: '42+',
      label: 'Zero-conflict reviews',
      icon: GitPullRequest,
      color: 'text-emerald-700',
    },
    {
      title: 'Current Streak',
      value: '48 Days',
      label: 'Daily continuous shipping',
      icon: Flame,
      color: 'text-amber-500',
    },
  ];

  const getColorClass = (intensity) => {
    switch (intensity) {
      case 4: return 'bg-emerald-600 shadow-xs';
      case 3: return 'bg-emerald-500';
      case 2: return 'bg-emerald-400';
      case 1: return 'bg-emerald-200';
      default: return 'bg-gray-100';
    }
  };

  return (
    <section id="activity" className="relative z-10 py-16 sm:py-20 lg:py-24 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 mb-3.5">
          <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Proof of Work</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Coding Activity & <span className="text-emerald-600">GitHub Metrics</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2 font-normal">
          Consistency is the heartbeat of engineering. Here is a live breakdown of my daily commits and code velocity.
        </p>
      </div>

      {/* 4 Top Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {stats.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-[0_10px_25px_rgba(16,185,129,0.1)] transition-all duration-300 group shadow-xs"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm font-semibold text-gray-500">{item.title}</span>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <IconComp className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                {item.value}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-500 font-medium mt-1">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Commit Matrix Heatmap */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm overflow-x-auto">
        <div className="flex items-center justify-between mb-4 min-w-[650px]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-900">Annual Activity Map</span>
            <span className="text-xs text-gray-500">• 40-Week View</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Less</span>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-gray-100" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-200" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600" />
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="flex gap-1.5 min-w-[650px] pb-2">
          {commitGrid.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
              {week.map((intensity, dIdx) => (
                <div
                  key={dIdx}
                  className={`w-full aspect-square rounded-xs transition-colors duration-200 ${getColorClass(intensity)}`}
                  title={`Activity intensity: Level ${intensity}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default CodingStatsSection;
