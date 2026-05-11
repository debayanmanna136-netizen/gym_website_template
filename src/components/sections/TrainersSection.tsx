import Image from "next/image";
import { TRAINERS_DATA } from "@/data/constants";

export default function TrainersSection() {
  return (
    <section id="trainers" className="py-24 px-6 md:px-12 bg-[#0e0e0e]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="text-center md:text-left flex flex-col gap-6 reveal-left">
          <h2 className="text-[clamp(48px,8vw,72px)] font-black leading-[1.1] tracking-[-0.04em] text-white uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            MEET THE <span className="text-[#caf300]">ELITE</span>
          </h2>
          <p className="text-lg leading-relaxed text-[#c5c9ac] max-w-2xl" style={{ fontFamily: "'Lexend', sans-serif" }}>
            Our trainers aren&apos;t just certified; they are forged in discipline. Find the specialist who will push you beyond your limits.
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
          {TRAINERS_DATA.map((t) => (
            <div key={t.name} className={`bg-[#1c1b1b] rounded-sm border overflow-hidden flex flex-col group hover:border-[#caf300] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 will-change-transform ${t.featured ? "border-[#353534] shadow-[0_0_15px_rgba(202,243,0,0.4)]" : "border-[#353534]"}`}>
              <div className="relative h-[400px] w-full overflow-hidden bg-[#0e0e0e]">
                <Image src={t.img} alt={t.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500 group-hover:scale-105" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                  <span className="bg-[#caf300] text-[#596c00] font-semibold text-xs px-3 py-1 rounded-sm w-max uppercase" style={{ fontFamily: "'Lexend', sans-serif" }}>{t.specialty}</span>
                  <h3 className="text-[clamp(24px,3vw,32px)] font-semibold leading-[1.3] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.name}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-6 flex-grow bg-[#1c1b1b]">
                <p className="text-[#c5c9ac] text-base leading-relaxed flex-grow" style={{ fontFamily: "'Lexend', sans-serif" }}>{t.bio}</p>
                <div className="flex gap-4 border-t border-[#353534] pt-4">
                  {t.icons.map((icon) => (
                    <a key={icon} href="#" className="text-[#c5c9ac] hover:text-[#caf300] transition-colors hover:scale-110 inline-block transform duration-200">
                      <span className="material-symbols-outlined">{icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#2a2a2a] rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#353534] relative overflow-hidden reveal-scale">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }} />
          <div className="relative z-10 flex flex-col gap-4 max-w-xl text-center md:text-left">
            <h3 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.2] tracking-[-0.02em] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>NOT SURE WHO TO PICK?</h3>
            <p className="text-lg leading-relaxed text-[#c5c9ac]" style={{ fontFamily: "'Lexend', sans-serif" }}>Take our quick assessment to get matched with the trainer who fits your goals, schedule, and intensity level.</p>
          </div>
          <div className="relative z-10">
            <button className="magnetic-btn bg-transparent border-2 border-[#caf300] text-[#caf300] font-semibold text-xs px-8 py-4 rounded-sm uppercase tracking-widest hover:bg-[#caf300] hover:text-[#596c00] transition-all duration-300 cursor-pointer" style={{ fontFamily: "'Lexend', sans-serif" }}>
              TAKE ASSESSMENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
