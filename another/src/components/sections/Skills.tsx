"use client";

import React, { useState } from "react";
import { Sparkles, Shuffle, Flame, Zap, Shield } from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioConfig } from "@/config/portfolio.config";
import { Tilt3D } from "@/components/ui/Tilt3D";

interface SkillsProps {
  isLightTheme?: boolean;
}

interface SkillCardData {
  id: string;
  name: string;
  category: string;
  suit: string;
  rarity: "MYTHIC" | "LEGENDARY" | "EPIC";
  power: number;
  mana: number;
  highlight: boolean;
  description: string;
  perk: string;
  accent: "pink" | "red" | "purple";
}

export function Skills({ isLightTheme = false }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [selectedCardId, setSelectedCardId] = useState<string>("python");
  const [viewMode, setViewMode] = useState<"fan" | "grid">("fan");
  const [isShuffling, setIsShuffling] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Convert skills into rich Cyber Card Battler Deck
  const allCards: SkillCardData[] = [
    // Programming
    {
      id: "python",
      name: "Python 3.12",
      category: "PROGRAMMING",
      suit: "♥",
      rarity: "MYTHIC",
      power: 99,
      mana: 0,
      highlight: true,
      description: "Primary language for ML modeling, FastAPI asynchronous backends, data pipelines, and system automation.",
      perk: "+99 Modeling Efficiency // PyTorch & Scikit Native",
      accent: "pink",
    },
    {
      id: "c-lang",
      name: "C Systems",
      category: "PROGRAMMING",
      suit: "♦",
      rarity: "EPIC",
      power: 92,
      mana: 2,
      highlight: false,
      description: "Low-level memory management, algorithmic complexity optimization, and compute performance fundamentals.",
      perk: "Zero Overhead // Direct Memory Pointer Control",
      accent: "red",
    },
    {
      id: "javascript",
      name: "JavaScript (ES6+)",
      category: "PROGRAMMING",
      suit: "♥",
      rarity: "LEGENDARY",
      power: 95,
      mana: 1,
      highlight: true,
      description: "Modern asynchronous web engineering, dynamic state machines, and high-performance client architectures.",
      perk: "Event Loop Mastery // Universal Reactive State",
      accent: "pink",
    },
    // AI & Machine Learning
    {
      id: "ml-core",
      name: "Machine Learning",
      category: "AI & MACHINE LEARNING",
      suit: "♦",
      rarity: "MYTHIC",
      power: 98,
      mana: 0,
      highlight: true,
      description: "Supervised and unsupervised architectures, Scikit-Learn, cross-validation, and loss function tuning.",
      perk: "Hyperplane Optimization // Generalization Power",
      accent: "red",
    },
    {
      id: "ai-systems",
      name: "Artificial Intelligence",
      category: "AI & MACHINE LEARNING",
      suit: "♥",
      rarity: "MYTHIC",
      power: 97,
      mana: 0,
      highlight: true,
      description: "Decision heuristics, agentic pipelines, conversational intelligence, and prompt optimization flows.",
      perk: "Autonomous Problem Solving // Zero-Shot Adaptation",
      accent: "pink",
    },
    {
      id: "data-analysis",
      name: "Data Analysis",
      category: "AI & MACHINE LEARNING",
      suit: "♦",
      rarity: "EPIC",
      power: 93,
      mana: 1,
      highlight: false,
      description: "Exploratory analysis (EDA), NumPy, Pandas vector operations, and statistical distribution modeling.",
      perk: "High Density Vector Transformations",
      accent: "red",
    },
    {
      id: "fraud-detection",
      name: "Fraud Anomaly Engine",
      category: "AI & MACHINE LEARNING",
      suit: "♥",
      rarity: "LEGENDARY",
      power: 96,
      mana: 1,
      highlight: true,
      description: "Imbalanced classification with SMOTE, sub-millisecond fraud scoring, and precision-recall calibration.",
      perk: "92.8% Anomaly Recall on European Cardholders",
      accent: "pink",
    },
    {
      id: "document-screening",
      name: "Document Screening",
      category: "AI & MACHINE LEARNING",
      suit: "♦",
      rarity: "LEGENDARY",
      power: 95,
      mana: 1,
      highlight: true,
      description: "Optical Character Recognition (OCR), MRZ checksum math validation, and typographic layout tamper verification.",
      perk: "Multi-Zone Bounding Coordinates & Authenticity Audit",
      accent: "red",
    },
    // Frameworks
    {
      id: "nextjs",
      name: "Next.js 14/15",
      category: "FRAMEWORKS & DEVELOPMENT",
      suit: "♥",
      rarity: "MYTHIC",
      power: 97,
      mana: 0,
      highlight: true,
      description: "App Router, React Server Components, server actions, SEO metadata, and edge-rendered architectures.",
      perk: "Sub-second TTFB // Full Hydration Control",
      accent: "pink",
    },
    {
      id: "fastapi",
      name: "FastAPI Async",
      category: "FRAMEWORKS & DEVELOPMENT",
      suit: "♦",
      rarity: "MYTHIC",
      power: 98,
      mana: 0,
      highlight: true,
      description: "High-throughput asynchronous Python microservices, strict Pydantic validation, and OpenAPI contracts.",
      perk: "Native Async IO // High Throughput Microservices",
      accent: "red",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "FRAMEWORKS & DEVELOPMENT",
      suit: "♦",
      rarity: "LEGENDARY",
      power: 92,
      mana: 1,
      highlight: false,
      description: "Relational database schema modeling, ACID transactions, complex join indexing, and high query concurrency.",
      perk: "Zero Data Corruption // Scalable Relational Indexes",
      accent: "red",
    },
    // Tools
    {
      id: "github",
      name: "Git & GitHub",
      category: "TOOLS",
      suit: "♥",
      rarity: "LEGENDARY",
      power: 96,
      mana: 0,
      highlight: true,
      description: "Hygiene in commit history, trunk-based branching, collaborative pull requests, and automated workflows.",
      perk: "Atomic Version Control // Distributed Collaboration",
      accent: "pink",
    },
    {
      id: "vscode-vercel",
      name: "VS Code & Vercel",
      category: "TOOLS",
      suit: "♦",
      rarity: "EPIC",
      power: 94,
      mana: 1,
      highlight: false,
      description: "Configured debugger workspaces, Python virtualenvs, automated edge deploys, and global CDN caching.",
      perk: "Instant Edge Deployment & Live CI/CD Pipeline",
      accent: "red",
    },
  ];

  const currentCategoryName = portfolioConfig.skills.categories[activeCategory].title;
  const currentCategoryCards = allCards.filter((c) => c.category === currentCategoryName);
  const activeDeck = currentCategoryCards.length > 0 ? currentCategoryCards : allCards;

  const selectedCard = allCards.find((c) => c.id === selectedCardId) || activeDeck[0];

  // Trigger Card Shuffle Animation
  const handleShuffleDeck = () => {
    setIsShuffling(true);

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#FF0055", "#EC4899", "#FB7185", "#C084FC"],
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      // Pick random card
      const randomCard = activeDeck[Math.floor(Math.random() * activeDeck.length)];
      setSelectedCardId(randomCard.id);
      setIsShuffling(false);
    }, 600);
  };

  return (
    <section
      id="skills"
      className={`py-24 sm:py-32 border-t transition-colors duration-300 relative z-10 ${
        isLightTheme ? "bg-[#FAFAF8] border-[#EAEAEA]" : "bg-[#06040A]/95 border-[#2A184D]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-[#FF0055] font-semibold tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-[#FF0055] animate-pulse shadow-[0_0_8px_#FF0055]" />
                <span>03 // CYBER SKILL CARD BATTLER DECK</span>
              </span>
              <div className={`h-px w-12 ${isLightTheme ? "bg-[#EAEAEA]" : "bg-[#3B1D6E]"}`} />
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-bold tracking-tight mb-3 ${
                isLightTheme ? "text-[#171717]" : "text-white"
              }`}
            >
              Mastery In Action: The Deck.
            </h2>
            <p className={`text-base ${isLightTheme ? "text-[#666666]" : "text-[#94A3B8]"}`}>
              Explore competencies as playable cyber-cards fanned with interactive physics.
              Featuring Crimson Redstone and Neon Pink holographic foil editions.
            </p>
          </div>

          {/* Action Buttons: Shuffle & View Mode */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <button
              onClick={handleShuffleDeck}
              disabled={isShuffling}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF0055] to-[#EC4899] hover:from-[#E11D48] hover:to-[#DB2777] text-white font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(255,0,85,0.4)] transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              <Shuffle className={`w-3.5 h-3.5 ${isShuffling ? "animate-spin" : ""}`} />
              <span>{isShuffling ? "SHUFFLING DECK..." : "SHUFFLE & DEAL HAND"}</span>
            </button>

            <div className="flex items-center border border-[#3B1D6E] rounded-lg p-1 bg-[#0E091E]">
              <button
                onClick={() => setViewMode("fan")}
                className={`px-3 py-1 rounded text-[11px] font-bold transition-all ${
                  viewMode === "fan"
                    ? "bg-[#FF0055] text-white shadow-[0_0_10px_#FF0055]"
                    : "text-purple-300 hover:text-white"
                }`}
              >
                FANNED DECK
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1 rounded text-[11px] font-bold transition-all ${
                  viewMode === "grid"
                    ? "bg-[#EC4899] text-white shadow-[0_0_10px_#EC4899]"
                    : "text-purple-300 hover:text-white"
                }`}
              >
                GRID VIEW
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {portfolioConfig.skills.categories.map((cat, idx) => {
            const isSelected = activeCategory === idx;
            const categoryAccent = idx % 2 === 0 ? "border-[#FF0055] text-[#FF0055]" : "border-[#EC4899] text-[#EC4899]";

            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(idx);
                  const firstCardOfCat = allCards.find((c) => c.category === cat.title);
                  if (firstCardOfCat) setSelectedCardId(firstCardOfCat.id);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? `bg-[#150B24] ${categoryAccent} shadow-[0_0_20px_rgba(255,0,85,0.25)] ring-1 ring-[#FF0055]/30 font-bold`
                    : "bg-[#0E091E]/80 border-[#2A184D] hover:bg-[#181033] text-[#94A3B8]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] text-purple-400 font-bold">DECK 0{idx + 1}</span>
                  <span className="text-xs font-mono font-bold text-[#FF0055]">
                    {idx % 2 === 0 ? "♥" : "♦"}
                  </span>
                </div>
                <span
                  className={`block text-xs font-mono tracking-wide uppercase ${
                    isSelected ? "text-white" : "text-[#94A3B8]"
                  }`}
                >
                  {cat.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* 1. INTERACTIVE FANNED CARD DECK ARENA */}
        {viewMode === "fan" ? (
          <div className="mb-16">
            <div
              className={`rounded-3xl border p-6 sm:p-10 relative overflow-hidden transition-all ${
                isLightTheme
                  ? "bg-white border-[#EAEAEA] shadow-card"
                  : "bg-gradient-to-b from-[#130924] via-[#0E071A] to-[#07040D] border-[#FF0055]/30 shadow-[0_0_40px_rgba(255,0,85,0.15)] ring-1 ring-[#FF0055]/20"
              }`}
            >
              {/* Background table felt pattern */}
              <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

              {/* Arena Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-8 border-b border-[#2A184D] relative z-10 font-mono text-xs">
                <div className="flex items-center gap-2 text-white">
                  <Flame className="w-4 h-4 text-[#FF0055] animate-pulse" />
                  <span className="font-bold uppercase tracking-wider">
                    DEALT HAND: {currentCategoryName} [{activeDeck.length} CARDS]
                  </span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <span className="text-[11px] text-[#EC4899] font-bold">
                    HOVER TO LIFT // CLICK TO INSPECT ABILITY
                  </span>
                </div>
              </div>

              {/* Fanned Cards Stage */}
              <div className="min-h-[380px] sm:min-h-[440px] flex items-center justify-center relative py-8 px-4 z-10">
                <div className="flex items-center justify-center relative w-full max-w-4xl">
                  {activeDeck.map((card, idx) => {
                    const total = activeDeck.length;
                    const midpoint = (total - 1) / 2;
                    const offset = idx - midpoint;
                    const rotationDeg = offset * 6; // Fanned angle
                    const translateX = offset * (total > 4 ? 65 : 85);
                    const isSelected = selectedCard.id === card.id;
                    const isHovered = hoveredCard === card.id;

                    const isRed = card.accent === "red";
                    const borderColor = isRed ? "border-[#FF0055]" : "border-[#EC4899]";
                    const glowShadow = isRed
                      ? "shadow-[0_0_30px_rgba(255,0,85,0.5)]"
                      : "shadow-[0_0_30px_rgba(236,72,153,0.5)]";

                    return (
                      <div
                        key={card.id}
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => setSelectedCardId(card.id)}
                        style={{
                          transform: isHovered || isSelected
                            ? `perspective(1200px) translate3d(${translateX}px, -45px, 60px) rotateX(6deg) rotateY(${offset * 3}deg) scale(1.08)`
                            : isShuffling
                            ? `perspective(1200px) translate3d(0px, 0px, 0px) rotate(0deg)`
                            : `perspective(1200px) translate3d(${translateX}px, ${Math.abs(offset) * 8}px, ${-Math.abs(offset) * 12}px) rotate(${rotationDeg}deg) rotateX(10deg)`,
                          transformStyle: "preserve-3d",
                          zIndex: isHovered || isSelected ? 40 : 10 + idx,
                          transition: "all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
                        }}
                        className={`absolute w-56 sm:w-64 h-80 sm:h-96 rounded-2xl p-5 border cursor-pointer select-none backdrop-blur-xl flex flex-col justify-between preserve-3d ${
                          isLightTheme ? "bg-white text-black" : "bg-[#0E071D]/95 text-white"
                        } ${isSelected || isHovered ? `${borderColor} ${glowShadow} ring-2 ring-white/30` : "border-[#3B1D6E] shadow-2xl"}`}
                      >
                        {/* Top Card Bar: Suit, Cost & Rarity */}
                        <div className="flex items-center justify-between font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className={`text-base font-bold ${isRed ? "text-[#FF0055]" : "text-[#EC4899]"}`}>
                              {card.suit}
                            </span>
                            <span className="text-xs font-bold text-white tracking-wider">
                              LVL {card.power}
                            </span>
                          </div>

                          <span
                            className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border ${
                              isRed
                                ? "bg-rose-950/80 text-rose-300 border-rose-700"
                                : "bg-pink-950/80 text-pink-300 border-pink-700"
                            }`}
                          >
                            {card.rarity}
                          </span>
                        </div>

                        {/* Card Center: Art & Holographic Emblem */}
                        <div className="my-auto text-center py-4 relative">
                          {/* Shimmering Holographic Ring */}
                          <div
                            className={`w-20 h-20 mx-auto rounded-2xl border flex items-center justify-center transition-transform duration-300 ${
                              isHovered ? "scale-110 rotate-6" : ""
                            } ${
                              isRed
                                ? "bg-gradient-to-br from-[#FF0055]/20 to-[#990033]/40 border-[#FF0055] shadow-[0_0_20px_rgba(255,0,85,0.4)]"
                                : "bg-gradient-to-br from-[#EC4899]/20 to-[#831843]/40 border-[#EC4899] shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                            }`}
                          >
                            <Zap className={`w-9 h-9 ${isRed ? "text-[#FF0055]" : "text-[#EC4899]"}`} />
                          </div>

                          <h4 className="text-lg font-bold font-mono mt-3 text-white tracking-wide">
                            {card.name}
                          </h4>
                          <span className="text-[10px] font-mono text-purple-300/80 block mt-0.5 uppercase tracking-widest">
                            {card.category}
                          </span>
                        </div>

                        {/* Card Bottom: Perk & Ability */}
                        <div className="pt-3 border-t border-[#2A184D] font-mono">
                          <p className="text-[10px] text-[#94A3B8] leading-tight line-clamp-2 mb-2">
                            {card.description}
                          </p>

                          <div
                            className={`p-1.5 rounded-md text-[9px] font-bold flex items-center gap-1 ${
                              isRed
                                ? "bg-rose-950/60 text-rose-300 border border-rose-800/60"
                                : "bg-pink-950/60 text-pink-300 border border-pink-800/60"
                            }`}
                          >
                            <Sparkles className="w-2.5 h-2.5 shrink-0" />
                            <span className="truncate">{card.perk}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selected Card Focus Details HUD */}
              <div className="mt-8 pt-6 border-t border-[#2A184D] relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center font-mono">
                <div className="md:col-span-8 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded bg-gradient-to-r from-[#FF0055] to-[#EC4899] text-white font-bold">
                      ACTIVE INSPECTION
                    </span>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>{selectedCard.name}</span>
                      <span className="text-[#EC4899]">{selectedCard.suit}</span>
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {selectedCard.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#00FF66] pt-1">
                    <Shield className="w-3.5 h-3.5 text-[#00FF66]" />
                    <span>PERK: {selectedCard.perk}</span>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#090514] border border-[#3B1D6E] w-full sm:w-auto text-left">
                    <div className="flex justify-between gap-4 text-[11px] mb-1">
                      <span className="text-purple-400">COMBAT_POWER:</span>
                      <span className="font-bold text-[#FF0055]">{selectedCard.power} / 100</span>
                    </div>
                    <div className="flex justify-between gap-4 text-[11px]">
                      <span className="text-purple-400">RARITY_CLASS:</span>
                      <span className="font-bold text-[#EC4899]">{selectedCard.rarity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* 2. GRID ARENA VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {activeDeck.map((card) => {
              const isRed = card.accent === "red";
              const borderColor = isRed ? "hover:border-[#FF0055]" : "hover:border-[#EC4899]";

              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedCardId(card.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                    isLightTheme
                      ? "bg-white border-[#EAEAEA] shadow-subtle hover:shadow-card"
                      : "bg-[#0E071D] border-[#2A184D] hover:shadow-[0_0_25px_rgba(255,0,85,0.3)]"
                  } ${borderColor}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 font-mono text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className={`font-bold ${isRed ? "text-[#FF0055]" : "text-[#EC4899]"}`}>
                          {card.suit}
                        </span>
                        <span className="text-white font-bold">{card.name}</span>
                      </div>
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase ${
                          isRed
                            ? "bg-rose-950 text-rose-300 border border-rose-800"
                            : "bg-pink-950 text-pink-300 border border-pink-800"
                        }`}
                      >
                        {card.rarity}
                      </span>
                    </div>

                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                      {card.description}
                    </p>
                  </div>

                  <div
                    className={`p-2 rounded-lg text-[10px] font-mono font-bold flex items-center justify-between ${
                      isRed
                        ? "bg-rose-950/40 text-rose-300 border border-rose-900"
                        : "bg-pink-950/40 text-pink-300 border border-pink-900"
                    }`}
                  >
                    <span className="truncate">{card.perk}</span>
                    <span className="text-white shrink-0 ml-2">PWR {card.power}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 3. System Integration Flow with Crimson & Pink Accents */}
        <Tilt3D
          intensity={5}
          glareColor="rgba(255, 0, 85, 0.15)"
          className="rounded-2xl"
        >
        <div
          className={`rounded-2xl border p-6 sm:p-8 transition-all ${
            isLightTheme
              ? "border-[#EAEAEA] bg-white shadow-card"
              : "border-[#2A184D] bg-[#0E091E]/90 shadow-[0_0_35px_rgba(168,85,247,0.15)]"
          }`}
        >
          <div
            className={`flex items-center justify-between pb-6 mb-6 border-b ${
              isLightTheme ? "border-[#F0F0EE]" : "border-[#2A184D]"
            }`}
          >
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF0055]" />
                <h3 className={`text-base font-bold font-mono ${isLightTheme ? "text-[#171717]" : "text-white"}`}>
                  End-to-End System Integration Flow
                </h3>
              </div>
              <p className={`text-xs mt-0.5 font-mono ${isLightTheme ? "text-[#777777]" : "text-[#94A3B8]"}`}>
                How card skills connect together across data ingest, modeling, and client edge runtime.
              </p>
            </div>
            <span className="hidden sm:inline font-mono text-[10px] px-2.5 py-1 rounded border font-semibold text-[#FF0055] bg-rose-950/60 border-rose-800">
              FULL-STACK PIPELINE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            {[
              {
                stage: "01. Data Ingestion",
                tools: ["Python 3.12", "Pandas", "NumPy"],
                accent: "text-[#FF0055]",
                details: "Raw transactional vectors & document images preprocessed with zero memory leakage.",
              },
              {
                stage: "02. Intelligence",
                tools: ["Scikit-Learn", "FastAPI", "OCR"],
                accent: "text-[#EC4899]",
                details: "Synthetic resampling (SMOTE), classification, and optical verification.",
              },
              {
                stage: "03. Microservices",
                tools: ["FastAPI", "PostgreSQL", "Pydantic"],
                accent: "text-[#FF0055]",
                details: "High-throughput asynchronous endpoints with sub-millisecond scoring.",
              },
              {
                stage: "04. Client & Edge",
                tools: ["Next.js", "TypeScript", "Vercel"],
                accent: "text-[#00FF66]",
                details: "Responsive cyber interfaces with interactive dashboards and edge networks.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[#2A184D] bg-[#090514] flex flex-col justify-between hover:border-[#FF0055]/50 transition-all"
              >
                <div>
                  <span className={`text-[10px] font-bold block mb-1 ${step.accent}`}>
                    {step.stage}
                  </span>
                  <div className="flex flex-wrap gap-1.5 my-2.5">
                    {step.tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded border border-[#3B1D6E] bg-[#120724] text-[10px] text-purple-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed mt-2 pt-2 border-t border-[#25153E]">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
        </Tilt3D>
      </div>
    </section>
  );
}
