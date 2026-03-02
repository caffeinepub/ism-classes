import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CoursesSection from "./components/CoursesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OnlineClassesSection from "./components/OnlineClassesSection";
import ResultsSection from "./components/ResultsSection";
import WhyChooseSection from "./components/WhyChooseSection";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      <Toaster position="top-center" richColors />
      <Navbar scrolled={scrolled} />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <ResultsSection />
        <CoursesSection />
        <OnlineClassesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
