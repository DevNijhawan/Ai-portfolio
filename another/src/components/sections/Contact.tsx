"use client";

import React, { useState } from "react";
import { Mail, Send, Copy, Check, AlertCircle, Terminal, Globe, Clock, Sparkles, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import { portfolioConfig } from "@/config/portfolio.config";
import { Tilt3D } from "@/components/ui/Tilt3D";

interface ContactProps {
  isLightTheme?: boolean;
}

export function Contact({ isLightTheme = false }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 70,
          spread: 75,
          origin: { y: 0.8 },
          colors: ["#00FF66", "#A855F7", "#C084FC", "#34D399", "#F8FAFC"],
        });
      } catch {
        // Safe fallback
      }
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.personal.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className={`py-24 sm:py-32 border-t transition-colors duration-300 relative z-10 ${
        isLightTheme ? "bg-white border-[#EAEAEA]" : "bg-[#06040A]/90 backdrop-blur-md border-[#2A184D]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border mb-5 font-mono text-xs font-semibold tracking-wider uppercase transition-all bg-[#0E091E] border-[#00FF66]/30 text-emerald-300 shadow-[0_0_15px_rgba(0,255,102,0.15)]">
            <span className="w-2 h-2 rounded-sm bg-[#00FF66] animate-pulse shadow-[0_0_8px_#00FF66]" />
            <span>06 // INITIATE DIALOGUE ✦ ROOT_TERMINAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-5">
            <span className={isLightTheme ? "text-[#171717]" : "text-white"}>
              {portfolioConfig.contact.headingPart1}
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#00FF66] to-[#C084FC] drop-shadow-[0_0_30px_rgba(0,255,102,0.35)]">
              {portfolioConfig.contact.headingPart2}
            </span>
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${isLightTheme ? "text-[#555555]" : "text-[#94A3B8]"}`}>
            {portfolioConfig.contact.subtext}
          </p>
        </div>

        {/* 2. Top Quick Connect Grid (3 Cards Across) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {/* Card 1: Direct Email & One-Click Copy */}
          <div
            className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
              isLightTheme
                ? "bg-[#FAFAF8] border-[#EAEAEA] shadow-subtle hover:border-[#171717]"
                : "bg-[#0E091E]/90 border-[#2E184D] hover:border-[#00FF66]/50 shadow-[0_0_25px_rgba(168,85,247,0.12)] group"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-purple-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#00FF66]" />
                  DIRECT INBOX
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-[#00FF66] border border-emerald-800/50">
                  PRIMARY
                </span>
              </div>

              <span
                className={`font-mono text-sm sm:text-base font-bold block mb-1 truncate ${
                  isLightTheme ? "text-[#171717]" : "text-white group-hover:text-[#00FF66] transition-colors"
                }`}
              >
                {portfolioConfig.personal.email}
              </span>
              <p className="text-xs text-[#94A3B8] font-mono mb-4">
                Open for engineering challenges &amp; hackathons
              </p>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-[#25153E]">
              <button
                onClick={handleCopyEmail}
                className={`flex-1 py-2 px-3 rounded-lg border text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                  isLightTheme
                    ? "border-[#EAEAEA] bg-white hover:border-[#171717] text-[#171717]"
                    : "border-[#3B1D6E] bg-[#140E28] hover:border-[#00FF66] text-purple-200 hover:text-white"
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00FF66]" />
                    <span className="text-[#00FF66]">Copied Address!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#C084FC]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${portfolioConfig.personal.email}`}
                className="py-2 px-3 rounded-lg bg-gradient-to-r from-[#7E22CE] to-[#A855F7] hover:from-[#6B21A8] hover:to-[#00FF66] text-white text-xs font-mono font-medium flex items-center justify-center gap-1 transition-all shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                title="Open default mail client"
              >
                <span>Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Developer Networks & Profiles */}
          <div
            className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
              isLightTheme
                ? "bg-[#FAFAF8] border-[#EAEAEA] shadow-subtle hover:border-[#171717]"
                : "bg-[#0E091E]/90 border-[#2E184D] hover:border-[#A855F7]/50 shadow-[0_0_25px_rgba(168,85,247,0.12)]"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-purple-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#C084FC]" />
                  SOURCE &amp; PROFILES
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/50">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-2">
                <a
                  href={portfolioConfig.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-[#070410] border border-[#25153E] hover:border-[#00FF66] text-xs font-mono text-purple-200 hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-3.5 h-3.5 text-white" />
                    <span>GitHub</span>
                  </span>
                  <span className="text-[10px] text-purple-400 group-hover:text-[#00FF66]">
                    /devnijhawan
                  </span>
                </a>

                <a
                  href={portfolioConfig.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-[#070410] border border-[#25153E] hover:border-[#C084FC] text-xs font-mono text-purple-200 hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#C084FC]" />
                    <span>LinkedIn</span>
                  </span>
                  <span className="text-[10px] text-purple-400 group-hover:text-[#C084FC]">
                    /in/devnijhawan
                  </span>
                </a>

                <a
                  href={portfolioConfig.personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-[#070410] border border-[#25153E] hover:border-purple-400 text-xs font-mono text-purple-200 hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <TwitterIcon className="w-3.5 h-3.5 text-[#C084FC]" />
                    <span>Twitter / X</span>
                  </span>
                  <span className="text-[10px] text-purple-400 group-hover:text-white">
                    @devnijhawan
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Location, Availability & Response SLA */}
          <div
            className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
              isLightTheme
                ? "bg-[#FAFAF8] border-[#EAEAEA] shadow-subtle hover:border-[#171717]"
                : "bg-[#0E091E]/90 border-[#2E184D] hover:border-[#34D399]/50 shadow-[0_0_25px_rgba(168,85,247,0.12)]"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-purple-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#00FF66]" />
                  TELEMETRY // SLA
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-[#00FF66] border border-emerald-800/50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                  ONLINE
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-[#25153E]">
                  <span className="text-[#94A3B8]">BASE LOCATION:</span>
                  <span className="text-white font-semibold">{portfolioConfig.personal.location} (IST)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#25153E]">
                  <span className="text-[#94A3B8]">AVAILABILITY:</span>
                  <span className="text-[#00FF66] font-semibold">Hackathons &amp; Collabs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#94A3B8]">RESPONSE TIME:</span>
                  <span className="text-[#C084FC] font-semibold">{portfolioConfig.contact.responseExpectation}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#25153E] flex items-center justify-between text-[11px] font-mono text-purple-300/80">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#00FF66]" />
                Timezone: Asia/Kolkata
              </span>
              <span className="text-[#00FF66]">UTC+5:30</span>
            </div>
          </div>
        </div>

        {/* 3. Main Centered Interactive Transmission Form */}
        <div className="max-w-3xl mx-auto">
          <Tilt3D
            intensity={5}
            perspective={1400}
            glareColor="rgba(168, 85, 247, 0.2)"
            className="rounded-2xl"
          >
          <div
            className={`rounded-2xl border overflow-hidden shadow-2xl transition-all ${
              isLightTheme
                ? "bg-[#FAFAF8] border-[#EAEAEA]"
                : "bg-[#0E091E]/95 border-[#2E184D] shadow-[0_0_40px_rgba(168,85,247,0.2)]"
            }`}
          >
            {/* Terminal Window Header Bar */}
            <div className="bg-[#140D2B] px-5 py-3 border-b border-[#2E184D] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                </div>
                <span className="font-mono text-xs text-purple-200 ml-2 font-medium">
                  root@nether:~/contact_terminal.sh
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#00FF66] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#00FF66]" />
                  ENCRYPTED_TRANSMISSION
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-emerald-950 border border-emerald-700 text-[#00FF66] mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(0,255,102,0.4)]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-mono">
                    TRANSMISSION DELIVERED // 200 OK
                  </h3>
                  <p className="text-sm text-purple-200 max-w-md mx-auto font-mono">
                    Thank you for reaching out, {formData.name}. Your packet has been received into Dev&apos;s direct queue.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#7E22CE] to-[#A855F7] hover:from-[#6B21A8] hover:to-[#00FF66] text-white text-xs font-mono font-medium transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#25153E] pb-4 mb-2 flex items-center justify-between">
                    <div>
                      <h3 className={`text-lg font-bold font-mono ${isLightTheme ? "text-[#171717]" : "text-white"}`}>
                        Send a Direct Message
                      </h3>
                      <p className={`text-xs mt-0.5 font-mono ${isLightTheme ? "text-[#777777]" : "text-[#94A3B8]"}`}>
                        Deliver a note directly into Dev&apos;s inbox via secure HTTP payload
                      </p>
                    </div>
                    <span className="text-xs font-mono text-purple-400 hidden sm:inline">
                      FIELDS: REQUIRED *
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-semibold text-purple-300 uppercase mb-2 flex items-center justify-between">
                        <span>Your Name *</span>
                        <span className="text-[10px] text-purple-400">STRING</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Linus Torvalds"
                        className={`w-full px-4 py-3 rounded-xl border text-xs font-mono focus:outline-none transition-all ${
                          isLightTheme
                            ? "bg-white text-[#171717] placeholder-[#999999]"
                            : "bg-[#070410] border-[#2E184D] text-white placeholder-purple-400/40 focus:border-[#00FF66] focus:ring-1 focus:ring-[#00FF66]"
                        } ${errors.name ? "border-rose-400" : ""}`}
                      />
                      {errors.name && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1.5 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-semibold text-purple-300 uppercase mb-2 flex items-center justify-between">
                        <span>Your Email *</span>
                        <span className="text-[10px] text-purple-400">EMAIL_URI</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. linus@kernel.org"
                        className={`w-full px-4 py-3 rounded-xl border text-xs font-mono focus:outline-none transition-all ${
                          isLightTheme
                            ? "bg-white text-[#171717] placeholder-[#999999]"
                            : "bg-[#070410] border-[#2E184D] text-white placeholder-purple-400/40 focus:border-[#00FF66] focus:ring-1 focus:ring-[#00FF66]"
                        } ${errors.email ? "border-rose-400" : ""}`}
                      />
                      {errors.email && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1.5 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-purple-300 uppercase mb-2 flex items-center justify-between">
                      <span>Subject / Topic</span>
                      <span className="text-[10px] text-purple-400">TOPIC_HEADER</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Hackathon Team Collaboration / AI Engineering Discussion"
                      className={`w-full px-4 py-3 rounded-xl border text-xs font-mono focus:outline-none transition-all ${
                        isLightTheme
                          ? "bg-white text-[#171717] placeholder-[#999999]"
                          : "bg-[#070410] border-[#2E184D] text-white placeholder-purple-400/40 focus:border-[#00FF66] focus:ring-1 focus:ring-[#00FF66]"
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-purple-300 uppercase mb-2 flex items-center justify-between">
                      <span>Message Body *</span>
                      <span className="text-[10px] text-purple-400">TEXT_BUFFER</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message, project idea, hackathon invite, or technical query..."
                      className={`w-full px-4 py-3 rounded-xl border text-xs font-mono focus:outline-none transition-all resize-none ${
                        isLightTheme
                          ? "bg-white text-[#171717] placeholder-[#999999]"
                          : "bg-[#070410] border-[#2E184D] text-white placeholder-purple-400/40 focus:border-[#00FF66] focus:ring-1 focus:ring-[#00FF66]"
                      } ${errors.message ? "border-rose-400" : ""}`}
                    />
                    {errors.message && (
                      <span className="text-[11px] font-mono text-rose-400 mt-1.5 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-xs font-mono text-purple-400/80 hidden sm:inline">
                      STATUS: READY_FOR_DISPATCH
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#7E22CE] via-[#9333EA] to-[#00FF66] hover:shadow-[0_0_30px_rgba(0,255,102,0.5)] text-white text-xs font-mono font-bold flex items-center justify-center gap-2.5 transition-all disabled:opacity-50 border border-[#00FF66]/40"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>TRANSMITTING PACKET...</span>
                        </>
                      ) : (
                        <>
                          <span>TRANSMIT PAYLOAD</span>
                          <Send className="w-3.5 h-3.5 text-[#00FF66]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
