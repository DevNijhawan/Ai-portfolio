"use client";

import React from "react";
import { X, Download, FileText, CheckCircle2, GraduationCap, Code2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171717]/40 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl border border-[#EAEAEA] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#EAEAEA] flex items-center justify-between bg-[#FAFAF8]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#315EFB]/10 text-[#315EFB] flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-[#171717]">
                {portfolioConfig.personal.name} — Curriculum Vitae
              </h3>
              <p className="text-[11px] text-[#777777] font-mono">
                {portfolioConfig.personal.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${portfolioConfig.personal.email}?subject=Resume Request - Dev Nijhawan`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-[#EAEAEA] bg-white hover:bg-[#F5F5F3] text-[#171717] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#315EFB]" />
              <span>Request PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#777777] hover:text-[#171717] hover:bg-[#F0F0EE] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-[#444444] leading-relaxed">
          {/* Header Summary */}
          <div className="border-b border-[#EAEAEA] pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h2 className="text-xl font-bold text-[#171717]">{portfolioConfig.personal.name}</h2>
              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-blue-50 text-[#315EFB] border border-blue-200">
                {portfolioConfig.personal.location} • {portfolioConfig.personal.email}
              </span>
            </div>
            <p className="text-sm text-[#555555]">
              Third-year Computer Science student specializing in Artificial Intelligence and Machine Learning.
              Passionate about building verifiable machine learning systems, high-performance APIs, and practical software solutions.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="font-mono uppercase tracking-wider text-[11px] font-bold text-[#171717] flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#315EFB]" />
              Education (Verified)
            </h4>
            <div className="p-3 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA]">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-sm text-[#171717]">
                  B.Tech in Computer Science & Engineering (AIML)
                </span>
                <span className="font-mono text-[11px] text-[#777777]">2022 — Present (3rd Year)</span>
              </div>
              <p className="text-[#666666] mt-1">
                Core coursework: Artificial Intelligence, Machine Learning, Data Structures & Algorithms,
                Database Management Systems, Operating Systems, Probability & Statistics.
              </p>
            </div>
          </div>

          {/* Core Technical Projects */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase tracking-wider text-[11px] font-bold text-[#171717] flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#315EFB]" />
              Featured Projects
            </h4>

            {portfolioConfig.projects.map((proj) => (
              <div key={proj.id} className="p-3.5 rounded-xl border border-[#EAEAEA] bg-white space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#171717]">{proj.name}</span>
                  <span className="font-mono text-[10px] text-[#777777]">{proj.category}</span>
                </div>
                <p className="text-[#555555]">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#F4F4F2] font-mono text-[10px] text-[#444444]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-2">
            <h4 className="font-mono uppercase tracking-wider text-[11px] font-bold text-[#171717] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#315EFB]" />
              Skills Summary
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA]">
                <span className="font-mono text-[10px] text-[#888888] uppercase block mb-1">
                  Programming & AI
                </span>
                <p className="font-medium text-[#171717]">
                  Python, C, JavaScript, Machine Learning, Data Analysis, Computer Vision, OCR.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA]">
                <span className="font-mono text-[10px] text-[#888888] uppercase block mb-1">
                  Frameworks & Tools
                </span>
                <p className="font-medium text-[#171717]">
                  Next.js, FastAPI, PostgreSQL, Git, GitHub, VS Code, Vercel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-[#EAEAEA] bg-[#FAFAF8] flex items-center justify-between">
          <span className="text-[11px] text-[#777777] font-mono">
            Direct Contact: {portfolioConfig.personal.email}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${portfolioConfig.personal.email}?subject=Collaboration Inquiry with Dev Nijhawan`}
              className="px-4 py-2 bg-[#315EFB] hover:bg-[#2548C9] text-white text-xs font-medium rounded-lg transition-colors"
            >
              Get In Touch
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#EAEAEA] bg-white hover:bg-[#F2F2EF] text-[#171717] text-xs font-medium rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
