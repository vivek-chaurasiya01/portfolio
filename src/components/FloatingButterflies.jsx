'use client';
import React, { useEffect, useState } from 'react';

// Multiple Butterflies configuration
const butterflies = [
  { id: 1, colorGrad: 'emerald', animClass: 'bf-flight-1', size: 42, glow: 'rgba(5,150,105,0.4)', delay: '0s' },
  { id: 2, colorGrad: 'cyan', animClass: 'bf-flight-2', size: 36, glow: 'rgba(6,182,212,0.4)', delay: '-4s' },
  { id: 3, colorGrad: 'coral', animClass: 'bf-flight-3', size: 32, glow: 'rgba(244,63,94,0.35)', delay: '-8s' },
  { id: 4, colorGrad: 'purple', animClass: 'bf-flight-4', size: 38, glow: 'rgba(168,85,247,0.35)', delay: '-12s' },
  { id: 5, colorGrad: 'amber', animClass: 'bf-flight-5', size: 34, glow: 'rgba(245,158,11,0.4)', delay: '-6s' },
  { id: 6, colorGrad: 'emerald', animClass: 'bf-flight-6', size: 28, glow: 'rgba(5,150,105,0.35)', delay: '-15s' },
  { id: 7, colorGrad: 'cyan', animClass: 'bf-flight-7', size: 30, glow: 'rgba(6,182,212,0.35)', delay: '-2s' },
  { id: 8, colorGrad: 'coral', animClass: 'bf-flight-8', size: 35, glow: 'rgba(244,63,94,0.35)', delay: '-18s' }
];

const FloatingButterflies = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none">
      <style jsx global>{`
        @keyframes flap-left {
          0%, 100% { transform: scaleX(1) rotate(0deg); }
          50% { transform: scaleX(0.12) rotate(18deg); }
        }
        @keyframes flap-right {
          0%, 100% { transform: scaleX(1) rotate(0deg); }
          50% { transform: scaleX(0.12) rotate(-18deg); }
        }

        /* 8 Different Flight Paths covering entire screen */
        @keyframes bf-flight-1 {
          0%   { transform: translate(5vw, 85vh) rotate(15deg); }
          25%  { transform: translate(30vw, 55vh) rotate(-10deg); }
          50%  { transform: translate(65vw, 35vh) rotate(25deg); }
          75%  { transform: translate(85vw, 65vh) rotate(-15deg); }
          100% { transform: translate(5vw, 85vh) rotate(15deg); }
        }

        @keyframes bf-flight-2 {
          0%   { transform: translate(92vw, 20vh) rotate(-20deg); }
          30%  { transform: translate(65vw, 50vh) rotate(15deg); }
          60%  { transform: translate(30vw, 25vh) rotate(-25deg); }
          85%  { transform: translate(10vw, 60vh) rotate(10deg); }
          100% { transform: translate(92vw, 20vh) rotate(-20deg); }
        }

        @keyframes bf-flight-3 {
          0%   { transform: translate(45vw, 95vh) rotate(5deg); }
          25%  { transform: translate(15vw, 70vh) rotate(-20deg); }
          55%  { transform: translate(40vw, 40vh) rotate(30deg); }
          80%  { transform: translate(75vw, 80vh) rotate(-10deg); }
          100% { transform: translate(45vw, 95vh) rotate(5deg); }
        }

        @keyframes bf-flight-4 {
          0%   { transform: translate(15vw, 15vh) rotate(20deg); }
          30%  { transform: translate(45vw, 30vh) rotate(-15deg); }
          60%  { transform: translate(80vw, 15vh) rotate(25deg); }
          85%  { transform: translate(50vw, 5vh) rotate(-5deg); }
          100% { transform: translate(15vw, 15vh) rotate(20deg); }
        }

        @keyframes bf-flight-5 {
          0%   { transform: translate(80vw, 85vh) rotate(-15deg); }
          30%  { transform: translate(55vw, 65vh) rotate(20deg); }
          60%  { transform: translate(25vw, 80vh) rotate(-20deg); }
          85%  { transform: translate(45vw, 90vh) rotate(15deg); }
          100% { transform: translate(80vw, 85vh) rotate(-15deg); }
        }

        @keyframes bf-flight-6 {
          0%   { transform: translate(2vw, 45vh) rotate(10deg); }
          35%  { transform: translate(25vw, 20vh) rotate(-25deg); }
          70%  { transform: translate(50vw, 60vh) rotate(20deg); }
          90%  { transform: translate(20vw, 75vh) rotate(-15deg); }
          100% { transform: translate(2vw, 45vh) rotate(10deg); }
        }

        @keyframes bf-flight-7 {
          0%   { transform: translate(95vw, 55vh) rotate(-30deg); }
          30%  { transform: translate(70vw, 75vh) rotate(15deg); }
          65%  { transform: translate(85vw, 35vh) rotate(-20deg); }
          85%  { transform: translate(60vw, 45vh) rotate(25deg); }
          100% { transform: translate(95vw, 55vh) rotate(-30deg); }
        }

        @keyframes bf-flight-8 {
          0%   { transform: translate(50vw, 10vh) rotate(-10deg); }
          25%  { transform: translate(20vw, 40vh) rotate(25deg); }
          60%  { transform: translate(70vw, 60vh) rotate(-20deg); }
          85%  { transform: translate(40vw, 30vh) rotate(15deg); }
          100% { transform: translate(50vw, 10vh) rotate(-10deg); }
        }

        .bf-flight-1 { animation: bf-flight-1 24s ease-in-out infinite; }
        .bf-flight-2 { animation: bf-flight-2 29s ease-in-out infinite; }
        .bf-flight-3 { animation: bf-flight-3 26s ease-in-out infinite; }
        .bf-flight-4 { animation: bf-flight-4 31s ease-in-out infinite; }
        .bf-flight-5 { animation: bf-flight-5 27s ease-in-out infinite; }
        .bf-flight-6 { animation: bf-flight-6 25s ease-in-out infinite; }
        .bf-flight-7 { animation: bf-flight-7 28s ease-in-out infinite; }
        .bf-flight-8 { animation: bf-flight-8 30s ease-in-out infinite; }

        .wing-l {
          transform-origin: right center;
          animation: flap-left 0.2s ease-in-out infinite;
        }
        .wing-r {
          transform-origin: left center;
          animation: flap-right 0.2s ease-in-out infinite;
        }
      `}</style>

      {butterflies.map((bf) => {
        let mainGrad = '#bf-emerald';
        let bodyColor = '#047857';

        if (bf.colorGrad === 'cyan') {
          mainGrad = '#bf-cyan';
          bodyColor = '#0e7490';
        } else if (bf.colorGrad === 'coral') {
          mainGrad = '#bf-coral';
          bodyColor = '#be123c';
        } else if (bf.colorGrad === 'purple') {
          mainGrad = '#bf-purple';
          bodyColor = '#6b21a8';
        } else if (bf.colorGrad === 'amber') {
          mainGrad = '#bf-amber';
          bodyColor = '#b45309';
        }

        return (
          <div
            key={bf.id}
            className={`absolute top-0 left-0 ${bf.animClass}`}
            style={{
              animationDelay: bf.delay,
              filter: `drop-shadow(0 3px 8px ${bf.glow})`
            }}
          >
            <svg
              width={bf.size}
              height={Math.round((bf.size * 36) / 40)}
              viewBox="0 0 44 40"
              fill="none"
            >
              {/* Left Wing */}
              <g className="wing-l">
                <path
                  d="M20 20 C10 4 2 8 2 18 C2 28 12 30 20 22 Z"
                  fill={`url(${mainGrad})`}
                  opacity="0.9"
                />
                <path
                  d="M19 22 C13 22 7 26 8 32 C9 36 17 32 19 23 Z"
                  fill="url(#bf-inner-light)"
                  opacity="0.8"
                />
              </g>

              {/* Right Wing */}
              <g className="wing-r">
                <path
                  d="M24 20 C34 4 42 8 42 18 C42 28 32 30 24 22 Z"
                  fill={`url(${mainGrad})`}
                  opacity="0.9"
                />
                <path
                  d="M25 22 C31 22 37 26 36 32 C35 36 27 32 25 23 Z"
                  fill="url(#bf-inner-light)"
                  opacity="0.8"
                />
              </g>

              {/* Body */}
              <ellipse cx="22" cy="21" rx="1.8" ry="8" fill={bodyColor} />
              <circle cx="22" cy="11" r="2" fill={bodyColor} />
              <path
                d="M21 10 Q17 4 15 5"
                stroke={bodyColor}
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M23 10 Q27 4 29 5"
                stroke={bodyColor}
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        );
      })}

      {/* Global Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="bf-emerald" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="60%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          <linearGradient id="bf-cyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="60%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <linearGradient id="bf-coral" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="60%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>

          <linearGradient id="bf-purple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="60%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>

          <linearGradient id="bf-amber" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="60%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          <linearGradient id="bf-inner-light" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fef08a" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FloatingButterflies;
