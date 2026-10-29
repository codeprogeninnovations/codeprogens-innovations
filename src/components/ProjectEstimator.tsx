"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Clock, 
  DollarSign, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  Smartphone, 
  CloudCog 
} from "lucide-react";

interface EstimatorState {
  projectType: string;
  scopeLevel: string;
  addons: string[];
}

export default function ProjectEstimator({
  onSelectEstimate,
}: {
  onSelectEstimate?: (summary: string) => void;
}) {
  const [projectType, setProjectType] = useState<string>("web");
  const [scopeLevel, setScopeLevel] = useState<string>("scale");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["ai", "cicd"]);

  const projectTypes = [
    {
      id: "web",
      title: "Fullstack Web & SaaS",
      desc: "Next.js, TypeScript, Tailwind, Microservices",
      icon: Layers,
      baseWeeks: 6,
      baseCost: 20000,
    },
    {
      id: "mobile",
      title: "Mobile App (iOS & Android)",
      desc: "React Native / Flutter, Offline-first, Native SDKs",
      icon: Smartphone,
      baseWeeks: 8,
      baseCost: 25000,
    },
    {
      id: "ai",
      title: "Applied AI & Agentic Platform",
      desc: "Custom LLM fine-tuning, RAG, Multi-agent Swarm",
      icon: Cpu,
      baseWeeks: 8,
      baseCost: 28000,
    },
    {
      id: "cloud",
      title: "Cloud & DevOps Modernization",
      desc: "Kubernetes, Terraform, Zero-downtime CI/CD",
      icon: CloudCog,
      baseWeeks: 5,
      baseCost: 18000,
    },
  ];

  const scopeLevels = [
    {
      id: "mvp",
      title: "MVP / Proof of Concept",
      desc: "Rapid time-to-market, core product validation",
      multiplier: 0.8,
      weeksAdd: 0,
    },
    {
      id: "scale",
      title: "Growth Platform (Recommended)",
      desc: "Production-hardened, high concurrency, extensible",
      multiplier: 1.3,
      weeksAdd: 3,
    },
    {
      id: "enterprise",
      title: "Enterprise Multi-Region System",
      desc: "Zero-trust, multi-region failover, custom compliance",
      multiplier: 2.1,
      weeksAdd: 7,
    },
  ];

  const addonOptions = [
    { id: "ai", label: "Autonomous AI / LLM Copilot", cost: 7500, weeks: 2 },
    { id: "compliance", label: "SOC 2 Type II / HIPAA Hardening", cost: 6000, weeks: 2 },
    { id: "cicd", label: "Full Automated CI/CD & Terraform IaC", cost: 4500, weeks: 1 },
    { id: "realtime", label: "Sub-50ms Real-Time WebSockets/Streaming", cost: 5000, weeks: 1 },
    { id: "sla", label: "Dedicated 24/7 Production SLA & Support", cost: 4000, weeks: 0 },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculations
  const currentType = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const currentScope = scopeLevels.find((s) => s.id === scopeLevel) || scopeLevels[1];

  const addonsCost = selectedAddons.reduce((acc, currId) => {
    const addon = addonOptions.find((a) => a.id === currId);
    return acc + (addon ? addon.cost : 0);
  }, 0);

  const addonsWeeks = selectedAddons.reduce((acc, currId) => {
    const addon = addonOptions.find((a) => a.id === currId);
    return acc + (addon ? addon.weeks : 0);
  }, 0);

  const totalMinCost = Math.round((currentType.baseCost * currentScope.multiplier + addonsCost) * 0.9);
  const totalMaxCost = Math.round((currentType.baseCost * currentScope.multiplier + addonsCost) * 1.15);
  const totalWeeks = Math.max(4, Math.round(currentType.baseWeeks + currentScope.weeksAdd + addonsWeeks));

  const handleApplyToContact = () => {
    const summary = `${currentType.title} (${currentScope.title}) with [${selectedAddons.join(", ")}]. Estimated timeline: ~${totalWeeks} weeks, budget: $${totalMinCost.toLocaleString()} - $${totalMaxCost.toLocaleString()}`;
    
    if (onSelectEstimate) {
      onSelectEstimate(summary);
    }

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="py-24 bg-[#080B13] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Ambient gradient */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-900/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Scope Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transparent Pricing & <span className="gradient-text-accent">Timeline Simulator</span>
          </h2>
          <p className="text-base text-slate-400">
            Configure your technical requirements to generate an instantaneous architecture estimate before our introductory discovery call.
          </p>
        </div>

        {/* Estimator Interactive Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Project Domain */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px] font-mono">1</span>
                Select Core Engineering Domain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-indigo-950/60 border-indigo-500 shadow-md shadow-indigo-950"
                          : "bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-5 h-5 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
                        {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
                      </div>
                      <div className="text-sm font-bold text-white">{type.title}</div>
                      <div className="text-xs text-slate-400 mt-1">{type.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale & Maturity */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px] font-mono">2</span>
                Select Maturity & Scale Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scopeLevels.map((scope) => {
                  const isSelected = scopeLevel === scope.id;
                  return (
                    <button
                      key={scope.id}
                      onClick={() => setScopeLevel(scope.id)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-indigo-950/60 border-indigo-500 shadow-md shadow-indigo-950"
                          : "bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700"
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{scope.title}</div>
                      <div className="text-[11px] text-slate-400 mt-1.5 leading-snug">{scope.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px] font-mono">3</span>
                Optional Enterprise Add-Ons
              </label>
              <div className="space-y-2">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                        isChecked
                          ? "bg-indigo-950/40 border-indigo-600/70"
                          : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                            isChecked
                              ? "bg-indigo-600 border-indigo-500 text-white"
                              : "border-slate-600 bg-slate-950"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-semibold text-slate-200">
                          {addon.label}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-cyan-400 font-semibold">
                        +${addon.cost.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Calculation Panel (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Calculated Estimate
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ready For Review
                </span>
              </div>

              {/* Cost Range */}
              <div>
                <span className="text-xs font-medium text-slate-400 block mb-1">Estimated Investment Bracket:</span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-1 font-mono">
                  <span className="text-indigo-400">$</span>
                  <span>{totalMinCost.toLocaleString()}</span>
                  <span className="text-slate-500 font-light text-2xl mx-1">–</span>
                  <span>{totalMaxCost.toLocaleString()}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Fixed-scope sprint guarantees with milestone-based delivery escrow.
                </p>
              </div>

              {/* Delivery Window */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-950 border border-indigo-800 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Sprint Delivery Window:</span>
                    <span className="text-sm font-bold text-white font-mono">~{totalWeeks} Weeks to Production</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-1 rounded bg-cyan-950/70 border border-cyan-800/40">
                  Agile Sprints
                </span>
              </div>

              {/* Spec Summary */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Selected Domain:</span>
                  <span className="font-semibold text-white">{currentType.title}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Maturity Level:</span>
                  <span className="font-semibold text-white">{currentScope.title}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Active Add-Ons:</span>
                  <span className="font-semibold text-cyan-300">{selectedAddons.length} Modules</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleApplyToContact}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200"
              >
                <span>Prefill Inquiry With This Specification</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-500">
                Includes 100% intellectual property transfer, NDA & 60-day post-launch warranty.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
