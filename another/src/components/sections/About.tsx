"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  Shield,
  Crosshair,
  Radio,
  Flame,
  Zap,
  CheckCircle2,
  Sparkles,
  Volume2,
  GraduationCap,
  Code2,
  Users,
  Compass,
  ChevronRight,
  Target
} from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioConfig } from "@/config/portfolio.config";

interface AboutProps {
  isLightTheme?: boolean;
}

// GTA Weapon / Arsenal Wheel Items
interface ArsenalWeapon {
  id: string;
  name: string;
  category: string;
  icon: string;
  ammo: string;
  damage: number; // 0-100
  fireRate: number; // 0-100
  accuracy: number; // 0-100
  range: number; // 0-100
  special: string;
  description: string;
}

const ARSENAL_LOADOUT: ArsenalWeapon[] = [
  {
    id: "python",
    name: "Python 3.12 Minigun",
    category: "HEAVY ARTILLERY",
    icon: "🐍",
    ammo: "999/999",
    damage: 99,
    fireRate: 95,
    accuracy: 98,
    range: 96,
    special: "PyTorch & Vector Acceleration",
    description: "Dev's primary weapon of choice. Rapid-fire algorithmic execution, machine learning pipelines, and backend automation.",
  },
  {
    id: "ml_models",
    name: "Neural Rocket Launcher",
    category: "EXPLOSIVE ORDNANCE",
    icon: "🧠",
    ammo: "48/48",
    damage: 97,
    fireRate: 88,
    accuracy: 94,
    range: 99,
    special: "Deep Learning Tensor Ingestion",
    description: "Specialized in training classification models, optical character recognition, and anomaly detection with high precision.",
  },
  {
    id: "veritas_ocr",
    name: "Veritas Laser Railgun",
    category: "SPECIAL TECH",
    icon: "⚡",
    ammo: "100%",
    damage: 96,
    fireRate: 92,
    accuracy: 99,
    range: 95,
    special: "Sub-150ms Tamper Detection",
    description: "Computer vision and OCR scanning technology engineered to spot forgery and validate document integrity in real time.",
  },
  {
    id: "fastapi",
    name: "FastAPI Tactical SMG",
    category: "RAPID RESPONSE",
    icon: "🚀",
    ammo: "∞ MAG",
    damage: 92,
    fireRate: 99,
    accuracy: 97,
    range: 90,
    special: "Async Uvicorn High Throughput",
    description: "Blazing fast asynchronous microservices bridging Python computational power with production client frontends.",
  },
  {
    id: "fraud_detect",
    name: "Precision Sniper Rifle",
    category: "LONG RANGE ELIMINATOR",
    icon: "🎯",
    ammo: "30/30",
    damage: 98,
    fireRate: 82,
    accuracy: 99,
    range: 100,
    special: "98.4% Fraud Recall & SMOTE",
    description: "High-precision anomaly isolation designed to pinpoint fraudulent transactions in massive imbalanced financial datasets.",
  },
  {
    id: "nextjs",
    name: "Next.js Combat Drone",
    category: "AIR RECON & UI",
    icon: "🌐",
    ammo: "STATIC/SSR",
    damage: 90,
    fireRate: 96,
    accuracy: 95,
    range: 92,
    special: "Zero-Latency Hydration",
    description: "Modern App Router architecture, responsive motion graphics, Tailwind styling, and Apple-grade creative frontend design.",
  },
  {
    id: "weathergpt",
    name: "WeatherGPT Satcom Relay",
    category: "TACTICAL COMMUNICATIONS",
    icon: "🛰️",
    ammo: "LIVE API",
    damage: 89,
    fireRate: 94,
    accuracy: 96,
    range: 97,
    special: "Natural Language Telemetry",
    description: "Combines real-time global meteorological APIs with conversational LLM reasoning for instant atmospheric intelligence.",
  },
  {
    id: "c_algorithms",
    name: "Netherite Machete",
    category: "MELEE / CORE MEMORY",
    icon: "⚔️",
    ammo: "UNBREAKABLE",
    damage: 95,
    fireRate: 85,
    accuracy: 96,
    range: 45,
    special: "Manual Memory & Data Structures",
    description: "Low-level computational foundation in C. Pointers, memory allocation, and algorithmic complexity optimizations.",
  },
];

// GTA Radio Stations
const RADIO_STATIONS = [
  { id: "los_santos", name: "RADIO LOS SANTOS", genre: "West Coast Code & Bass", freq: "106.1 FM" },
  { id: "wave103", name: "WAVE 103 VICE CITY", genre: "Synthwave & Deep Neural Beats", freq: "103.2 FM" },
  { id: "flylo", name: "FLYLO FM // AIML", genre: "Experimental Lo-Fi & Python", freq: "89.5 FM" },
  { id: "kdst", name: "K-DST THE DUST", genre: "Classic Algorithmic Rock", freq: "91.9 FM" },
];

export function About({ isLightTheme = false }: AboutProps) {
  // GTA State
  const [wantedStars, setWantedStars] = useState<number>(5);
  const [selectedWeapon, setSelectedWeapon] = useState<ArsenalWeapon>(ARSENAL_LOADOUT[0]);
  const [activeStation, setActiveStation] = useState(RADIO_STATIONS[1]); // Default Wave 103 Vice City
  const [missionPassedVisible, setMissionPassedVisible] = useState(false);
  const [radarAngle, setRadarAngle] = useState(0);
  const [cashTicker, setCashTicker] = useState(2840900);
  const [isRadioPlaying, setIsRadioPlaying] = useState(true);

  // Radar sweep animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRadarAngle((prev) => (prev + 3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Slight cash tick effect
  useEffect(() => {
    const cashInterval = setInterval(() => {
      setCashTicker((prev) => prev + Math.floor(Math.random() * 15 + 5));
    }, 4500);
    return () => clearInterval(cashInterval);
  }, []);

  // Trigger Mission Passed Banner
  const handleTriggerMissionPassed = () => {
    setMissionPassedVisible(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#38BDF8", "#00D2FF", "#A855F7", "#00FF66", "#FFFFFF"],
    });

    setTimeout(() => {
      setMissionPassedVisible(false);
    }, 4000);
  };

  const pillarIcons = [GraduationCap, Code2, Users, Flame];

  return (
    <section
      id="about"
      className={`py-24 sm:py-32 border-t transition-colors duration-300 relative z-10 overflow-hidden ${
        isLightTheme
          ? "bg-[#FAFAF8] border-[#EAEAEA]"
          : "bg-[#06040B]/90 backdrop-blur-md border-[#23143B]"
      }`}
    >
      {/* Background GTA Los Santos Sky-Blue Ambient Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* GTA "MISSION PASSED" OVERLAY MODAL */}
      {missionPassedVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md animate-in fade-in zoom-in duration-300">
          <div className="text-center px-6 py-10 max-w-lg w-full relative border-y-4 border-[#38BDF8] bg-black/95 shadow-[0_0_80px_rgba(56,189,248,0.5)]">
            <div className="font-mono text-xs tracking-[0.4em] text-[#38BDF8] uppercase mb-2 font-black">
              ★ GRAND THEFT AUTO // SECTOR AIML ★
            </div>
            <h1 className="text-5xl sm:text-7xl font-black italic tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] mb-4">
              MISSION PASSED!
            </h1>
            <div className="text-2xl sm:text-3xl font-black italic tracking-wider text-[#00D2FF] drop-shadow-[0_0_15px_rgba(0,210,255,0.8)] mb-6">
              RESPECT +
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto text-left font-mono text-xs border border-[#38BDF8]/30 bg-[#0B1528] p-4 rounded-lg">
              <div>
                <span className="text-[#94A3B8] block text-[10px]">TOTAL BOUNTY:</span>
                <span className="text-white font-bold text-sm text-[#00FF66]">
                  ${cashTicker.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-[#94A3B8] block text-[10px]">ENGINEER RANK:</span>
                <span className="text-[#38BDF8] font-bold text-sm">LVL 99 (AIML)</span>
              </div>
            </div>

            <button
              onClick={() => setMissionPassedVisible(false)}
              className="mt-6 px-6 py-2 rounded font-mono text-xs font-bold uppercase tracking-wider bg-[#38BDF8] hover:bg-[#00D2FF] text-black transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              CONTINUE GAMEPLAY [SPACE]
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Tag & GTA Mission Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#38BDF8] font-bold tracking-widest uppercase flex items-center gap-1.5 bg-[#38BDF8]/10 border border-[#38BDF8]/30 px-3 py-1 rounded-full">
              <Compass className="w-3.5 h-3.5 text-[#00D2FF] animate-spin" style={{ animationDuration: "8s" }} />
              SAN ANDREAS // CHARACTER PROFILE 02
            </span>
            <div className={`h-px w-10 ${isLightTheme ? "bg-[#CBD5E1]" : "bg-[#38BDF8]/30"}`} />
          </div>

          {/* Quick Trigger: Mission Passed Easter Egg */}
          <button
            onClick={handleTriggerMissionPassed}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border font-mono text-xs font-bold tracking-wider transition-all cursor-pointer group bg-[#0C192E] border-[#38BDF8]/40 hover:border-[#38BDF8] text-[#38BDF8] hover:shadow-[0_0_15px_rgba(56,189,248,0.35)]"
            title="Click to trigger GTA Mission Passed Celebration"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF] group-hover:rotate-45 transition-transform" />
            <span>TRIGGER MISSION PASSED</span>
            <span className="text-[10px] bg-[#38BDF8]/20 px-1.5 py-0.5 rounded text-[#00D2FF]">RESPECT+</span>
          </button>
        </div>

        {/* Section Heading + Wanted Level HUD */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2
              className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase ${
                isLightTheme ? "text-[#0F172A]" : "text-white"
              }`}
            >
              {portfolioConfig.about.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base font-mono text-[#38BDF8] flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
              PLAYER: DEV NIJHAWAN // 3RD-YEAR AIML SPECIALIST
            </p>
          </div>

          {/* GTA WANTED LEVEL STARS HUD */}
          <div
            className={`p-4 rounded-xl border flex flex-col items-end gap-1.5 transition-all ${
              isLightTheme
                ? "bg-white border-[#E2E8F0] shadow-sm"
                : "bg-[#09111E]/90 border-[#1E3A5F] shadow-[0_0_25px_rgba(56,189,248,0.15)]"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-wider uppercase font-bold text-[#94A3B8]">
                WANTED LEVEL:
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((starIndex) => {
                  const isActive = starIndex <= wantedStars;
                  return (
                    <button
                      key={starIndex}
                      onClick={() => setWantedStars(starIndex)}
                      title={`Wanted Level ${starIndex} Star`}
                      className="cursor-pointer transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`w-5 h-5 transition-all ${
                          isActive
                            ? "fill-[#38BDF8] text-[#38BDF8] drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse"
                            : "text-[#475569] fill-transparent"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#38BDF8]">
              <span>STATUS:</span>
              <span className="font-bold text-[#00FF66] bg-[#00FF66]/10 px-1.5 py-0.5 rounded border border-[#00FF66]/30">
                MOST WANTED ML ARCHITECT
              </span>
            </div>
          </div>
        </div>

        {/* MAIN GTA DASHBOARD: 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: GTA PLAYER HUD, MINIMAP, & HEALTH/ARMOR BARS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* GTA V / SAN ANDREAS PLAYER IDENTITY CARD */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border relative overflow-hidden transition-all ${
                isLightTheme
                  ? "bg-white border-[#CBD5E1] shadow-lg text-[#1E293B]"
                  : "bg-[#08101F]/90 border-[#1E3A5F] shadow-[0_0_35px_rgba(56,189,248,0.18)] text-white"
              }`}
            >
              {/* Top Banner with Sky Blue Accent */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E3A5F]/40 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D2FF] to-[#38BDF8] text-black font-black text-lg flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                    DN
                  </div>
                  <div>
                    <h3 className="font-black text-base sm:text-lg tracking-tight uppercase leading-none">
                      {portfolioConfig.personal.name}
                    </h3>
                    <span className="text-[11px] font-mono text-[#38BDF8] font-bold">
                      B.Tech AIML (3rd Year)
                    </span>
                  </div>
                </div>

                {/* Cash & RP Box */}
                <div className="text-right font-mono">
                  <div className="text-[10px] text-[#94A3B8] font-semibold">CASH / EXP</div>
                  <div className="text-base sm:text-lg font-black text-[#00FF66] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    ${cashTicker.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* GTA HEALTH & ARMOR BARS */}
              <div className="space-y-3 mb-6 bg-black/40 p-4 rounded-xl border border-[#1E3A5F]/50">
                {/* Health Bar (Classic Green) */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1 font-bold">
                    <span className="flex items-center gap-1.5 text-[#00FF66]">
                      <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
                      HEALTH [STAMINA & AGILITY]
                    </span>
                    <span className="text-[#00FF66]">100%</span>
                  </div>
                  <div className="w-full h-3 bg-neutral-900 rounded-sm overflow-hidden border border-neutral-700">
                    <div className="h-full bg-gradient-to-r from-[#00AA44] to-[#00FF66] w-full shadow-[0_0_10px_rgba(0,255,102,0.5)]" />
                  </div>
                </div>

                {/* Armor Bar (Sky Blue) */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1 font-bold">
                    <span className="flex items-center gap-1.5 text-[#38BDF8]">
                      <Shield className="w-3 h-3 text-[#38BDF8]" />
                      ARMOR [CLEAN ARCHITECTURE & C DEFENSE]
                    </span>
                    <span className="text-[#38BDF8]">100%</span>
                  </div>
                  <div className="w-full h-3 bg-neutral-900 rounded-sm overflow-hidden border border-neutral-700">
                    <div className="h-full bg-gradient-to-r from-[#0284C7] to-[#38BDF8] w-full shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
                  </div>
                </div>

                {/* Special Ability Bar (Deep Neural Engine Overdrive) */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1 font-bold">
                    <span className="flex items-center gap-1.5 text-[#C084FC]">
                      <Zap className="w-3 h-3 text-[#C084FC]" />
                      SPECIAL [DEEP NEURAL ENGINE BOOST]
                    </span>
                    <span className="text-[#C084FC]">MAX</span>
                  </div>
                  <div className="w-full h-2.5 bg-neutral-900 rounded-sm overflow-hidden border border-neutral-700">
                    <div className="h-full bg-gradient-to-r from-[#7E22CE] to-[#C084FC] w-full animate-pulse shadow-[0_0_10px_rgba(192,132,252,0.6)]" />
                  </div>
                </div>
              </div>

              {/* Personal Quote in GTA Mission Narrative Style */}
              <div className="p-4 rounded-xl border border-[#38BDF8]/20 bg-[#00D2FF]/5 mb-6">
                <p className="text-sm sm:text-base font-serif italic text-sky-100 leading-relaxed">
                  &ldquo;{portfolioConfig.about.highlightQuote}&rdquo;
                </p>
              </div>

              {/* GTA STATS METRICS (GTA V / SAN ANDREAS STYLE) */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] border-b border-[#1E3A5F]/30 pb-1.5">
                  <span className="text-[#94A3B8] flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#38BDF8]" />
                    SHOOTING (MODEL ACCURACY):
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="w-[98%] h-full bg-[#38BDF8]" />
                    </div>
                    <span className="font-bold text-white">98%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] border-b border-[#1E3A5F]/30 pb-1.5">
                  <span className="text-[#94A3B8] flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#38BDF8]" />
                    STAMINA (HACKATHON SPRINTS):
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="w-[96%] h-full bg-[#38BDF8]" />
                    </div>
                    <span className="font-bold text-white">96%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] border-b border-[#1E3A5F]/30 pb-1.5">
                  <span className="text-[#94A3B8] flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#38BDF8]" />
                    STEALTH (FRAUD & TAMPER DEFENSE):
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="w-[99%] h-full bg-[#38BDF8]" />
                    </div>
                    <span className="font-bold text-white">99%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#94A3B8] flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#38BDF8]" />
                    DRIVING (DEV VELOCITY / FASTAPI):
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="w-[95%] h-full bg-[#38BDF8]" />
                    </div>
                    <span className="font-bold text-white">95%</span>
                  </div>
                </div>
              </div>

              {/* Status Indicator Bar */}
              <div
                className={`mt-6 pt-4 border-t flex items-center justify-between ${
                  isLightTheme ? "border-[#E2E8F0]" : "border-[#1E3A5F]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38BDF8]" />
                  </span>
                  <span className="text-xs font-mono text-[#38BDF8] font-semibold">
                    {portfolioConfig.personal.availability.statusText}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase">
                  {portfolioConfig.personal.location}
                </span>
              </div>
            </div>

            {/* GTA LOS SANTOS RADAR MINIMAP & RADIO TUNER */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Circular Cyber Minimap */}
              <div
                className={`p-4 rounded-xl border flex flex-col items-center justify-center relative overflow-hidden ${
                  isLightTheme
                    ? "bg-white border-[#CBD5E1]"
                    : "bg-[#08101F]/90 border-[#1E3A5F]"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2 font-mono text-[10px] text-[#94A3B8]">
                  <span className="text-[#38BDF8] font-bold">GPS RADAR</span>
                  <span>SAN ANDREAS</span>
                </div>

                {/* Radar Circle */}
                <div className="relative w-28 h-28 rounded-full border-2 border-[#38BDF8]/40 bg-black/60 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(56,189,248,0.25)]">
                  {/* Concentric radar rings */}
                  <div className="absolute inset-2 rounded-full border border-[#38BDF8]/20" />
                  <div className="absolute inset-6 rounded-full border border-[#38BDF8]/20" />
                  <div className="absolute w-full h-[1px] bg-[#38BDF8]/25" />
                  <div className="absolute h-full w-[1px] bg-[#38BDF8]/25" />

                  {/* Rotating Radar Sweep Beam */}
                  <div
                    className="absolute w-14 h-14 origin-bottom-right"
                    style={{
                      transform: `rotate(${radarAngle}deg)`,
                      background: "conic-gradient(from 0deg, rgba(56,189,248,0.5) 0deg, transparent 60deg)",
                      top: 0,
                      left: 0,
                    }}
                  />

                  {/* Blips */}
                  <div className="absolute top-6 left-8 w-2 h-2 rounded-full bg-[#00FF66] shadow-[0_0_6px_#00FF66] animate-pulse" title="HQ: AIML Dept" />
                  <div className="absolute bottom-7 right-7 w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_6px_#38BDF8]" title="Hackathon Arena" />
                  <div className="absolute top-8 right-9 w-1.5 h-1.5 rounded-full bg-[#C084FC]" title="FastAPI Microservices" />

                  {/* Center Player Icon */}
                  <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#FFFFFF] z-10" />
                </div>

                <div className="mt-2 text-center font-mono text-[10px] text-[#38BDF8]">
                  <span className="font-bold">SECTOR CS-AIML-03</span>
                  <span className="text-[#94A3B8] block text-[9px]">LAT: 28.61° N // LNG: 77.20° E</span>
                </div>
              </div>

              {/* GTA Radio Station Tuner */}
              <div
                className={`p-4 rounded-xl border flex flex-col justify-between ${
                  isLightTheme
                    ? "bg-white border-[#CBD5E1]"
                    : "bg-[#08101F]/90 border-[#1E3A5F]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2 font-mono text-[10px]">
                    <span className="text-[#38BDF8] font-bold flex items-center gap-1">
                      <Radio className="w-3 h-3 text-[#38BDF8]" />
                      LOS SANTOS RADIO
                    </span>
                    <button
                      onClick={() => setIsRadioPlaying(!isRadioPlaying)}
                      className="cursor-pointer text-[#94A3B8] hover:text-white"
                      title="Toggle Radio Visualizer"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${isRadioPlaying ? "text-[#00FF66]" : "text-neutral-500"}`} />
                    </button>
                  </div>

                  <div className="bg-black/50 p-2.5 rounded-lg border border-[#38BDF8]/30 mb-2">
                    <div className="font-mono text-xs font-bold text-white truncate">
                      {activeStation.name}
                    </div>
                    <div className="text-[10px] text-[#38BDF8] truncate font-mono">
                      {activeStation.genre}
                    </div>
                    <div className="text-[9px] text-[#94A3B8] font-mono">
                      {activeStation.freq}
                    </div>
                  </div>

                  {/* Radio Visualizer Bars (Sky Blue) */}
                  <div className="flex items-end justify-center gap-1 h-6 py-1">
                    {[12, 20, 16, 24, 10, 18, 22, 14, 20, 15].map((height, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-t-sm transition-all duration-150 ${
                          isRadioPlaying
                            ? "bg-gradient-to-t from-[#0284C7] to-[#38BDF8] animate-pulse"
                            : "bg-neutral-700 h-1.5"
                        }`}
                        style={{
                          height: isRadioPlaying ? `${Math.max(4, (height * ((radarAngle % 50) + 10)) / 40)}px` : "4px",
                          animationDelay: `${i * 70}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Station Switcher Buttons */}
                <div className="grid grid-cols-2 gap-1 mt-2">
                  {RADIO_STATIONS.map((station) => (
                    <button
                      key={station.id}
                      onClick={() => setActiveStation(station)}
                      className={`text-[9px] font-mono px-1.5 py-1 rounded border text-left truncate transition-all cursor-pointer ${
                        activeStation.id === station.id
                          ? "bg-[#38BDF8] text-black font-bold border-[#38BDF8]"
                          : "bg-black/40 text-[#94A3B8] border-neutral-800 hover:border-[#38BDF8]/40 hover:text-white"
                      }`}
                    >
                      {station.freq}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: GTA WEAPON WHEEL ARSENAL & NARRATIVE PILLARS */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* GTA V STYLE WEAPON / LOADOUT WHEEL SELECTOR */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                isLightTheme
                  ? "bg-white border-[#CBD5E1] shadow-lg text-[#1E293B]"
                  : "bg-[#08101F]/90 border-[#1E3A5F] shadow-[0_0_35px_rgba(56,189,248,0.18)] text-white"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/40 mb-4">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-[#38BDF8]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                    GTA WEAPON WHEEL // ENGINEERING ARSENAL
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8]">
                  SELECT SLOT TO EQUIP
                </span>
              </div>

              {/* 8-SLOT WEAPON WHEEL BAR */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-6">
                {ARSENAL_LOADOUT.map((weapon) => {
                  const isEquipped = selectedWeapon.id === weapon.id;
                  return (
                    <button
                      key={weapon.id}
                      onClick={() => setSelectedWeapon(weapon)}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer relative group ${
                        isEquipped
                          ? "bg-gradient-to-b from-[#0C2442] to-[#0A1628] border-[#38BDF8] shadow-[0_0_18px_rgba(56,189,248,0.5)] scale-105"
                          : "bg-black/40 border-neutral-800 hover:border-[#38BDF8]/50 hover:bg-[#0B172B]"
                      }`}
                    >
                      <span className="text-2xl mb-1 filter drop-shadow group-hover:scale-110 transition-transform">
                        {weapon.icon}
                      </span>
                      <span
                        className={`text-[9px] font-mono truncate w-full text-center font-bold ${
                          isEquipped ? "text-[#38BDF8]" : "text-[#94A3B8]"
                        }`}
                      >
                        {weapon.name.split(" ")[0]}
                      </span>

                      {/* Top Active Indicator */}
                      {isEquipped && (
                        <div className="absolute -top-1 w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE WEAPON INSPECTION CARD (SKY BLUE STATS) */}
              <div className="p-5 rounded-xl border border-[#38BDF8]/40 bg-gradient-to-br from-[#0A182F] to-[#060D1A] relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2 rounded-lg bg-black/60 border border-[#38BDF8]/40 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                      {selectedWeapon.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#00D2FF] font-bold uppercase tracking-wider bg-[#00D2FF]/10 px-2 py-0.5 rounded border border-[#00D2FF]/30">
                          {selectedWeapon.category}
                        </span>
                        <span className="text-[10px] font-mono text-[#00FF66] font-bold">
                          AMMO: {selectedWeapon.ammo}
                        </span>
                      </div>
                      <h4 className="text-lg font-black tracking-tight text-white mt-1">
                        {selectedWeapon.name}
                      </h4>
                    </div>
                  </div>

                  <div className="text-right font-mono text-xs text-[#38BDF8] bg-black/50 px-3 py-1.5 rounded-lg border border-[#38BDF8]/20">
                    <span className="text-[10px] text-[#94A3B8] block">PERK ABILITY:</span>
                    <span className="font-bold text-[#00D2FF]">{selectedWeapon.special}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#CBD5E1] mb-5 leading-relaxed font-sans">
                  {selectedWeapon.description}
                </p>

                {/* Sky Blue Weapon Stat Bars */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[10px] pt-3 border-t border-[#1E3A5F]">
                  <div>
                    <div className="flex justify-between text-[#94A3B8] mb-1">
                      <span>DAMAGE:</span>
                      <span className="text-white font-bold">{selectedWeapon.damage}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0284C7] to-[#38BDF8] transition-all duration-500"
                        style={{ width: `${selectedWeapon.damage}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#94A3B8] mb-1">
                      <span>FIRE RATE:</span>
                      <span className="text-white font-bold">{selectedWeapon.fireRate}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0284C7] to-[#38BDF8] transition-all duration-500"
                        style={{ width: `${selectedWeapon.fireRate}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#94A3B8] mb-1">
                      <span>ACCURACY:</span>
                      <span className="text-white font-bold">{selectedWeapon.accuracy}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] transition-all duration-500"
                        style={{ width: `${selectedWeapon.accuracy}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#94A3B8] mb-1">
                      <span>RANGE:</span>
                      <span className="text-white font-bold">{selectedWeapon.range}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0284C7] to-[#38BDF8] transition-all duration-500"
                        style={{ width: `${selectedWeapon.range}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EDITORIAL NARRATIVE: GTA MISSION BRIEFING STYLE */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                isLightTheme
                  ? "bg-white border-[#CBD5E1] shadow-lg text-[#1E293B]"
                  : "bg-[#08101F]/90 border-[#1E3A5F] shadow-[0_0_35px_rgba(56,189,248,0.18)] text-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#38BDF8] font-bold">
                <ChevronRight className="w-4 h-4 text-[#00D2FF]" />
                <span>MISSION INTEL & NARRATIVE BRIEFING</span>
              </div>

              <div
                className={`space-y-4 text-sm sm:text-base leading-relaxed ${
                  isLightTheme ? "text-[#475569]" : "text-[#94A3B8]"
                }`}
              >
                {portfolioConfig.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* 4 FOUNDATION PILLARS (GTA HEIST MILESTONES) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-[#1E3A5F]/40">
                {portfolioConfig.about.pillars.map((pillar, idx) => {
                  const IconComponent = pillarIcons[idx % pillarIcons.length];
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-all group ${
                        isLightTheme
                          ? "border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#38BDF8]/60 shadow-sm"
                          : "border-[#1E3A5F] bg-[#0A1424]/80 hover:border-[#38BDF8] hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-8 h-8 rounded-lg border flex items-center justify-center group-hover:scale-105 transition-transform ${
                            isLightTheme
                              ? "bg-white border-[#CBD5E1] text-[#0284C7]"
                              : "bg-[#0F223D] border-[#38BDF8]/40 text-[#38BDF8] shadow-[0_0_10px_rgba(56,189,248,0.3)]"
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4
                          className={`font-bold text-sm tracking-tight ${
                            isLightTheme ? "text-[#0F172A]" : "text-white"
                          }`}
                        >
                          {pillar.title}
                        </h4>
                      </div>

                      <p
                        className={`text-xs leading-relaxed ${
                          isLightTheme ? "text-[#64748B]" : "text-[#94A3B8]"
                        }`}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Mission Checklist */}
              <div className="mt-6 pt-4 border-t border-[#1E3A5F]/40 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-4 text-[#94A3B8]">
                  <span className="flex items-center gap-1.5 text-[#00FF66]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    B.Tech AIML (3rd Year) Verified
                  </span>
                  <span className="flex items-center gap-1.5 text-[#38BDF8]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Hackathon Ready
                  </span>
                </div>

                <div className="text-[#38BDF8] font-bold">
                  OBJECTIVE: BUILD REAL-WORLD AI SOLUTIONS
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
