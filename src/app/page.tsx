"use client";

import useScrollReveal from "@/hooks/useScrollReveal";
import CursorGlow from "@/components/CursorGlow";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ClassesSection from "@/components/sections/ClassesSection";
import PricingSection from "@/components/sections/PricingSection";
import TrainersSection from "@/components/sections/TrainersSection";

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <CursorGlow />
      <HeroSection />
      <div className="section-divider" />
      <BenefitsSection />
      <div className="section-divider" />
      <ClassesSection />
      <div className="section-divider" />
      <PricingSection />
      <div className="section-divider" />
      <TrainersSection />
    </>
  );
}
