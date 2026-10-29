"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import CaseStudies from "@/components/CaseStudies";
import LeadershipSection from "@/components/LeadershipSection";
import EngineeringProcess from "@/components/EngineeringProcess";
import ProjectEstimator from "@/components/ProjectEstimator";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [prefilledScope, setPrefilledScope] = useState<string>("");

  const handleSelectEstimate = (estimateSummary: string) => {
    setPrefilledScope(estimateSummary);
  };

  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col font-sans selection:bg-pink-500 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Official Logo & Brand Statement */}
        <Hero />

        {/* Core Services Section */}
        <Services />

        {/* Production Tech Stack Matrix */}
        <TechStack />

        {/* Real-World Production Case Studies */}
        <CaseStudies />

        {/* Meet Our Leadership: Harsh Goyal (CEO) & Vinay (CFO) */}
        <LeadershipSection />

        {/* 4-Phase Sprint Engineering Methodology */}
        <EngineeringProcess />

        {/* Interactive Scope & Cost Calculator */}
        <ProjectEstimator onSelectEstimate={handleSelectEstimate} />

        {/* Why Choose CODEPROGENS INNOVATIONS */}
        <WhyChooseUs />

        {/* Client Endorsements & Testimonials */}
        <Testimonials />

        {/* Interactive FAQ Accordion */}
        <FaqSection />

        {/* Direct Contact & Discovery Booking */}
        <ContactSection prefilledScope={prefilledScope} />
      </main>

      {/* Corporate Footer with Official Logo */}
      <Footer />
    </div>
  );
}
