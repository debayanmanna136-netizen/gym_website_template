const plans = [
  { name: "Basic", price: "$49", desc: "Essential access for those starting their journey.",
    features: ["Full Gym Access", "Locker Room Use", "1 Free Intro Session"], highlight: false, badge: null },
  { name: "Pro", price: "$89", desc: "The core experience for dedicated athletes.",
    features: ["Everything in Basic", "Unlimited Classes", "Guest Pass (2/month)", "Sauna & Recovery Zone"], highlight: true, badge: "Most Popular" },
  { name: "Elite", price: "$149", desc: "Maximum access for peak performance.",
    features: ["Everything in Pro", "4 Personal Training Sessions", "Nutrition Plan", "Priority Class Booking"], highlight: false, badge: null },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-24 reveal">
          <h2 className="text-[clamp(48px,8vw,72px)] font-black leading-[1.1] tracking-[-0.04em] text-white mb-4 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Commit to Progress
          </h2>
          <p className="text-lg leading-relaxed text-[#c8c6c5] max-w-2xl mx-auto" style={{ fontFamily: "'Lexend', sans-serif" }}>
            Choose the tier that matches your intensity. No excuses, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center reveal-stagger">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative flex flex-col h-full group transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-2 will-change-transform ${plan.highlight ? "bg-[#2a2a2a] rounded-sm p-8 border-t-4 border-[#caf300] shadow-[0_0_30px_rgba(202,243,0,0.15)] transform md:scale-105 z-10" : "bg-[#201f1f] rounded-sm p-8 border border-[#444932] hover:border-[#caf300]/50"}`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#caf300] text-[#596c00] font-semibold text-xs px-4 py-1 rounded-sm uppercase" style={{ fontFamily: "'Lexend', sans-serif" }}>
                  {plan.badge}
                </div>
              )}
              <div className="mb-8 mt-2">
                <h3 className={`text-[32px] font-semibold leading-[1.3] uppercase mb-2 ${plan.highlight ? "text-[#caf300]" : "text-white"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-[clamp(48px,6vw,72px)] font-black leading-[1.1] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{plan.price}</span>
                  <span className="text-[#c8c6c5] text-base" style={{ fontFamily: "'Lexend', sans-serif" }}>/month</span>
                </div>
                <p className="text-[#c5c9ac] text-base" style={{ fontFamily: "'Lexend', sans-serif" }}>{plan.desc}</p>
              </div>
              <div className="flex-grow mb-8">
                <ul className="space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#caf300] filled-icon" style={{ fontSize: "22px" }}>check_circle</span>
                      <span className="text-[#e5e2e1] text-base" style={{ fontFamily: "'Lexend', sans-serif" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`magnetic-btn w-full text-center font-semibold text-xs uppercase py-4 rounded-sm tracking-widest transition-colors duration-300 cursor-pointer ${plan.highlight ? "bg-[#caf300] text-[#596c00] hover:bg-[#b0d500]" : "border-2 border-[#caf300] text-[#caf300] hover:bg-[#caf300] hover:text-[#596c00]"}`} style={{ fontFamily: "'Lexend', sans-serif" }}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
