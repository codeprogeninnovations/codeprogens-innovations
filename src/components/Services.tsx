"use client";

import React, { useState } from "react";
import { 
  Code2, 
  BrainCircuit, 
  CloudCog, 
  LayoutGrid, 
  Smartphone, 
  ShieldCheck, 
  ArrowUpRight, 
  Check, 
  X, 
  Sparkles,
  Layers
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/content";

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map icon names to Lucide components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-6 h-6 text-cyan-400" />;
      case "CloudCog":
        return <CloudCog className="w-6 h-6 text-blue-400" />;
      case "LayoutGrid":
        return <LayoutGrid className="w-6 h-6 text-emerald-400" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-purple-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-rose-400" />;
      default:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#080B13] relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-900/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/50 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>End-to-End Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Disciplines Built for{" "}
            <span className="gradient-text-accent">Unmatched Scale</span>
          </h2>
          <p className="text-base text-slate-400">
            We partner with ambitious enterprises and high-growth scale-ups to design, build, and deploy production software with zero technical compromises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/80 p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/50 flex flex-col justify-between glow-card"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 bg-slate-800/70 border border-slate-700/50 px-2.5 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature Bullets */}
                <ul className="mt-5 space-y-2.5">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                    Proven Impact
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    {service.metrics}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Deliverables</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-lg rounded-2xl bg-[#0b0f19] border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {renderIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {selectedService.badge}
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {selectedService.title}
                  </h4>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Deliverables List */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  What You Receive (Tangible Deliverables)
                </h5>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedService.deliverables.map((item, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2.5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action inside modal */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/30 transition-colors"
                >
                  Inquire About This Service
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
