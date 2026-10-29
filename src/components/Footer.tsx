"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  Send, 
  Check, 
  ShieldCheck, 
  Award, 
  Users 
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#05070B] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3.5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#060b18] shrink-0 p-1.5 flex items-center justify-center">
                <img
                  src="/company-emblem.jpg"
                  alt="CODEPROGEN Logo Emblem"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-black tracking-wider text-white text-base font-mono">
                    CODEPROGEN
                  </span>
                  <span className="text-[10px] text-orange-400 font-sans font-bold px-1.5 py-0.5 rounded bg-orange-950/60 border border-orange-800/40">
                    INNOVATIONS
                  </span>
                </div>
                <span className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 font-extrabold tracking-widest uppercase">
                  INNOVATE. CREATE. GROW.
                </span>
              </div>
            </a>

            <p className="text-slate-400 leading-relaxed text-xs">
              Premier software engineering and digital transformation partner founded by Harsh Goyal (CEO) and Vinay (CTO). We architect, engineer, and deploy resilient cloud backends, autonomous AI agent platforms, and modern high-concurrency enterprise applications.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Status: Operational (100% SLA)
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Engineering Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Enterprise Software</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Applied AI & Swarms</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Cloud & Kubernetes</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Modern Web Apps</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Mobile Platforms</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">SOC 2 Hardening</a></li>
            </ul>
          </div>

          {/* Solutions & Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Company & Culture
            </h4>
            <ul className="space-y-2">
              <li><a href="#leadership" className="hover:text-orange-400 transition-colors flex items-center gap-1.5 font-semibold text-slate-200"><Users className="w-3.5 h-3.5 text-orange-400" /> Leadership Team</a></li>
              <li><a href="#case-studies" className="hover:text-orange-400 transition-colors">Case Studies</a></li>
              <li><a href="#tech-stack" className="hover:text-orange-400 transition-colors">Tech Matrix</a></li>
              <li><a href="#process" className="hover:text-orange-400 transition-colors">Sprint Engine</a></li>
              <li><a href="#estimator" className="hover:text-orange-400 transition-colors">Cost Estimator</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">Client FAQ</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Discovery Call</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              The Architecture Dispatch
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Curated bi-weekly insights on distributed systems, LLM production latency, and modern cloud architecture. No promotional spam.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed! Check your inbox for the latest dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="cto@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-orange-500 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white rounded-xl font-semibold flex items-center justify-center shrink-0 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 text-[11px] text-slate-500">
              Trusted by 4,500+ CTOs and software architects globally.
            </div>
          </div>

        </div>

        {/* Global Compliance & Badges */}
        <div className="py-6 border-b border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-[11px]">
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              SOC 2 Type II Certified
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              HIPAA & GDPR Compliant
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Award className="w-4 h-4 text-amber-400" />
              AWS Advanced Tier Partner
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Award className="w-4 h-4 text-purple-400" />
              Google Cloud Certified Architects
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            {/* GitHub SVG */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn SVG */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* X / Twitter SVG */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2026 {COMPANY_INFO.name}. All rights reserved. Built with Next.js, React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Security Whitepaper</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Responsible Disclosure</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
