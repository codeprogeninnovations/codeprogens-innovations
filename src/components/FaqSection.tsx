"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { FAQS } from "@/data/content";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#080B13] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-900/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers & Policies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="gradient-text-accent">Questions</span>
          </h2>
          <p className="text-base text-slate-400">
            Everything you need to know about partnering with CODEPROGENS INNOVATIONS, engagement models, and engineering guarantees.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-14 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900/90 border-indigo-500/80 shadow-lg shadow-indigo-950/40"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/70"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-cyan-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60 hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-slate-300 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-indigo-600 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
