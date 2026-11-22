"use client";

import React, { useState, useEffect } from "react";
import { CloudSun, Wind, Droplets, Compass, Sparkles, Send, Bot, User, Radio } from "lucide-react";

interface MockupProps {
  isLightTheme?: boolean;
}

export function WeatherGptMockup({ isLightTheme = false }: MockupProps) {
  const [messages, setMessages] = useState([
    {
      sender: "user",
      text: "Is it a good window for outdoor activities this afternoon in New Delhi?",
    },
    {
      sender: "ai",
      text: "Optimal window is between 2:00 PM and 5:30 PM. Temperature stabilizes around 24°C with a comfortable 12 km/h westerly breeze. UV index drops from 5 to 2 after 3:30 PM. Atmospheric pressure remains steady at 1014 hPa with 0% precipitation risk until tonight.",
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [windSpeed, setWindSpeed] = useState(14);
  const [rotation, setRotation] = useState(0);

  // Live atmospheric telemetry fluctuation
  useEffect(() => {
    const timer = setInterval(() => {
      setWindSpeed(12 + Math.floor(Math.random() * 5));
      setRotation((prev) => (prev + 30) % 360);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleSend = (promptText?: string) => {
    const q = promptText || inputVal;
    if (!q.trim()) return;

    const newMsgs = [...messages, { sender: "user", text: q }];
    setMessages(newMsgs);
    setInputVal("");

    setTimeout(() => {
      setMessages([
        ...newMsgs,
        {
          sender: "ai",
          text: `Telemetry analysis for "${q}": Relative humidity sits at 46% with excellent visibility (8.5 km). Evening wind vectors suggest stable air quality through 9 PM.`,
        },
      ]);
    }, 600);
  };

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
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] animate-pulse shadow-[0_0_8px_#00FF66]" title="Power ON" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C084FC] animate-pulse" title="Telemetry Feed Active" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" title="API Synced" />
          </div>

          <span className="text-white font-mono text-[11px] font-bold flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>WEATHER_GPT // SCREEN_03 [LIVE_TELEMETRY]</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950 text-[#00FF66] font-mono text-[10px] font-bold border border-emerald-700/60 shadow-[0_0_8px_rgba(0,255,102,0.3)]">
            <Sparkles className="w-3 h-3 text-[#00FF66]" />
            OPENAI + METEOROLOGICAL API
          </span>
        </div>
      </div>

      {/* Main Split Grid */}
      <div
        className={`p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5 ${
          isLightTheme ? "bg-[#FAFAF8]" : "bg-[#06040A]"
        }`}
      >
        {/* Left: Weather Telemetry */}
        <div
          className={`md:col-span-5 rounded-xl border p-4 flex flex-col justify-between ${
            isLightTheme ? "bg-white border-[#EAEAEA]" : "bg-[#0E091E] border-[#2E184D]"
          }`}
        >
          <div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#00FF66] font-bold block">
                  METEOROLOGICAL STATION
                </span>
                <span className="text-base font-semibold text-white font-mono">New Delhi, IN</span>
              </div>
              <CloudSun className="w-7 h-7 text-[#00FF66] animate-pulse" />
            </div>

            {/* Readout */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-4xl font-semibold tracking-tighter text-white font-mono">24°C</span>
              <span className="text-[#00FF66] text-xs font-mono font-medium">Partly Clear // Feels 25°</span>
            </div>

            {/* Metrics */}
            <div
              className={`grid grid-cols-2 gap-2 text-[11px] pt-2 border-t font-mono ${
                isLightTheme ? "border-[#F0F0EE]" : "border-[#25153E]"
              }`}
            >
              <div
                className={`flex items-center gap-2 p-2 rounded-lg border ${
                  isLightTheme
                    ? "bg-[#FAFAF8] border-[#EAEAEA]"
                    : "bg-[#07050E] border-[#2A184D]"
                }`}
              >
                <Wind
                  className="w-3.5 h-3.5 text-[#00FF66] transition-transform duration-700"
                  style={{ transform: `rotate(${rotation}deg)` }}
                />
                <div>
                  <span className="text-[9px] text-[#94A3B8] block">WIND_VECTOR</span>
                  <span className="font-semibold text-white">{windSpeed} km/h W</span>
                </div>
              </div>

              <div
                className={`flex items-center gap-2 p-2 rounded-lg border ${
                  isLightTheme
                    ? "bg-[#FAFAF8] border-[#EAEAEA]"
                    : "bg-[#07050E] border-[#2A184D]"
                }`}
              >
                <Droplets className="w-3.5 h-3.5 text-[#00FF66]" />
                <div>
                  <span className="text-[9px] text-[#94A3B8] block">HUMIDITY</span>
                  <span className="font-semibold text-white">48%</span>
                </div>
              </div>

              <div
                className={`flex items-center gap-2 p-2 rounded-lg border ${
                  isLightTheme
                    ? "bg-[#FAFAF8] border-[#EAEAEA]"
                    : "bg-[#07050E] border-[#2A184D]"
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-[#00FF66]" />
                <div>
                  <span className="text-[9px] text-[#94A3B8] block">BAROMETRIC</span>
                  <span className="font-semibold text-white">1014 hPa</span>
                </div>
              </div>

              <div
                className={`flex items-center gap-2 p-2 rounded-lg border ${
                  isLightTheme
                    ? "bg-[#FAFAF8] border-[#EAEAEA]"
                    : "bg-[#07050E] border-[#2A184D]"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00FF66]" />
                <div>
                  <span className="text-[9px] text-[#94A3B8] block">AIR QUALITY</span>
                  <span className="font-semibold text-[#00FF66]">AQI 82 (MOD)</span>
                </div>
              </div>
            </div>

            {/* Temperature Curve */}
            <div
              className={`mt-3 pt-3 border-t ${
                isLightTheme ? "border-[#F0F0EE]" : "border-[#25153E]"
              }`}
            >
              <span className="text-[10px] font-mono text-purple-400 uppercase block mb-1.5 flex items-center justify-between">
                <span>Hourly Telemetry Curve</span>
                <span className="text-[#00FF66] text-[9px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-ping" />
                  RADAR_ACTIVE
                </span>
              </span>
              <div className="flex items-end justify-between h-10 px-1 pt-2">
                {[
                  { hour: "14:00", temp: "24°", height: "70%" },
                  { hour: "15:00", temp: "25°", height: "80%" },
                  { hour: "16:00", temp: "24°", height: "70%" },
                  { hour: "17:00", temp: "22°", height: "55%" },
                  { hour: "18:00", temp: "20°", height: "40%" },
                ].map((slot, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span className="text-[9px] font-mono text-white">{slot.temp}</span>
                    <div
                      className="w-4 bg-gradient-to-t from-purple-900/60 to-[#00FF66] rounded-t border-t border-[#00FF66]"
                      style={{ height: slot.height }}
                    />
                    <span className="text-[8px] font-mono text-[#94A3B8]">{slot.hour}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`mt-3 pt-2 border-t text-[10px] font-mono flex justify-between ${
              isLightTheme ? "border-[#F0F0EE] text-[#888888]" : "border-[#25153E] text-purple-300"
            }`}
          >
            <span>Next.js 14 Client</span>
            <span className="text-[#00FF66] font-semibold">FastAPI Gateway</span>
          </div>
        </div>

        {/* Right: AI Conversational Screen */}
        <div
          className={`md:col-span-7 rounded-xl border p-3.5 flex flex-col justify-between font-mono ${
            isLightTheme ? "bg-white border-[#EAEAEA]" : "bg-[#0E091E] border-[#2E184D]"
          }`}
        >
          <div className="space-y-3 mb-3">
            <div
              className={`flex items-center justify-between pb-2 border-b ${
                isLightTheme ? "border-[#F0F0EE]" : "border-[#25153E]"
              }`}
            >
              <span className="font-medium text-white flex items-center gap-1.5 text-xs">
                <Bot className="w-3.5 h-3.5 text-[#00FF66]" />
                Contextual AI Weather Dialogue
              </span>
              <span className="text-[10px] font-mono text-[#00FF66] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                STREAMING ACTIVE
              </span>
            </div>

            {/* Chat conversation */}
            <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.sender === "ai" && (
                    <div className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-700 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3 h-3 text-[#00FF66]" />
                    </div>
                  )}

                  <div
                    className={`p-2.5 rounded-xl max-w-[85%] text-[11px] leading-relaxed ${
                      m.sender === "user"
                        ? "bg-gradient-to-r from-[#7E22CE] to-[#A855F7] text-white font-medium"
                        : "bg-[#07050E] text-purple-200 border border-[#25153E]"
                    }`}
                  >
                    {m.text}
                  </div>

                  {m.sender === "user" && (
                    <div className="w-6 h-6 rounded-full bg-[#1E143C] border border-purple-700 flex items-center justify-center text-white shrink-0">
                      <User className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Check air quality trend", "Evening commute rain risk?", "Weekend forecast summary"].map(
                (chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(chip)}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-[#07050E] hover:bg-emerald-950/80 hover:text-[#00FF66] border border-[#25153E] text-purple-300 transition-colors"
                  >
                    {chip}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Interactive input bar */}
          <div
            className={`pt-2 border-t ${
              isLightTheme ? "border-[#F0F0EE]" : "border-[#25153E]"
            }`}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about weather impact on travel, sports..."
                className="flex-1 bg-[#07050E] border border-[#25153E] rounded-lg px-3 py-1.5 text-[11px] text-white placeholder-purple-400/50 focus:outline-none focus:border-[#00FF66]"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-gradient-to-r from-[#7E22CE] to-[#A855F7] hover:from-[#6B21A8] hover:to-[#00FF66] text-white rounded-lg flex items-center gap-1 font-medium transition-colors shadow-[0_0_10px_rgba(0,255,102,0.3)]"
              >
                <span>Send</span>
                <Send className="w-3 h-3 text-[#00FF66]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
