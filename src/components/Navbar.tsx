"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "About" },
  { href: "#transformations", label: "Features" },
  { href: "#coach", label: "Service" },
  { href: "#pricing", label: "Exercise" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#070707]/90 backdrop-blur-md py-4 border-b border-[#262626]" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand: FiTusion Logo */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          {/* Iconic geometric logo mark */}
          <div className="flex flex-col gap-0.5">
            <div className="flex gap-0.5">
              <span className="w-3.5 h-1.5 bg-[#00ff55] rounded-sm transform -skew-x-12" />
              <span className="w-1.5 h-1.5 bg-[#00ff55] rounded-sm transform -skew-x-12" />
            </div>
            <div className="flex gap-0.5">
              <span className="w-5 h-1.5 bg-[#00ff55] rounded-sm transform -skew-x-12" />
            </div>
            <div className="flex gap-0.5">
              <span className="w-2.5 h-1.5 bg-[#00ff55] rounded-sm transform -skew-x-12" />
            </div>
          </div>
          <span
            className="text-2xl md:text-3xl font-black tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-[#00ff55]">FiT</span>
            <span className="text-[#d9f99d]">usion</span>
          </span>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#00ff55] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00ff55] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Buttons (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="bg-[#00ff55] hover:bg-[#16c84b] text-[#050505] font-extrabold text-xs px-6 py-2.5 rounded-full uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,85,0.3)] active:scale-95"
          >
            Contact Us
          </a>
          <a
            href="#pricing"
            className="bg-black/80 hover:bg-black text-[#00ff55] hover:text-white font-extrabold text-xs px-6 py-2.5 rounded-full uppercase tracking-wider border border-[#00ff55]/60 hover:border-[#00ff55] transition-all active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden w-10 h-10 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center text-white cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0c0c0c] border-b border-[#262626] p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-neutral-300 hover:text-[#00ff55] py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-[#00ff55] text-[#050505] font-extrabold text-xs py-3 rounded-full uppercase tracking-wider text-center shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="bg-black text-[#00ff55] font-extrabold text-xs py-3 rounded-full uppercase tracking-wider text-center border border-[#00ff55]/60"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
