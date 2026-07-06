"use client";

import Image from "next/image";
import { COACH_DATA } from "@/data/constants";

export default function CoachSection() {
  return (
    <section id="coach" className="py-28 px-6 md:px-12 bg-[#fafafa] text-[#111111] relative overflow-hidden border-t border-neutral-200">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#00ff55]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Coach Photo Card with Green Accent Glow */}
        <div className="lg:col-span-5 relative flex justify-center reveal-left">
          {/* Glowing Background Box Accent */}
          <div className="absolute inset-4 bg-gradient-to-tr from-[#00ff55] via-[#0a4f21] to-neutral-900 rounded-[40px] blur-2xl opacity-40 transform -rotate-3 scale-95" />
          
          {/* Main Photo Card */}
          <div className="relative w-full max-w-md bg-[#0a0a0a] rounded-[36px] p-4 border-2 border-[#262626] shadow-2xl overflow-hidden group">
            <div className="relative h-[440px] md:h-[480px] w-full rounded-[28px] overflow-hidden bg-neutral-900">
              <Image
                src={COACH_DATA.image}
                alt={`${COACH_DATA.name} - Personal Coach`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              {/* Dark Gradient Overlay at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent flex flex-col justify-end p-6">
                <span className="bg-[#00ff55] text-[#050505] font-black text-[11px] uppercase tracking-widest px-3 py-1 rounded-full w-max mb-2 shadow-md">
                  {COACH_DATA.title}
                </span>
                <h3
                  className="text-3xl font-black text-white uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Coach {COACH_DATA.name}
                </h3>
              </div>
            </div>

            {/* Coach Stats Bar Below Photo */}
            <div className="grid grid-cols-3 gap-2 pt-4 pb-2 px-2 text-center text-white">
              {COACH_DATA.stats.map((st, i) => (
                <div key={i} className="bg-[#141414] border border-[#262626] p-2.5 rounded-2xl">
                  <span className="block text-base font-black text-[#00ff55]">{st.value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block truncate">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Text & Philosophy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left reveal-right">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-bold uppercase tracking-widest mb-6">
            <span>YOUR PERSONAL COACH</span>
          </div>

          <h2
            className="text-[clamp(36px,5vw,56px)] font-black leading-[1.08] tracking-[-0.03em] uppercase text-[#070707] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hi, I&apos;m {COACH_DATA.name} <br />
            <span className="text-[#0a4f21]">Your Personal Coach</span>
          </h2>

          <div className="space-y-6 text-neutral-600 text-lg leading-relaxed font-normal mb-8">
            <p className="text-[#070707] font-semibold text-xl">
              {COACH_DATA.bio}
            </p>
            <p>
              {COACH_DATA.philosophy}
            </p>
          </div>

          <div className="w-full bg-neutral-100 border-l-4 border-[#00ff55] p-6 rounded-r-2xl mb-8">
            <h4
              className="text-lg md:text-xl font-extrabold uppercase text-[#070707] tracking-wider"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {COACH_DATA.tagline}
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="magnetic-btn bg-[#00ff55] text-[#050505] font-black text-sm px-8 py-4 rounded-full uppercase tracking-widest hover:bg-[#16c84b] transition-all duration-300 shadow-[0_0_25px_rgba(0,255,85,0.4)] inline-flex items-center gap-2 group"
            >
              <span>BOOK A FREE CALL WITH HAISAM</span>
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <a
              href="#pricing"
              className="bg-white hover:bg-neutral-100 text-[#070707] font-bold text-xs px-6 py-4 rounded-full uppercase tracking-wider border border-neutral-300 transition-all inline-flex items-center gap-2"
            >
              <span>VIEW COACHING PROGRAMS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
