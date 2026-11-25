import React, { useState } from 'react';
import { 
  Layers, 
  Layout, 
  Server, 
  Terminal, 
  LayoutDashboard, 
  Database, 
  Rocket, 
  TrendingUp, 
  Mail, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const services = [
  {
    title: "Full Stack Web Development",
    icon: Layers
  },
  {
    title: "Frontend Development",
    icon: Layout
  },
  {
    title: "Backend Development",
    icon: Server
  },
  {
    title: "REST API Development",
    icon: Terminal
  },
  {
    title: "Admin Dashboard Development",
    icon: LayoutDashboard
  },
  {
    title: "Database Integration",
    icon: Database
  },
  {
    title: "Website Deployment",
    icon: Rocket
  },
  {
    title: "SEO Optimization",
    icon: TrendingUp
  }
];

const ContactServicesSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in Name, Email and Message ✍️");
      return;
    }
    toast.success("Message transmitted successfully! Vivek will get in touch shortly 🚀", {
      icon: "✉️"
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleServiceClick = (title) => {
    toast.info(`Service inquiry: ${title} ⚡`);
  };

  return (
    <section id="contact" className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-16 lg:pb-24">
      
      {/* Outer White & Green Main Card */}
      <div className="relative rounded-3xl bg-white/95 border border-emerald-500/20 backdrop-blur-2xl p-6 sm:p-8 lg:p-12 shadow-[0_20px_60px_rgba(16,185,129,0.06)] overflow-hidden">
        
        {/* Subtle Cyber Corner Bracket Accents */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-emerald-500/80 pointer-events-none" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-emerald-500/80 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-emerald-500/80 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-emerald-500/80 pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Pill: Services */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981] animate-pulse" />
            <span>Services & Contact</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Let's Collaborate & <span className="text-emerald-600">Build Together</span>
          </h2>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                onClick={() => handleServiceClick(service.title)}
                className="p-5 sm:p-6 rounded-2xl bg-gray-50/80 border border-gray-200 hover:border-emerald-500 hover:bg-white hover:shadow-[0_10px_25px_rgba(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors text-center">
                  {service.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 border-t border-gray-200">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-2">
                Have a Project in Mind?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                I'm available for freelance projects, full-time engineering roles, and technical consulting. Let's discuss your timeline and technical specs!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Email Address</div>
                  <div className="text-sm font-bold text-gray-900">vivekchaurasiya.dev@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Location</div>
                  <div className="text-sm font-bold text-gray-900">Lucknow, Uttar Pradesh, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-gray-50/80 border border-gray-200 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-emerald-500 text-gray-900 outline-none text-sm transition-all shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-emerald-500 text-gray-900 outline-none text-sm transition-all shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Full-time role"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-emerald-500 text-gray-900 outline-none text-sm transition-all shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 tracking-wider mb-1.5">
                  Your Message *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-emerald-500 text-gray-900 outline-none text-sm transition-all shadow-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 shadow-[0_4px_16px_rgba(16,185,129,0.35)] transition-all cursor-pointer self-start"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactServicesSection;
