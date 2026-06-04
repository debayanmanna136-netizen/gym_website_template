import Image from "next/image";
import { CLASSES_DATA } from "@/data/constants";

export default function ClassesSection() {
  return (
    <section id="classes" className="py-24 px-6 md:px-12 bg-[#0e0e0e]">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16 reveal-left">
          <h2 className="text-[clamp(48px,8vw,72px)] font-black leading-[1.1] tracking-[-0.04em] text-white mb-4 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            TRAINING<br /><span className="text-[#caf300]">PROGRAMS</span>
          </h2>
          <p className="text-lg leading-relaxed text-[#c8c6c5] max-w-2xl" style={{ fontFamily: "'Lexend', sans-serif" }}>
            Push your limits with our training sessions. Filter by intensity to find the right challenge for today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px] reveal-stagger">
          {CLASSES_DATA.map((c) => (
            <div key={c.title} className={`${c.featured ? "md:col-span-8" : "md:col-span-4"} bg-[#201f1f] relative group overflow-hidden rounded-sm cursor-pointer will-change-transform`}>
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 will-change-transform">
                <Image src={c.img} alt={c.title} fill className="object-cover" unoptimized />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/80 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex gap-3 mb-4 flex-wrap">
                  <span className="bg-[#caf300] text-[#596c00] px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-sm" style={{ fontFamily: "'Lexend', sans-serif" }}>{c.tag}</span>
                  <span className="bg-[#353534] text-[#e5e2e1] px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-sm flex items-center gap-1" style={{ fontFamily: "'Lexend', sans-serif" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>schedule</span> {c.duration}
                  </span>
                </div>
                <h3 className={`font-bold leading-[1.3] text-white mb-2 ${c.featured ? "text-[clamp(32px,4vw,48px)]" : "text-[clamp(24px,3vw,32px)]"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.title}</h3>
                {c.desc && <p className="text-[#c8c6c5] text-base mb-6 max-w-md" style={{ fontFamily: "'Lexend', sans-serif" }}>{c.desc}</p>}
                <button className={`magnetic-btn w-fit border-2 font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-sm flex items-center gap-2 transition-[background-color,color,transform,box-shadow] duration-300 cursor-pointer ${c.featured ? "bg-[#caf300] text-[#596c00] border-[#caf300] hover:bg-[#b0d500]" : "border-[#caf300] text-[#caf300] hover:bg-[#caf300] hover:text-[#596c00]"}`} style={{ fontFamily: "'Lexend', sans-serif" }}>
                  BOOK CLASS <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
