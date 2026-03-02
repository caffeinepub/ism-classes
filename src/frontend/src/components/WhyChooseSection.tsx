import {
  BookCheck,
  ClipboardList,
  FileText,
  MessageCircleQuestion,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Users,
    title: "Small Smart Batches",
    desc: "Maximum 15 students per batch to ensure every student gets personalized attention and direct interaction with the teacher.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: BookCheck,
    title: "Daily Practice Questions",
    desc: "Reinforce every concept with structured daily practice sets, ensuring continuous revision and deeper understanding.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: ClipboardList,
    title: "Weekly Tests",
    desc: "Regular chapter-wise tests to track progress, identify weak areas, and build exam confidence throughout the session.",
    color: "bg-violet-50 text-violet-700",
  },
  {
    icon: MessageCircleQuestion,
    title: "Free Doubt-Clearing Sessions",
    desc: "Dedicated doubt-clearing sessions ensure no concept remains unclear. Ask freely, learn thoroughly.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    icon: FileText,
    title: "Mock Papers & PYQs",
    desc: "Extensive practice with HBSE mock papers and previous year questions to fully prepare for the actual board exam format.",
    color: "bg-rose-50 text-rose-700",
  },
  {
    icon: Star,
    title: "Motivational Guidance",
    desc: "Special mentoring sessions to keep students motivated, focused, and on track to achieve top scores in Class 10.",
    color: "bg-indigo-50 text-indigo-700",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
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
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ism-navy mb-4">
            Why Students &amp; Parents Trust ISM Classes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Our proven methodology and student-first approach set us apart from
            ordinary coaching centers.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-6 border border-border shadow-ism hover:shadow-ism-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color}`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-ism-navy mb-2 group-hover:text-ism-gold transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 gradient-hero rounded-2xl p-8 text-center"
        >
          <p className="text-white/90 text-lg font-semibold mb-4">
            Join hundreds of students who have already transformed their
            academic performance.
          </p>
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 gradient-cta text-ism-navy-deeper font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a Free Demo Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
