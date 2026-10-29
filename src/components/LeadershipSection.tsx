"use client";

import React from "react";
import { 
  Users, 
  Mail, 
  Quote, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";
import { LEADERSHIP } from "@/data/content";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 bg-[#07090E] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background ambient lighting matching the logo gradient: warm orange and electric violet */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-orange-400 text-xs font-semibold tracking-wide uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet the Founders Powering <span className="gradient-text-accent">CODEPROGEN</span>
          </h2>
          <p className="text-base text-slate-400">
            Uniting deep technical mastery in distributed AI engineering with rigorous fiscal strategy, capital efficiency, and zero-compromise execution.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {LEADERSHIP.map((leader, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/80 p-7 sm:p-9 shadow-2xl backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group glow-card"
            >
              <div>
                
                {/* Top Profile Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-4">
                    {/* Stylized Avatar with Logo Gradient */}
                    <div className="relative">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 p-[2px] shadow-lg shadow-orange-500/20 group-hover:shadow-pink-500/40 transition-all duration-300">
                        <div className="w-full h-full bg-[#090d16] rounded-[14px] flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
                            {leader.initials}
                          </span>
                        </div>
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#090d16] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 transition-all">
                          {leader.name}
                        </h3>
                      </div>
                      <span className="inline-block mt-0.5 text-xs font-bold font-mono text-orange-400 uppercase tracking-wider">
                        {leader.role}
                      </span>
                      <p className="text-xs text-slate-400 mt-0.5">{leader.title}</p>
                    </div>
                  </div>

                  {/* Metric Pill */}
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 self-start sm:self-center">
                    <span className="text-xl font-black text-white block font-mono">
                      {leader.metric.value}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tight block">
                      {leader.metric.label}
                    </span>
                  </div>
                </div>

                {/* Badge */}
                <div className="mt-5">
                  <span className="text-[11px] font-semibold text-slate-300 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60">
                    {leader.badge}
                  </span>
                </div>

                {/* Bio */}
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {leader.bio}
                </p>

                {/* Executive Quote */}
                <div className="mt-5 p-4 rounded-xl bg-slate-950/70 border-l-2 border-pink-500 text-xs text-slate-300 italic relative">
                  <Quote className="w-4 h-4 text-pink-400 absolute top-3 right-3 opacity-40" />
                  &ldquo;{leader.quote}&rdquo;
                </div>

                {/* Key Focus & Expertise */}
                <div className="mt-5">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                    Leadership Disciplines & Focus:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {leader.expertise.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Social / Direct Actions */}
              <div className="mt-7 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {leader.links.linkedin && (
                    <a
                      href={leader.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {leader.links.github && (
                    <a
                      href={leader.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      aria-label={`${leader.name} GitHub`}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {leader.links.email && (
                    <a
                      href={`mailto:${leader.links.email}`}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-white transition-colors"
                >
                  <span>Connect with {leader.name.split(" ")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Founder Commitment Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-950/40 via-slate-900/80 to-purple-950/40 border border-orange-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Direct Founder Involvement on Every Tier-1 Engagement</h4>
              <p className="text-xs text-slate-400">Both Harsh Goyal and Vinay actively participate in architectural blueprint reviews, milestone escrow sign-offs, and executive syncs.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-xs font-bold text-white shadow-lg transition-all"
          >
            Request Founder Discovery Call
          </a>
        </div>

      </div>
    </section>
  );
}
