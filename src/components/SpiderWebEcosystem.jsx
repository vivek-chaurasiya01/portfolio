'use client';
import React, { useEffect, useRef } from 'react';

const SpiderWebEcosystem = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color palettes for realistic beautiful butterflies
    const butterflyColors = [
      { main: '#047857', light: '#10b981', secondary: '#34d399', edge: '#064e3b', spots: '#fef08a' }, // Emerald Monarch
      { main: '#0284c7', light: '#38bdf8', secondary: '#7dd3fc', edge: '#0c4a6e', spots: '#ffffff' }, // Blue Morpho
      { main: '#e11d48', light: '#fb7185', secondary: '#fbcfe8', edge: '#881337', spots: '#fef08a' }, // Crimson Rose
      { main: '#7e22ce', light: '#c084fc', secondary: '#e9d5ff', edge: '#581c87', spots: '#fef08a' }, // Purple Emperor
      { main: '#d97706', light: '#fbbf24', secondary: '#fef08a', edge: '#78350f', spots: '#ffffff' }  // Golden Swallowtail
    ];

    // Web Anchor Nodes scattered across screen corners and borders
    const webNodes = [
      { x: 0, y: 0, r: 280, color: 'rgba(5, 150, 105, 0.08)' },
      { x: width, y: 0, r: 340, color: 'rgba(16, 185, 129, 0.08)' },
      { x: 0, y: height, r: 260, color: 'rgba(14, 165, 233, 0.06)' },
      { x: width, y: height, r: 320, color: 'rgba(5, 150, 105, 0.07)' },
      { x: width * 0.5, y: 0, r: 220, color: 'rgba(5, 150, 105, 0.06)' }
    ];

    // Multiple Spiders stationed across the webs
    const spiders = [
      {
        homeX: width * 0.88,
        homeY: height * 0.15,
        x: width * 0.88,
        y: height * 0.15,
        vx: 0,
        vy: 0,
        size: 16,
        state: 'idle', // 'idle' | 'stalking' | 'attacking' | 'returning' | 'eating'
        targetButterfly: null,
        eatTimer: 0,
        legPhase: 0,
        color: '#0f172a'
      },
      {
        homeX: width * 0.12,
        homeY: height * 0.18,
        x: width * 0.12,
        y: height * 0.18,
        vx: 0,
        vy: 0,
        size: 15,
        state: 'idle',
        targetButterfly: null,
        eatTimer: 0,
        legPhase: 0.5,
        color: '#0f172a'
      },
      {
        homeX: width * 0.82,
        homeY: height * 0.82,
        x: width * 0.82,
        y: height * 0.82,
        vx: 0,
        vy: 0,
        size: 17,
        state: 'idle',
        targetButterfly: null,
        eatTimer: 0,
        legPhase: 1.2,
        color: '#064e3b'
      },
      {
        homeX: width * 0.15,
        homeY: height * 0.78,
        x: width * 0.15,
        y: height * 0.78,
        vx: 0,
        vy: 0,
        size: 14,
        state: 'idle',
        targetButterfly: null,
        eatTimer: 0,
        legPhase: 0.8,
        color: '#0f172a'
      },
      {
        homeX: width * 0.52,
        homeY: height * 0.08,
        x: width * 0.52,
        y: height * 0.08,
        vx: 0,
        vy: 0,
        size: 15,
        state: 'idle',
        targetButterfly: null,
        eatTimer: 0,
        legPhase: 1.5,
        color: '#134e4a'
      }
    ];

    // Butterflies array
    const BUTTERFLY_COUNT = 9;
    const butterflies = [];

    function createButterfly(customX, customY) {
      const palette = butterflyColors[Math.floor(Math.random() * butterflyColors.length)];
      return {
        x: customX !== undefined ? customX : Math.random() * width,
        y: customY !== undefined ? customY : Math.random() * height,
        vx: (Math.random() - 0.5) * 1.8,
        vy: (Math.random() - 0.5) * 1.8,
        size: 14 + Math.random() * 8,
        palette,
        flapSpeed: 0.15 + Math.random() * 0.1,
        flapPhase: Math.random() * Math.PI * 2,
        alive: true,
        alpha: 1,
        caughtBy: null
      };
    }

    for (let i = 0; i < BUTTERFLY_COUNT; i++) {
      butterflies.push(createButterfly());
    }

    // DRAW BACKGROUND WEB PATTERNS
    function drawBackgroundWebs() {
      // Connect nodes with subtle silky polygon mesh lines
      ctx.strokeStyle = 'rgba(5, 150, 105, 0.055)';
      ctx.lineWidth = 1;

      for (let i = 0; i < webNodes.length; i++) {
        const node = webNodes[i];
        const radCount = 9;
        const rings = 7;

        for (let a = 0; a < radCount; a++) {
          const angle = (a / radCount) * Math.PI * 2;
          const endX = node.x + Math.cos(angle) * node.r;
          const endY = node.y + Math.sin(angle) * node.r;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(endX, endY);
          ctx.stroke();

          // Connect concentric spiral threads
          for (let r = 1; r <= rings; r++) {
            const rad = (node.r / rings) * r;
            const nextAngle = ((a + 1) / radCount) * Math.PI * 2;

            const p1x = node.x + Math.cos(angle) * rad;
            const p1y = node.y + Math.sin(angle) * rad;
            const p2x = node.x + Math.cos(nextAngle) * rad;
            const p2y = node.y + Math.sin(nextAngle) * rad;

            ctx.beginPath();
            ctx.moveTo(p1x, p1y);
            ctx.lineTo(p2x, p2y);
            ctx.stroke();
          }
        }
      }
    }

    // DRAW HIGH-DETAIL REALISTIC BUTTERFLY (MONARCH DUAL WINGS & SPOTS)
    function drawButterfly(b) {
      if (!b.alive && b.alpha <= 0) return;

      ctx.save();
      ctx.translate(b.x, b.y);

      const angle = Math.atan2(b.vy, b.vx);
      ctx.rotate(angle + Math.PI / 2);

      b.flapPhase += b.flapSpeed;
      const flapScale = Math.sin(b.flapPhase);
      ctx.globalAlpha = Math.max(0, b.alpha);

      const s = b.size;

      function drawWingSide(side) {
        ctx.save();
        ctx.scale(flapScale * side, 1);

        // 1. Forewing Outer Dark Silhouette
        ctx.fillStyle = b.palette.edge;
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.1);
        ctx.bezierCurveTo(-s * 0.8, -s * 1.5, -s * 2.2, -s * 1.2, -s * 1.8, -s * 0.1);
        ctx.bezierCurveTo(-s * 1.5, s * 0.5, -s * 0.6, s * 0.3, 0, 0);
        ctx.fill();

        // Forewing Main Color
        ctx.fillStyle = b.palette.main;
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.1);
        ctx.bezierCurveTo(-s * 0.7, -s * 1.3, -s * 1.9, -s * 1.0, -s * 1.5, -s * 0.1);
        ctx.bezierCurveTo(-s * 1.2, s * 0.35, -s * 0.5, s * 0.25, 0, 0);
        ctx.fill();

        // Forewing Inner Ray/Highlight
        ctx.fillStyle = b.palette.light;
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.05);
        ctx.bezierCurveTo(-s * 0.5, -s * 0.9, -s * 1.4, -s * 0.7, -s * 1.1, -s * 0.1);
        ctx.bezierCurveTo(-s * 0.8, s * 0.2, -s * 0.3, s * 0.15, 0, 0);
        ctx.fill();

        // Forewing Veins
        ctx.strokeStyle = b.palette.edge;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-s * 1.4, -s * 0.6);
        ctx.moveTo(0, 0);
        ctx.lineTo(-s * 1.2, -s * 0.2);
        ctx.stroke();

        // Forewing Margin Spots
        ctx.fillStyle = b.palette.spots;
        ctx.beginPath();
        ctx.arc(-s * 1.6, -s * 0.8, s * 0.1, 0, Math.PI * 2);
        ctx.arc(-s * 1.7, -s * 0.4, s * 0.08, 0, Math.PI * 2);
        ctx.arc(-s * 1.5, -s * 0.1, s * 0.08, 0, Math.PI * 2);
        ctx.fill();

        // 2. Hindwing (Lower wing)
        ctx.fillStyle = b.palette.edge;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.1);
        ctx.bezierCurveTo(-s * 0.5, s * 0.3, -s * 1.5, s * 0.4, -s * 1.1, s * 1.2);
        ctx.bezierCurveTo(-s * 0.7, s * 1.6, -s * 0.2, s * 1.1, 0, s * 0.6);
        ctx.fill();

        ctx.fillStyle = b.palette.main;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.1);
        ctx.bezierCurveTo(-s * 0.4, s * 0.3, -s * 1.2, s * 0.4, -s * 0.9, s * 1.0);
        ctx.bezierCurveTo(-s * 0.5, s * 1.3, -s * 0.15, s * 0.9, 0, s * 0.5);
        ctx.fill();

        ctx.fillStyle = b.palette.secondary;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.15);
        ctx.bezierCurveTo(-s * 0.3, s * 0.3, -s * 0.7, s * 0.4, -s * 0.5, s * 0.8);
        ctx.bezierCurveTo(-s * 0.3, s * 0.9, -s * 0.1, s * 0.7, 0, s * 0.4);
        ctx.fill();

        ctx.fillStyle = b.palette.spots;
        ctx.beginPath();
        ctx.arc(-s * 0.9, s * 1.0, s * 0.08, 0, Math.PI * 2);
        ctx.arc(-s * 0.6, s * 1.2, s * 0.07, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      drawWingSide(1);
      drawWingSide(-1);

      // Body (Thorax & Abdomen)
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.ellipse(0, s * 0.15, s * 0.14, s * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();

      // Head
      ctx.fillStyle = '#020617';
      ctx.beginPath();
      ctx.arc(0, -s * 0.45, s * 0.16, 0, Math.PI * 2);
      ctx.fill();

      // Glowing Eyes
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(-s * 0.08, -s * 0.48, s * 0.05, 0, Math.PI * 2);
      ctx.arc(s * 0.08, -s * 0.48, s * 0.05, 0, Math.PI * 2);
      ctx.fill();

      // Antennae with round tips
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.55);
      ctx.bezierCurveTo(-s * 0.2, -s * 0.85, -s * 0.4, -s * 1.0, -s * 0.5, -s * 0.95);
      ctx.moveTo(0, -s * 0.55);
      ctx.bezierCurveTo(s * 0.2, -s * 0.85, s * 0.4, -s * 1.0, s * 0.5, -s * 0.95);
      ctx.stroke();

      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(-s * 0.5, -s * 0.95, s * 0.06, 0, Math.PI * 2);
      ctx.arc(s * 0.5, -s * 0.95, s * 0.06, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // DRAW A SPIDER
    function drawSpider(sp) {
      ctx.save();

      // Draw Silk Thread from Home to Spider
      ctx.strokeStyle = 'rgba(5, 150, 105, 0.45)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 2]);
      ctx.beginPath();
      ctx.moveTo(sp.homeX, sp.homeY);
      ctx.lineTo(sp.x, sp.y);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.translate(sp.x, sp.y);

      // Facing angle towards target or home
      let faceAngle = 0;
      if (sp.state === 'attacking' && sp.targetButterfly) {
        faceAngle = Math.atan2(sp.targetButterfly.y - sp.y, sp.targetButterfly.x - sp.x) - Math.PI / 2;
      } else if (sp.state === 'returning') {
        faceAngle = Math.atan2(sp.homeY - sp.y, sp.homeX - sp.x) - Math.PI / 2;
      }
      ctx.rotate(faceAngle);

      sp.legPhase += 0.15;
      const legWiggle = Math.sin(sp.legPhase) * 4;

      const sz = sp.size;

      // Draw 8 Legs
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      // 4 Left Legs
      const leftAngles = [-0.9, -0.4, 0.3, 0.8];
      leftAngles.forEach((ang, idx) => {
        ctx.beginPath();
        const startX = -sz * 0.4;
        const startY = sz * 0.1 + idx * 2;
        const midX = -sz * 1.5 + Math.cos(ang) * 4 + legWiggle;
        const midY = startY + Math.sin(ang) * sz * 1.4;
        const tipX = midX - sz * 0.8;
        const tipY = midY + (idx < 2 ? -sz * 0.6 : sz * 0.6);

        ctx.moveTo(startX, startY);
        ctx.lineTo(midX, midY);
        ctx.lineTo(tipX, tipY);
        ctx.stroke();
      });

      // 4 Right Legs
      const rightAngles = [-0.9, -0.4, 0.3, 0.8];
      rightAngles.forEach((ang, idx) => {
        ctx.beginPath();
        const startX = sz * 0.4;
        const startY = sz * 0.1 + idx * 2;
        const midX = sz * 1.5 - Math.cos(ang) * 4 - legWiggle;
        const midY = startY + Math.sin(ang) * sz * 1.4;
        const tipX = midX + sz * 0.8;
        const tipY = midY + (idx < 2 ? -sz * 0.6 : sz * 0.6);

        ctx.moveTo(startX, startY);
        ctx.lineTo(midX, midY);
        ctx.lineTo(tipX, tipY);
        ctx.stroke();
      });

      // Spider Abdomen (Back Body)
      ctx.fillStyle = sp.color;
      ctx.beginPath();
      ctx.ellipse(0, sz * 0.5, sz * 0.55, sz * 0.75, 0, 0, Math.PI * 2);
      ctx.fill();

      // Tech Stripe pattern on back
      ctx.fillStyle = '#059669';
      ctx.beginPath();
      ctx.ellipse(0, sz * 0.5, sz * 0.22, sz * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Spider Head
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(0, -sz * 0.25, sz * 0.4, 0, Math.PI * 2);
      ctx.fill();

      // Glowing Eyes
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(-sz * 0.16, -sz * 0.4, 1.6, 0, Math.PI * 2);
      ctx.arc(sz * 0.16, -sz * 0.4, 1.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(-sz * 0.26, -sz * 0.3, 1.2, 0, Math.PI * 2);
      ctx.arc(sz * 0.26, -sz * 0.3, 1.2, 0, Math.PI * 2);
      ctx.fill();

      // Eating Effect: Green Sparks
      if (sp.state === 'eating') {
        ctx.fillStyle = 'rgba(52, 211, 153, 0.7)';
        for (let i = 0; i < 4; i++) {
          const sparkAngle = Math.random() * Math.PI * 2;
          const dist = sz * 0.8 + Math.random() * 10;
          ctx.beginPath();
          ctx.arc(Math.cos(sparkAngle) * dist, Math.sin(sparkAngle) * dist, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    }

    // MAIN GAME LOOP / ANIMATION LOOP
    function loop() {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw web backgrounds
      drawBackgroundWebs();

      // 2. Update and Draw Butterflies
      butterflies.forEach((b) => {
        if (b.alive) {
          // Soft steering flutter
          b.vx += (Math.random() - 0.5) * 0.4;
          b.vy += (Math.random() - 0.5) * 0.4;

          // Velocity capping
          const speed = Math.hypot(b.vx, b.vy);
          if (speed > 2.2) {
            b.vx = (b.vx / speed) * 2.2;
            b.vy = (b.vy / speed) * 2.2;
          }

          b.x += b.vx;
          b.y += b.vy;

          // Screen boundaries wrap
          if (b.x < 30) { b.x = 30; b.vx *= -1; }
          if (b.x > width - 30) { b.x = width - 30; b.vx *= -1; }
          if (b.y < 30) { b.y = 30; b.vy *= -1; }
          if (b.y > height - 30) { b.y = height - 30; b.vy *= -1; }
        } else if (b.caughtBy) {
          // If caught, lock to spider's mouth and fade away
          b.x = b.caughtBy.x;
          b.y = b.caughtBy.y;
          b.alpha -= 0.025;
        }

        drawButterfly(b);
      });

      // 3. Update and Draw Spiders with Hunting AI
      spiders.forEach((sp) => {
        // STATE: IDLE -> look for nearby butterflies to stalk/catch
        if (sp.state === 'idle') {
          // Find closest alive butterfly within 260px
          let closest = null;
          let minDist = 260;

          butterflies.forEach((b) => {
            if (b.alive && !b.caughtBy) {
              const d = Math.hypot(b.x - sp.x, b.y - sp.y);
              if (d < minDist) {
                minDist = d;
                closest = b;
              }
            }
          });

          if (closest) {
            sp.targetButterfly = closest;
            sp.state = 'attacking';
          }
        }

        // STATE: ATTACKING -> fast lunge towards target
        if (sp.state === 'attacking' && sp.targetButterfly) {
          const dx = sp.targetButterfly.x - sp.x;
          const dy = sp.targetButterfly.y - sp.y;
          const dist = Math.hypot(dx, dy);

          // If target escaped too far, cancel and return home
          if (!sp.targetButterfly.alive || dist > 380) {
            sp.targetButterfly = null;
            sp.state = 'returning';
          } else if (dist < 22) {
            // CAUGHT! EAT THE BUTTERFLY!
            sp.targetButterfly.alive = false;
            sp.targetButterfly.caughtBy = sp;
            sp.state = 'eating';
            sp.eatTimer = 75; // 75 frames ~ 1.2 seconds of eating
          } else {
            // Fast leap
            sp.x += (dx / dist) * 4.2;
            sp.y += (dy / dist) * 4.2;
          }
        }

        // STATE: EATING -> Spider feasts, butterfly vanishes, and a NEW butterfly spawns
        if (sp.state === 'eating') {
          sp.eatTimer--;
          if (sp.eatTimer <= 0) {
            // Respawn a new butterfly far away from this spider
            const deadIndex = butterflies.indexOf(sp.targetButterfly);
            if (deadIndex !== -1) {
              const spawnSide = Math.random();
              const spawnX = spawnSide < 0.5 ? Math.random() * (width * 0.4) : width * 0.6 + Math.random() * (width * 0.4);
              const spawnY = Math.random() * height;
              butterflies[deadIndex] = createButterfly(spawnX, spawnY);
            }
            sp.targetButterfly = null;
            sp.state = 'returning';
          }
        }

        // STATE: RETURNING -> Spider climbs back to its web post
        if (sp.state === 'returning') {
          const dx = sp.homeX - sp.x;
          const dy = sp.homeY - sp.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 4) {
            sp.x = sp.homeX;
            sp.y = sp.homeY;
            sp.state = 'idle';
          } else {
            sp.x += (dx / dist) * 2.4;
            sp.y += (dy / dist) * 2.4;
          }
        }

        drawSpider(sp);
      });

      animationFrameId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 select-none"
    />
  );
};

export default SpiderWebEcosystem;

