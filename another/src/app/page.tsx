"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MinecraftHackerBackground } from "@/components/ui/MinecraftHackerBackground";
import { Global3DSpace } from "@/components/ui/Global3DSpace";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  // Default to false: Minecraft x Hacker Theme (Voxel Netherite & Terminal Matrix)
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-[#00FF66] selection:text-black ${
        isLightTheme ? "light-theme bg-[#FAFAF8] text-[#171717]" : "bg-[#050308] text-white"
      }`}
    >
      {/* Precision Minecraft Crosshair + Hacker Reticle Cursor */}
      <CustomCursor />

      {/* Global 3D WebGL Space with Floating Voxels, Grid Waves & Scroll Flight Parallax */}
      <Global3DSpace isLightTheme={isLightTheme} />

      {/* Minecraft x Hacker Digital Rain & Voxel Background Animation */}
      {!isLightTheme && <MinecraftHackerBackground />}

      {/* Global persistent navigation with Theme Switcher */}
      <Navbar isLightTheme={isLightTheme} onToggleTheme={toggleTheme} />

      {/* Main page content sections */}
      <main className="relative flex flex-col w-full z-10">
        <Hero isLightTheme={isLightTheme} />
        <About isLightTheme={isLightTheme} />
        <Skills isLightTheme={isLightTheme} />
        <Projects isLightTheme={isLightTheme} />
        <Timeline isLightTheme={isLightTheme} />
        <Contact isLightTheme={isLightTheme} />
      </main>

      {/* Global footer */}
      <Footer isLightTheme={isLightTheme} />
    </div>
  );
}
