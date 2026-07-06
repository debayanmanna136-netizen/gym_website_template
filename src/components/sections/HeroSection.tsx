"use client";

import Image from "next/image";
import { HERO_IMAGE } from "@/data/constants";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[96vh] pt-32 pb-16 overflow-hidden bg-[#070707] text-white px-6 md:px-12 flex flex-col justify-between border-b border-[#262626]"
    >
      {/* ── Background Atmospheric Spotlight ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[950px] md:h-[950px] bg-radial from-neutral-600/25 via-neutral-900/40 to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#00ff55]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* Extreme Left Vertical Indicator: P R E V */}
      <div className="hidden xl:flex flex-col items-center gap-4 absolute left-10 top-1/2 -translate-y-1/2 z-40 text-neutral-400 font-mono text-sm font-extrabold tracking-widest select-none">
        <span className="hover:text-[#00ff55] transition-colors cursor-pointer">P</span>
        <span className="hover:text-[#00ff55] transition-colors cursor-pointer">R</span>
        <span className="hover:text-[#00ff55] transition-colors cursor-pointer">E</span>
        <span className="hover:text-[#00ff55] transition-colors cursor-pointer">V</span>
      </div>

      {/* Extreme Right Vertical Indicator: N E X T */}
      <div className="hidden xl:flex flex-col items-center gap-4 absolute right-10 top-1/2 -translate-y-1/2 z-40 text-neutral-400 font-mono text-sm font-extrabold tracking-widest select-none">
        <span className="hover:text-[#00ff55] transition-colors cursor-pointer">N</span>
        <span className="hover:text-[#00ff55] transition-colors cursor-pointer">E</span>
        <span className="hover:text-[#00ff55] transition-colors cursor-pointer">X</span>
        <span className="hover:text-[#00ff55] transition-colors cursor-pointer">T</span>
      </div>

      {/* ── Main Centerpiece Stage: Typography Behind + Athlete In Front + 4 Tilted Badges ── */}
      <div className="relative z-20 max-w-[1280px] mx-auto w-full flex-grow flex flex-col items-center justify-center my-4">
        
        {/* Superimposed Editorial Typography (Z-30: In Front of Athlete for complete visibility) */}
        <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-30 w-full text-center pointer-events-none select-none px-4">
          <h1
            className="text-[clamp(38px,8vw,110px)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Sculpt <span className="text-[#00ff55] drop-shadow-[0_0_20px_rgba(0,255,85,0.4)]">Your</span> Body,
          </h1>
          <h1
            className="text-[clamp(38px,8vw,110px)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.95)] mt-1 md:mt-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Elevate <span className="text-[#00ff55] drop-shadow-[0_0_20px_rgba(0,255,85,0.4)]">Your</span> Spirit
          </h1>
        </div>

        {/* Center Athlete Photo + 4 Floating Tilted Cards Container (Z-20: In front of Typography) */}
        <div className="relative w-full max-w-[640px] md:max-w-[780px] h-[520px] md:h-[680px] flex items-center justify-center mx-auto mt-12 md:mt-16">
          
          {/* Athlete B&W Studio Subject Image */}
          <div className="absolute inset-0 z-20 pointer-events-none select-none flex justify-center items-end">
            <div className="relative w-full max-w-[480px] md:max-w-[600px] h-full">
              <Image
                src={HERO_IMAGE}
                alt="Muscular fitness athlete in intense focus"
                fill
                className="object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
                priority
                unoptimized
              />
            </div>
            {/* Smooth floor fade */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070707] via-[#070707]/80 to-transparent z-30" />
          </div>

          {/* ── 4 Tilted Signature Badge Cards (Z-30: Overlapping Athlete Arms/Torso) ── */}

          {/* Card 1: Top Left - Hours 1.5 */}
          <div className="absolute top-16 md:top-24 left-4 md:-left-8 z-30 w-[125px] md:w-[145px] rounded-[24px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.9)] border border-white/10 transform -rotate-[14deg] animate-float hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-default">
            <div className="bg-gradient-to-br from-[#d9f99d] to-[#00ff55] py-4 md:py-5 flex items-center justify-center text-[#050505]">
              <span className="material-symbols-outlined text-3xl md:text-4xl font-bold">schedule</span>
            </div>
            <div className="bg-[#1a1a1a]/95 py-3 md:py-3.5 text-center flex flex-col justify-center">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Hours</span>
              <span className="text-xl md:text-2xl font-black text-white font-mono block leading-tight">1.5</span>
            </div>
          </div>

          {/* Card 2: Top Right - Poses 20 */}
          <div className="absolute top-16 md:top-24 right-4 md:-right-8 z-30 w-[125px] md:w-[145px] rounded-[24px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.9)] border border-white/10 transform rotate-[14deg] animate-float-delayed hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-default">
            <div className="bg-gradient-to-br from-[#d9f99d] to-[#00ff55] py-4 md:py-5 flex items-center justify-center text-[#050505]">
              <span className="material-symbols-outlined text-3xl md:text-4xl font-bold">directions_run</span>
            </div>
            <div className="bg-[#1a1a1a]/95 py-3 md:py-3.5 text-center flex flex-col justify-center">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Poses</span>
              <span className="text-xl md:text-2xl font-black text-white font-mono block leading-tight">20</span>
            </div>
          </div>

          {/* Card 3: Bottom Left - Kcal 550 */}
          <div className="absolute bottom-14 md:bottom-20 left-6 md:-left-4 z-30 w-[125px] md:w-[145px] rounded-[24px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.9)] border border-white/10 transform -rotate-[18deg] animate-float-delayed hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-default">
            <div className="bg-gradient-to-br from-[#d9f99d] to-[#00ff55] py-4 md:py-5 flex items-center justify-center text-[#050505]">
              <span className="material-symbols-outlined text-3xl md:text-4xl font-bold">local_fire_department</span>
            </div>
            <div className="bg-[#1a1a1a]/95 py-3 md:py-3.5 text-center flex flex-col justify-center">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Kcal</span>
              <span className="text-xl md:text-2xl font-black text-white font-mono block leading-tight">550</span>
            </div>
          </div>

          {/* Card 4: Bottom Right - Sets 5 */}
          <div className="absolute bottom-14 md:bottom-20 right-6 md:-right-4 z-30 w-[125px] md:w-[145px] rounded-[24px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.9)] border border-white/10 transform rotate-[18deg] animate-float hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-default">
            <div className="bg-gradient-to-br from-[#d9f99d] to-[#00ff55] py-4 md:py-5 flex items-center justify-center text-[#050505]">
              <span className="material-symbols-outlined text-3xl md:text-4xl font-bold">fitness_center</span>
            </div>
            <div className="bg-[#1a1a1a]/95 py-3 md:py-3.5 text-center flex flex-col justify-center">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Sets</span>
              <span className="text-xl md:text-2xl font-black text-white font-mono block leading-tight">5</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar: Happy Spirits + Let's Start CTA ── */}
      <div className="relative z-30 max-w-[1280px] mx-auto w-full pt-8 border-t border-[#262626]/80 flex flex-col sm:flex-row items-center justify-between gap-6 reveal">
        
        {/* Left: 12k+ Happy Spirits Avatar Pile */}
        <div className="flex items-center gap-4 bg-[#111111]/90 border border-[#262626] px-6 py-3 rounded-full backdrop-blur-md shadow-lg">
          <div className="flex -space-x-3 overflow-hidden">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-[#070707] object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Client 1"
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-[#070707] object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Client 2"
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-[#070707] object-cover"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Client 3"
            />
          </div>
          <div className="text-left flex items-center gap-2">
            <span className="text-xl font-black text-white font-mono">12k+</span>
            <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">Happy Spirits</span>
          </div>
        </div>

        {/* Right: Let's Start >>> Button */}
        <button
          onClick={() => scrollTo("contact")}
          className="magnetic-btn w-full sm:w-auto bg-[#00ff55] hover:bg-[#16c84b] text-[#050505] font-black text-sm px-10 py-5 rounded-full uppercase tracking-widest transition-all shadow-[0_0_35px_rgba(0,255,85,0.45)] cursor-pointer flex items-center justify-center gap-2 group active:scale-[0.98]"
        >
          <span>Let&apos;s Start</span>
          <span className="font-extrabold text-base tracking-tighter group-hover:translate-x-1 transition-transform">
            &gt;&gt;&gt;
          </span>
        </button>
      </div>
    </section>
  );
}
