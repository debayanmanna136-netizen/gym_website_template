import Link from "next/link";

const footerLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Location" },
  { href: "#", label: "Support" },
];

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-10 bg-neutral-950 border-t-4 border-lime-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div
            className="text-3xl font-black text-lime-400 mb-4 italic uppercase tracking-tighter"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            DEMO GYM
          </div>
          <p className="text-neutral-500 text-sm mb-6 max-w-xs" style={{ fontFamily: "'Lexend', sans-serif" }}>
            Training facility for those committed to relentless progress.
          </p>
          <p
            className="uppercase text-xs tracking-widest text-neutral-500"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            © {new Date().getFullYear()} DEMO GYM. ALL PROGRESS IS PERSONAL.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4
            className="text-white text-xs font-semibold mb-6 uppercase tracking-widest"
            style={{ fontFamily: "'Lexend', sans-serif" }}
          >
            Links
          </h4>
          <ul className="flex flex-col gap-4">
            {footerLinks.slice(0, 2).map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="uppercase text-xs tracking-widest text-neutral-500 hover:text-white transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-white text-xs font-semibold mb-6 uppercase tracking-widest"
            style={{ fontFamily: "'Lexend', sans-serif" }}
          >
            Contact
          </h4>
          <ul className="flex flex-col gap-4">
            {footerLinks.slice(2).map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="uppercase text-xs tracking-widest text-neutral-500 hover:text-white transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
