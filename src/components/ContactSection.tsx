"use client";

import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Building2, 
  FileText 
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export default function ContactSection({
  prefilledScope = "",
}: {
  prefilledScope?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "Fullstack Web & SaaS",
    budget: "$30k - $60k",
    timeline: "1 - 2 Months",
    ndaRequired: true,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    name: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    if (prefilledScope) {
      setFormData((prev) => ({
        ...prev,
        message: `Calculated Estimator Scope:\n${prefilledScope}\n\nAdditional notes: `,
      }));
    }
  }, [prefilledScope]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      const randomId = "CP-" + Math.floor(100000 + Math.random() * 900000);
      setSubmittedData({
        referenceId: randomId,
        name: formData.name || "Engineering Leader",
        email: formData.email || "client@company.com",
      });
    }, 1000);
  };

  const projectTypes = [
    "Fullstack Web & SaaS",
    "Mobile iOS & Android",
    "Applied AI & Agents",
    "Cloud & DevOps Migration",
    "Enterprise Modernization",
  ];

  const budgetTiers = [
    "$15k - $30k",
    "$30k - $60k",
    "$60k - $120k",
    "$120k+",
  ];

  const timelines = [
    "Immediate (1-2 Weeks)",
    "1 - 2 Months",
    "Next Quarter",
    "Exploratory",
  ];

  return (
    <section id="contact" className="py-24 bg-[#07090E] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Engineering Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Your Next <span className="gradient-text-accent">Breakthrough</span>
          </h2>
          <p className="text-base text-slate-400">
            Tell us about your project or technical challenge. Our principal architects will review your requirements and respond within 24 hours.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Office & Contact Info (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-indigo-400" />
                Global Engineering Hubs
              </h3>

              <div className="space-y-4 text-xs">
                {COMPANY_INFO.addressList.map((loc, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-white text-sm">{loc.city}</span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400">
                        {loc.region}
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{loc.address}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-500 block">General & Enterprise Inquiries:</span>
                    <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="font-mono text-white hover:text-cyan-300 transition-colors">
                      {COMPANY_INFO.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-500 block">Direct Telephony:</span>
                    <span className="font-mono text-white">{COMPANY_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-500 block">Turnaround Commitment:</span>
                    <span className="text-white font-medium">Under 24 hours guaranteed with senior architect evaluation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-900/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Enterprise Security & Non-Disclosure
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All inquiries are covered by mutual non-disclosure obligations. We sign standard bilateral NDAs prior to in-depth technical discussions.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-700/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              
              {submittedData ? (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50">
                      TICKET REFERENCE: {submittedData.referenceId}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                      Thank you, <strong className="text-white">{submittedData.name}</strong>. A technical architect will inspect your requirements and email you at <strong className="text-white">{submittedData.email}</strong> within 24 hours.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                      <Calendar className="w-4 h-4" />
                      Skip the queue? Book an instant 30-min Zoom call:
                    </div>
                    <p className="text-xs text-slate-400">
                      Pick a slot directly on our engineering calendar with our Chief Technology Architect.
                    </p>
                    <a
                      href="https://calendar.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition-colors"
                    >
                      Open Calendar Availability
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmittedData(null)}
                    className="text-xs font-medium text-slate-400 hover:text-white underline underline-offset-4"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                /* The Active Intake Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Basic Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp, Series A Startup, etc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Picker */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                      Primary Project Domain
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                            formData.projectType === type
                              ? "bg-indigo-600 border-indigo-500 text-white shadow-sm"
                              : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget & Timeline Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                        Target Budget
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetTiers.map((tier) => (
                          <button
                            type="button"
                            key={tier}
                            onClick={() => setFormData({ ...formData, budget: tier })}
                            className={`text-xs p-2 rounded-lg border text-center font-semibold transition-all ${
                              formData.budget === tier
                                ? "bg-cyan-950/60 border-cyan-500 text-cyan-300"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                        Desired Launch Cadence
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {timelines.map((time) => (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setFormData({ ...formData, timeline: time })}
                            className={`text-xs p-2 rounded-lg border text-center font-medium transition-all ${
                              formData.timeline === time
                                ? "bg-cyan-950/60 border-cyan-500 text-cyan-300"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Requirements / Project Scope Message */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 flex items-center justify-between">
                      <span>Project Details & Technical Scope *</span>
                      <span className="text-[11px] text-slate-500 font-normal">Architecture notes or problem statement</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline what you are building, existing systems, preferred tech stack, or problem statement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    ></textarea>
                  </div>

                  {/* NDA Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="nda"
                      checked={formData.ndaRequired}
                      onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                      className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-indigo-600 focus:ring-0"
                    />
                    <label htmlFor="nda" className="text-xs text-slate-300 cursor-pointer">
                      Send a mutual Non-Disclosure Agreement (NDA) before detailed discovery
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Transmitting Encrypted Spec...
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Specification</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    We strictly protect your confidentiality. No marketing spam, ever.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
