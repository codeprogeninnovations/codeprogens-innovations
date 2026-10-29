"use client";

import React from "react";
import { 
  ShieldCheck, 
  Cpu, 
  GitPullRequest, 
  Lock, 
  Users2, 
  Zap, 
  Award,
  Sparkles 
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Cpu,
      title: "Senior-Tier Engineering Talent",
      description: "No junior bait-and-switch. Your project is architected and built by battle-tested engineers who have scaled systems at top Silicon Valley tech companies.",
      badge: "Top 2% Talent"
    },
    {
      icon: GitPullRequest,
      title: "Zero Technical Debt Mandate",
      description: "We enforce strict static code analysis, 90%+ automated test suites, clean separation of concerns, and full architectural documentation before any PR is merged.",
      badge: "Quality Guaranteed"
    },
    {
      icon: Lock,
      title: "Absolute IP & Source Ownership",
      description: "Everything we write belongs to you from the first commit. All repositories, cloud configs, secrets, and documentation reside in your organization's cloud accounts.",
      badge: "100% Client Ownership"
    },
    {
      icon: Zap,
      title: "Predictable Bi-Weekly Deliverables",
      description: "No black-box mystery. You receive working software increments every two weeks with live staging environments, automated changelogs, and direct engineer access.",
      badge: "Agile Precision"
    }
  ];

  return (
    <section className="py-24 bg-[#07090E] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>The CODEPROGENS Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Enterprise Leaders <span className="gradient-text-accent">Rely on Us</span>
          </h2>
          <p className="text-base text-slate-400">
            We operate as an elite engineering force, delivering high-stakes software that powers multi-million dollar business operations without downtime.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group glow-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700/60">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>ENTERPRISE GRADE STANDARD</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
