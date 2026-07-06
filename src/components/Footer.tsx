import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/constants";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-12 bg-[#070707] text-white border-t border-[#262626]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Brand */}
        <Link
          href="#home"
          className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-3 hover:scale-105 transition-transform"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Fitness<span className="text-[#00ff55]">Ch</span>
        </Link>
        
        <p className="text-neutral-400 text-sm md:text-base font-semibold uppercase tracking-widest mb-10">
          Reach Your Best Shape For Life
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10 text-xs font-bold uppercase tracking-wider text-neutral-300">
          <a href="#home" className="hover:text-[#00ff55] transition-colors">Home</a>
          <a href="#how-it-works" className="hover:text-[#00ff55] transition-colors">How It Works</a>
          <a href="#transformations" className="hover:text-[#00ff55] transition-colors">Transformations</a>
          <a href="#testimonials" className="hover:text-[#00ff55] transition-colors">Reviews</a>
          <a href="#coach" className="hover:text-[#00ff55] transition-colors">Coach</a>
          <a href="#pricing" className="hover:text-[#00ff55] transition-colors">Programs</a>
          <a href="#contact" className="hover:text-[#00ff55] transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-10 h-10 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center text-neutral-400 hover:text-[#00ff55] hover:border-[#00ff55] transition-all duration-300 shadow-md"
            >
              <span className="material-symbols-outlined text-sm">{s.icon}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent mb-8" />

        {/* Copyright */}
        <p
          className="uppercase text-xs tracking-widest text-neutral-500"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          © {new Date().getFullYear()} FITNESSCH. ALL RIGHTS RESERVED. DESIGNED FOR PEAK PERFORMANCE.
        </p>
      </div>
    </footer>
  );
}
