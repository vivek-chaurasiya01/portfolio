'use client';
import React from 'react';
import AboutSection from '../../components/AboutSection';
import EducationSection from '../../components/EducationSection';
import ExperienceSection from '../../components/ExperienceSection';
import SkillsSection from '../../components/SkillsSection';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
    </div>
  );
}
