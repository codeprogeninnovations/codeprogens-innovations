"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  Globe2,
  TrendingUp,
  Server
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"arch" | "ai" | "deploy">("arch");

  const terminalSnippets = {
    arch: `// CODEPROGENS Enterprise Architecture Pipeline
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
      {/* Background Radial Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-cyan-500/15 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-800/60 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-xs font-semibold text-cyan-300 tracking-wide uppercase">
                Enterprise Engineering & Applied AI
              </span>
              <span className="text-slate-400 text-xs hidden sm:inline">|</span>
              <span className="text-slate-300 text-xs hidden sm:inline flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Zero Tech Debt Guarantee
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Architecting Bold Ideas Into{" "}
              <span className="gradient-text-accent">
                Mission-Critical Software.
              </span>
            </h1>

            {/* Sub-text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong> is a high-velocity software engineering consultancy. We design, build, and scale resilient cloud backends, autonomous AI agent workflows, and modern high-performance web and mobile platforms.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Schedule Discovery Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#estimator"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Calculate Project Scope</span>
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

          {/* Right Column: Interactive Code & Architecture Terminal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/70 shadow-2xl backdrop-blur-xl overflow-hidden glow-indigo">
              
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
                      activeTab === "arch" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`text-[11px] font-medium px-2 py-0.5 rounded transition-colors ${
                      activeTab === "ai" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    AI Swarm
                  </button>
                  <button
                    onClick={() => setActiveTab("deploy")}
                    className={`text-[11px] font-medium px-2 py-0.5 rounded transition-colors ${
                      activeTab === "deploy" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Deploy
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 overflow-x-auto min-h-[290px] leading-relaxed bg-[#06080e]">
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
            <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mt-1">Deployments</div>
            <div className="text-xs text-slate-400 mt-0.5">Production-ready shipped apps</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">99.98%</div>
            <div className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mt-1">Uptime SLA</div>
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
