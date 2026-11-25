'use client';
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import RecentWorkSection from '../components/RecentWorkSection';
import EducationSection from '../components/EducationSection';
import CertificationsSection from '../components/CertificationsSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Home / Hero Section */}
      <Hero />

      {/* 2. About Me Section */}
      <AboutSection />

      {/* 3. Technical Skills Section */}
      <SkillsSection />

      {/* 4. Work Experience Section (Digicoders - 1.5 Years) */}
      <ExperienceSection />

      {/* 5. Featured Projects Section (6 Flagship Projects with Demo & GitHub) */}
      <RecentWorkSection />

      {/* 6. Education Section (B.Tech ITM Lucknow, Diploma, Intermediate) */}
      <EducationSection />

      {/* 7. Certifications & Achievements Section */}
      <CertificationsSection />

      {/* 8. Services Section (Full Stack, Frontend, Backend, APIs, Admin Dashboards) */}
      <ServicesSection />

      {/* 9. Achievements / Statistics Section */}
      <StatsSection />

      {/* 10. Contact Me Section (Form, Email, Phone, LinkedIn, Location) */}
      <ContactSection />
    </div>
  );
}
