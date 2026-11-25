import React, { useState } from 'react';
import { 
  ChevronDown, 
  Workflow, 
  Search, 
  Palette, 
  Server, 
  Rocket, 
  HelpCircle
} from 'lucide-react';

const FaqWorkflowSection = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const workflowSteps = [
    {
      step: '01',
      title: 'Discovery & Blueprint',
      icon: Search,
      desc: 'Deep-dive into business requirements, defining database schemas, API specs, and technical architecture.',
    },
    {
      step: '02',
      title: 'UI/UX & Frontend Craft',
      icon: Palette,
      desc: 'Developing responsive, high-performance React components with cyber-fluid micro-animations and intuitive UX.',
    },
    {
      step: '03',
      title: 'Backend & API Systems',
      icon: Server,
      desc: 'Constructing robust Node.js/Express REST APIs, Socket.io channels, and indexed MongoDB data models.',
    },
    {
      step: '04',
      title: 'Testing & Cloud Launch',
      icon: Rocket,
      desc: 'Comprehensive end-to-end testing, lighthouse speed optimization, and zero-downtime cloud deployment.',
    },
  ];

  const faqs = [
    {
      q: 'What is your typical project delivery timeline?',
      a: 'For MVP web applications or focused dashboards, typical delivery is 1 to 3 weeks. For large-scale enterprise platforms with multiple role portals and real-time sockets, timelines range from 4 to 8 weeks with weekly milestone demos.',
    },
    {
      q: 'Are you available for full-time remote roles or freelance contracts?',
      a: 'Yes! I am actively available for both full-time engineering roles (remote worldwide) and select freelance/contract projects where I can build impactful digital products.',
    },
    {
      q: 'How do you handle collaboration across different international timezones?',
      a: 'I regularly collaborate with global teams across US, UK, Europe, and Asia-Pacific. I ensure at least 4-5 hours of daily live overlap for standups, syncs, and code reviews, with asynchronous Slack/GitHub updates.',
    },
    {
      q: 'Do you provide post-launch support and maintenance?',
      a: 'Absolutely. Every project includes 30 days of complimentary post-deployment bug support and monitoring. I also offer ongoing monthly maintenance agreements for feature expansions and server management.',
    },
    {
      q: 'Can you work on an existing codebase or only build from scratch?',
      a: 'Both! I am experienced in refactoring existing legacy MERN codebases (improving speed, fixing architectural bottlenecks) as well as architecting clean greenfield applications from the ground up.',
    },
  ];

  return (
    <section id="workflow" className="relative z-10 py-16 sm:py-20 lg:py-24 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 scroll-mt-24">
      
      {/* ========================================================================= */}
      {/* PART 1: 4-STEP AGILE WORKFLOW */}
      {/* ========================================================================= */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 mb-3.5">
            <Workflow className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Process & Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            How I Engineer <span className="text-emerald-600">Digital Solutions</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 font-normal">
            A battle-tested 4-step engineering blueprint ensuring speed, maintainability, and clean architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((ws, idx) => {
            const Icon = ws.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-[0_12px_30px_rgba(16,185,129,0.1)] transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black font-mono text-emerald-700 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                      STEP {ws.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    {ws.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PART 2: EXPANDABLE FAQS ACCORDION */}
      {/* ========================================================================= */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 mb-3.5">
            <HelpCircle className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-2 border-emerald-500 shadow-[0_8px_25px_rgba(16,185,129,0.1)]'
                    : 'bg-white border border-gray-200 hover:border-emerald-300'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-gray-900">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default FaqWorkflowSection;
