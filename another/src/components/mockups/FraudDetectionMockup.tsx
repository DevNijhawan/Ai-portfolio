"use client";

import React, { useState, useEffect } from "react";
import { Activity, BarChart3, Database } from "lucide-react";

interface MockupProps {
  isLightTheme?: boolean;
}

export function FraudDetectionMockup({ isLightTheme = false }: MockupProps) {
  const [selectedTx, setSelectedTx] = useState<number>(1);
  const [txCount, setTxCount] = useState(284807);
  const [throughput, setThroughput] = useState(2840);
  const [flashId, setFlashId] = useState<string | null>(null);

  const [transactions, setTransactions] = useState([
    {
      id: "TX-78091",
      amount: "€ 42.50",
      time: "16:32:01",
      riskScore: 0.02,
      status: "Legitimate",
      anomalyFactors: ["Typical Amount", "Domestic IP", "Regular Merchant Class"],
      v14Score: "-0.12",
      v4Score: "+0.31",
    },
    {
      id: "TX-78092",
      amount: "€ 1,840.00",
      time: "16:32:15",
      riskScore: 0.96,
      status: "Suspicious",
      anomalyFactors: ["Extreme V14 Deviation", "Sudden Velocity Spike", "Off-hours Geo-drift"],
      v14Score: "-7.84",
      v4Score: "+4.19",
    },
    {
      id: "TX-78093",
      amount: "€ 19.99",
      time: "16:32:42",
      riskScore: 0.05,
      status: "Legitimate",
      anomalyFactors: ["Consistent Recurring Subscription", "Baseline PCA Fit"],
      v14Score: "+0.08",
      v4Score: "-0.22",
    },
  ]);

  // Live incoming transaction stream ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setTxCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
      setThroughput(2810 + Math.floor(Math.random() * 60));

      const newId = `TX-${78094 + Math.floor(Math.random() * 800)}`;
      const isAnom = Math.random() > 0.75;
      const amounts = ["€ 14.20", "€ 890.00", "€ 65.00", "€ 3,420.00", "€ 22.50"];
      const newTx = {
        id: newId,
        amount: amounts[Math.floor(Math.random() * amounts.length)],
        time: new Date().toLocaleTimeString("en-US", { hour12: false }),
        riskScore: isAnom ? 0.94 : 0.03,
        status: isAnom ? "Suspicious" : "Legitimate",
        anomalyFactors: isAnom
          ? ["PCA V14 Anomaly", "High Velocity Spike"]
          : ["Standard Merchant", "Zero Variance"],
        v14Score: isAnom ? "-6.42" : "+0.11",
        v4Score: isAnom ? "+3.88" : "-0.14",
      };

      setFlashId(newId);
      setTimeout(() => setFlashId(null), 800);

      setTransactions((prev) => [newTx, prev[0], prev[1]]);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

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
            <span className="w-2.5 h-2.5 rounded-full bg-[#C084FC] animate-pulse" title="Inference Active" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" title="Stream Connected" />
          </div>

          <span className="text-white font-mono text-[11px] font-bold flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>CREDIT_CARD_FRAUD // SCREEN_02 [LIVE_STREAM]</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-purple-300 hidden sm:inline">
            SMOTE + ENSEMBLE
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950 text-[#00FF66] font-mono text-[10px] font-bold border border-emerald-700/60 shadow-[0_0_8px_rgba(0,255,102,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-ping" />
            THROUGHPUT: {throughput} TX/S
          </span>
        </div>
      </div>

      {/* Metrics Strip */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-4 border-b divide-x divide-y sm:divide-y-0 font-mono ${
          isLightTheme
            ? "bg-white border-[#EAEAEA] divide-[#EAEAEA]"
            : "bg-[#0E091E] border-[#2A184D] divide-[#2A184D]"
        }`}
      >
        <div className="p-3">
          <span className="block text-[10px] text-purple-400 uppercase">AUDITED TRANSACTIONS</span>
          <span className="font-bold text-white text-sm">{txCount.toLocaleString()}</span>
          <span className="text-[9px] text-[#00FF66] block flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
            STREAMING LIVE
          </span>
        </div>
        <div className="p-3">
          <span className="block text-[10px] text-purple-400 uppercase">MODEL PIPELINE</span>
          <span className="font-bold text-white text-sm">SMOTE + Random Forest</span>
          <span className="text-[9px] text-purple-300 block">PR-AUC: 0.942</span>
        </div>
        <div className="p-3">
          <span className="block text-[10px] text-purple-400 uppercase">RECALL ON ANOMALIES</span>
          <span className="font-bold text-[#00FF66] text-sm">92.8% [RECALL]</span>
          <span className="text-[9px] text-[#94A3B8] block">Calibrated Decision Boundary</span>
        </div>
        <div className="p-3">
          <span className="block text-[10px] text-purple-400 uppercase">INFERENCE LATENCY</span>
          <span className="font-bold text-[#C084FC] text-sm">1.8 ms</span>
          <span className="text-[9px] text-[#94A3B8] block">Sub-millisecond Vector Fit</span>
        </div>
      </div>

      {/* Main Grid */}
      <div
        className={`p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5 ${
          isLightTheme ? "bg-[#FAFAF8]" : "bg-[#06040A]"
        }`}
      >
        {/* Left: Live Stream Table with Flash Highlight */}
        <div
          className={`md:col-span-7 rounded-xl border p-3.5 flex flex-col justify-between ${
            isLightTheme ? "bg-white border-[#EAEAEA]" : "bg-[#0E091E] border-[#2E184D]"
          }`}
        >
          <div>
            <div
              className={`flex items-center justify-between pb-2.5 mb-2.5 border-b font-mono ${
                isLightTheme ? "border-[#F0F0EE]" : "border-[#25153E]"
              }`}
            >
              <span className="font-medium text-white flex items-center gap-1.5 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
                Live Ingestion Stream
              </span>
              <span className="text-[10px] text-purple-400">CLICK ROW TO INSPECT PCA</span>
            </div>

            <div className="space-y-2">
              {transactions.map((tx, idx) => {
                const isSelected = selectedTx === idx;
                const isFraud = tx.riskScore > 0.5;
                const isFlashing = flashId === tx.id;

                return (
                  <div
                    key={tx.id}
                    onClick={() => setSelectedTx(idx)}
                    className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                      isFlashing
                        ? "border-[#00FF66] bg-emerald-950/50 shadow-[0_0_15px_rgba(0,255,102,0.4)]"
                        : isSelected
                        ? "border-[#A855F7] bg-purple-950/40 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                        : "border-[#25153E] bg-[#07050E] hover:border-[#3E1D70]"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] mb-1">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isFraud ? "bg-rose-400" : "bg-[#00FF66]"}`} />
                        {tx.id}
                      </span>
                      <span className="text-[#94A3B8]">{tx.time}</span>
                      <span className="font-semibold text-purple-200">{tx.amount}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          isFraud
                            ? "bg-rose-950/90 text-rose-300 border border-rose-800 shadow-[0_0_8px_rgba(244,63,94,0.3)]"
                            : "bg-emerald-950 text-[#00FF66] border border-emerald-700/60"
                        }`}
                      >
                        {isFraud ? "RISK: 96% [FLAGGED]" : "NORMAL (2%)"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-[#94A3B8] font-mono">
                      <span>V14: {tx.v14Score}</span>
                      <span>•</span>
                      <span>V4: {tx.v4Score}</span>
                      <span>•</span>
                      <span className="truncate">{tx.anomalyFactors[0]}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`mt-3 pt-2 border-t flex items-center justify-between text-[11px] font-mono ${
              isLightTheme ? "border-[#F0F0EE] text-[#777777]" : "border-[#25153E] text-purple-300/80"
            }`}
          >
            <span className="flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-[#00FF66]" />
              PCA Dimensions: V1 - V28 + Amount + Velocity
            </span>
            <span className="text-[#00FF66] font-medium">Scikit-Learn Inference Worker</span>
          </div>
        </div>

        {/* Right: Feature Importance */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-3 font-mono">
          <div
            className={`rounded-xl border p-3.5 space-y-3 ${
              isLightTheme ? "bg-white border-[#EAEAEA]" : "bg-[#0E091E] border-[#2E184D]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white text-xs">Top Feature Importance</span>
              <BarChart3 className="w-3.5 h-3.5 text-[#00FF66]" />
            </div>

            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="font-mono font-medium text-white">V14 (Primary Separation)</span>
                  <span className="font-mono text-[#00FF66] font-semibold">0.342</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#1E143C]">
                  <div
                    className="h-full bg-gradient-to-r from-[#A855F7] to-[#00FF66] rounded-full shadow-[0_0_8px_#00FF66]"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="font-mono font-medium text-white">V4 (Variance Ratio)</span>
                  <span className="font-mono text-[#00FF66] font-semibold">0.218</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#1E143C]">
                  <div
                    className="h-full bg-gradient-to-r from-[#A855F7] to-[#00FF66] rounded-full"
                    style={{ width: "62%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="font-mono font-medium text-white">V12 (Sub-manifold)</span>
                  <span className="font-mono text-[#00FF66] font-semibold">0.165</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#1E143C]">
                  <div
                    className="h-full bg-gradient-to-r from-[#A855F7] to-[#00FF66] rounded-full"
                    style={{ width: "48%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-xl border p-3 ${
              isLightTheme ? "bg-white border-[#EAEAEA]" : "bg-[#0E091E] border-[#2E184D]"
            }`}
          >
            <span className="block font-mono text-[10px] text-[#00FF66] mb-1 uppercase tracking-wider font-bold">
              Selected Transaction Evaluation
            </span>
            <div className="text-[11px] space-y-1 text-purple-200">
              <div className="flex justify-between">
                <span>Subject:</span>
                <span className="font-mono font-semibold text-white">{transactions[selectedTx]?.id || "TX-78091"}</span>
              </div>
              <div className="flex justify-between">
                <span>Verdict:</span>
                <span
                  className={`font-semibold ${
                    (transactions[selectedTx]?.riskScore || 0) > 0.5 ? "text-rose-400 font-bold" : "text-[#00FF66]"
                  }`}
                >
                  {transactions[selectedTx]?.status || "Legitimate"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
