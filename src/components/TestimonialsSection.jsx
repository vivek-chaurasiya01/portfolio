'use client';
import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, UserCheck, Building } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Digicoders Project Lead",
    role: "Technical Lead",
    company: "Digicoders Private Limited",
    type: "Team Feedback",
    rating: 5,
    quote: "Vivek has demonstrated consistent engineering discipline on our MERN client projects. He designs clean MongoDB schemas, writes modular React code, and takes total ownership of features from sprint planning to deployment."
  },
  {
    id: 2,
    name: "Enterprise Client - Cab Operations",
    role: "Operations Director",
    company: "KwikCabs Telematics",
    type: "Client Feedback",
    rating: 5,
    quote: "Vivek delivered our multi-panel cab dispatch system ahead of schedule. The real-time driver tracking and automated billing works seamlessly under heavy daily ride volumes. Extremely professional work."
  },
  {
    id: 3,
    name: "Senior Full Stack Colleague",
    role: "Backend Architect",
    company: "Software Development Team",
    type: "Professional Recommendation",
    rating: 5,
    quote: "Collaborating with Vivek is effortless. His mastery over RESTful API design, state synchronization, and Git workflows ensures pull requests are merged with zero friction and zero bugs in production."
  }
];

const TestimonialsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIdx];

  return (
    <section id="testimonials" className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16 bg-white border-t border-gray-100">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-2">
            Client & Team <span className="text-emerald-600">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Authentic feedback and recommendations from engineering leaders, clients, and team members.
          </p>
        </div>

        {/* Active Testimonial Card - Sharp Flat */}
        <div className="border-2 border-emerald-600 bg-white p-6 sm:p-10 rounded-none shadow-none relative">
          <Quote className="w-10 h-10 text-emerald-200 absolute top-6 right-6 pointer-events-none" />

          {/* Stars & Feedback Type */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              ))}
            </div>
            <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold rounded-none shadow-none">
              {current.type}
            </span>
          </div>

          {/* Quote Text */}
          <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed mb-6 italic">
            "{current.quote}"
          </p>

          {/* Author Details & Carousel Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <div>
              <h4 className="text-base font-bold text-gray-900">
                {current.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                {current.role} • <strong className="text-emerald-700">{current.company}</strong>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 bg-gray-50 hover:bg-emerald-50 border border-gray-300 hover:border-emerald-600 text-gray-800 hover:text-emerald-700 flex items-center justify-center rounded-none shadow-none cursor-pointer transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-gray-500 px-2">
                0{activeIdx + 1} / 0{testimonials.length}
              </span>
              <button
                onClick={handleNext}
                className="w-9 h-9 bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-700 flex items-center justify-center rounded-none shadow-none cursor-pointer transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

    </section>
  );
};

export default TestimonialsSection;
