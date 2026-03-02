import { Button } from "@/components/ui/button";
import {
  BookMarked,
  ChevronRight,
  Clock,
  PlayCircle,
  Video,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Video,
    title: "Live Interactive Classes",
    desc: "Real-time doubt solving and live Q&A during every session via Google Meet.",
  },
  {
    icon: PlayCircle,
    title: "Recorded Sessions",
    desc: "Every class is recorded for free revision anytime — never miss a lesson.",
  },
  {
    icon: BookMarked,
    title: "Same Curriculum",
    desc: "Identical syllabus and quality as offline batches — no compromise online.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "Batch timings designed to suit students' school schedules.",
  },
];

export default function OnlineClassesSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="online" className="py-20 md:py-28 bg-ism-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-ism-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Online Classes
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ism-navy mb-5">
              Learn from Anywhere –{" "}
              <span className="text-ism-gold">Online Classes</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Can't attend offline? No problem. Our live interactive online
              classes via <strong className="text-ism-navy">Google Meet</strong>{" "}
              bring the same quality education to your screen — with the
              flexibility you need.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="flex gap-3 bg-white rounded-xl p-4 shadow-ism border border-border"
                >
                  <div className="w-10 h-10 bg-ism-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-ism-navy" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-ism-navy mb-0.5">
                      {title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-ism-navy text-white hover:bg-ism-navy-dark font-semibold px-8 h-12 group"
            >
              Join Online Classes
              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Main card – Google Meet visual */}
            <div className="bg-white rounded-2xl shadow-ism-lg border border-border overflow-hidden">
              {/* Fake browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-ism-section border-b border-border">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1 text-xs text-muted-foreground border border-border">
                  meet.google.com
                </div>
              </div>

              {/* Meet simulation */}
              <div className="p-6">
                <div className="gradient-hero rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-ism-gold rounded-full flex items-center justify-center">
                      <span className="font-display font-bold text-ism-navy-deeper">
                        T
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        ISM Classes – Live Session
                      </div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-white/70 text-xs">
                          15 students connected
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["Ananya", "Karan", "Priya", "Rohit", "Simran", "You"].map(
                      (name, i) => (
                        <div
                          key={name}
                          className="bg-white/10 rounded-lg py-3 flex flex-col items-center gap-1"
                        >
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-ism-navy-deeper"
                            style={{
                              background: `oklch(${0.78 + i * 0.02} 0.14 ${70 + i * 10})`,
                            }}
                          >
                            {name[0]}
                          </div>
                          <span className="text-white/80 text-[10px]">
                            {name}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Wifi className="w-4 h-4 text-green-500" />
                    <span>Live Interactive Class</span>
                  </div>
                  <div className="bg-ism-navy text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    LIVE
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 bg-emerald-500 text-white rounded-xl px-4 py-2 shadow-lg font-semibold text-sm"
            >
              ✓ Recorded for revision
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
