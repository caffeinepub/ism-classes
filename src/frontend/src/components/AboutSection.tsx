import { GraduationCap, Lightbulb, Target } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "10+", label: "Years of Experience", icon: GraduationCap },
  { value: "500+", label: "Students Coached", icon: Target },
  { value: "95%", label: "Success Rate", icon: Lightbulb },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "10+ Years of Excellence",
    desc: "Over a decade of dedicated HBSE board coaching, building a track record of consistent top results.",
  },
  {
    icon: Lightbulb,
    title: "Concept-Based Learning",
    desc: "We simplify complex topics into easy-to-understand concepts, ensuring every student truly grasps the subject.",
  },
  {
    icon: Target,
    title: "Board Exam Focused",
    desc: "Every lesson, test, and practice session is designed with HBSE Class 10 board patterns in mind.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-ism-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-ism-gold font-semibold text-sm uppercase tracking-widest mb-3">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ism-navy mb-4">
            About ISM Classes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We are more than a coaching institute — we are your partner in
            academic success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-ism-navy rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-6 h-6 text-ism-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-ism-navy mb-1">
                      {title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-5 bg-ism-navy rounded-xl border-l-4 border-ism-gold"
            >
              <p className="text-white/90 text-base leading-relaxed font-medium">
                "Our mission is simple — give every Class 10 student the tools,
                knowledge, and confidence to ace their HBSE board exams and
                build a strong academic foundation."
              </p>
              <p className="text-ism-gold font-semibold mt-3 text-sm">
                — Mr. Jitender, Founder, ISM Classes
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="grid grid-cols-1 gap-5">
              {stats.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-6 bg-white rounded-2xl p-6 shadow-ism border border-border"
                >
                  <div className="w-16 h-16 gradient-cta rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-ism-navy-deeper" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-4xl text-ism-navy leading-none">
                      {value}
                    </div>
                    <div className="text-muted-foreground font-medium mt-1">
                      {label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
