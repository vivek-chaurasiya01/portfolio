'use client';
import React, { useEffect, useState } from 'react';

const SpiderAndWeb = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 right-0 pointer-events-none z-30 overflow-hidden select-none w-64 h-80">
      <style jsx global>{`
        /* Spider silk drop and lunge animation */
        @keyframes spider-hunt {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          20% {
            transform: translateY(25px) rotate(3deg);
          }
          40% {
            /* Sitting waiting on web */
            transform: translateY(15px) rotate(-2deg);
          }
          55% {
            /* Ready to strike! legs tense */
            transform: translateY(40px) scale(1.05) rotate(5deg);
          }
          60% {
            /* LUNGE ATTACK towards the butterfly! */
            transform: translate(-35px, 95px) scale(1.25) rotate(-25deg);
          }
          65% {
            /* Missed! Recoiling back slightly */
            transform: translate(-15px, 60px) scale(1.1) rotate(10deg);
          }
          80% {
            /* Climbing back up the thread */
            transform: translateY(20px) rotate(-4deg);
          }
        }

        /* Spider Silk line expansion */
        @keyframes silk-stretch {
          0%, 100% {
            y2: 95;
          }
          20% {
            y2: 120;
          }
          40% {
            y2: 110;
          }
          55% {
            y2: 135;
          }
          60% {
            y2: 190;
            x2: 125;
          }
          65% {
            y2: 155;
            x2: 145;
          }
          80% {
            y2: 115;
            x2: 160;
          }
        }

        /* Spider leg twitching */
        @keyframes leg-twitch-left {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes leg-twitch-right {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg); }
        }

        .spider-container {
          transform-origin: 160px 0px;
          animation: spider-hunt 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .spider-leg-l {
          transform-origin: 160px 105px;
          animation: leg-twitch-left 0.4s ease-in-out infinite alternate;
        }
        .spider-leg-r {
          transform-origin: 160px 105px;
          animation: leg-twitch-right 0.4s ease-in-out infinite alternate;
        }
      `}</style>

      <svg width="256" height="320" viewBox="0 0 256 320" fill="none">
        <defs>
          <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#059669" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="spiderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="70%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <filter id="spiderGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#059669" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* --- SPIDER WEB (TOP-RIGHT CORNER) --- */}
        <g stroke="url(#webGrad)" strokeWidth="1.2" opacity="0.85">
          {/* Main radial anchor lines radiating from (230, 15) */}
          <line x1="230" y1="15" x2="60" y2="20" />
          <line x1="230" y1="15" x2="85" y2="70" />
          <line x1="230" y1="15" x2="120" y2="120" />
          <line x1="230" y1="15" x2="160" y2="160" />
          <line x1="230" y1="15" x2="205" y2="195" />
          <line x1="230" y1="15" x2="245" y2="210" />

          {/* Web Spiral Arc 1 (Inner) */}
          <path d="M 180 18 Q 185 45 200 60 Q 215 75 235 78" fill="none" strokeWidth="1" />
          
          {/* Web Spiral Arc 2 */}
          <path d="M 140 19 Q 150 65 175 95 Q 200 120 238 125" fill="none" strokeWidth="1" />

          {/* Web Spiral Arc 3 */}
          <path d="M 100 20 Q 115 80 150 125 Q 185 155 240 165" fill="none" strokeWidth="1" />

          {/* Web Spiral Arc 4 (Outer) */}
          <path d="M 70 20 Q 90 95 130 145 Q 170 180 242 205" fill="none" strokeWidth="1" />
        </g>

        {/* --- HANGING SILK THREAD --- */}
        <line
          x1="160"
          y1="0"
          x2="160"
          y2="100"
          stroke="#059669"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          opacity="0.75"
        />

        {/* --- THE SPIDER (MAKDI) --- */}
        <g className="spider-container" filter="url(#spiderGlow)">
          
          {/* Silk thread connected to spider's body */}
          <line x1="160" y1="0" x2="160" y2="102" stroke="#059669" strokeWidth="1" opacity="0.6" />

          {/* Left Legs (4 legs) */}
          <g className="spider-leg-l" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" fill="none">
            {/* Front Leg 1 */}
            <path d="M 158 100 Q 138 85 125 70" />
            {/* Leg 2 */}
            <path d="M 157 103 Q 132 95 120 92" />
            {/* Leg 3 */}
            <path d="M 157 106 Q 132 112 122 120" />
            {/* Back Leg 4 */}
            <path d="M 158 109 Q 138 122 128 138" />
          </g>

          {/* Right Legs (4 legs) */}
          <g className="spider-leg-r" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" fill="none">
            {/* Front Leg 1 */}
            <path d="M 162 100 Q 182 85 195 70" />
            {/* Leg 2 */}
            <path d="M 163 103 Q 188 95 200 92" />
            {/* Leg 3 */}
            <path d="M 163 106 Q 188 112 198 120" />
            {/* Back Leg 4 */}
            <path d="M 162 109 Q 182 122 192 138" />
          </g>

          {/* Spider Abdomen (Back Body) */}
          <ellipse cx="160" cy="114" rx="7.5" ry="10.5" fill="url(#spiderGrad)" />
          
          {/* Pattern on Abdomen (Emerald Tech Stripe) */}
          <ellipse cx="160" cy="114" rx="3.5" ry="6" fill="#059669" opacity="0.75" />
          <circle cx="160" cy="114" r="1.5" fill="#fef08a" />

          {/* Spider Cephalothorax (Head/Chest) */}
          <circle cx="160" cy="102" r="5.5" fill="#0f172a" />

          {/* Glowing Eyes */}
          <circle cx="158" cy="99" r="1.2" fill="#ef4444" />
          <circle cx="162" cy="99" r="1.2" fill="#ef4444" />
          <circle cx="156" cy="101" r="0.9" fill="#10b981" />
          <circle cx="164" cy="101" r="0.9" fill="#10b981" />

          {/* Spider Fangs (Chelicerae) */}
          <path d="M 158.5 97 L 157.5 93" stroke="#e2e8f0" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 161.5 97 L 162.5 93" stroke="#e2e8f0" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export default SpiderAndWeb;
