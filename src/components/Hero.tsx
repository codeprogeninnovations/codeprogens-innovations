"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Flame,
  Layers,
  Terminal,
  ShieldCheck
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"arch" | "ai" | "deploy">("arch");

  const terminalSnippets = {
    arch: `// CODEPROGEN Enterprise Architecture Pipeline
export async function initializeMicroservicesCluster() {
  const mesh = await ServiceMesh.connect({
    regions: ["us-east-1", "eu-central-1", "ap-southeast-1"],
    resilience: "ActiveActive-MultiRegion",
    zeroTrust: true,
    telemetry: "OpenTelemetry + Datadog"
  });
  
  // Real-time Event-Driven Message Bus
  const kafka = await mesh.mountStreamWorker({
    concurrency: "50,000 rps",
    latencyTarget: "< 35ms"
  });
  
  return { status: "HEALTHY", uptimeSLA: "99.99%" };
}`,
    ai: `// Autonomous Agent Orchestration Engine
import { MultiAgentSwarm, VectorStore } from "@codeprogens/ai-engine";

const swarm = new MultiAgentSwarm({
  ragIndex: "enterprise-knowledge-base",
  guardrails: ["PII-Redaction", "Hallucination-Filter"],
  models: ["anthropic-claude-3-5", "meta-llama-3-70b"]
});

// Execute multi-step business logic with synthetic validation
const result = await swarm.executeAutonomousWorkflow({
  task: "Synthesize Multi-Year Clinical Data & Audit Reports",
  compliance: "HIPAA-Verified"
});`,
    deploy: `// GitOps Zero-Downtime Deployment
$ codeprogens-cli deploy --cluster production-fleet
> Verifying cryptographic image signatures... [PASSED]
> Running automated integration & SAST suite... [1,420 tests OK]
> Executing blue-green canary rollover...
  [===>                         ] 20% traffic shifted
  [=============>               ] 60% traffic shifted
  [============================>] 100% healthy traffic
✓ Deployment successful with 0.000s downtime.`
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow Orbs tailored to the logo's orange, pink & purple gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-r from-orange-600/15 via-pink-600/15 to-purple-600/20 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-orange-500/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-purple-600/15 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Announcement with Official Motto */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-orange-400 animate-ping"></span>
              <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 uppercase tracking-widest font-mono">
                {COMPANY_INFO.tagline}
              </span>
              <span className="text-slate-500 text-xs hidden sm:inline">|</span>
              <span className="text-slate-300 text-xs hidden sm:inline flex items-center gap-1 font-medium">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Zero Tech Debt Guarantee
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Architecting Bold Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
                Mission-Critical Software.
              </span>
            </h1>

            {/* Sub-text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong> is a high-velocity software engineering consultancy. Led by founders <strong>Harsh Goyal</strong> (CEO) and <strong>Vinay</strong> (CFO), we engineer resilient cloud backends, autonomous AI agent platforms, and modern enterprise products.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-pink-600/30 hover:shadow-pink-600/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Schedule Discovery Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#leadership"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                <span>Meet Our Leadership</span>
                <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              </a>
            </div>

            {/* Trust Checklist Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% IP & Source Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>SOC 2 & HIPAA-Ready Pipelines</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Rapid 10-Day Team Ramping</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Terminal with Company Brand Badge */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Logo Highlight Card */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-700/70 p-4 shadow-xl backdrop-blur-xl flex items-center gap-4">
              <div className="relative w-20 h-16 sm:w-24 sm:h-18 rounded-xl overflow-hidden border border-slate-700 shrink-0 bg-[#060b18] shadow-md">
                <Image
                  src="/logo.jpg"
                  alt="CODEPROGEN Logo Mark"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    OFFICIAL BRAND EMBLEM
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    VERIFIED
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-mono mt-0.5 truncate">
                  &lt;CODEPROGEN INNOVATIONS /&gt;
                </p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="text-[11px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 uppercase tracking-widest font-mono">
                    INNOVATE. CREATE. GROW.
                  </span>
                </div>
              </div>
            </div>

            {/* Terminal Window */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/70 shadow-2xl backdrop-blur-xl overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">codeprogens-core-v2.6</span>
                </div>
                
                {/* Mode Selector Tabs */}
                <div className="flex items-center gap-1 bg-slate-900 rounded-md p-1 border border-slate-800">
                  <button
                    onClick={() => setActiveTab("arch")}
                    className={`text-[11px] font-medium px-2 py-0.5 rounded transition-colors ${
                      activeTab === "arch" ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`text-[11px] font-medium px-2 py-0.5 rounded transition-colors ${
                      activeTab === "ai" ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    AI Swarm
                  </button>
                  <button
                    onClick={() => setActiveTab("deploy")}
                    className={`text-[11px] font-medium px-2 py-0.5 rounded transition-colors ${
                      activeTab === "deploy" ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Deploy
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 overflow-x-auto min-h-[260px] leading-relaxed bg-[#06080e]">
                <pre className="text-emerald-400/90 whitespace-pre">
                  <code>{terminalSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Telemetry */}
              <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  SYSTEM STATUS: OPERATIONAL
                </span>
                <span className="text-slate-500">Latency: 28ms</span>
              </div>
            </div>

          </div>

        </div>

        {/* Live Metrics Row */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">140+</div>
            <div className="text-xs text-orange-400 font-semibold uppercase tracking-wider mt-1">Deployments</div>
            <div className="text-xs text-slate-400 mt-0.5">Production-ready shipped apps</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">99.98%</div>
            <div className="text-xs text-pink-400 font-semibold uppercase tracking-wider mt-1">Uptime SLA</div>
            <div className="text-xs text-slate-400 mt-0.5">High availability architecture</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">45%</div>
            <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mt-1">Faster TTM</div>
            <div className="text-xs text-slate-400 mt-0.5">Accelerated sprint velocity</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">18+</div>
            <div className="text-xs text-purple-400 font-semibold uppercase tracking-wider mt-1">Global Markets</div>
            <div className="text-xs text-slate-400 mt-0.5">Enterprise clients worldwide</div>
          </div>
        </div>

        {/* Industries Served Ticker */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400">
          <span className="text-slate-500 font-medium uppercase tracking-wider">Industries Powered:</span>
          {["FinTech & Payments", "Healthcare & HIPAA", "Enterprise B2B SaaS", "Logistics & IoT", "AI Platforms", "Aerospace & Gov"].map((industry) => (
            <span
              key={industry}
              className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 font-medium"
            >
              {industry}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
