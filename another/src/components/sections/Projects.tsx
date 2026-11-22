"use client";

import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Sparkles, Layers, Monitor, Cpu, Activity } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { portfolioConfig, ProjectItem } from "@/config/portfolio.config";
import { VeritasMockup } from "@/components/mockups/VeritasMockup";
import { FraudDetectionMockup } from "@/components/mockups/FraudDetectionMockup";
import { WeatherGptMockup } from "@/components/mockups/WeatherGptMockup";
import { ProjectModal } from "@/components/sections/ProjectModal";

interface ProjectsProps {
  isLightTheme?: boolean;
}

export function Projects({ isLightTheme = false }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeScreenTab, setActiveScreenTab] = useState<"all" | "veritas-id" | "fraud-detection" | "weather-gpt">("all");

  const renderProjectMockup = (projectId: string) => {
    switch (projectId) {
      case "veritas-id":
        return <VeritasMockup isLightTheme={isLightTheme} />;
      case "fraud-detection":
        return <FraudDetectionMockup isLightTheme={isLightTheme} />;
      case "weather-gpt":
        return <WeatherGptMockup isLightTheme={isLightTheme} />;
      default:
        return null;
    }
  };

  const filteredProjects = activeScreenTab === "all"
    ? portfolioConfig.projects
    : portfolioConfig.projects.filter((p) => p.id === activeScreenTab);

  return (
    <section
      id="projects"
      className={`py-24 sm:py-32 border-t transition-colors duration-300 relative z-10 ${
        isLightTheme ? "bg-white border-[#EAEAEA]" : "bg-[#06040A]/90 backdrop-blur-md border-[#2A184D]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-[#00FF66] font-semibold tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-[#00FF66] animate-pulse shadow-[0_0_8px_#00FF66]" />
                <span>04 // LIVE SYSTEM COMMAND DECK</span>
              </span>
              <div className={`h-px w-12 ${isLightTheme ? "bg-[#EAEAEA]" : "bg-[#2A184D]"}`} />
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-bold tracking-tight mb-3 ${
                isLightTheme ? "text-[#171717]" : "text-white"
              }`}
            >
              Real-World Engineering In Action.
            </h2>
            <p className={`text-base ${isLightTheme ? "text-[#666666]" : "text-[#94A3B8]"}`}>
              Live operating software pipelines and machine learning inference engines.
              Observe real-time telemetry, automated OCR bounding extraction, and anomaly scoring.
            </p>
          </div>

          <div
            className={`font-mono text-xs px-3.5 py-2 rounded-xl border flex items-center gap-2 self-start sm:self-auto ${
              isLightTheme
                ? "bg-[#FAFAF8] border-[#EAEAEA] text-[#888888]"
                : "bg-[#0E091E] border-[#00FF66]/30 text-emerald-300 shadow-[0_0_15px_rgba(0,255,102,0.15)]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
            <span>3 OF 3 ENGINES ACTIVE // 60 FPS</span>
          </div>
        </div>

        {/* Master Live Screen Command Deck Bar */}
        <div
          className={`mb-12 rounded-2xl border overflow-hidden p-4 sm:p-5 transition-all ${
            isLightTheme
              ? "bg-[#FAFAF8] border-[#EAEAEA]"
              : "bg-[#0E091E]/95 border-[#2E184D] shadow-[0_0_30px_rgba(168,85,247,0.15)]"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#25153E]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-[#00FF66] shadow-[0_0_10px_rgba(0,255,102,0.3)]">
                <Monitor className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
                  <span>MASTER SCREEN CONTROLLER</span>
                  <span className="text-[10px] text-[#00FF66] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 font-semibold">
                    ONLINE
                  </span>
                </span>
                <span className="text-[11px] font-mono text-purple-400">
                  Select a live display screen or monitor all active pipelines concurrently
                </span>
              </div>
            </div>

            {/* Live Waveform Pulse Animation */}
            <div className="flex items-center gap-3 font-mono text-[11px] text-[#94A3B8]">
              <span className="text-[#00FF66] flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                TELEMETRY_PULSE:
              </span>
              <svg className="w-24 h-5 overflow-visible" viewBox="0 0 100 20">
                <path
                  d="M0,10 L25,10 L30,2 L35,18 L40,6 L45,14 L50,10 L100,10"
                  fill="none"
                  stroke="#00FF66"
                  strokeWidth="2"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>

          {/* Interactive Screen Tab Switcher */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveScreenTab("all")}
                className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                  activeScreenTab === "all"
                    ? "bg-[#00FF66] text-black font-bold border-[#00FF66] shadow-[0_0_15px_rgba(0,255,102,0.4)]"
                    : "bg-[#070410] border-[#25153E] text-purple-200 hover:text-white hover:border-[#00FF66]"
                }`}
              >
                VIEW ALL SCREENS (3)
              </button>
              <button
                onClick={() => setActiveScreenTab("veritas-id")}
                className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                  activeScreenTab === "veritas-id"
                    ? "bg-gradient-to-r from-[#7E22CE] to-[#A855F7] text-white font-bold border-[#C084FC] shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    : "bg-[#070410] border-[#25153E] text-purple-200 hover:text-white hover:border-[#A855F7]"
                }`}
              >
                SCREEN 01: VERITAS_ID (OCR)
              </button>
              <button
                onClick={() => setActiveScreenTab("fraud-detection")}
                className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                  activeScreenTab === "fraud-detection"
                    ? "bg-gradient-to-r from-[#7E22CE] to-[#A855F7] text-white font-bold border-[#C084FC] shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    : "bg-[#070410] border-[#25153E] text-purple-200 hover:text-white hover:border-[#A855F7]"
                }`}
              >
                SCREEN 02: FRAUD_DETECTION (ML)
              </button>
              <button
                onClick={() => setActiveScreenTab("weather-gpt")}
                className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                  activeScreenTab === "weather-gpt"
                    ? "bg-gradient-to-r from-[#7E22CE] to-[#A855F7] text-white font-bold border-[#C084FC] shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    : "bg-[#070410] border-[#25153E] text-purple-200 hover:text-white hover:border-[#A855F7]"
                }`}
              >
                SCREEN 03: WEATHER_GPT (AI)
              </button>
            </div>

            <div className="flex items-center gap-3 text-purple-300 text-[11px]">
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-[#00FF66]" />
                CPU: 28%
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-[#C084FC]" />
                GPU: 64%
              </span>
              <span>•</span>
              <span className="text-[#00FF66] font-semibold">1.4 GB/s</span>
            </div>
          </div>
        </div>

        {/* Project List with Live Screen Bezel Containers */}
        <div className="space-y-24 sm:space-y-32">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Working Screen Bezel */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  } w-full transition-all duration-300 rounded-2xl`}
                >
                  <div className="relative group">
                    {/* Live Working Screen Shell Frame */}
                    <div className="rounded-2xl p-1.5 bg-gradient-to-b from-[#2E184D] via-[#120B24] to-[#0A0716] border border-[#00FF66]/30 shadow-[0_0_40px_rgba(0,255,102,0.15)] ring-1 ring-[#00FF66]/20">
                      {/* Top bezel status line */}
                      <div className="px-3 py-1.5 flex items-center justify-between text-[10px] font-mono text-[#00FF66] bg-[#070410] rounded-t-xl mb-1 border-b border-[#25153E]">
                        <span className="flex items-center gap-1.5 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-ping" />
                          LIVE_DISPLAY // {project.name.toUpperCase()}
                        </span>
                        <span className="text-purple-400">RESOLUTION: 1920x1080 // 144Hz</span>
                      </div>

                      {/* Mockup Screen Core */}
                      {renderProjectMockup(project.id)}

                      {/* Bottom bezel hardware telemetry */}
                      <div className="px-3 py-1.5 flex items-center justify-between text-[10px] font-mono text-purple-300/80 bg-[#070410] rounded-b-xl mt-1 border-t border-[#25153E]">
                        <span>CORE: FASTAPI_ASYNC_WORKER</span>
                        <span className="text-[#00FF66] font-bold">STATUS: OPERATIONAL</span>
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono px-1">
                      <span className="text-purple-400">
                        PROJECT 0{index + 1} &mdash; {project.name}
                      </span>
                      <span className="text-[#00FF66] flex items-center gap-1 font-semibold">
                        <Sparkles className="w-3 h-3 text-[#00FF66]" />
                        Active Live Working Screen
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Overview */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  } space-y-6`}
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span
                        className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                          isLightTheme
                            ? "bg-blue-50 text-[#315EFB] border-blue-200"
                            : "bg-emerald-950/80 text-[#00FF66] border-emerald-800"
                        }`}
                      >
                        {project.category}
                      </span>
                      <span className="font-mono text-[11px] text-purple-400">
                        INDEX // 0{index + 1}
                      </span>
                    </div>

                    <h3
                      className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                        isLightTheme ? "text-[#171717]" : "text-white"
                      }`}
                    >
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-[#00FF66] font-semibold mb-3">
                      {project.tagline}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        isLightTheme ? "text-[#555555]" : "text-[#94A3B8]"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div
                    className={`space-y-2 pt-2 border-t ${
                      isLightTheme ? "border-[#F0F0EE]" : "border-[#25153E]"
                    }`}
                  >
                    <span className="block font-mono text-[10px] uppercase text-[#00FF66] font-bold tracking-wider">
                      KEY CAPABILITIES
                    </span>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className={`text-xs flex items-start gap-2 ${
                            isLightTheme ? "text-[#444444]" : "text-purple-200"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] mt-1.5 shrink-0 shadow-[0_0_6px_#00FF66]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div className="pt-2">
                    <span className="block font-mono text-[10px] uppercase text-[#00FF66] font-bold tracking-wider mb-2">
                      CORE STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-1 rounded border font-mono text-[11px] ${
                            isLightTheme
                              ? "bg-[#FAFAF8] border-[#EAEAEA] text-[#333333]"
                              : "bg-[#0E091E] border-[#2E184D] text-purple-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    className={`flex flex-wrap items-center gap-3 pt-4 border-t ${
                      isLightTheme ? "border-[#F0F0EE]" : "border-[#25153E]"
                    }`}
                  >
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all group ${
                          isLightTheme
                            ? "bg-[#171717] hover:bg-[#315EFB] text-white shadow-subtle"
                            : "bg-gradient-to-r from-[#7E22CE] to-[#A855F7] hover:from-[#6B21A8] hover:to-[#00FF66] text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-[#00FF66]/30"
                        }`}
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-white" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}

                    {project.hasLiveDemo && project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00FF66] text-black hover:bg-[#34D399] text-xs font-mono font-bold transition-colors shadow-[0_0_10px_rgba(0,255,102,0.4)]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                        isLightTheme
                          ? "bg-white border border-[#EAEAEA] hover:border-[#171717] text-[#171717]"
                          : "bg-[#0E091E] border border-[#2E184D] hover:border-[#00FF66] text-purple-200 hover:text-[#00FF66]"
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5 text-[#C084FC]" />
                      <span>Architecture Details</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-dive Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
