"use client";

import { useState } from "react";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    instagram: "",
    goal: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 bg-[#ffffff] text-[#111111] relative overflow-hidden border-t border-neutral-200">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-radial from-[#00ff55]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1000px] mx-auto bg-[#fafafa] rounded-[40px] p-8 md:p-16 border border-neutral-200 shadow-xl relative z-10 reveal-scale">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-bold uppercase tracking-widest mb-6">
            <span>TAKE ACTION TODAY</span>
          </div>
          <h2
            className="text-[clamp(36px,5vw,56px)] font-black leading-[1.08] tracking-[-0.03em] uppercase text-[#070707] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Book Your Free <br />
            <span className="text-[#0a4f21]">Intake Call</span>
          </h2>
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
            Get a personalized roadmap to help you achieve your fitness goals. Fill out the application below and Coach Haisam will be in touch within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#0a0a0a] text-white p-10 md:p-14 rounded-3xl text-center border-2 border-[#00ff55] shadow-[0_15px_40px_rgba(0,255,85,0.2)] animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-[#00ff55] text-[#050505] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(0,255,85,0.6)]">
              <span className="material-symbols-outlined text-4xl font-black">check</span>
            </div>
            <h3
              className="text-3xl md:text-4xl font-black uppercase mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Application <span className="text-[#00ff55]">Received!</span>
            </h3>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-lg mx-auto mb-8">
              Thank you, <span className="text-white font-bold">{formData.fullName || "Athlete"}</span>. Your intake form has been submitted directly to Coach Haisam. We will reach out via email or WhatsApp to confirm your appointment time.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase px-8 py-4 rounded-full tracking-widest transition-all cursor-pointer border border-white/10"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#0a4f21]">person</span>
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white border border-neutral-300 rounded-2xl px-5 py-4 text-[#070707] placeholder:text-neutral-400 focus:outline-none focus:border-[#070707] focus:ring-2 focus:ring-[#00ff55]/20 transition-all font-medium text-base"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#0a4f21]">mail</span>
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white border border-neutral-300 rounded-2xl px-5 py-4 text-[#070707] placeholder:text-neutral-400 focus:outline-none focus:border-[#070707] focus:ring-2 focus:ring-[#00ff55]/20 transition-all font-medium text-base"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#0a4f21]">call</span>
                  <span>Phone / WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-white border border-neutral-300 rounded-2xl px-5 py-4 text-[#070707] placeholder:text-neutral-400 focus:outline-none focus:border-[#070707] focus:ring-2 focus:ring-[#00ff55]/20 transition-all font-medium text-base"
                />
              </div>

              {/* Preferred Date */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#0a4f21]">calendar_today</span>
                  <span>Preferred Date for Call *</span>
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-white border border-neutral-300 rounded-2xl px-5 py-4 text-[#070707] focus:outline-none focus:border-[#070707] focus:ring-2 focus:ring-[#00ff55]/20 transition-all font-medium text-base"
                />
              </div>
            </div>

            {/* Instagram Handle */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-[#0a4f21]">photo_camera</span>
                <span>Instagram Handle (Optional)</span>
              </label>
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="@johndoe.fit"
                className="w-full bg-white border border-neutral-300 rounded-2xl px-5 py-4 text-[#070707] placeholder:text-neutral-400 focus:outline-none focus:border-[#070707] focus:ring-2 focus:ring-[#00ff55]/20 transition-all font-medium text-base"
              />
            </div>

            {/* Your Goal / Question */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-[#0a4f21]">flag</span>
                <span>What is your #1 fitness goal right now? *</span>
              </label>
              <textarea
                name="goal"
                required
                rows={4}
                value={formData.goal}
                onChange={handleChange}
                placeholder="E.g., I want to lose 20 lbs of belly fat in the next 3 months while maintaining muscle..."
                className="w-full bg-white border border-neutral-300 rounded-2xl p-5 text-[#070707] placeholder:text-neutral-400 focus:outline-none focus:border-[#070707] focus:ring-2 focus:ring-[#00ff55]/20 transition-all font-medium text-base resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="magnetic-btn w-full bg-[#00ff55] text-[#050505] hover:bg-[#16c84b] font-black text-sm uppercase py-5 rounded-full tracking-widest shadow-[0_10px_30px_rgba(0,255,85,0.35)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 active:scale-[0.99] disabled:opacity-70"
              >
                {loading ? (
                  <span className="inline-block w-6 h-6 border-3 border-[#050505] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>SUBMIT YOUR APPLICATION</span>
                    <span className="material-symbols-outlined text-xl">send</span>
                  </>
                )}
              </button>
              <p className="text-center text-xs text-neutral-400 mt-4 font-medium">
                🔒 Your information is 100% confidential. No spam, ever.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
