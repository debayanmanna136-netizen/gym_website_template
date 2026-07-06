"use client";

import { useState } from "react";
import { TESTIMONIALS_DATA } from "@/data/constants";

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = TESTIMONIALS_DATA[activeIdx];

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-28 px-6 md:px-12 bg-[#070707] text-white relative overflow-hidden border-t border-[#262626]">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#00ff55]/10 via-[#00ff55]/2 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1080px] mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00ff55] text-xs font-bold uppercase tracking-widest mb-6 reveal">
          <span>TESTIMONIALS</span>
        </div>

        {/* Heading */}
        <h2
          className="text-[clamp(36px,6vw,64px)] font-black leading-[1.08] tracking-[-0.03em] uppercase text-white mb-4 reveal"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          What Our Clients <span className="text-[#00ff55]">say</span>
        </h2>

        <p className="text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed mb-16 reveal">
          Fitness is the first place where they thrived in life. The weekly check-ins kept me on track — I&apos;ve never felt stronger or more motivated.
        </p>

        {/* Giant Quote Icon "99" */}
        <div className="text-[100px] md:text-[130px] font-black leading-none text-[#00ff55] select-none tracking-tighter -mb-10 opacity-90 drop-shadow-[0_0_25px_rgba(0,255,85,0.5)] font-mono reveal-scale">
          99
        </div>

        {/* Interactive Testimonial Box */}
        <div className="relative w-full max-w-4xl px-4 md:px-16 flex items-center justify-between gap-4 md:gap-8 my-6">
          {/* Left Arrow Button */}
          <button
            onClick={prevTestimonial}
            aria-label="Previous quote"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#141414] border border-[#262626] hover:border-[#00ff55] text-neutral-300 hover:text-[#00ff55] flex items-center justify-center transition-all duration-300 cursor-pointer flex-shrink-0 shadow-lg active:scale-90"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>

          {/* Center Quote Content */}
          <div key={current.id} className="flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-400">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1.5 mb-8">
              {[...Array(current.rating)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-amber-400 filled-icon text-2xl drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                >
                  star
                </span>
              ))}
            </div>

            {/* Quote Text */}
            <blockquote
              className="text-xl md:text-3xl lg:text-4xl font-bold leading-[1.35] text-white max-w-3xl mb-10 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              &quot;{current.quote}&quot;
            </blockquote>

            {/* Author Badge */}
            <div className="inline-flex items-center gap-3 bg-[#111111] border-2 border-[#00ff55] px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(0,255,85,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff55] animate-pulse" />
              <span className="text-base font-black text-white tracking-wide uppercase">
                {current.author}
              </span>
              <span className="text-xs text-neutral-400 font-medium border-l border-neutral-700 pl-3">
                {current.role}
              </span>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextTestimonial}
            aria-label="Next quote"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#00ff55] text-[#050505] hover:bg-[#16c84b] flex items-center justify-center transition-all duration-300 cursor-pointer flex-shrink-0 shadow-[0_0_20px_rgba(0,255,85,0.4)] active:scale-90"
          >
            <span className="material-symbols-outlined text-xl font-bold">arrow_forward</span>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-12">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIdx === idx
                  ? "w-8 bg-[#00ff55] shadow-[0_0_10px_rgba(0,255,85,0.5)]"
                  : "w-2.5 bg-[#262626] hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
