"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Terminal, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import { HeroCanvas } from "@/components/sections/HeroCanvas";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Tilt3D } from "@/components/ui/Tilt3D";

interface HeroProps {
  isLightTheme?: boolean;
}

export function Hero({ isLightTheme = false }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden z-10"
    >
      {/* Subtle pixel grid overlay with green & purple traces */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none" />

      {/* Main hero grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Minecraft x Hacker Typography */}
          <Tilt3D
            intensity={6}
            scale={1.01}
            glare={false}
            perspective={1200}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Minecraft Hacker Terminal Tag with Neon Green Accent */}
            <div
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border transition-all translate-z-20 ${
                isLightTheme
                  ? "bg-white border-[#EAEAEA] shadow-subtle"
                  : "bg-[#0E091E] border-[#00FF66]/40 text-emerald-300 shadow-[0_0_15px_rgba(0,255,102,0.2)]"
              }`}
            >
              <span className="w-2 h-2 rounded-sm bg-[#00FF66] animate-pulse shadow-[0_0_8px_#00FF66]" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
                <span>[ROOT@NETHERITE</span>
                <span className="text-[#C084FC]">✦</span>
                <span className="text-[#00FF66]">EMERALD_XP]</span>
              </span>
            </div>

            {/* Oversized Headline with Dual Neon Green & Purple Glow */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] translate-z-30">
              <span className={`block ${isLightTheme ? "text-[#171717]" : "text-white"}`}>
                {portfolioConfig.hero.headlinePart1}
              </span>
              <span className={`block ${isLightTheme ? "text-[#171717]" : "text-white"}`}>
                {portfolioConfig.hero.headlinePart2}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#00FF66] to-[#C084FC] drop-shadow-[0_0_35px_rgba(0,255,102,0.4)]">
                {portfolioConfig.hero.headlinePart3}
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              className={`text-base sm:text-lg max-w-xl font-normal leading-relaxed translate-z-20 ${
                isLightTheme ? "text-[#555555]" : "text-[#94A3B8]"
              }`}
            >
              {portfolioConfig.hero.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 translate-z-40">
              <Link href="#projects">
                <MagneticButton
                  className={`px-6 py-3.5 rounded-lg font-mono font-medium text-sm flex items-center gap-2.5 transition-all group ${
                    isLightTheme
                      ? "bg-[#171717] text-white hover:bg-[#315EFB] shadow-subtle"
                      : "bg-gradient-to-r from-[#7E22CE] to-[#A855F7] hover:from-[#6B21A8] hover:to-[#00FF66] text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] border border-[#00FF66]/30 hover:border-[#00FF66]"
                  }`}
                >
                  <span>{portfolioConfig.hero.primaryCtaText}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </MagneticButton>
              </Link>

              <Link href="#contact">
                <MagneticButton
                  className={`px-6 py-3.5 rounded-lg font-mono font-medium text-sm flex items-center gap-2 transition-all ${
                    isLightTheme
                      ? "bg-white border border-[#EAEAEA] hover:border-[#171717] text-[#171717] shadow-subtle"
                      : "bg-[#0E091E] border border-[#2A184D] hover:border-[#00FF66] text-purple-200 hover:text-[#00FF66] shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                  }`}
                >
                  <Terminal className="w-4 h-4 text-[#00FF66]" />
                  <span>{portfolioConfig.hero.secondaryCtaText}</span>
                </MagneticButton>
              </Link>
            </div>

            {/* Micro specs HUD bar */}
            <div
              className={`pt-6 border-t grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono translate-z-20 ${
                isLightTheme ? "border-[#EAEAEA] text-[#777777]" : "border-[#2A184D] text-[#94A3B8]"
              }`}
            >
              <div>
                <span className="block text-[10px] uppercase text-[#00FF66] font-bold tracking-wider">
                  SPECIALIZATION
                </span>
                <span className={isLightTheme ? "text-[#171717] font-semibold" : "text-white font-semibold flex items-center gap-1.5"}>
                  <span>AI &amp; Machine Learning</span>
                  <span className="text-[10px] text-[#00FF66] font-bold">[LVL 99]</span>
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#00FF66] font-bold tracking-wider">
                  TIER // ACCESS
                </span>
                <span className={isLightTheme ? "text-[#171717] font-semibold" : "text-white font-semibold"}>
                  NETHERITE // ROOT
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[10px] uppercase text-[#00FF66] font-bold tracking-wider">
                  SERVER // LOCATION
                </span>
                <span className={isLightTheme ? "text-[#171717] font-semibold" : "text-white font-semibold"}>
                  {portfolioConfig.personal.location} [ASIA_IN]
                </span>
              </div>
            </div>
          </Tilt3D>

          {/* Right Column: 3D Voxel Hacker Monolith Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              className={`w-full relative rounded-2xl p-2 overflow-hidden transition-all duration-300 ${
                isLightTheme
                  ? "bg-white/40 border border-[#EAEAEA] backdrop-blur-sm shadow-card"
                  : "bg-[#0B0618]/70 border border-[#00FF66]/30 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,102,0.18)] ring-1 ring-[#00FF66]/20"
              }`}
            >
              <HeroCanvas />
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between z-10 pt-4">
        <Link
          href="#about"
          className="inline-flex items-center gap-2 text-xs font-mono text-purple-300 hover:text-[#00FF66] transition-colors group"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll to explore world</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[#00FF66]" />
        </Link>

        <span className="font-mono text-[11px] text-[#00FF66]/80 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#00FF66]" />
          <span>01 // VOXEL_ENGINE &amp; EMERALD_XP</span>
        </span>
      </div>
    </section>
  );
}
