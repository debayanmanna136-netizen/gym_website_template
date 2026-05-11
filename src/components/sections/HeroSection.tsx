"use client";

import Image from "next/image";
import { HERO_IMAGE } from "@/data/constants";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[820px] flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Intense dark gym setting with a muscular athlete lifting heavy weights"
          fill className="object-cover opacity-40" priority unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto text-center flex flex-col items-center reveal">
        <h1 className="text-[clamp(48px,8vw,72px)] font-black leading-[1.1] tracking-[-0.04em] text-white mb-6 uppercase drop-shadow-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          START YOUR <br /><span className="text-[#caf300]">JOURNEY</span>
        </h1>
        <p className="text-lg leading-relaxed text-[#c8c6c5] max-w-2xl mb-10" style={{ fontFamily: "'Lexend', sans-serif" }}>
          No excuses. Just results. Join the elite training facility designed for those who demand more from themselves.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => scrollTo("pricing")} className="magnetic-btn bg-[#caf300] text-[#596c00] font-semibold text-sm px-8 py-4 uppercase tracking-widest hover:bg-[#b0d500] transition-colors shadow-[0_0_20px_rgba(202,243,0,0.4)] cursor-pointer" style={{ fontFamily: "'Lexend', sans-serif" }}>
            START FREE TRIAL
          </button>
          <button onClick={() => scrollTo("classes")} className="magnetic-btn border-2 border-[#caf300] text-[#caf300] font-semibold text-sm px-8 py-4 uppercase tracking-widest hover:bg-[#caf300] hover:text-[#596c00] transition-colors cursor-pointer" style={{ fontFamily: "'Lexend', sans-serif" }}>
            VIEW PROGRAMS
          </button>
        </div>
      </div>
    </section>
  );
}
