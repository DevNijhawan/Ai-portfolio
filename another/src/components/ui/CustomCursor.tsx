"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("cursor-pointer"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    let animId: number;
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      animId = requestAnimationFrame(followCursor);
    };

    animId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer Hacker Target Reticle with Neon Green & Purple */}
      <div
        className={`fixed -top-5 -left-5 rounded-sm border pointer-events-none transition-all duration-150 ease-out flex items-center justify-center ${
          isHovered
            ? "w-12 h-12 border-[#00FF66] bg-[#00FF66]/15 shadow-[0_0_20px_rgba(0,255,102,0.6)] rotate-45"
            : "w-10 h-10 border-[#A855F7]/50 shadow-[0_0_12px_rgba(168,85,247,0.35)] rotate-0"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {/* Neon Green corner brackets */}
        <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#00FF66]" />
        <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#00FF66]" />
        <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#00FF66]" />
        <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#00FF66]" />
      </div>

      {/* Center Minecraft Pixel Crosshair (+) with Neon Green Center */}
      <div
        className="fixed -top-2.5 -left-2.5 w-5 h-5 pointer-events-none flex items-center justify-center"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div className={`h-[2px] transition-all ${isHovered ? "w-4 bg-[#00FF66] shadow-[0_0_8px_#00FF66]" : "w-3 bg-white"}`} />
        <div className={`w-[2px] absolute transition-all ${isHovered ? "h-4 bg-[#00FF66] shadow-[0_0_8px_#00FF66]" : "h-3 bg-white"}`} />
        <div className="w-1.5 h-1.5 bg-[#00FF66] absolute shadow-[0_0_6px_#00FF66] rounded-none" />
      </div>
    </div>
  );
}
