"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Menu, 
  X, 
  ChevronRight, 
  PhoneCall, 
  Calculator
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

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
    { name: "Leadership", href: "#leadership" },
    { name: "Sprint Engine", href: "#process" },
    { name: "Estimator", href: "#estimator" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060b18]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Official Graphic */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center h-10 w-13 sm:h-11 sm:w-15 rounded-xl bg-[#060b18] border border-slate-800/90 overflow-hidden shadow-lg shadow-orange-500/10 group-hover:border-orange-500/50 transition-all duration-300">
              <Image
                src="/logo.jpg"
                alt="CODEPROGEN Logo Emblem"
                fill
                priority
                className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black tracking-wider text-white text-base sm:text-lg font-mono">
                  CODEPROGEN
                </span>
                <span className="text-[10px] text-orange-400 font-sans font-bold px-1.5 py-0.5 rounded bg-orange-950/60 border border-orange-800/40">
                  INNOVATIONS
                </span>
              </div>
              <span className="text-[9px] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 font-bold tracking-widest uppercase -mt-0.5 hidden sm:inline-block">
                INNOVATE. CREATE. GROW.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/70 border border-slate-800/80 rounded-full px-4 py-1.5 shadow-inner backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#estimator"
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/60 px-3.5 py-2 rounded-xl transition-all"
            >
              <Calculator className="w-3.5 h-3.5 text-orange-400" />
              <span>Project Estimator</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 px-4 py-2 rounded-xl shadow-md shadow-pink-600/25 hover:shadow-pink-600/40 transition-all active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Discovery Call</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
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
            <div className="px-3 py-2 bg-orange-950/40 border border-orange-800/40 rounded-xl flex items-center justify-between text-xs text-orange-300 mb-2">
              <span className="font-bold tracking-widest text-[10px] uppercase font-mono">
                INNOVATE. CREATE. GROW.
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700 py-2.5 rounded-xl"
              >
                <Calculator className="w-4 h-4 text-orange-400" />
                Launch Scope Estimator
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 py-2.5 rounded-xl shadow-lg shadow-pink-600/30"
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
