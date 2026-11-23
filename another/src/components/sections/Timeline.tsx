"use client";

import React, { useState, useEffect } from "react";
import {
  Flame,
  Zap,
  Sparkles,
  Target,
  Compass,
  ChevronRight
} from "lucide-react";
import confetti from "canvas-confetti";
import { Tilt3D } from "@/components/ui/Tilt3D";

interface TimelineProps {
  isLightTheme?: boolean;
}

// Anime Saga Mapping with Goku & Naruto Skills
interface AnimeSagaItem {
  id: string;
  year: string;
  title: string;
  role: string;
  institutionOrContext: string;
  description: string;
  tags: string[];
  // Anime specific lore & techniques
  gokuSkill: {
    technique: string;
    form: string;
    powerLevel: string;
    description: string;
  };
  narutoSkill: {
    technique: string;
    jutsu: string;
    chakraNature: string;
    description: string;
  };
  auraColor: string;
  badge: string;
}

const ANIME_TIMELINE_SAGAS: AnimeSagaItem[] = [
  {
    id: "btech-aiml",
    year: "2024 — 2028",
    title: "B.Tech in Computer Science & Engineering",
    role: "Specialization in Artificial Intelligence & Machine Learning (3rd Year)",
    institutionOrContext: "Academic Degree // Saiyan Academy Arc",
    description:
      "Developing foundational computational chakra in data structures, algorithms, discrete mathematics, neural architectures, and statistical modeling. Projected graduation in 2028 as an elite AI/ML engineer.",
    tags: ["Artificial Intelligence", "Machine Learning", "Data Structures", "Python", "C"],
    gokuSkill: {
      technique: "Kaio-Ken x10 // Algorithmic Surge",
      form: "Super Saiyan Training Arc",
      powerLevel: "8,500 Ki",
      description: "Channeling core computer science foundations to multiply processing speed and model comprehension by tenfold.",
    },
    narutoSkill: {
      technique: "Sage Mode // Senjutsu Foundations",
      jutsu: "Ninja Academy to Chūnin Exam",
      chakraNature: "Fire (Katon) & Earth (Doton)",
      description: "Absorbing natural environmental algorithms and transforming complex linear algebra into intuitive code balance.",
    },
    auraColor: "#FF7700",
    badge: "2024 — 2028 SAGA",
  },
  {
    id: "hackathons",
    year: "2026 — Present",
    title: "Competitive Hackathons & High-Velocity Sprints",
    role: "Participant & Rapid Prototyper // Arena Debut",
    institutionOrContext: "Tournament of Power & Shinobi Sprints",
    description:
      "Stepped onto the competitive hackathon battleground in 2026! Teaming up with peers to design, architect, and ship high-velocity proof-of-concept AI solutions under intense 24-48 hour pressure.",
    tags: ["Teamwork", "Fast Prototyping", "Problem Solving", "System Architecture"],
    gokuSkill: {
      technique: "Instant Transmission // Rapid Deployment",
      form: "Super Saiyan 2 Adrenaline Surge",
      powerLevel: "OVER 9,000!!",
      description: "Teleporting instantly between architectural roadblocks to deliver working prototypes before the timer hits zero.",
    },
    narutoSkill: {
      technique: "Kage Bunshin no Jutsu // Multi-Shadow Clone Sprints",
      jutsu: "Nine-Tails / Kurama Chakra Cloak",
      chakraNature: "Wind (Futon: Rasenshuriken)",
      description: "Multiplying developer bandwidth to orchestrate frontend, backend microservices, and AI inference in parallel.",
    },
    auraColor: "#FF5500",
    badge: "2026 SAGA DEBUT",
  },
  {
    id: "software-projects",
    year: "2025 — Present",
    title: "Autonomous AI & Intelligent Systems",
    role: "Independent System Architect",
    institutionOrContext: "Spirit Bomb Laboratory",
    description:
      "Forging production-grade software artifacts including VeritasID (OCR laser tampering detection), Credit Card Fraud Detection (financial anomaly isolation), and WeatherGPT (contextual conversational telemetry).",
    tags: ["FastAPI", "Next.js", "Scikit-Learn", "Computer Vision", "PostgreSQL"],
    gokuSkill: {
      technique: "Spirit Bomb (Genki Dama) // Collective Ingestion",
      form: "Super Saiyan God Divine Precision",
      powerLevel: "14,200 Ki",
      description: "Gathering training data across thousands of distributed vectors into a single devastatingly accurate model.",
    },
    narutoSkill: {
      technique: "Planetary Rasengan // Multimodal Fusion",
      jutsu: "Sage Art: Magnet & Laser Release",
      chakraNature: "Lightning (Raiton) & Water (Suiton)",
      description: "Infusing high-precision optical OCR lasers and SMOTE resampling into impenetrable verification defenses.",
    },
    auraColor: "#FF9900",
    badge: "SYSTEM WEAPONS",
  },
  {
    id: "mastery-future",
    year: "2026 — 2028",
    title: "Technical Mastery & Future AI Horizons",
    role: "Continuous Skill Deepening // Graduation Horizon",
    institutionOrContext: "Ascended Saiyan / Hokage Milestone",
    description:
      "Actively exploring modern agentic orchestration, retrieval-augmented generation (RAG), vector embeddings, low-latency microservices, and high-performance creative engineering systems heading into 2028 graduation.",
    tags: ["LLM Orchestration", "Modern Frontend", "Optimization", "Model Evaluation"],
    gokuSkill: {
      technique: "Mastered Ultra Instinct // Reflexive AI",
      form: "Autonomous God Tier Form",
      powerLevel: "MAXIMUM (INFINITY)",
      description: "Code and architecture that react without cognitive latency &mdash; smooth, optimal, and effortlessly scalable.",
    },
    narutoSkill: {
      technique: "Baryon Mode // Zero Waste Engineering",
      jutsu: "Seventh Hokage Will of Fire",
      chakraNature: "All Five Elemental Releases",
      description: "Unlocking peak architectural synergy where microservices, client state, and model inference harmonize completely.",
    },
    auraColor: "#FFA500",
    badge: "2028 ASCENSION",
  },
];

export function Timeline({ isLightTheme = false }: TimelineProps) {
  // Anime Mode: "goku" (Saiyan Ki) vs "naruto" (Shinobi Chakra)
  const [animeMode, setAnimeMode] = useState<"goku" | "naruto">("goku");
  const [isCharging, setIsCharging] = useState(false);
  const [powerLevel, setPowerLevel] = useState(9001);
  const [activeArc, setActiveArc] = useState<string>("hackathons");
  const [kiRings, setKiRings] = useState(0);

  // Animate Ki rings / aura pulses
  useEffect(() => {
    const interval = setInterval(() => {
      setKiRings((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Trigger Ki Charge / Chakra Burst
  const handleChargeKi = () => {
    setIsCharging(true);
    setPowerLevel((prev) => prev + Math.floor(Math.random() * 500 + 250));

    // Confetti explosion with vibrant anime orange, flame gold, and chakra colors
    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#FF5500", "#FF7700", "#FFA500", "#FFD700", "#FFFFFF", "#C084FC"],
    });

    setTimeout(() => {
      setIsCharging(false);
    }, 1800);
  };

  return (
    <section
      id="timeline"
      className={`py-24 sm:py-32 border-t transition-colors duration-300 relative z-10 overflow-hidden ${
        isLightTheme
          ? "bg-[#FAFAF8] border-[#EAEAEA]"
          : "bg-[#07040B]/95 backdrop-blur-md border-[#2D1608]"
      }`}
    >
      {/* Anime Fiery Orange Ambient Background Glows */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FF5500]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-[#FFA500]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Orange Ki Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#FF7700] blur-sm animate-pulse"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${15 + i * 15}%`,
              top: `${(kiRings * 2 + i * 20) % 100}%`,
              transition: "top 0.1s linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Tag & Anime Mode Stance Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#FF7700] font-black tracking-widest uppercase flex items-center gap-1.5 bg-[#FF7700]/10 border border-[#FF7700]/30 px-3 py-1 rounded-full shadow-[0_0_12px_rgba(255,119,0,0.25)]">
              <Flame className="w-3.5 h-3.5 text-[#FF5500] animate-bounce" />
              05 // ANIME POWER ARCS & SAGA TIMELINE
            </span>
            <div className={`h-px w-10 ${isLightTheme ? "bg-[#CBD5E1]" : "bg-[#FF7700]/30"}`} />
          </div>

          {/* Goku vs Naruto Stance Selector */}
          <div className="flex items-center gap-2 bg-black/60 p-1 rounded-xl border border-[#FF7700]/40 shadow-[0_0_20px_rgba(255,119,0,0.2)]">
            <button
              onClick={() => setAnimeMode("goku")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                animeMode === "goku"
                  ? "bg-gradient-to-r from-[#FF5500] to-[#FFA500] text-black shadow-[0_0_15px_rgba(255,119,0,0.6)]"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>GOKU (SAIYAN KI)</span>
            </button>
            <button
              onClick={() => setAnimeMode("naruto")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                animeMode === "naruto"
                  ? "bg-gradient-to-r from-[#FF7700] to-[#FF4500] text-white shadow-[0_0_15px_rgba(255,85,0,0.6)]"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>NARUTO (CHAKRA CLOAK)</span>
            </button>
          </div>
        </div>

        {/* Section Heading + Saiyan Battle Scouter HUD */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2
              className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase ${
                isLightTheme ? "text-[#0F172A]" : "text-white"
              }`}
            >
              Academic Saga & Battle Arcs.
            </h2>
            <p className="mt-2 text-sm sm:text-base font-mono text-[#FF7700] flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-ping" />
              <span>
                B.TECH: <strong className="text-white">2024 — 2028</strong> ✦ HACKATHON ARENA:{" "}
                <strong className="text-white">2026 — PRESENT</strong>
              </span>
            </p>
          </div>

          {/* DRAGON BALL SCOUTER / CHAKRA HUD */}
          <Tilt3D
            intensity={9}
            glareColor="rgba(255, 119, 0, 0.3)"
            className="rounded-xl"
          >
          <div
            className={`p-4 rounded-xl border flex flex-col items-end gap-2 transition-all relative overflow-hidden ${
              isLightTheme
                ? "bg-white border-[#E2E8F0] shadow-sm"
                : "bg-[#0E0703]/90 border-[#FF7700]/50 shadow-[0_0_30px_rgba(255,119,0,0.2)]"
            }`}
          >
            {/* Scouter Glass Overlay Grid */}
            <div className="flex items-center justify-between w-full gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#FF5500] animate-pulse" />
                <span className="text-[#94A3B8] font-bold text-[10px]">SCOUTER LOCK-ON:</span>
                <span className="font-black text-[#FFA500]">DEV NIJHAWAN</span>
              </div>
              <span className="text-[10px] text-[#00FF66] font-bold bg-[#00FF66]/10 px-2 py-0.5 rounded border border-[#00FF66]/30">
                TARGET IDENTIFIED
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-mono text-xs text-[#94A3B8] uppercase">POWER LEVEL:</span>
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-[#FF7700] drop-shadow-[0_0_12px_rgba(255,119,0,0.8)]">
                {powerLevel.toLocaleString()}+
              </span>
              <span className="text-[10px] font-mono text-[#FF5500] font-black uppercase">
                [IT&apos;S OVER 9000!]
              </span>
            </div>

            {/* Ki Charge Button */}
            <button
              onClick={handleChargeKi}
              disabled={isCharging}
              className={`w-full flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                isCharging
                  ? "bg-[#FF5500] text-black border-[#FF7700] animate-pulse shadow-[0_0_20px_rgba(255,85,0,0.8)]"
                  : "bg-black/50 border-[#FF7700]/40 text-[#FFA500] hover:bg-[#FF7700]/20 hover:border-[#FF7700] hover:shadow-[0_0_15px_rgba(255,119,0,0.4)]"
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${isCharging ? "animate-spin" : ""}`} />
              <span>{isCharging ? "CHARGING SAIYAN KI...!" : "UNLEASH CHAKRA / CHARGE KI"}</span>
            </button>
          </div>
          </Tilt3D>
        </div>

        {/* TIMELINE STREAM WITH FLOWING KAMEHAMEHA / CHAKRA BEAM */}
        <div className="relative">
          {/* Vertical Anime Energy Beam */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-1 sm:w-1.5 bg-neutral-900 rounded-full overflow-hidden">
            {/* Flowing animated orange laser beam */}
            <div
              className="w-full h-full bg-gradient-to-b from-[#FF5500] via-[#FFD700] to-[#FF5500] animate-pulse shadow-[0_0_15px_#FF7700]"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255,119,0,0.9))",
              }}
            />
          </div>

          <div className="space-y-12 sm:space-y-16 pl-12 sm:pl-20">
            {ANIME_TIMELINE_SAGAS.map((saga) => {
              const isActive = activeArc === saga.id;
              const activeSkill = animeMode === "goku" ? saga.gokuSkill : saga.narutoSkill;

              return (
                <div
                  key={saga.id}
                  onClick={() => setActiveArc(saga.id)}
                  className="relative group cursor-pointer"
                >
                  {/* Rotating Rasengan / Saiyan Ki Sphere Node */}
                  <div
                    className={`absolute -left-[45px] sm:-left-[74px] top-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#0E0602] border-[#FF5500] shadow-[0_0_25px_rgba(255,85,0,0.9)] scale-110"
                        : "bg-[#0E0602] border-[#FF7700]/50 group-hover:border-[#FFA500] shadow-[0_0_12px_rgba(255,119,0,0.4)]"
                    }`}
                  >
                    {/* Inner Rotating Chakra Core */}
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-[#FF5500] to-[#FFA500] flex items-center justify-center animate-spin" style={{ animationDuration: "3s" }}>
                      <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#FFFFFF]" />
                    </div>
                  </div>

                  {/* ANIME SAGA CARD */}
                  <Tilt3D
                    intensity={7}
                    glareColor="rgba(255, 119, 0, 0.25)"
                    className="rounded-2xl"
                  >
                  <div
                    className={`p-6 sm:p-8 rounded-2xl border transition-all relative overflow-hidden ${
                      isActive
                        ? isLightTheme
                          ? "bg-white border-[#FF7700] shadow-xl"
                          : "bg-gradient-to-br from-[#140A04] to-[#0A0503] border-[#FF7700] shadow-[0_0_40px_rgba(255,119,0,0.25)]"
                        : isLightTheme
                        ? "bg-white border-[#E2E8F0] hover:border-[#FF7700]/50 shadow-subtle"
                        : "bg-[#0A0502]/85 border-[#2E1608] hover:border-[#FF7700]/60 hover:shadow-[0_0_20px_rgba(255,119,0,0.15)]"
                    }`}
                  >
                    {/* Top Anime Badge & Dates */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#FF7700]/25">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs sm:text-sm font-black px-3 py-1 rounded-lg uppercase tracking-wider bg-[#FF5500] text-black shadow-[0_0_12px_rgba(255,85,0,0.5)]">
                          {saga.year}
                        </span>
                        <span className="text-[11px] font-mono text-[#FFA500] font-bold bg-[#FF7700]/10 border border-[#FF7700]/30 px-2 py-0.5 rounded">
                          {saga.badge}
                        </span>
                      </div>

                      <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-[#FF7700]" />
                        {saga.institutionOrContext}
                      </span>
                    </div>

                    {/* Saga Title & Role */}
                    <h3
                      className={`text-xl sm:text-2xl font-black mb-1 tracking-tight ${
                        isLightTheme ? "text-[#0F172A]" : "text-white"
                      }`}
                    >
                      {saga.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono mb-4 text-[#FF7700] font-bold flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#FF5500]" />
                      {saga.role}
                    </p>

                    <p
                      className={`text-sm sm:text-base leading-relaxed mb-6 ${
                        isLightTheme ? "text-[#475569]" : "text-[#CBD5E1]"
                      }`}
                    >
                      {saga.description}
                    </p>

                    {/* ANIME TECHNIQUE SHOWCASE (GOKU / NARUTO SKILL BOX) */}
                    <div className="p-4 sm:p-5 rounded-xl border border-[#FF7700]/40 bg-black/50 mb-5 relative overflow-hidden">
                      {/* Ambient Chakra Glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7700]/10 rounded-full blur-2xl pointer-events-none" />

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          {animeMode === "goku" ? (
                            <Zap className="w-4 h-4 text-[#FFA500] animate-bounce" />
                          ) : (
                            <Flame className="w-4 h-4 text-[#FF5500] animate-pulse" />
                          )}
                          <span className="font-mono text-xs font-black uppercase text-[#FFA500] tracking-wider">
                            {animeMode === "goku" ? "SAIYAN TECHNIQUE:" : "CHAKRA JUTSU:"}
                          </span>
                          <span className="font-black text-white text-sm sm:text-base">
                            {activeSkill.technique}
                          </span>
                        </div>

                        <div className="font-mono text-[11px] text-[#FF5500] font-bold bg-[#FF5500]/15 px-2.5 py-0.5 rounded border border-[#FF5500]/40">
                          {animeMode === "goku"
                            ? `POWER: ${(activeSkill as AnimeSagaItem["gokuSkill"]).powerLevel}`
                            : `NATURE: ${(activeSkill as AnimeSagaItem["narutoSkill"]).chakraNature}`}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#94A3B8] font-sans leading-relaxed">
                        {activeSkill.description}
                      </p>
                    </div>

                    {/* Skill Tags */}
                    <div
                      className={`flex flex-wrap gap-2 pt-3 border-t ${
                        isLightTheme ? "border-[#E2E8F0]" : "border-[#2E1608]"
                      }`}
                    >
                      {saga.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-bold transition-all ${
                            isLightTheme
                              ? "bg-[#FFF7ED] border border-[#FED7AA] text-[#C2410C]"
                              : "bg-[#180B04] border border-[#FF7700]/40 text-[#FFA500] hover:border-[#FF5500] hover:text-white"
                          }`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  </Tilt3D>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM ANIME SUMMARY FOOTER */}
        <div className="mt-16 p-6 rounded-2xl border border-[#FF7700]/40 bg-gradient-to-r from-[#140803] via-[#0A0502] to-[#140803] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF5500] text-black font-black flex items-center justify-center text-sm shadow-[0_0_12px_rgba(255,85,0,0.6)]">
              悟
            </div>
            <div>
              <span className="text-white font-bold block">
                THE SAGA CONTINUES // ROAD TO 2028 GRADUATION
              </span>
              <span className="text-[11px] text-[#FFA500]">
                Currently in B.Tech 3rd Year (AIML) &bull; Active in Competitive 2026 Hackathons
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#FF7700] font-bold uppercase">NEXT ARC:</span>
            <span className="text-white bg-black/60 px-3 py-1 rounded border border-[#FF7700]/40">
              NATIONAL HACKATHON TITLES ✦ AGENTIC AI
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
