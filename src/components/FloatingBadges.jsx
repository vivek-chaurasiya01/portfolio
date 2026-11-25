import React from 'react';
import { Check } from 'lucide-react';
import { toast } from 'react-toastify';
import { ReactIcon, NodeIcon, MongoIcon } from './common/TechIcons';

const FloatingBadges = () => {
  return (
    <>
      {/* 1. Floating Checklist Card */}
      <div 
        onClick={() => toast.success("Code Standards: 100% Scalable & Clean! ✨")}
        className="floating-badge-anim animate-float hidden sm:flex absolute -left-6 top-16 xl:-left-10 xl:top-20 z-30 flex-col gap-2 p-3.5 rounded-2xl bg-[#08120e]/85 backdrop-blur-xl border border-[#00f298]/30 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(0,242,152,0.15)] cursor-pointer hover:border-[#00f298]/70 hover:scale-105 transition-all duration-300"
        title="Click to view code quality"
      >
        {[
          'Clean Code',
          'Modern Design',
          'Scalable Architecture',
          'Real World Solutions'
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-200">
            <div className="w-4 h-4 rounded bg-[#00f298]/20 border border-[#00f298]/60 flex items-center justify-center">
              <Check className="w-3 h-3 text-[#00f298] stroke-[3]" />
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* 2. Floating Code Editor Card */}
      <div 
        onClick={() => toast.info("Developer Profile: Vivek Chaurasiya (MERN Stack) ⚡")}
        className="floating-badge-anim animate-float-slow hidden md:block absolute -right-6 top-6 xl:-right-8 xl:top-8 z-30 p-3.5 rounded-2xl bg-[#050e0a]/90 backdrop-blur-xl border border-[#00f298]/35 shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_25px_rgba(0,242,152,0.2)] font-code text-[11px] leading-relaxed select-none cursor-pointer hover:border-[#00f298]/80 hover:scale-105 transition-all duration-300"
        title="developer.js"
      >
        <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/10">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] text-gray-500 ml-2">developer.js</span>
        </div>
        <p>
          <span className="text-[#00f298]">const</span> <span className="text-yellow-300">developer</span> = &#123;
        </p>
        <p className="pl-3">
          <span className="text-gray-400">name:</span> <span className="text-emerald-300">"Vivek Chaurasiya"</span>,
        </p>
        <p className="pl-3">
          <span className="text-gray-400">role:</span> <span className="text-emerald-300">"MERN Developer"</span>,
        </p>
        <p className="pl-3">
          <span className="text-gray-400">passion:</span> <span className="text-emerald-300">"Building Solutions"</span>
        </p>
        <p>&#125;;</p>
      </div>

      {/* 3. Floating Cursive Callout: "Turning Ideas Into Reality ⤴" */}
      <div className="floating-badge-anim animate-float-reverse hidden sm:flex absolute -left-8 bottom-28 xl:-left-12 xl:bottom-32 z-30 flex-col items-end pointer-events-none">
        <div className="font-handwriting text-2xl lg:text-3xl font-bold text-[#00f298] -rotate-6 drop-shadow-[0_0_12px_rgba(0,242,152,0.6)] leading-tight text-center">
          Turning <br />
          Ideas Into <br />
          Reality <span className="inline-block translate-x-1">⤴</span>
        </div>
      </div>

      {/* 4. Desk Tech Stack Book Badges */}
      <div className="floating-badge-anim hidden sm:flex absolute -right-4 bottom-24 xl:-right-6 xl:bottom-28 z-30 flex-col gap-1.5 p-2 rounded-xl bg-[#06100c]/85 backdrop-blur-lg border border-[#00f298]/20 shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
        <button
          onClick={() => toast.success("React 19 + Next.js frontend ecosystem ⚛️")}
          className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#00f298]/10 text-xs text-white font-medium border border-[#00f298]/30 hover:bg-[#00f298]/25 transition-colors cursor-pointer text-left"
        >
          <ReactIcon className="w-3.5 h-3.5 text-[#00f298]" />
          <span>React</span>
        </button>
        <button
          onClick={() => toast.success("Node.js & Express high-concurrency backends 🚀")}
          className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#00f298]/10 text-xs text-white font-medium border border-[#00f298]/30 hover:bg-[#00df81]/25 transition-colors cursor-pointer text-left"
        >
          <NodeIcon className="w-3.5 h-3.5 text-[#00df81]" />
          <span>Node.js</span>
        </button>
        <button
          onClick={() => toast.success("MongoDB & Aggregation pipeline databases 🍃")}
          className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#00f298]/10 text-xs text-white font-medium border border-[#00f298]/30 hover:bg-[#00f298]/25 transition-colors cursor-pointer text-left"
        >
          <MongoIcon className="w-3.5 h-3.5 text-[#00f298]" />
          <span>MongoDB</span>
        </button>
      </div>
    </>
  );
};

export default FloatingBadges;
