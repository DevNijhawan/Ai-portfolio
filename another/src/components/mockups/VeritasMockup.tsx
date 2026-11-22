"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck, FileSearch, Terminal } from "lucide-react";

interface MockupProps {
  isLightTheme?: boolean;
}

export function VeritasMockup({ isLightTheme = false }: MockupProps) {
  const [activeTab, setActiveTab] = useState<"inspection" | "extracted" | "security">("inspection");
  const [latency, setLatency] = useState(142);
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const liveLogs = [
    "[OCR_PIPELINE]: Ingested sample document vector 0x7F_ID",
    "[BOUNDING_BOX]: Localized 4 text entities with 99.4% precision",
    "[MRZ_VALIDATOR]: Parsing checksum formula -> VALIDATED (PASS)",
    "[TAMPER_SCAN]: Typographic font variance: 0.026 (MINIMAL RISK)",
    "[FASTAPI_ENGINE]: Generated cryptographic verification payload",
  ];

  // Continuous live working simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(138 + Math.floor(Math.random() * 8));
      setActiveLogIndex((prev) => (prev + 1) % liveLogs.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [liveLogs.length]);

  return (
    <div
      className={`w-full rounded-2xl border shadow-2xl overflow-hidden text-left font-sans text-xs transition-all relative ${
        isLightTheme
          ? "bg-[#FFFFFF] border-[#EAEAEA]"
          : "bg-[#0B0718] border-[#00FF66]/40 shadow-[0_0_35px_rgba(0,255,102,0.15)] ring-1 ring-[#00FF66]/20"
      }`}
    >
      {/* Top Monitor Hardware Bezel */}
      <div
        className={`px-4 py-2.5 border-b flex items-center justify-between ${
          isLightTheme ? "bg-[#F6F6F4] border-[#EAEAEA]" : "bg-[#120B24] border-[#2A184D]"
        }`}
      >
        <div className="flex items-center gap-2">
          {/* Hardware status LEDs */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] animate-pulse shadow-[0_0_8px_#00FF66]" title="Power ON" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C084FC] animate-pulse" title="Data Flowing" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" title="Security Active" />
          </div>

          <span className="text-white font-mono text-[11px] font-bold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>VERITAS_ID // SCREEN_01 [OCR_RUNNING]</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950 text-[#00FF66] font-mono text-[10px] font-bold border border-emerald-700/60 shadow-[0_0_8px_rgba(0,255,102,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-ping" />
            LIVE SCREEN // 60 FPS
          </span>
          <span className="font-mono text-[10px] text-purple-300 hidden sm:inline">
            LATENCY: {latency}ms
          </span>
        </div>
      </div>

      {/* Internal Subnav */}
      <div
        className={`flex border-b px-4 text-[11px] font-medium font-mono ${
          isLightTheme ? "bg-white border-[#EAEAEA] text-[#777777]" : "bg-[#0E091E] border-[#2A184D] text-purple-300/70"
        }`}
      >
        <button
          onClick={() => setActiveTab("inspection")}
          className={`py-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === "inspection"
              ? "border-[#00FF66] text-[#00FF66] font-bold shadow-[0_2px_12px_rgba(0,255,102,0.3)]"
              : "border-transparent hover:text-white"
          }`}
        >
          <span>Visual Scanner &amp; Bounding Boxes</span>
        </button>
        <button
          onClick={() => setActiveTab("extracted")}
          className={`py-2.5 px-3 border-b-2 transition-all ${
            activeTab === "extracted"
              ? "border-[#A855F7] text-white font-bold"
              : "border-transparent hover:text-white"
          }`}
        >
          Extracted JSON
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={`py-2.5 px-3 border-b-2 transition-all ${
            activeTab === "security"
              ? "border-[#A855F7] text-white font-bold"
              : "border-transparent hover:text-white"
          }`}
        >
          Tamper Scorecard
        </button>
      </div>

      {/* Main Stage */}
      <div
        className={`p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5 ${
          isLightTheme ? "bg-[#FAFAF8]" : "bg-[#06040A]"
        }`}
      >
        {/* Left: Continuous Optical Scanner Screen */}
        <div
          className={`md:col-span-7 rounded-xl border p-4 relative overflow-hidden flex flex-col justify-between ${
            isLightTheme ? "bg-white border-[#EAEAEA]" : "bg-[#0E091E] border-[#2E184D]"
          }`}
        >
          {/* Continuous Smooth Sweeping Laser Beam */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent shadow-[0_0_15px_#00FF66] animate-pulse pointer-events-none z-20 top-0 animate-[bounce_3s_ease-in-out_infinite]" />

          <div>
            <div
              className={`flex items-center justify-between pb-3 border-b mb-3 ${
                isLightTheme ? "border-[#F0F0EE]" : "border-[#25153E]"
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#00FF66] flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-ping" />
                OPTICAL_SENSOR: SCANNING_FRAME_142
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-purple-950/80 text-purple-200 rounded border border-purple-800/50">
                OCR_RES: 300_DPI
              </span>
            </div>

            {/* Document Card Graphic */}
            <div
              className={`relative border rounded-lg p-3 ${
                isLightTheme
                  ? "border-[#DFDFDC] bg-white shadow-sm"
                  : "border-[#3B1D6E] bg-gradient-to-br from-[#160E30] to-[#0A0716] shadow-inner"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Photo placeholder with facial recognition reticle */}
                <div
                  className={`w-16 h-20 rounded border flex flex-col items-center justify-center relative overflow-hidden ${
                    isLightTheme
                      ? "bg-[#EAEAE8] border-[#D5D5D0] text-[#999995]"
                      : "bg-[#1E143C] border-[#00FF66]/40 text-emerald-300"
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-[#00FF66]/30 mb-1 animate-pulse" />
                  <div className="w-10 h-7 rounded-t-full bg-[#00FF66]/30" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-ping" />
                  <div className="absolute bottom-1 font-mono text-[8px] text-[#00FF66] font-bold">
                    BIOMETRIC_OK
                  </div>
                </div>

                {/* Fields with glowing neon green & purple bounding boxes */}
                <div className="flex-1 space-y-1.5 font-mono text-[10px]">
                  <div className="relative group border border-dashed border-[#00FF66] bg-[#00FF66]/10 p-1 rounded transition-colors shadow-[0_0_8px_rgba(0,255,102,0.2)]">
                    <span className="text-[8px] text-[#00FF66] block font-sans uppercase font-bold tracking-wider">
                      FULL NAME [CONF: 99.4%]
                    </span>
                    <span className="text-white font-semibold">ARTHUR JOHN DOE</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative border border-dashed border-[#C084FC] bg-[#A855F7]/10 p-1 rounded transition-colors">
                      <span className="text-[8px] text-[#C084FC] block font-sans uppercase font-bold tracking-wider">
                        DOB [CONF: 98.7%]
                      </span>
                      <span className="text-purple-200">14 MAY 1994</span>
                    </div>
                    <div className="relative border border-dashed border-[#00FF66] bg-[#00FF66]/10 p-1 rounded transition-colors">
                      <span className="text-[8px] text-[#00FF66] block font-sans uppercase font-bold tracking-wider">
                        DOCUMENT NO
                      </span>
                      <span className="text-white font-semibold">ID-892401-X</span>
                    </div>
                  </div>

                  <div className="relative border border-dashed border-[#C084FC] bg-[#A855F7]/10 p-1 rounded transition-colors">
                    <span className="text-[8px] text-[#C084FC] block font-sans uppercase font-bold tracking-wider">
                      AUTHORITY &amp; CHECKSUM
                    </span>
                    <span className="text-purple-200">MINISTRY OF IDENTIFICATION // VALID</span>
                  </div>
                </div>
              </div>

              {/* MRZ Band */}
              <div
                className={`mt-3 pt-2 border-t font-mono text-[9px] tracking-widest p-1.5 rounded ${
                  isLightTheme
                    ? "border-[#EAEAEA] text-[#444444] bg-[#F2F2EF]"
                    : "border-[#25153E] text-purple-300 bg-[#07050E]"
                }`}
              >
                <div>IDIND892401&lt;&lt;5DOE&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
                <div>9405148M3012318IND&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;4</div>
              </div>
            </div>
          </div>

          {/* Live streaming terminal logs */}
          <div
            className={`mt-3 pt-2 border-t flex flex-col gap-1 text-[11px] font-mono ${
              isLightTheme ? "border-[#F0F0EE] text-[#666666]" : "border-[#25153E] text-purple-300/80"
            }`}
          >
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-[#00FF66] flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                LIVE_EVENT_STREAM:
              </span>
              <span className="text-purple-400">LATENCY: {latency}ms</span>
            </div>
            <div className="bg-[#050308] border border-[#25153E] rounded px-2.5 py-1 text-[10px] text-emerald-300 font-mono flex items-center justify-between">
              <span className="truncate">{liveLogs[activeLogIndex]}</span>
              <span className="w-2 h-3 bg-[#00FF66] animate-pulse shrink-0 ml-2" />
            </div>
          </div>
        </div>

        {/* Right: Real-time Authenticity Scorecard */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-3 font-mono">
          <div
            className={`rounded-xl border p-3.5 space-y-3 ${
              isLightTheme ? "bg-white border-[#EAEAEA]" : "bg-[#0E091E] border-[#2E184D]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white text-xs">Verification Summary</span>
              <span className="font-mono text-[10px] text-[#00FF66] font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-700 shadow-[0_0_8px_rgba(0,255,102,0.3)]">
                AUTHENTIC (0.97)
              </span>
            </div>

            {/* Confidence Bar with Neon Pulse */}
            <div>
              <div className="flex justify-between text-[10px] text-purple-300 mb-1">
                <span>Authenticity Confidence</span>
                <span className="font-mono font-bold text-[#00FF66]">97.4%</span>
              </div>
              <div
                className={`w-full h-2 rounded-full overflow-hidden ${
                  isLightTheme ? "bg-[#F0F0EE]" : "bg-[#1E143C]"
                }`}
              >
                <div
                  className="h-full bg-gradient-to-r from-[#A855F7] to-[#00FF66] rounded-full shadow-[0_0_10px_#00FF66]"
                  style={{ width: "97.4%" }}
                />
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2 pt-1 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="text-purple-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00FF66]" /> MRZ Checksum
                </span>
                <span className="text-[#00FF66] font-bold">Valid [PASS]</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-200 flex items-center gap-1.5">
                  <FileSearch className="w-3.5 h-3.5 text-[#00FF66]" /> Typographic Fit
                </span>
                <span className="text-[#00FF66] font-bold">Uniform (99%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF66]" /> Tamper Variance
                </span>
                <span className="text-emerald-400 font-bold">0.026 [LOW]</span>
              </div>
            </div>
          </div>

          <div
            className={`rounded-xl border p-3 ${
              isLightTheme ? "bg-white border-[#EAEAEA]" : "bg-[#0E091E] border-[#2E184D]"
            }`}
          >
            <span className="block font-mono text-[10px] text-[#00FF66] mb-1 uppercase tracking-wider font-bold">
              FASTAPI ENDPOINT // REALTIME OUTPUT
            </span>
            <div className="bg-[#050308] border border-[#25153E] rounded-lg p-2.5 font-mono text-[10px] text-purple-200 overflow-x-auto leading-relaxed">
              <span className="text-purple-400">POST /api/v1/screen-document</span>
              <br />
              <span className="text-[#00FF66]">&#123;&quot;verdict&quot;: &quot;VERIFIED&quot;,</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#C084FC]">&quot;mrz_match&quot;:</span> true,
              <br />
              &nbsp;&nbsp;<span className="text-[#00FF66]">&quot;anomaly_score&quot;:</span> 0.026&#125;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
