"use client";

import React, { useState, useEffect } from "react";
import { 
  Code2, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  PhoneCall, 
  Layers, 
  Calculator 
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#case-studies" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Sprint Engine", href: "#process" },
    { name: "Estimator", href: "#estimator" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-white text-base sm:text-lg flex items-center gap-1.5 font-mono">
                CODEPROGENS
                <span className="text-cyan-400 font-sans text-xs px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                  INNOVATIONS
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-tight -mt-0.5 hidden sm:inline-block">
                Software & AI Engineering Partner
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 shadow-inner backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#estimator"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/60 px-3.5 py-2 rounded-lg transition-all"
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>Project Estimator</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 px-4 py-2 rounded-lg shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Discovery Call</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="text-xs font-semibold text-white bg-indigo-600 px-3 py-1.5 rounded-lg sm:hidden"
            >
              Inquire
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            <div className="px-3 py-2 bg-indigo-950/40 border border-indigo-800/40 rounded-lg flex items-center gap-2 text-xs text-indigo-300 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Accepting New Client Engagements (Q4/Q1)</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700 py-2.5 rounded-lg"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                Launch Scope Estimator
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 py-2.5 rounded-lg shadow-lg shadow-indigo-600/30"
              >
                <PhoneCall className="w-4 h-4" />
                Schedule Discovery Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
