"use client";

import React from "react";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#080B13] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-900/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Leaders <span className="gradient-text-accent">Shipping Mission-Critical Tech</span>
          </h2>
          <p className="text-base text-slate-400">
            Hear directly from the engineering heads and tech founders who rely on CODEPROGENS INNOVATIONS to power their platforms.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between glow-card"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote content */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white text-xs shadow-md">
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.author}</h4>
                    <p className="text-[11px] text-slate-400">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl font-black text-white">99.4%</div>
            <div className="text-xs text-slate-400">Client Retention & Satisfaction</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-800"></div>
          <div>
            <div className="text-2xl font-black text-white">100%</div>
            <div className="text-xs text-slate-400">On-Time Sprint Milestones</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-800"></div>
          <div>
            <div className="text-2xl font-black text-white">Zero</div>
            <div className="text-xs text-slate-400">Critical Post-Launch Breaches</div>
          </div>
        </div>

      </div>
    </section>
  );
}
