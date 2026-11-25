'use client';
import React from 'react';
import { Calendar, ExternalLink, MapPin, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const educationRows = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Institute of Technology & Management (ITM), Lucknow",
      link: "https://itmlucknow.com/",
      location: "Lucknow, UP",
      period: "2025 – Present",
      badge: "Pursuing",
      badgePrimary: true,
      campusImg: "/itm-campus.jpg",
      campusAlt: "ITM (Institute of Technology & Management), Lucknow Campus",
      logoImg: "/itm-logo.png",
      logoAlt: "ITM Lucknow Logo",
      description: (
        <>
          Currently pursuing Bachelor of Technology in Information Technology from{' '}
          <strong className="text-gray-800">ITM Lucknow</strong> (affiliated to Dr. A.P.J. Abdul Kalam Technical University – AKTU). Deepening expertise in scalable software architecture, full-stack web engineering, and modern mobile app development alongside core computer science fundamentals.
        </>
      ),
      highlights: [
        "Data Structures & Algorithms",
        "Database Management (DBMS)",
        "Computer Networks & OS",
        "Full Stack & Cloud Architecture"
      ],
      footerTag: "Affiliated to AKTU, Lucknow",
      imagePosition: "left"
    },
    {
      degree: "Diploma in Information Technology",
      institution: "CSJM Government Polytechnic, Ambedkar Nagar (BTEUP)",
      link: "https://csjmgpa.in/",
      location: "Ambedkar Nagar, UP",
      period: "2022 – 2025",
      badge: "First Division",
      badgePrimary: false,
      campusImg: "/csjm-campus.jpg",
      campusAlt: "CSJM Government Polytechnic, Ambedkar Nagar Campus",
      logoImg: "/csjm-logo.png",
      logoAlt: "CSJM Polytechnic Logo",
      description: (
        <>
          Completed 3-year Diploma in Information Technology from{' '}
          <strong className="text-gray-800">CSJM Government Polytechnic, Ambedkar Nagar</strong> (affiliated to BTEUP) with First Division. Built a rock-solid foundation in programming, web application development, relational databases, and hands-on academic projects.
        </>
      ),
      highlights: [
        "C, C++ & Core Java",
        "HTML, CSS & JavaScript",
        "Operating Systems & Linux",
        "SQL & Relational Databases"
      ],
      footerTag: "Affiliated to BTEUP",
      imagePosition: "right"
    },
    {
      degree: "Intermediate (12th) – Science Stream",
      institution: "Komal Yadav Inter College, Mardanpur, Ghazipur",
      link: "https://www.kyicmardanpur.gzp.ind.in/index.php",
      location: "Mardanpur, Ghazipur, UP",
      period: "2020 – 2022",
      badge: "Science (PCM)",
      badgePrimary: false,
      campusImg: "/kyic-campus.jpg",
      campusAlt: "Komal Yadav Inter College, Mardanpur, Ghazipur",
      logoImg: "/kyic-logo.png",
      logoAlt: "Komal Yadav Inter College Logo",
      description: (
        <>
          Completed Senior Secondary (Class 12th) in Science Stream (Physics, Chemistry, and Mathematics) from{' '}
          <strong className="text-gray-800">Komal Yadav Inter College, Mardanpur</strong> under UP State Board. Built strong mathematical reasoning, analytical problem-solving ability, and scientific fundamentals.
        </>
      ),
      highlights: [
        "Physics & Mechanics",
        "Mathematics & Calculus",
        "Chemistry",
        "Analytical Problem Solving"
      ],
      footerTag: "UP State Board (UPMSP)",
      imagePosition: "left"
    }
  ];

  return (
    <section
      id="education"
      className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20 bg-white border-t border-gray-100"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
        <span className="inline-block text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">
          Education
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-tight mb-3">
          Academic <span className="text-emerald-600">Background</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Formal engineering degrees and technical qualifications in Information Technology &amp; Computer Science.
        </p>
      </div>

      {/* Alternating Horizontal Rows */}
      <div className="space-y-6">
        {educationRows.map((edu, idx) => {
          const isImageRight = edu.imagePosition === "right";
          return (
            <div
              key={idx}
              className="rounded-xl border border-gray-200/80 bg-white shadow-[0_6px_24px_rgba(15,23,42,0.06)] hover:border-emerald-400 hover:shadow-[0_12px_32px_rgba(5,150,105,0.12)] overflow-hidden transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Campus Image */}
                <div
                  className={`lg:col-span-5 relative bg-gray-100 min-h-[240px] lg:min-h-[300px] overflow-hidden group ${
                    isImageRight ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={edu.campusImg}
                    alt={edu.campusAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md border border-gray-200 flex items-center gap-1.5 text-xs font-semibold text-gray-800">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Details */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between ${
                    isImageRight ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    {/* Top Badges & Logo */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={edu.logoImg}
                          alt={edu.logoAlt}
                          className="h-9 w-auto object-contain"
                        />
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                      </div>

                      {edu.badgePrimary ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-600 text-white font-mono text-xs font-bold">
                          <Award className="w-3.5 h-3.5" />
                          <span>{edu.badge}</span>
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 font-mono text-xs font-bold text-emerald-800">
                          {edu.badge}
                        </span>
                      )}
                    </div>

                    {/* Degree Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>

                    {/* Clickable College Link */}
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-emerald-700 hover:text-emerald-800 hover:underline underline-offset-4 mb-4 group/link"
                    >
                      <span>{edu.institution}</span>
                      <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Key Subjects / Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {edu.highlights.map((item, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-3 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      <span>{edu.footerTag}</span>
                    </div>

                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 hover:border-emerald-600 text-xs font-bold transition-colors"
                    >
                      <span>Visit College Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationSection;
