"use client";

import { useState } from "react";
import Image from "next/image";
import { TRANSFORMATIONS_DATA } from "@/data/constants";

export default function TransformationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TRANSFORMATIONS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TRANSFORMATIONS_DATA.length - 1 : prev - 1
    );
  };

  return (
    <section id="transformations" className="py-28 px-6 md:px-12 bg-[#ffffff] text-[#111111] border-t border-neutral-200">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-bold uppercase tracking-widest mb-6">
              <span>TRANSFORMATIONS</span>
            </div>
            <h2
              className="text-[clamp(36px,5vw,56px)] font-black leading-[1.08] tracking-[-0.03em] uppercase text-[#070707]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Real People. Real <br />
              <span className="text-[#0a4f21]">Transformations.</span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mt-4">
              Our clients are busy professionals just like you — and they&apos;ve achieved lasting results through personalized coaching. Here is what is possible when you commit to the process.
            </p>
          </div>

          {/* Interactive Navigation Arrows */}
          <div className="flex items-center gap-4 self-start md:self-end">
            <button
              onClick={prevSlide}
              aria-label="Previous transformation"
              className="w-12 h-12 rounded-full bg-[#070707] hover:bg-[#00ff55] text-white hover:text-[#050505] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md active:scale-90"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next transformation"
              className="w-12 h-12 rounded-full bg-[#00ff55] text-[#050505] hover:bg-[#16c84b] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,255,85,0.4)] active:scale-90"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Carousel / Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
          {TRANSFORMATIONS_DATA.slice(0, 3).map((item, idx) => {
            // Let's rotate cards based on currentIndex so users can cycle through all of them
            const dataIdx = (currentIndex + idx) % TRANSFORMATIONS_DATA.length;
            const t = TRANSFORMATIONS_DATA[dataIdx];

            return (
              <div
                key={t.id + "-" + idx}
                className="bg-[#fafafa] rounded-3xl border border-neutral-200 overflow-hidden flex flex-col group hover:border-neutral-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Before / After Photo Comparison Box */}
                <div className="relative h-[360px] w-full bg-[#111111] p-3 grid grid-cols-2 gap-2">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden bg-neutral-800">
                    <Image
                      src={t.beforeImg}
                      alt={`${t.name} before transformation`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative h-full w-full rounded-2xl overflow-hidden bg-neutral-800">
                    <Image
                      src={t.afterImg}
                      alt={`${t.name} after transformation`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <span className="absolute top-3 right-3 bg-[#00ff55] text-[#050505] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
                      AFTER
                    </span>
                  </div>

                  {/* Bottom Result Pill Badge Overlapping */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-max max-w-[90%]">
                    <div className="bg-[#0c0c0c]/95 border border-[#00ff55]/50 text-[#00ff55] font-black text-xs px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.8)] uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                      <span className="material-symbols-outlined text-sm font-bold">bolt</span>
                      <span>{t.result}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    <h3
                      className="text-2xl font-black text-[#070707] uppercase mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {t.name}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed italic mb-6">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>

                  {/* Mini Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-100 text-center">
                    <div className="bg-neutral-50 p-2 rounded-xl">
                      <span className="block text-[11px] uppercase tracking-wider text-neutral-400 font-bold">Fat Loss</span>
                      <span className="text-sm font-black text-[#070707]">{t.stats.bodyFat}</span>
                    </div>
                    <div className="bg-neutral-50 p-2 rounded-xl">
                      <span className="block text-[11px] uppercase tracking-wider text-neutral-400 font-bold">Weight</span>
                      <span className="text-sm font-black text-[#070707]">{t.stats.weightLost}</span>
                    </div>
                    <div className="bg-neutral-50 p-2 rounded-xl">
                      <span className="block text-[11px] uppercase tracking-wider text-neutral-400 font-bold">Strength</span>
                      <span className="text-sm font-black text-[#0a4f21]">{t.stats.strength}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to join */}
        <div className="mt-16 text-center reveal">
          <p className="text-neutral-500 font-medium text-sm mb-4 uppercase tracking-widest">
            Ready to be our next transformation story?
          </p>
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-2 bg-[#070707] text-white hover:bg-[#00ff55] hover:text-[#050505] font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest transition-all duration-300 shadow-lg"
          >
            <span>CLAIM YOUR CUSTOM TRANSFORMATION PLAN</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
