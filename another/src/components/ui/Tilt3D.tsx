"use client";

import React, { useRef, useState, useEffect } from "react";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // Maximum rotation in degrees
  scale?: number; // Scale on hover
  glare?: boolean; // Whether to render dynamic light glare reflection
  glareColor?: string; // Color of the glare reflection
  perspective?: number; // Perspective distance in px
}

export function Tilt3D({
  children,
  className = "",
  intensity = 10,
  scale = 1.02,
  glare = true,
  glareColor = "rgba(255, 255, 255, 0.15)",
  perspective = 1000,
}: Tilt3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (-1 to 1)
    const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
    const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

    // Invert Y for intuitive 3D rotation
    const rotX = -mouseY * intensity;
    const rotY = mouseX * intensity;

    setRotateX(rotX);
    setRotateY(rotY);

    // Calculate glare percentage (0% to 100%)
    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;
    setGlarePos({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    if (!reducedMotion) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50 });
  };

  const transformStyle = reducedMotion
    ? undefined
    : {
        transform: isHovered
          ? `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
          : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
        transformStyle: "preserve-3d" as const,
      };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      className={`relative preserve-3d will-change-transform ${className}`}
    >
      {children}

      {/* Dynamic 3D Glare Sheen Reflection Overlay */}
      {glare && isHovered && !reducedMotion && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, ${glareColor}, transparent 70%)`,
            mixBlendMode: "overlay",
            zIndex: 30,
          }}
        />
      )}
    </div>
  );
}
