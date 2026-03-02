import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Results", href: "#results" },
  { label: "Courses", href: "#courses" },
  { label: "Online Classes", href: "#online" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrolled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-ism border-b border-border"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 bg-ism-navy rounded-lg flex items-center justify-center shadow-ism flex-shrink-0 group-hover:bg-ism-navy-dark transition-colors">
              <BookOpen className="w-5 h-5 text-ism-gold" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg text-ism-navy tracking-tight">
                ISM Classes
              </span>
              <span className="text-[10px] text-muted-foreground font-body font-medium tracking-wide uppercase">
                HBSE Board Coaching
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-ism-navy transition-colors rounded-md hover:bg-secondary"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-ism-gold text-ism-navy-deeper font-semibold hover:bg-ism-gold-dark transition-colors shadow-none px-5"
            >
              Book Free Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground/70 hover:text-ism-navy hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden bg-white border-t border-border shadow-ism-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-ism-navy hover:bg-secondary transition-colors rounded-md"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-border mt-2">
                <Button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full bg-ism-gold text-ism-navy-deeper font-semibold hover:bg-ism-gold-dark"
                >
                  Book Free Demo Class
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
