"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#classes", label: "Classes" },
  { href: "#pricing", label: "Pricing" },
  { href: "#trainers", label: "Trainers" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);

    const sections = navLinks.map((l) => l.href.slice(1));
    let current = "#home";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) current = `#${id}`;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/95 border-neutral-800 shadow-[0_4px_20px_rgba(212,255,0,0.1)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 w-full max-w-[1280px] mx-auto">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="text-2xl font-black text-lime-400 italic uppercase tracking-tighter cursor-pointer hover:drop-shadow-[0_0_8px_rgba(202,243,0,0.5)] transition-[filter,transform] duration-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          FITNESS CAMP
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`font-bold uppercase tracking-tighter transition-all duration-300 active:scale-95 text-sm cursor-pointer relative ${
                  isActive
                    ? "text-lime-400"
                    : "text-neutral-400 hover:text-lime-400"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("#pricing")}
          className="hidden md:block magnetic-btn bg-[#caf300] text-[#596c00] font-bold text-xs px-6 py-3 uppercase tracking-widest hover:bg-[#b0d500] transition-colors shadow-[0_0_15px_rgba(202,243,0,0.3)] cursor-pointer"
          style={{ fontFamily: "'Lexend', sans-serif" }}
        >
          JOIN NOW
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-lime-400 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-neutral-950 border-t border-neutral-800 px-6 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 py-6" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`font-bold uppercase tracking-tighter text-sm transition-colors text-left cursor-pointer ${
                  isActive ? "text-lime-400" : "text-neutral-400 hover:text-lime-400"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => scrollTo("#pricing")}
            className="bg-[#caf300] text-[#596c00] font-bold text-xs px-6 py-3 uppercase tracking-widest text-center hover:bg-[#b0d500] transition-colors w-full cursor-pointer"
            style={{ fontFamily: "'Lexend', sans-serif" }}
          >
            JOIN NOW
          </button>
        </div>
      </div>
    </header>
  );
}
