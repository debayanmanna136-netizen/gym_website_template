"use client";

import useScrollReveal from "@/hooks/useScrollReveal";
import CursorGlow from "@/components/CursorGlow";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TransformationsSection from "@/components/sections/TransformationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CoachSection from "@/components/sections/CoachSection";
import PricingSection from "@/components/sections/PricingSection";
import BookingSection from "@/components/sections/BookingSection";

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <CursorGlow />
      <HeroSection />
      <HowItWorksSection />
      <TransformationsSection />
      <TestimonialsSection />
      <CoachSection />
      <PricingSection />
      <BookingSection />
    </>
  );
}
