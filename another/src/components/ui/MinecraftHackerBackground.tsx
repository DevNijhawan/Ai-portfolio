"use client";

import React, { useEffect, useRef } from "react";

interface VoxelBlock {
  x: number;
  y: number;
  z: number;
  size: number;
  vx: number;
  vy: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  type: "obsidian" | "crying_obsidian" | "amethyst" | "emerald";
}

interface XpOrb {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  pulse: number;
  color: string;
}

export function MinecraftHackerBackground() {
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

    // Mouse coordinates
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

    // 1. Matrix Digital Rain: Enchanting Glyphs + Neon Green & Purple Hacker Code
    const runeGlyphs = [
      "ᔑ", "ʖ", "ᓵ", "⎓", "⊣", "⍑", "╎", "ꖌ", "󠁬", "ᒲ", "𝙹", " ", "ᑑ", "∷", "ᓭ", "ℸ", "⚍", "∴", "||", "⨅",
      "0", "1", "0x7F", "0xFF", "ROOT", "AI", "NET", "ACK", "NULL", "SYS", "XP", "EMERALD", "0x00FF"
    ];

    const colWidth = 24;
    const colCount = Math.floor(width / colWidth);
    const rainDrops: {
      y: number;
      speed: number;
      chars: string[];
      charChangeTimer: number;
      isNeonGreen: boolean;
    }[] = [];

    for (let i = 0; i < colCount; i++) {
      const dropChars: string[] = [];
      const charCount = Math.floor(Math.random() * 9) + 7;
      for (let c = 0; c < charCount; c++) {
        dropChars.push(runeGlyphs[Math.floor(Math.random() * runeGlyphs.length)]);
      }
      rainDrops.push({
        y: Math.random() * -height,
        speed: Math.random() * 2.2 + 1.4,
        chars: dropChars,
        charChangeTimer: Math.floor(Math.random() * 15),
        isNeonGreen: i % 3 === 0, // 33% columns are radiant Matrix Neon Green!
      });
    }

    // 2. Floating 3D Voxel Cubes (Obsidian, Crying Obsidian, Amethyst, and Neon Emerald Blocks)
    const voxelCount = Math.min(Math.floor(width / 140), 12);
    const voxels: VoxelBlock[] = Array.from({ length: voxelCount }, (_, idx) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 220 + 40,
      size: Math.random() * 20 + 20,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      rotX: Math.random() * Math.PI * 2,
      rotY: Math.random() * Math.PI * 2,
      rotZ: Math.random() * Math.PI * 2,
      vRotX: (Math.random() - 0.5) * 0.018,
      vRotY: (Math.random() - 0.5) * 0.018,
      type: idx % 3 === 0 ? "emerald" : idx % 2 === 0 ? "crying_obsidian" : "obsidian",
    }));

    // 3. Minecraft XP Orbs (Radiant Neon Green & Gold pulsing spheres/pixels)
    const xpOrbsCount = 28;
    const xpOrbs: XpOrb[] = Array.from({ length: xpOrbsCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 2.5,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -(Math.random() * 0.9 + 0.4), // Floating upward
      pulse: Math.random() * Math.PI * 2,
      color: Math.random() > 0.3 ? "#00FF66" : "#A3E635", // Electric Neon Green or XP Gold-Green
    }));

    // 4. Nether & Ender Portal Swirling Purple Motes
    const portalMotesCount = 55;
    const portalMotes = Array.from({ length: portalMotesCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1.2,
      vy: -(Math.random() * 1.3 + 0.5),
      vx: (Math.random() - 0.5) * 0.8,
      opacity: Math.random() * 0.8 + 0.2,
      wiggle: Math.random() * Math.PI * 2,
      color: Math.random() > 0.5 ? "#C084FC" : "#D946EF",
    }));

    // 5. Floating Hacker Shell Console Messages in Neon Green & Purple
    const hackerShells = [
      { text: "root@minecraft-nether:~$ ./spawn_agent --matrix-neon", y: height * 0.16, x: 40, speed: 0.18, color: "#00FF66" },
      { text: "[EMERALD_FIREWALL]: ACTIVE // ZERO_DAY_DEFENSE", y: height * 0.34, x: width * 0.58, speed: 0.22, color: "#10B981" },
      { text: "XP_ORB_HARVEST: +99,999 XP // LEVEL: 99", y: height * 0.56, x: 70, speed: 0.16, color: "#00FF66" },
      { text: "ENDER_CHEST.decrypt(0xNEON_KEY) -> ACCESS_GRANTED", y: height * 0.74, x: width * 0.52, speed: 0.24, color: "#C084FC" },
      { text: "torch.cuda.set_device('RTX_OVERCLOCK_TITAN') [144 FPS]", y: height * 0.90, x: width * 0.2, speed: 0.19, color: "#00FF66" },
    ];

    // Helper: 3D to 2D projection
    const project = (x: number, y: number, z: number, cx: number, cy: number, scale: number) => {
      const fov = 400;
      const factor = fov / (fov + z);
      return {
        px: cx + x * factor * scale,
        py: cy + y * factor * scale,
      };
    };

    // Draw single 3D isometric voxel cube
    const drawVoxelCube = (v: VoxelBlock) => {
      ctx.save();
      const s = v.size;
      const cosY = Math.cos(v.rotY);
      const sinY = Math.sin(v.rotY);
      const cosX = Math.cos(v.rotX);
      const sinX = Math.sin(v.rotX);

      const localVerts = [
        [-s, -s, -s],
        [s, -s, -s],
        [s, s, -s],
        [-s, s, -s],
        [-s, -s, s],
        [s, -s, s],
        [s, s, s],
        [-s, s, s],
      ];

      const rotatedVerts = localVerts.map(([vx, vy, vz]) => {
        const x1 = vx * cosY + vz * sinY;
        const z1 = -vx * sinY + vz * cosY;
        const y2 = vy * cosX - z1 * sinX;
        const z2 = vy * sinX + z1 * cosX;
        return [x1, y2, z2];
      });

      const pts = rotatedVerts.map(([rx, ry, rz]) => project(rx, ry, rz + v.z, v.x, v.y, 1));

      const faces = [
        [0, 1, 2, 3],
        [5, 4, 7, 6],
        [4, 0, 3, 7],
        [1, 5, 6, 2],
        [4, 5, 1, 0],
        [3, 2, 6, 7],
      ];

      let faceFill = "rgba(18, 11, 32, 0.7)";
      let strokeColor = "rgba(168, 85, 247, 0.4)";

      if (v.type === "emerald") {
        faceFill = "rgba(6, 40, 24, 0.75)";
        strokeColor = "#00FF66"; // Radiant Neon Green edges
      } else if (v.type === "crying_obsidian") {
        faceFill = "rgba(25, 12, 45, 0.75)";
        strokeColor = "#D946EF";
      } else if (v.type === "amethyst") {
        faceFill = "rgba(40, 18, 70, 0.65)";
        strokeColor = "#C084FC";
      }

      for (const face of faces) {
        ctx.beginPath();
        ctx.moveTo(pts[face[0]].px, pts[face[0]].py);
        for (let i = 1; i < face.length; i++) {
          ctx.lineTo(pts[face[i]].px, pts[face[i]].py);
        }
        ctx.closePath();
        ctx.fillStyle = faceFill;
        ctx.fill();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = v.type === "emerald" ? 1.6 : 1.2;
        ctx.stroke();
      }

      // Neon center pulse
      if (v.type === "emerald") {
        ctx.fillStyle = "#00FF66";
        ctx.shadowColor = "#00FF66";
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(v.x, v.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (v.type === "crying_obsidian") {
        ctx.fillStyle = "#D946EF";
        ctx.shadowColor = "#D946EF";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(v.x, v.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.restore();
    };

    // Main render loop
    const render = () => {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // 1. Deep Obsidian Void
      ctx.fillStyle = "#050308";
      ctx.fillRect(0, 0, width, height);

      // Dual Aurora Mouse Glow: Purple core with Neon Green emerald corona
      const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 490);
      mouseGlow.addColorStop(0, "rgba(168, 85, 247, 0.22)"); // Nether purple center
      mouseGlow.addColorStop(0.35, "rgba(16, 185, 129, 0.12)"); // Radiant Neon Green corona
      mouseGlow.addColorStop(0.65, "rgba(0, 255, 102, 0.05)"); // Electric matrix fringe
      mouseGlow.addColorStop(1, "rgba(5, 3, 8, 0)");
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, width, height);

      // Top corner ambient neon green & purple lighting
      const ambientGreen = ctx.createRadialGradient(width * 0.15, height * 0.2, 0, width * 0.15, height * 0.2, 500);
      ambientGreen.addColorStop(0, "rgba(0, 255, 102, 0.08)");
      ambientGreen.addColorStop(1, "rgba(5, 3, 8, 0)");
      ctx.fillStyle = ambientGreen;
      ctx.fillRect(0, 0, width, height);

      // 2. Matrix Digital Rain (Neon Green & Enchanted Purple)
      ctx.save();
      ctx.font = "12px 'Geist Mono', 'Courier New', monospace";
      for (let i = 0; i < rainDrops.length; i++) {
        const drop = rainDrops[i];
        const colX = i * colWidth;

        if (!prefersReducedMotion) {
          drop.y += drop.speed;
          if (drop.y > height + 150) {
            drop.y = -Math.random() * 200;
            drop.speed = Math.random() * 2.2 + 1.4;
          }
          drop.charChangeTimer--;
          if (drop.charChangeTimer <= 0) {
            drop.chars[0] = runeGlyphs[Math.floor(Math.random() * runeGlyphs.length)];
            drop.charChangeTimer = Math.floor(Math.random() * 15) + 5;
          }
        }

        for (let c = 0; c < drop.chars.length; c++) {
          const charY = drop.y - c * 16;
          if (charY > -20 && charY < height + 20) {
            const isHead = c === 0;
            const alpha = Math.max(0, 1 - c / drop.chars.length) * 0.42;

            if (isHead) {
              ctx.fillStyle = drop.isNeonGreen ? "#00FF66" : "#F3E8FF";
              ctx.shadowColor = drop.isNeonGreen ? "#00FF66" : "#C084FC";
              ctx.shadowBlur = 9;
            } else {
              ctx.fillStyle = drop.isNeonGreen
                ? `rgba(0, 255, 102, ${alpha})`
                : `rgba(168, 85, 247, ${alpha})`;
              ctx.shadowBlur = 0;
            }
            ctx.fillText(drop.chars[c], colX, charY);
          }
        }
      }
      ctx.restore();

      // 3. Render Floating 3D Voxel Blocks
      for (const v of voxels) {
        if (!prefersReducedMotion) {
          v.x += v.vx;
          v.y += v.vy;
          v.rotX += v.vRotX;
          v.rotY += v.vRotY;

          if (v.x < -60) v.x = width + 60;
          if (v.x > width + 60) v.x = -60;
          if (v.y < -60) v.y = height + 60;
          if (v.y > height + 60) v.y = -60;

          // Mouse push
          const mdx = mouseX - v.x;
          const mdy = mouseY - v.y;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            v.x -= (mdx / dist) * force * 1.8;
            v.y -= (mdy / dist) * force * 1.8;
          }
        }
        drawVoxelCube(v);
      }

      // 4. Render Minecraft XP Orbs (Pulsing Neon Green & Lime)
      ctx.save();
      for (const orb of xpOrbs) {
        if (!prefersReducedMotion) {
          orb.y += orb.vy;
          orb.pulse += 0.08;
          orb.x += orb.vx + Math.sin(orb.pulse) * 0.5;

          if (orb.y < -20) {
            orb.y = height + 20;
            orb.x = Math.random() * width;
          }
        }

        const orbSize = orb.size + Math.sin(orb.pulse) * 1.2;
        ctx.fillStyle = orb.color;
        ctx.shadowColor = "#00FF66";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, Math.max(orbSize, 1.5), 0, Math.PI * 2);
        ctx.fill();

        // Inner glowing white core of XP orb
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, Math.max(orbSize * 0.45, 0.8), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 5. Render Nether Portal Purple Motes
      ctx.save();
      for (const mote of portalMotes) {
        if (!prefersReducedMotion) {
          mote.y += mote.vy;
          mote.wiggle += 0.06;
          mote.x += mote.vx + Math.sin(mote.wiggle) * 0.4;

          if (mote.y < -10) {
            mote.y = height + 10;
            mote.x = Math.random() * width;
          }
        }

        ctx.fillStyle = mote.color;
        ctx.shadowColor = mote.color;
        ctx.shadowBlur = 7;
        ctx.globalAlpha = mote.opacity;
        ctx.fillRect(mote.x, mote.y, mote.size, mote.size);
      }
      ctx.restore();

      // 6. Floating Hacker Shell Console Messages in Neon Green & Purple
      ctx.save();
      ctx.font = "11px 'Geist Mono', 'Courier New', monospace";
      for (const shell of hackerShells) {
        if (!prefersReducedMotion) {
          shell.x -= shell.speed;
          if (shell.x < -380) {
            shell.x = width + 50;
          }
        }

        ctx.fillStyle = shell.color;
        ctx.shadowColor = shell.color;
        ctx.shadowBlur = 5;
        ctx.fillText(shell.text, shell.x, shell.y);

        // Terminal cursor indicator
        ctx.fillStyle = "#00FF66";
        ctx.fillRect(shell.x - 9, shell.y - 8, 3, 10);
      }
      ctx.restore();

      // 7. Subtle CRT scanline overlay
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
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
