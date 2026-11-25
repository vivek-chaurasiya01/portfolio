'use client';
import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  User,
  Briefcase,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { LinkedinIcon } from './common/TechIcons';
import { toast } from 'react-toastify';

const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const emailAddress = "vivekchaurasiya.dev@gmail.com";
  const phoneNumber = "+91 88876 54321";

  const handleCopy = (type) => {
    if (type === 'email') {
      navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      toast.success("Email copied to clipboard! 📋");
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      navigator.clipboard.writeText(phoneNumber);
      setCopiedPhone(true);
      toast.success("Phone number copied to clipboard! 📞");
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in Name, Email and Message ✍️");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(`Thank you ${formData.name}! Your message has been sent successfully. 🚀`);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20 bg-white border-t border-gray-100"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
        <span className="inline-block text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
          Contact Me
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-tight mb-3">
          Get in <span className="text-emerald-600">Touch</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Available for full-time engineering roles, high-impact freelance projects, and technical consulting.
        </p>
      </div>

      {/* 2-Column Grid: Direct Info Left, Modern Form Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct Contact Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3.5">
            
            {/* Email Card */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 hover:bg-white hover:border-emerald-400 transition-all duration-200 flex items-center justify-between gap-3 shadow-[0_4px_18px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_28px_rgba(5,150,105,0.12)]">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold text-gray-500 uppercase">Direct Email</div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-bold text-gray-900 hover:text-emerald-700 truncate block transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('email')}
                className="p-2.5 rounded-lg border border-gray-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-gray-600 hover:text-emerald-700 transition-colors cursor-pointer shrink-0"
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 hover:bg-white hover:border-emerald-400 transition-all duration-200 flex items-center justify-between gap-3 shadow-[0_4px_18px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_28px_rgba(5,150,105,0.12)]">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold text-gray-500 uppercase">Phone &amp; WhatsApp</div>
                  <a
                    href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                    className="text-sm font-bold text-gray-900 hover:text-emerald-700 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('phone')}
                className="p-2.5 rounded-lg border border-gray-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-gray-600 hover:text-emerald-700 transition-colors cursor-pointer shrink-0"
                title="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 hover:bg-white hover:border-emerald-400 transition-all duration-200 flex items-center justify-between gap-3 shadow-[0_4px_18px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_28px_rgba(5,150,105,0.12)]">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-lg bg-sky-50 border border-sky-200 text-[#0a66c2] flex items-center justify-center shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold text-gray-500 uppercase">LinkedIn Profile</div>
                  <div className="text-sm font-bold text-gray-900 truncate">linkedin.com/in/vivek-chaurasiya-84919029b</div>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/vivek-chaurasiya-84919029b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg border border-gray-200 bg-white hover:bg-emerald-600 hover:border-emerald-600 text-xs font-bold text-gray-800 hover:text-white transition-colors shrink-0"
              >
                <span>Connect</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 hover:bg-white hover:border-emerald-400 transition-all duration-200 flex items-center gap-3.5 shadow-[0_4px_18px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_28px_rgba(5,150,105,0.12)]">
              <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono font-bold text-gray-500 uppercase">Primary Location</div>
                <div className="text-sm font-bold text-gray-900">Lucknow, Uttar Pradesh, India (Open Remote)</div>
              </div>
            </div>

          </div>

          {/* Availability Card */}
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/70 flex items-center gap-3.5">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600" />
            </span>
            <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
              <strong className="font-bold text-emerald-900">Available Now:</strong> Full-Time Remote / Hybrid Roles &amp; Freelance Projects. Avg. response time &lt; 24h.
            </p>
          </div>
        </div>

        {/* Right Column: Modern Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="h-full p-6 sm:p-8 rounded-xl border border-gray-200 bg-white flex flex-col justify-between gap-5 shadow-[0_6px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_32px_rgba(5,150,105,0.12)] transition-shadow duration-200"
          >
            <div>
              {/* Form Header */}
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-gray-500">
                    Have a project idea or opportunity? Drop a quick message below.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-1.5">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-50/50 border border-gray-300 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 text-gray-900 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-50/50 border border-gray-300 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 text-gray-900 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-1.5">
                      Phone (Optional)
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-50/50 border border-gray-300 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 text-gray-900 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry / Job Role"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-50/50 border border-gray-300 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 text-gray-900 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or engineering role..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50/50 border border-gray-300 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 text-gray-900 outline-none text-sm resize-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60"
              >
                <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
