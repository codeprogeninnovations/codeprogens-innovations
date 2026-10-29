"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Zap
} from "lucide-react";
import { CASE_STUDIES, CaseStudy } from "@/data/content";

export default function CaseStudies() {
  const [activeStudyId, setActiveStudyId] = useState<string>(CASE_STUDIES[0].id);

  const currentStudy = CASE_STUDIES.find((s) => s.id === activeStudyId) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-24 bg-[#080B13] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-900/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Engineering Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            High-Stakes Software <span className="gradient-text-accent">Shipped to Production</span>
          </h2>
          <p className="text-base text-slate-400">
            Real architectural blueprints and measurable business returns across regulated industries and high-concurrency environments.
          </p>
        </div>

        {/* Case Study Selector Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveStudyId(study.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                activeStudyId === study.id
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "bg-slate-900/70 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <span className="block text-[10px] text-cyan-300 font-mono opacity-80">{study.industry}</span>
              <span>{study.client}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Detail Card */}
        <div className="hud-corner mt-8 rounded-3xl bg-slate-900/80 border border-slate-700/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 animate-laser"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs font-semibold uppercase">
                  {currentStudy.industry}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Client: <strong className="text-white">{currentStudy.client}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {currentStudy.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentStudy.overview}
              </p>

              {/* Challenge vs Solution comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    The Bottleneck
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {currentStudy.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-indigo-900/40">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    CODEPROGENS Solution
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentStudy.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold mr-1">Deployed With:</span>
                {currentStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700/60 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Right Metrics Column */}
            <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  Verified Production Metrics
                </div>
                <span className="text-[11px] text-slate-500 font-mono">Telemetry Audit</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {currentStudy.impactMetrics.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all"
                >
                  <span>Build A Similar Solution For Your Team</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
