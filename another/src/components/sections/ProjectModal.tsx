"use client";

import React from "react";
import { X, ExternalLink, Cpu, CheckCircle2, Workflow } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectItem } from "@/config/portfolio.config";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  isLightTheme?: boolean;
}

export function ProjectModal({ project, isOpen, onClose, isLightTheme = false }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#040208]/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className={`w-full max-w-3xl rounded-2xl border shadow-[0_0_50px_rgba(168,85,247,0.3)] overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200 ${
          isLightTheme ? "bg-white border-[#EAEAEA]" : "bg-[#0D091B] border-[#2E184D]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`px-6 py-4 border-b flex items-center justify-between ${
            isLightTheme ? "bg-[#FAFAF8] border-[#EAEAEA]" : "bg-[#140E28] border-[#2E184D]"
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-full border ${
                isLightTheme
                  ? "bg-blue-50 text-[#315EFB] border-blue-200"
                  : "bg-purple-950/80 text-[#C084FC] border-purple-800"
              }`}
            >
              {project.category}
            </span>
            <h3 className={`font-bold text-base ${isLightTheme ? "text-[#171717]" : "text-white"}`}>
              {project.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div
          className={`p-6 sm:p-8 overflow-y-auto space-y-6 text-xs leading-relaxed ${
            isLightTheme ? "text-[#555555]" : "text-[#94A3B8]"
          }`}
        >
          {/* Tagline & Overview */}
          <div>
            <h4 className={`text-xl font-bold mb-2 ${isLightTheme ? "text-[#171717]" : "text-white"}`}>
              {project.tagline}
            </h4>
            <p className={`text-sm leading-relaxed ${isLightTheme ? "text-[#444444]" : "text-purple-200"}`}>
              {project.longDescription}
            </p>
          </div>

          {/* Technology badges */}
          <div>
            <span className="block font-mono text-[11px] font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#C084FC]" />
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-lg border font-mono text-xs ${
                    isLightTheme
                      ? "bg-[#FAFAF8] border-[#EAEAEA] text-[#171717]"
                      : "bg-[#140E28] border-[#2A184D] text-purple-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Workflow & Methodology */}
          <div>
            <span className="block font-mono text-[11px] font-bold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5 text-[#C084FC]" />
              System Architecture &amp; Workflow Steps
            </span>
            <div className="space-y-2">
              {project.workflow.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border font-mono text-xs ${
                    isLightTheme
                      ? "bg-[#FAFAF8] border-[#EAEAEA] text-[#333333]"
                      : "bg-[#100B22] border-[#25153E] text-purple-200"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <span className="block font-mono text-[11px] font-bold text-purple-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C084FC]" />
              Key Implementation Features
            </span>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 text-xs ${
                    isLightTheme ? "text-[#444444]" : "text-purple-200"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] mt-1.5 shrink-0 shadow-[0_0_6px_#A855F7]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`px-6 py-4 border-t flex items-center justify-between ${
            isLightTheme ? "bg-[#FAFAF8] border-[#EAEAEA]" : "bg-[#140E28] border-[#2E184D]"
          }`}
        >
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#7E22CE] to-[#A855F7] text-white hover:from-[#6B21A8] hover:to-[#9333EA] text-xs font-mono font-medium transition-all shadow-[0_0_12px_rgba(168,85,247,0.3)]"
              >
                <GithubIcon className="w-3.5 h-3.5 text-white" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.hasLiveDemo && project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#A855F7] text-white hover:bg-[#9333EA] text-xs font-mono font-medium transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className={`px-4 py-2 border text-xs font-mono font-medium rounded-lg transition-colors ${
              isLightTheme
                ? "border-[#EAEAEA] bg-white text-[#171717]"
                : "border-[#2E184D] bg-[#0A0716] text-purple-200 hover:text-white hover:border-[#A855F7]"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
