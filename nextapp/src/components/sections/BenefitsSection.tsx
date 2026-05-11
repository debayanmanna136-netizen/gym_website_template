const benefits = [
  { icon: "fitness_center", title: "State-of-the-art equipment", desc: "Train with industry-leading machines and free weights selected for optimal biomechanics and heavy-duty performance." },
  { icon: "group", title: "Expert coaches", desc: "Learn from certified professionals who have competed at the highest levels and know how to push your limits safely." },
  { icon: "schedule", title: "24/7 access", desc: "Your schedule, your rules. Access the facility day or night with secure entry systems to fit your lifestyle." },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto w-full">
      <div className="text-center mb-16 reveal">
        <h2 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.2] tracking-[-0.02em] text-white uppercase mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Why Fitness Camp?
        </h2>
        <p className="text-[#c8c6c5] text-base" style={{ fontFamily: "'Lexend', sans-serif" }}>
          The tools, the team, and the time to reach your peak.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-stagger">
        {benefits.map((b) => (
          <div key={b.title} className="bg-[#1c1b1b] border border-[#353534] p-8 rounded-sm relative overflow-hidden group hover:border-[#caf300] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 will-change-transform">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#caf300]/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-[#caf300]/10 transition-[background-color]" />
            <span className="material-symbols-outlined text-4xl text-[#caf300] mb-6 block group-hover:scale-110 transition-transform duration-300 will-change-transform">{b.icon}</span>
            <h3 className="text-[clamp(24px,3vw,32px)] font-semibold leading-[1.3] text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{b.title}</h3>
            <p className="text-[#c8c6c5] text-base leading-relaxed" style={{ fontFamily: "'Lexend', sans-serif" }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
