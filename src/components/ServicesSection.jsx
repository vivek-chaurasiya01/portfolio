'use client';
import React, { useState, useEffect } from 'react';
import {
  Layers,
  Layout,
  Server,
  Terminal,
  LayoutDashboard,
  ArrowRight,
  X,
  User,
  Phone,
  MessageSquare,
  Send
} from 'lucide-react';
import { toast } from 'react-toastify';

const services = [
  {
    id: "01",
    title: "Full Stack Web Development",
    icon: Layers,
    description:
      "End-to-end web product architecture using MERN Stack (React, Node.js, Express, MongoDB) tailored for enterprise scale, responsive performance, and secure cloud deployment.",
    features: ["Custom Database Architecture", "Role-based Access Control", "End-to-End Testing & Deployment"]
  },
  {
    id: "02",
    title: "Frontend Development",
    icon: Layout,
    description:
      "Engineering pixel-perfect, accessible, and high-performance user interfaces with React 19, Next.js, and Tailwind CSS with 100% Core Web Vitals optimization.",
    features: ["Responsive Mobile-First UI", "State Management (Redux/Zustand)", "Modern Component Architecture"]
  },
  {
    id: "03",
    title: "Backend Development",
    icon: Server,
    description:
      "Designing robust, microservices-ready Node.js and Express servers with efficient query pipelines, caching layers, and high-concurrency request throughput.",
    features: ["Node.js & Express.js Engines", "Database Indexing & Sharding", "Session & JWT Security"]
  },
  {
    id: "04",
    title: "API Integration",
    icon: Terminal,
    description:
      "Building well-documented RESTful APIs, third-party payment gateways (Stripe, Razorpay), real-time WebSockets (Socket.io), and external SaaS integrations.",
    features: ["RESTful API Architecture", "Socket.io Live Channels", "Third-party Webhooks & SDKs"]
  },
  {
    id: "05",
    title: "Admin Dashboard Development",
    icon: LayoutDashboard,
    description:
      "Creating dense, analytical administrative consoles with live reporting, transaction telemetry, interactive data grids, and user permission management.",
    features: ["Interactive Charts & Telemetry", "Granular Access Matrix", "CSV/PDF Report Exporters"]
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  // Close modal on Escape key & lock body scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };

    if (selectedService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService]);

  const handleOpenModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.mobile.trim() || !formData.message.trim()) {
      toast.error("Please fill in Name, Mobile, and Message!");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      toast.success(`Request sent for "${selectedService}"! I will contact you soon. 🚀`);
      setSubmitting(false);
      setFormData({ name: '', mobile: '', message: '' });
      setSelectedService(null);
    }, 500);
  };

  return (
    <section
      id="services"
      className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20 bg-white border-t border-gray-100"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
        <span className="inline-block text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
          Services
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-tight mb-3">
          Specialized <span className="text-emerald-600">Services</span> Offered
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Professional engineering services designed to turn complex business logic into high-performing digital software.
        </p>
      </div>

      {/* 5 Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc) => {
          const Icon = svc.icon;
          return (
            <div
              key={svc.id}
              className="rounded-xl border border-gray-200 hover:border-emerald-400 bg-white p-6 flex flex-col justify-between transition-all duration-200 group shadow-[0_4px_18px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_28px_rgba(5,150,105,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-400">
                    SERVICE {svc.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                  {svc.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {svc.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs sm:text-sm text-gray-700 flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleOpenModal(svc.title)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200 hover:border-emerald-600 transition-all cursor-pointer"
              >
                <span>Request Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Service Request Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/60 backdrop-blur-sm p-4"
          onClick={handleCloseModal}
        >
          <div
            className="w-full max-w-md bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-emerald-50/70 border-b border-emerald-100 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider">
                  Request Service
                </span>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {selectedService}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close modal"
                className="w-8 h-8 rounded-md bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-1.5">
                  Your Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-md border border-gray-300 focus:border-emerald-600 focus:outline-none text-sm text-gray-900 placeholder:text-gray-400 transition-colors"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-1.5">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-md border border-gray-300 focus:border-emerald-600 focus:outline-none text-sm text-gray-900 placeholder:text-gray-400 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-1.5">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your project or service requirement..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-md border border-gray-300 focus:border-emerald-600 focus:outline-none text-sm text-gray-900 placeholder:text-gray-400 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 py-2.5 rounded-md border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition-colors cursor-pointer disabled:opacity-60"
                >
                  <span>{submitting ? 'Sending...' : 'Send Request'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
