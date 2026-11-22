"use client";

import React, { useEffect, useRef } from "react";

interface FloatingSnippet {
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  fontSize: number;
  color: string;
  category: "code" | "game";
}

export function GamingCodingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mouse tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes for gaming/neural network
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? "#A855F7" : Math.random() > 0.5 ? "#C084FC" : "#818CF8",
      pulse: Math.random() * Math.PI,
    }));

    // Gaming & Coding text snippets drifting through the space
    const codeSnippets = [
      { text: "const dev = new NeuralModel();", cat: "code" },
      { text: "FPS: 144 // PING: 12ms", cat: "game" },
      { text: "torch.cuda.is_available() -> True", cat: "code" },
      { text: "[STATUS: OVERCLOCKED 4.8GHz]", cat: "game" },
      { text: "loss: 0.0018 // epoch: 42/100", cat: "code" },
      { text: "sys.exec(0x7F_AI_CORE)", cat: "code" },
      { text: "LEVEL 99 // EXP: 99.8%", cat: "game" },
      { text: "while (alive) { innovate(); }", cat: "code" },
      { text: "HEALTH: [■■■■■■■■■■] 100%", cat: "game" },
      { text: "FastAPI.get('/v1/predict')", cat: "code" },
      { text: "COMBO x4 // ULTRA KILL", cat: "game" },
      { text: "import { Intelligence } from 'dev.ai'", cat: "code" },
      { text: "[TARGET: LOCKED] // OCR_ACTIVE", cat: "game" },
      { text: "git push origin master --force", cat: "code" },
      { text: "GPU: RTX_ON // TEMP: 58°C", cat: "game" },
      { text: "optimizer.zero_grad()", cat: "code" },
    ];

    const snippets: FloatingSnippet[] = codeSnippets.map((item, idx) => ({
      text: item.text,
      x: Math.random() * width,
      y: (height / codeSnippets.length) * idx + Math.random() * 50,
      speed: Math.random() * 0.35 + 0.15,
      opacity: Math.random() * 0.35 + 0.1,
      fontSize: Math.random() * 2 + 10,
      color: item.cat === "game" ? "#C084FC" : "#A855F7",
      category: item.cat as "code" | "game",
    }));

    // Grid animation offset
    let gridOffset = 0;

    // Render loop
    const render = () => {
      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // 1. Deep Black & Purple Vignette Background
      ctx.fillStyle = "#07050E"; // Deep obsidian black
      ctx.fillRect(0, 0, width, height);

      // Radial mouse glow (ambient purple aura)
      const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 450);
      mouseGlow.addColorStop(0, "rgba(168, 85, 247, 0.18)"); // Neon purple center
      mouseGlow.addColorStop(0.5, "rgba(88, 28, 135, 0.07)"); // Dark violet mid
      mouseGlow.addColorStop(1, "rgba(7, 5, 14, 0)"); // Fade to obsidian
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, width, height);

      // Top corner ambient deep purple glow
      const ambientGlow = ctx.createRadialGradient(width * 0.8, height * 0.15, 0, width * 0.8, height * 0.15, 600);
      ambientGlow.addColorStop(0, "rgba(147, 51, 234, 0.12)");
      ambientGlow.addColorStop(1, "rgba(7, 5, 14, 0)");
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Gaming Cyber Perspective Grid at the bottom
      if (!prefersReducedMotion) {
        gridOffset = (gridOffset + 0.4) % 40;
      }
      ctx.save();
      ctx.strokeStyle = "rgba(147, 51, 234, 0.12)"; // Subtle neon purple lines
      ctx.lineWidth = 1;

      // Vertical perspective lines converging to horizon
      const horizonY = height * 0.55;
      const fovX = width * 0.5;

      for (let x = -width; x < width * 2; x += 70) {
        ctx.beginPath();
        ctx.moveTo(fovX + (x - fovX) * 0.2, horizonY);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal grid lines scrolling forward
      for (let y = horizonY; y < height; y += 30) {
        const adjustedY = y + (gridOffset * (y - horizonY)) / (height - horizonY);
        if (adjustedY <= height) {
          const alpha = ((adjustedY - horizonY) / (height - horizonY)) * 0.22;
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(0, adjustedY);
          ctx.lineTo(width, adjustedY);
          ctx.stroke();
        }
      }
      ctx.restore();

      // 3. Floating Coding & Gaming Monospace Snippets
      ctx.save();
      ctx.font = "11px 'Geist Mono', 'Courier New', monospace";
      for (const s of snippets) {
        if (!prefersReducedMotion) {
          s.y -= s.speed;
          if (s.y < -30) {
            s.y = height + 20;
            s.x = Math.random() * (width - 250) + 20;
          }
        }

        ctx.fillStyle = s.category === "game" ? "rgba(192, 132, 252, 0.28)" : "rgba(168, 85, 247, 0.22)";
        ctx.fillText(s.text, s.x, s.y);

        // Small indicator dot next to snippet
        ctx.fillStyle = s.category === "game" ? "rgba(217, 70, 239, 0.5)" : "rgba(168, 85, 247, 0.5)";
        ctx.beginPath();
        ctx.arc(s.x - 7, s.y - 3.5, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 4. Interactive Particle Neural Network (Gaming nodes + connecting vectors)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += 0.03;

          // Bounce off boundaries
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Gentle mouse push (cursor interaction)
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }
        }

        // Draw connections between nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const dist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.25;
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw glowing particle node
        const glowRadius = p.radius + Math.sin(p.pulse) * 0.6;
        ctx.fillStyle = p.color;
        ctx.shadowColor = "#A855F7";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(glowRadius, 1), 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // 5. Subtle scanline CRT raster overlay
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      for (let sl = 0; sl < height; sl += 4) {
        ctx.fillRect(0, sl, width, 1);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
