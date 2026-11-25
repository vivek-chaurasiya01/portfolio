import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Database, 
  Activity, 
  ArrowRight,
  Network
} from 'lucide-react';

const ProjectCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Project Overview', icon: Layers },
    { id: 'architecture', label: 'System Architecture', icon: Network },
    { id: 'challenges', label: 'Engineering Challenges', icon: Cpu },
    { id: 'metrics', label: 'Performance Impact', icon: Activity },
  ];

  const metrics = [
    { label: 'API Response Latency', value: '< 120ms', sub: 'Optimized with indexing' },
    { label: 'WebSocket Uptime', value: '99.9%', sub: 'Real-time telemetry' },
    { label: 'Concurrent Bookings', value: '1,500+', sub: 'Stress tested benchmark' },
    { label: 'Code Test Coverage', value: '94%', sub: 'Unit & integration tests' },
  ];

  return (
    <section id="case-study" className="relative z-10 py-16 sm:py-20 lg:py-24 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 mb-3.5">
          <Cpu className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Engineering Deep-Dive</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Flagship Architecture Case Study
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2 font-normal">
          Beyond visual design: A deep look into the backend scalability, real-time socket connections, and database design.
        </p>
      </div>

      {/* Main White & Green Case Study Container */}
      <div className="rounded-3xl bg-white border border-emerald-500/25 shadow-[0_20px_50px_rgba(16,185,129,0.08)] overflow-hidden">
        
        {/* Top Case Study Banner Bar */}
        <div className="p-6 sm:p-8 bg-emerald-50/70 border-b border-emerald-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold font-mono">
                FLAGSHIP MERN ECOSYSTEM
              </span>
              <span className="text-xs text-gray-500 font-mono font-medium">Production Grade</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
              KwikCab: Real-time Dispatch & Fleet Telematics Platform
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 shadow-[0_4px_16px_rgba(16,185,129,0.35)] transition-all cursor-pointer"
            >
              <span>Discuss Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="px-6 sm:px-8 pt-4 pb-2 border-b border-gray-200 flex flex-wrap gap-2 sm:gap-3 bg-gray-50/80">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-white shadow-[0_2px_12px_rgba(16,185,129,0.35)]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-emerald-50/80'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="p-6 sm:p-8 lg:p-10 bg-white">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <p className="text-base text-gray-700 leading-relaxed max-w-4xl">
                KwikCab is a multi-tier ride-hailing and vendor management system engineered to connect car owners, corporate dispatch agents, and on-demand passengers into one unified, low-latency ecosystem.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                    <div className="text-2xl font-black text-gray-900">{m.value}</div>
                    <div className="text-xs font-bold text-emerald-700 mt-1">{m.label}</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">{m.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <h4 className="text-lg font-bold text-gray-900">Distributed Multi-Panel Microservices</h4>
              <p>
                Features separate vendor, driver, agent, and super-admin portals with JWT session isolation, Redis caching for active ride states, and Socket.io rooms for instant geospatial coordinate broadcasting.
              </p>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <h4 className="text-lg font-bold text-gray-900">Handling High-Frequency GPS Pings</h4>
              <p>
                Implemented debounced geospatial aggregation in MongoDB with compound 2dsphere indexes, reducing database CPU load by 68% during peak rush hours.
              </p>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <h4 className="text-lg font-bold text-gray-900">Proven Performance & Stability</h4>
              <p>
                Zero-downtime rolling deployments on AWS EC2 with Nginx reverse proxy, automated SSL cert rotation, and sub-120ms roundtrip API response times across India.
              </p>
            </div>
          )}
        </div>

      </div>

    </section>
  );
};

export default ProjectCaseStudy;
