"use client";

import { PRICING_PLANS } from "@/data/constants";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-[#262626]">
      {/* Background Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-radial from-[#00ff55]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00ff55] text-xs font-bold uppercase tracking-widest mb-6">
            <span>COACHING PROGRAMS</span>
          </div>
          <h2
            className="text-[clamp(36px,5vw,56px)] font-black leading-[1.08] tracking-[-0.03em] uppercase text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Invest In Your <span className="text-[#00ff55]">Transformation</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Choose the tier that matches your goals and intensity. Every plan comes with our 100% accountability guarantee.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch reveal-stagger">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 md:p-10 transition-all duration-300 group hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-[#141414] border-2 border-[#00ff55] shadow-[0_0_40px_rgba(0,255,85,0.2)] z-10 scale-105 lg:-my-4"
                  : "bg-[#111111] border border-[#262626] hover:border-neutral-600"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap ${
                    plan.highlight
                      ? "bg-[#00ff55] text-[#050505]"
                      : "bg-white/10 text-white border border-white/20"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                <h3
                  className="text-2xl font-black uppercase text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <p className="text-neutral-400 text-sm mb-6 min-h-[40px]">
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1.5 mb-8 pb-8 border-b border-[#262626]">
                  <span
                    className="text-5xl md:text-6xl font-black text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
                    {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300 font-medium">
                      <span className="material-symbols-outlined text-[#00ff55] filled-icon text-lg flex-shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`magnetic-btn w-full text-center font-extrabold text-xs uppercase py-4 rounded-full tracking-widest transition-all duration-300 block ${
                  plan.highlight
                    ? "bg-[#00ff55] text-[#050505] hover:bg-[#16c84b] shadow-[0_0_20px_rgba(0,255,85,0.3)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30"
                }`}
              >
                SELECT {plan.name.split(" ")[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
