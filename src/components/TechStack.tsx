"use client";

import React, { useState } from "react";
import { 
  Layers, 
  Cpu, 
  Database, 
  Cloud, 
  Code, 
  Sparkles, 
  CheckCircle,
  Search
} from "lucide-react";
import { TECH_STACK, TechItem } from "@/data/content";

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Technologies", icon: Layers },
    { id: "frontend", label: "Frontend & Web", icon: Code },
    { id: "backend", label: "Backend & Microservices", icon: Cpu },
    { id: "ai", label: "Applied AI & LLMs", icon: Sparkles },
    { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
    { id: "database", label: "Databases & Stores", icon: Database },
  ];

  const filteredTech = TECH_STACK.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.popularFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tech-stack" className="py-24 bg-[#07090E] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Battle-Tested Stacks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Curated Tools for <span className="gradient-text-accent">Extreme Throughput</span>
          </h2>
          <p className="text-base text-slate-400">
            We reject fragile hype and legacy dead-ends. Our engineering stack is strictly optimized for type safety, developer velocity, fault tolerance, and multi-cloud elasticity.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stack or use case..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-xl pl-9 pr-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>

        </div>

        {/* Grid of Tech Items */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700/60">
                    {tech.level}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 capitalize">
                    {tech.category}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {tech.name}
                </h4>

                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-500 uppercase font-semibold block">Primary Focus:</span>
                <span className="text-xs font-medium text-slate-300">
                  {tech.popularFor}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-cyan-950/40 border border-indigo-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need a specialized or proprietary tech ecosystem?</h4>
              <p className="text-xs text-slate-400">We adapt to your enterprise RFCs, internal registries, custom hardware, or legacy constraints.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-md transition-colors"
          >
            Discuss Custom Tech Spec
          </a>
        </div>

      </div>
    </section>
  );
}
