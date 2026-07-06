"use client";

import { HOW_IT_WORKS_STEPS } from "@/data/constants";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 px-6 md:px-12 bg-[#fafafa] text-[#111111] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-neutral-200/60 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading and intro */}
        <div className="lg:col-span-5 flex flex-col items-start text-left reveal-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <span>HOW IT WORKS</span>
          </div>

          <h2
            className="text-[clamp(36px,5vw,56px)] font-black leading-[1.08] tracking-[-0.03em] uppercase text-[#070707] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Your Path to a <br />
            <span className="text-[#0a4f21] underline decoration-[#00ff55] decoration-4 underline-offset-8">
              Stronger
            </span>
            , Healthier <br />
            You — Simplified
          </h2>

          <p className="text-neutral-600 text-lg leading-relaxed font-normal mb-8 max-w-md">
            We make fitness fit your life. Just follow these 3 simple steps to start transforming your body and habits — for good.
          </p>

          <a
            href="#contact"
            className="magnetic-btn bg-[#070707] text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest hover:bg-[#00ff55] hover:text-[#050505] transition-all duration-300 shadow-xl inline-flex items-center gap-2 group"
          >
            <span>START STEP 01 NOW</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Right Column: 3 Steps Stacked */}
        <div className="lg:col-span-7 flex flex-col gap-6 reveal-stagger">
          {HOW_IT_WORKS_STEPS.map((step) => {
            if (step.highlight) {
              // Highlighted Dark Card (Step 2)
              return (
                <div
                  key={step.step}
                  className="bg-[#0c0c0c] text-white p-8 md:p-10 rounded-3xl border-2 border-[#00ff55] shadow-[0_15px_40px_rgba(0,255,85,0.18)] relative overflow-hidden group transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-[#00ff55]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
                  
                  {step.badge && (
                    <div className="absolute top-6 right-6 bg-[#00ff55] text-[#050505] font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      {step.badge}
                    </div>
                  )}

                  <div className="flex items-start gap-6 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#00ff55]/15 border border-[#00ff55]/40 flex items-center justify-center text-[#00ff55] flex-shrink-0 font-black text-xl shadow-[0_0_15px_rgba(0,255,85,0.2)]">
                      <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-extrabold text-[#00ff55] tracking-widest">
                          STEP {step.step}
                        </span>
                      </div>
                      <h3
                        className="text-2xl md:text-3xl font-black uppercase text-white mb-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-neutral-300 text-base leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            // Standard Light Cards (Step 1 & 3)
            return (
              <div
                key={step.step}
                className="bg-white text-[#111111] p-8 md:p-10 rounded-3xl border border-neutral-200 hover:border-neutral-400 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group hover:-translate-y-1"
              >
                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#070707] group-hover:bg-[#070707] group-hover:text-white transition-colors duration-300 flex-shrink-0 font-black text-xl">
                    <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-extrabold text-neutral-400 tracking-widest uppercase">
                        STEP {step.step}
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-black uppercase text-[#070707] mb-3"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-base leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
