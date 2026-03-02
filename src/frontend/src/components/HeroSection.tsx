import { Button } from "@/components/ui/button";
import { Award, ChevronRight, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const trustBadges = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: TrendingUp, label: "95% Score 85%+" },
  { icon: Users, label: "HBSE Board Experts" },
];

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCourses = () => {
    document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Decorative geometric shapes */}
      <div
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-5 bg-white"
        style={{ transform: "translate(30%, -20%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 bg-ism-gold"
        style={{ transform: "translate(-30%, 40%)" }}
      />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-ism-gold" />

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 text-ism-gold border border-ism-gold/30 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-ism-gold animate-pulse" />
                HBSE Class 10 Board Coaching
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            >
              ISM Classes –{" "}
              <span className="text-gradient-gold">Your Gateway</span> to Class
              10 Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl font-body font-medium leading-relaxed mb-8 max-w-lg"
            >
              Board-Focused Coaching for HBSE – Maths, Science &amp; English.
              Expert-led classes designed to help you score top marks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-ism-gold text-ism-navy-deeper font-bold hover:bg-ism-gold-dark text-base px-8 h-12 shadow-lg shadow-black/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Free Demo Class
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <Button
                onClick={scrollToCourses}
                size="lg"
                variant="outline"
                className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:border-white/60 font-semibold text-base px-8 h-12 backdrop-blur-sm"
              >
                Explore Courses
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                >
                  <Icon className="w-4 h-4 text-ism-gold flex-shrink-0" />
                  <span className="text-white text-sm font-semibold">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Gold border accent */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-ism-gold/40 z-10" />
              <img
                src="/assets/generated/hero-students.dim_1200x600.jpg"
                alt="ISM Classes students studying"
                className="w-full h-[420px] object-cover"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ism-navy-deeper/60 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-ism-lg flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-ism-navy rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-ism-gold" />
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-ism-navy leading-none">
                  95%
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">
                  Students score 85%+
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -top-4 -right-4 bg-ism-gold text-ism-navy-deeper rounded-xl p-3 shadow-lg"
            >
              <div className="font-display font-bold text-xl leading-none">
                500+
              </div>
              <div className="text-xs font-bold mt-0.5">Students</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs font-medium tracking-widest uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
