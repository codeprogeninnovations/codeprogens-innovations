"use client";

import React, { useState } from "react";
import { 
  GitBranch, 
  Terminal, 
  ShieldCheck, 
  Rocket, 
  Clock, 
  FileCheck2, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import { WORKFLOW_STEPS } from "@/data/content";

export default function EngineeringProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [GitBranch, Terminal, ShieldCheck, Rocket];

  return (
    <section id="process" className="py-24 bg-[#07090E] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-900/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <GitBranch className="w-3.5 h-3.5" />
            <span>The Sprint Delivery Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How CODEPROGENS Ships at <span className="gradient-text-accent">Hyper-Velocity</span>
          </h2>
          <p className="text-base text-slate-400">
            A disciplined, test-driven engineering methodology that guarantees absolute predictability, transparent git commits, and zero technical debt.
          </p>
        </div>

        {/* 4-Step Timeline Navigation */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-4">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative ${
                  isActive
                    ? "bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-950/60 -translate-y-1"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/70"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    PHASE {step.step}
                  </span>
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-cyan-400" : "text-slate-500"
                    }`}
                  />
                </div>

                <div className="text-xs font-semibold text-slate-400 mb-1">{step.phase}</div>
                <div className="text-sm font-bold text-white line-clamp-1">{step.title}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Display */}
        <div className="mt-8 rounded-3xl bg-slate-900/80 border border-slate-700/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-extrabold text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-lg">
                  Phase {WORKFLOW_STEPS[activeStep].step}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  Standard Cadence: <strong className="text-white">{WORKFLOW_STEPS[activeStep].duration}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {WORKFLOW_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {WORKFLOW_STEPS[activeStep].description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  Key Phase Artifacts & Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {WORKFLOW_STEPS[activeStep].artifacts.map((artifact, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{artifact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800/90 rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Engineering Guarantees
              </h4>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5"></div>
                  <span><strong>Direct GitHub Access:</strong> You review every single pull request, commit, and CI test pipeline in real-time.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5"></div>
                  <span><strong>Zero Technical Debt:</strong> Mandatory static analysis checks, strict linting, and high test coverage before merge.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5"></div>
                  <span><strong>Async Timezone Overlap:</strong> Daily asynchronous standup videos & minimum 4-hour synchronous overlap with US and European timezones.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href="#estimator"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-cyan-300 transition-colors"
                >
                  Estimate Timeline For Your Build
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
