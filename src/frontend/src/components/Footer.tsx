import { BookOpen, Heart } from "lucide-react";

const navSections = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Results", href: "#results" },
    ],
  },
  {
    title: "Courses",
    links: [
      { label: "Mathematics", href: "#courses" },
      { label: "Science", href: "#courses" },
      { label: "English", href: "#courses" },
      { label: "All Subjects", href: "#courses" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Online Classes", href: "#online" },
      { label: "Book Free Demo", href: "#contact" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ism-navy-deeper text-white">
      {/* Top accent line */}
      <div className="h-1 bg-ism-gold" />

      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-ism-gold rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-ism-navy-deeper" />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white">
                  ISM Classes
                </div>
                <div className="text-white/50 text-xs uppercase tracking-wide">
                  HBSE Board Coaching
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Your trusted partner for Class 10 HBSE board exam success. Expert
              coaching in Mathematics, Science &amp; English.
            </p>
            <div className="inline-flex items-center gap-2 bg-ism-gold/10 border border-ism-gold/30 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80 text-xs font-medium">
                Admissions Open 2025
              </span>
            </div>
          </div>

          {/* Links */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="text-white/60 hover:text-ism-gold transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {year} ISM Classes. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1.5">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ism-gold hover:text-ism-gold/80 transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
