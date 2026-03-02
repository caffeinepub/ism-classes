import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
} from "lucide-react";
import { motion } from "motion/react";

const courses = [
  {
    icon: Calculator,
    subject: "Mathematics",
    tagline: "Master Numbers, Conquer Boards",
    color: "from-blue-600 to-blue-800",
    textColor: "text-blue-700",
    features: [
      "NCERT + HBSE pattern coverage",
      "Shortcut techniques for board exams",
      "Board-type practice questions",
      "Step-by-step problem solving",
      "Regular chapter-wise tests",
    ],
    badge: "Most Popular",
    badgeColor: "bg-ism-gold text-ism-navy-deeper",
  },
  {
    icon: FlaskConical,
    subject: "Science",
    tagline: "Physics, Chemistry & Biology",
    color: "from-emerald-600 to-emerald-800",
    textColor: "text-emerald-700",
    features: [
      "Diagram-based learning approach",
      "Numericals with step-by-step solutions",
      "Concept clarity for all three sciences",
      "HBSE-pattern experiments explained",
      "Formula sheets & quick revision",
    ],
    badge: null,
    badgeColor: "",
  },
  {
    icon: BookOpen,
    subject: "English",
    tagline: "Write Better, Score Higher",
    color: "from-violet-600 to-violet-800",
    textColor: "text-violet-700",
    features: [
      "Writing skills development",
      "Grammar and comprehension",
      "Sample papers with model answers",
      "Letter & essay writing techniques",
      "Literature explanation & analysis",
    ],
    badge: null,
    badgeColor: "",
  },
];

export default function CoursesSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
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
            Our Courses
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ism-navy mb-4">
            Our Courses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive HBSE board coaching for Class 10 — each subject taught
            by experienced specialists.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map(
            (
              {
                icon: Icon,
                subject,
                tagline,
                color,
                textColor,
                features,
                badge,
                badgeColor,
              },
              i,
            ) => (
              <motion.div
                key={subject}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="group flex flex-col bg-white rounded-2xl border border-border shadow-ism hover:shadow-ism-lg transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className={`relative bg-gradient-to-br ${color} p-7 pb-8`}>
                  {badge && (
                    <span
                      className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${badgeColor}`}
                    >
                      {badge}
                    </span>
                  )}
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-1">
                    {subject}
                  </h3>
                  <p className="text-white/80 text-sm font-medium">{tagline}</p>
                </div>

                {/* Features */}
                <div className="flex-1 p-6">
                  <ul className="space-y-3 mb-6">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${textColor}`}
                        />
                        <span className="text-foreground/80 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-ism-navy text-ism-navy hover:bg-ism-navy hover:text-white transition-all font-semibold group"
                  >
                    Enroll Now
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* All subjects package note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground">
            Want to enroll for all subjects?{" "}
            <button
              type="button"
              onClick={scrollToContact}
              className="text-ism-navy font-semibold hover:text-ism-gold underline underline-offset-2 transition-colors"
            >
              Contact us for a bundled package →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
