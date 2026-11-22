"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { portfolioConfig } from "@/config/portfolio.config";

interface FooterProps {
  isLightTheme?: boolean;
}

export function Footer({ isLightTheme = false }: FooterProps) {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setIstTime(timeStr);
      } catch {
        setIstTime("15:35 IST");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t pt-16 pb-12 transition-colors duration-300 relative z-10 ${
        isLightTheme
          ? "border-[#EAEAEA] bg-white text-[#171717]"
          : "border-[#2A184D] bg-[#07050E] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b ${
            isLightTheme ? "border-[#F0F0EE]" : "border-[#25153E]"
          }`}
        >
          {/* Left Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#hero" className="inline-flex items-center gap-2">
              <span
                className={`font-mono text-2xl font-bold tracking-tighter ${
                  isLightTheme ? "text-[#171717]" : "text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                }`}
              >
                {portfolioConfig.personal.logoText}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_8px_#A855F7]" />
            </Link>

            <p className={`text-sm max-w-sm leading-relaxed ${isLightTheme ? "text-[#777777]" : "text-[#94A3B8]"}`}>
              Third-year Computer Science student specializing in Artificial Intelligence and Machine Learning.
              Designing intelligent systems with precision, clarity, and purpose.
            </p>

            {/* Live IST Clock */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono ${
                isLightTheme
                  ? "bg-[#FAFAF8] border-[#EAEAEA] text-[#555555]"
                  : "bg-[#0F0B1E] border-[#2E184D] text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>India (IST / UTC+5:30):</span>
              <span className="font-semibold text-white">{istTime || "15:35 IST"}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="block font-mono text-[11px] font-bold text-purple-400 uppercase tracking-wider">
              Navigation
            </span>
            <ul className={`space-y-2 text-xs font-mono font-medium ${isLightTheme ? "text-[#666666]" : "text-[#94A3B8]"}`}>
              <li>
                <Link href="#hero" className="hover:text-[#C084FC] transition-colors">
                  01 // Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#C084FC] transition-colors">
                  02 // About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-[#C084FC] transition-colors">
                  03 // Skills &amp; Toolkit
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#C084FC] transition-colors">
                  04 // Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="hover:text-[#C084FC] transition-colors">
                  05 // Journey &amp; Education
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#C084FC] transition-colors">
                  06 // Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-4 space-y-3">
            <span className="block font-mono text-[11px] font-bold text-purple-400 uppercase tracking-wider">
              Connect &amp; Source
            </span>
            <div className="space-y-2">
              <a
                href={portfolioConfig.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-2 rounded-lg border transition-all text-xs font-mono font-medium group ${
                  isLightTheme
                    ? "hover:bg-[#FAFAF8] border-transparent hover:border-[#EAEAEA] text-[#444444]"
                    : "hover:bg-[#140E28] border-transparent hover:border-[#2E184D] text-purple-200"
                }`}
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </span>
                <span className="text-[11px] text-purple-400 group-hover:text-white">
                  github.com/devnijhawan
                </span>
              </a>

              <a
                href={portfolioConfig.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-2 rounded-lg border transition-all text-xs font-mono font-medium group ${
                  isLightTheme
                    ? "hover:bg-[#FAFAF8] border-transparent hover:border-[#EAEAEA] text-[#444444]"
                    : "hover:bg-[#140E28] border-transparent hover:border-[#2E184D] text-purple-200"
                }`}
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-[#C084FC]" />
                  <span>LinkedIn</span>
                </span>
                <span className="text-[11px] text-purple-400 group-hover:text-white">
                  linkedin.com/in/devnijhawan
                </span>
              </a>

              <a
                href={`mailto:${portfolioConfig.personal.email}`}
                className={`flex items-center justify-between p-2 rounded-lg border transition-all text-xs font-mono font-medium group ${
                  isLightTheme
                    ? "hover:bg-[#FAFAF8] border-transparent hover:border-[#EAEAEA] text-[#444444]"
                    : "hover:bg-[#140E28] border-transparent hover:border-[#2E184D] text-purple-200"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Direct Email</span>
                </span>
                <span className="text-[11px] text-purple-400 group-hover:text-white">
                  {portfolioConfig.personal.email}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-purple-300/80">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p className="font-medium text-white">Designed &amp; Developed by Dev Nijhawan.</p>
            <span className="hidden sm:inline text-purple-600">•</span>
            <span>All rights reserved &copy; 2026</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-purple-400">
              Cyber Gaming &amp; Coding Mode // Purple &amp; Black Edition
            </span>
            <button
              onClick={scrollToTop}
              className={`p-2 rounded-full border transition-colors ${
                isLightTheme
                  ? "border-[#EAEAEA] bg-[#FAFAF8] hover:bg-white text-[#171717]"
                  : "border-[#2A184D] bg-[#0F0B1E] hover:bg-[#181033] text-purple-300 hover:text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]"
              }`}
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
