"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, Sun, Moon } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import { ResumeModal } from "@/components/ui/ResumeModal";

interface NavbarProps {
  isLightTheme?: boolean;
  onToggleTheme?: () => void;
}

export function Navbar({ isLightTheme = false, onToggleTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "skills", "projects", "timeline", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Timeline", href: "#timeline", id: "timeline" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? isLightTheme
              ? "py-3 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#EAEAEA] shadow-subtle"
              : "py-3 bg-[#06040A]/95 backdrop-blur-md border-b border-[#3B1D6E] shadow-[0_4px_30px_rgba(0,0,0,0.7)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Minecraft Voxel + Hacker Prompt */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Dev Nijhawan Home"
          >
            {/* Minecraft Voxel Cube Icon */}
            <div className="w-5 h-5 rounded-sm bg-[#1A0F30] border border-[#A855F7] group-hover:border-[#C084FC] flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-transform group-hover:rotate-12">
              <span className="w-2 h-2 bg-[#D946EF] rounded-none" />
            </div>

            <div className="flex flex-col">
              <span
                className={`font-mono text-lg font-bold tracking-tighter transition-all leading-none ${
                  isLightTheme
                    ? "text-[#171717] group-hover:text-[#315EFB]"
                    : "text-white group-hover:text-[#C084FC] drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]"
                }`}
              >
                {portfolioConfig.personal.logoText}
              </span>
              <span className="text-[9px] font-mono text-purple-400/80 -mt-0.5">
                root@nether:~$
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden md:flex items-center gap-1 backdrop-blur-md px-3.5 py-1.5 rounded-full border transition-all ${
              isLightTheme
                ? "bg-white/80 border-[#EAEAEA] shadow-subtle"
                : "bg-[#0E091E]/90 border-[#3B1D6E] shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? isLightTheme
                        ? "bg-[#171717] text-white shadow-sm"
                        : "bg-gradient-to-r from-[#7E22CE] to-[#A855F7] text-white shadow-[0_0_14px_rgba(168,85,247,0.6)]"
                      : isLightTheme
                      ? "text-[#777777] hover:text-[#171717] hover:bg-[#F2F2EF]"
                      : "text-purple-300/80 hover:text-white hover:bg-[#1E1138]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Minecraft XP Badge, Theme Switcher & Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Minecraft XP / Level Badge */}
            <div
              className={`hidden lg:flex flex-col px-3 py-1 rounded-lg border text-[10px] font-mono transition-all ${
                isLightTheme
                  ? "bg-white border-[#EAEAEA] text-[#555555]"
                  : "bg-[#120B24] border-[#3B1D6E] text-white shadow-[0_0_12px_rgba(168,85,247,0.25)]"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">LVL 99</span>
                <span className="text-purple-400">✦</span>
                <span className="text-purple-200">ROOT_ACCESS</span>
              </div>
              {/* Green/Purple XP Progress Line */}
              <div className="w-full h-1 bg-[#1C1138] rounded-full mt-0.5 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-[#C084FC] rounded-full w-[94%]" />
              </div>
            </div>

            {/* Theme Switcher Button */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className={`p-2 rounded-lg border text-xs font-mono transition-all flex items-center justify-center ${
                  isLightTheme
                    ? "bg-white border-[#EAEAEA] text-[#171717] hover:bg-[#F4F4F2]"
                    : "bg-[#120B24] border-[#3B1D6E] text-purple-300 hover:text-white hover:border-[#A855F7] shadow-[0_0_12px_rgba(168,85,247,0.25)]"
                }`}
                title={isLightTheme ? "Switch to Minecraft Hacker Theme" : "Switch to Minimal Light Theme"}
              >
                {isLightTheme ? (
                  <Moon className="w-4 h-4 text-purple-600" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-300" />
                )}
              </button>
            )}

            {/* Resume Button with Enchanted Purple Shimmer */}
            <button
              onClick={() => setIsResumeOpen(true)}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-medium rounded-lg border transition-all ${
                isLightTheme
                  ? "border-[#171717] bg-[#171717] text-white hover:bg-[#315EFB] hover:border-[#315EFB]"
                  : "border-[#A855F7] bg-gradient-to-r from-[#7E22CE] to-[#A855F7] text-white hover:from-[#6B21A8] hover:to-[#9333EA] shadow-[0_0_18px_rgba(168,85,247,0.5)]"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-lg border border-[#3B1D6E] bg-[#120B24] text-purple-300"
                aria-label="Toggle theme"
              >
                {isLightTheme ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-300" />}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isLightTheme
                  ? "border-[#EAEAEA] bg-white text-[#171717]"
                  : "border-[#3B1D6E] bg-[#120B24] text-white"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden px-4 pt-3 pb-6 border-b shadow-2xl animate-in slide-in-from-top-2 duration-200 ${
              isLightTheme
                ? "bg-[#FAFAF8] border-[#EAEAEA]"
                : "bg-[#06040A]/95 backdrop-blur-xl border-[#3B1D6E]"
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-mono transition-colors ${
                    activeSection === link.id
                      ? isLightTheme
                        ? "bg-[#171717] text-white"
                        : "bg-[#A855F7] text-white"
                      : isLightTheme
                      ? "text-[#555555] hover:bg-[#F0F0EE]"
                      : "text-purple-200 hover:bg-[#1E1138]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-2 flex items-center justify-between border-t border-[#3B1D6E]">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsResumeOpen(true);
                  }}
                  className="w-full px-4 py-2 text-xs font-mono font-medium rounded-lg bg-gradient-to-r from-[#7E22CE] to-[#A855F7] text-white text-center"
                >
                  View Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Resume modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
