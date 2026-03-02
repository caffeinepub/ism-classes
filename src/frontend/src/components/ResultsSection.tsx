import { Quote, Star, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "95%", label: "Students score 85%+" },
  { value: "500+", label: "Students coached" },
  { value: "10+", label: "Years of excellence" },
  { value: "100%", label: "Board exam focus" },
];

export default function ResultsSection() {
  return (
    <section
      id="results"
      className="py-20 md:py-28 bg-ism-section overflow-hidden"
    >
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
            Our Results
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ism-navy mb-4">
            Our Results Speak for Themselves
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Year after year, our students consistently outperform in the HBSE
            Class 10 board examinations.
          </p>
        </motion.div>

        {/* Big Stat Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-hero rounded-2xl p-8 md:p-12 text-center mb-12 relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-ism-gold/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <TrendingUp className="w-12 h-12 text-ism-gold mx-auto mb-4" />
            <div className="font-display font-bold text-6xl md:text-8xl text-ism-gold mb-2">
              95%
            </div>
            <p className="text-white text-xl md:text-2xl font-semibold max-w-2xl mx-auto">
              of our students scored{" "}
              <span className="text-ism-gold">85% or above</span> in HBSE Class
              10 Board Exams
            </p>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl p-5 text-center shadow-ism border border-border"
            >
              <div className="font-display font-bold text-3xl md:text-4xl text-ism-navy leading-none mb-1">
                {value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-ism-lg border border-border relative">
            {/* Quote mark */}
            <div className="absolute -top-4 left-8 w-8 h-8 bg-ism-navy rounded-full flex items-center justify-center">
              <Quote className="w-4 h-4 text-ism-gold fill-ism-gold" />
            </div>

            <div className="flex gap-1 mb-4 mt-2">
              {["s1", "s2", "s3", "s4", "s5"].map((id) => (
                <Star
                  key={id}
                  className="w-5 h-5 text-ism-gold fill-ism-gold"
                />
              ))}
            </div>

            <blockquote className="text-foreground text-lg leading-relaxed mb-6 font-medium">
              "I improved from 65% to 98% in Maths after joining ISM Classes.
              The teachers here explain every concept so clearly and the regular
              tests kept me on track! I never thought I could score this well in
              Mathematics, but the structured approach here made it possible."
            </blockquote>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-ism-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-display font-bold text-lg">
                    R
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-ism-navy">
                    Rahul Sharma
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Class 10, 2024 Batch
                  </div>
                </div>
              </div>

              {/* Score badge */}
              <div className="flex items-center gap-3 bg-ism-section rounded-xl px-5 py-3 border border-border">
                <div className="text-center">
                  <div className="text-muted-foreground text-xs font-medium mb-0.5">
                    Before
                  </div>
                  <div className="font-display font-bold text-2xl text-rose-600">
                    65%
                  </div>
                </div>
                <TrendingUp className="w-6 h-6 text-ism-gold" />
                <div className="text-center">
                  <div className="text-muted-foreground text-xs font-medium mb-0.5">
                    After
                  </div>
                  <div className="font-display font-bold text-2xl text-emerald-600">
                    98%
                  </div>
                </div>
                <div className="pl-2 border-l border-border">
                  <div className="text-xs text-muted-foreground font-medium">
                    Mathematics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
