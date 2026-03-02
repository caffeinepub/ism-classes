import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  ChevronRight,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Mode, Subject } from "../backend.d";
import { useSubmitInquiry } from "../hooks/useQueries";

type FormState = {
  name: string;
  phone: string;
  email: string;
  subject: Subject | "";
  mode: Mode | "";
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  mode: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.subject ||
      !form.mode
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }
    submitInquiry(
      {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        subject: form.subject as Subject,
        preferredMode: form.mode as Mode,
        message: form.message.trim(),
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          toast.success(
            "Your demo booking request has been received! Redirecting to WhatsApp...",
          );
          const subjectLabel =
            form.subject === "maths"
              ? "Mathematics"
              : form.subject === "science"
                ? "Science"
                : form.subject === "english"
                  ? "English"
                  : "All Subjects";
          const modeLabel =
            form.mode === "online" ? "Online" : "Offline (At Center)";
          const waMessage = encodeURIComponent(
            `Hello ISM Classes,\n\nI would like to book a Free Demo Class.\n\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nSubject: ${subjectLabel}\nPreferred Mode: ${modeLabel}${form.message.trim() ? `\nMessage: ${form.message.trim()}` : ""}`,
          );
          setTimeout(() => {
            window.open(
              `https://wa.me/919466749293?text=${waMessage}`,
              "_blank",
            );
          }, 1200);
        },
        onError: () => {
          toast.error("Something went wrong. Please try again.");
        },
      },
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
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
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ism-navy mb-4">
            Book Your Free Demo Class Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Take the first step towards academic excellence. Fill in the form
            and we'll schedule your free demo class.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-display font-bold text-2xl text-ism-navy mb-2">
                  Request Received!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you! We'll contact you shortly to confirm your free demo
                  class schedule.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="border-ism-navy text-ism-navy hover:bg-ism-navy hover:text-white"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-7 border border-border shadow-ism space-y-5"
              >
                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-ism-navy font-semibold text-sm"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Student's name"
                      className="border-border focus:border-ism-navy focus-visible:ring-ism-navy/30"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-ism-navy font-semibold text-sm"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Mobile number"
                      className="border-border focus:border-ism-navy focus-visible:ring-ism-navy/30"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-ism-navy font-semibold text-sm"
                  >
                    Email Address{" "}
                    <span className="text-muted-foreground font-normal text-xs">
                      (optional)
                    </span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="parent@email.com"
                    className="border-border focus:border-ism-navy focus-visible:ring-ism-navy/30"
                  />
                </div>

                {/* Subject + Mode */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-ism-navy font-semibold text-sm">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={form.subject}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, subject: v as Subject }))
                      }
                    >
                      <SelectTrigger className="border-border focus:border-ism-navy">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={Subject.maths}>
                          Mathematics
                        </SelectItem>
                        <SelectItem value={Subject.science}>Science</SelectItem>
                        <SelectItem value={Subject.english}>English</SelectItem>
                        <SelectItem value={Subject.all}>
                          All Subjects
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-ism-navy font-semibold text-sm">
                      Preferred Mode <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={form.mode}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, mode: v as Mode }))
                      }
                    >
                      <SelectTrigger className="border-border focus:border-ism-navy">
                        <SelectValue placeholder="Online / Offline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={Mode.online}>
                          Online (Google Meet)
                        </SelectItem>
                        <SelectItem value={Mode.offline}>
                          Offline (At Center)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="text-ism-navy font-semibold text-sm"
                  >
                    Message{" "}
                    <span className="text-muted-foreground font-normal text-xs">
                      (optional)
                    </span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any specific requirements or questions..."
                    rows={3}
                    className="border-border focus:border-ism-navy focus-visible:ring-ism-navy/30 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  size="lg"
                  className="w-full bg-ism-gold text-ism-navy-deeper font-bold hover:bg-ism-gold-dark h-12 text-base shadow-none"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book Free Demo Class
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact cards */}
            <div className="bg-ism-section rounded-2xl p-5 border border-border space-y-4">
              <h3 className="font-display font-bold text-xl text-ism-navy">
                Contact Us
              </h3>

              <a href="tel:9466749293" className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-ism-navy rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-ism-gold transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-ism-navy text-sm">
                    Phone
                  </div>
                  <div className="text-muted-foreground text-sm">
                    9466749293
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-ism-navy rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-ism-navy text-sm">
                    Location
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Shastri Nagar Line Par, Bahadurgarh, Haryana
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-ism-navy rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-ism-navy text-sm">
                    Online Classes
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Via Google Meet – link shared on enrollment
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919466749293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5 hover:opacity-90 transition-opacity group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-base">Chat on WhatsApp</div>
                <div className="text-white/80 text-sm">
                  Quick response during office hours
                </div>
              </div>
              <ChevronRight className="w-5 h-5 ml-auto group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Office hours */}
            <div className="bg-white rounded-2xl p-5 border border-border shadow-ism">
              <h4 className="font-display font-bold text-ism-navy mb-3">
                Batch Timings
              </h4>
              <div className="space-y-2 text-sm">
                {[
                  {
                    day: "Monday – Saturday",
                    time: "Morning & Evening batches",
                  },
                  { day: "Sunday", time: "Doubt-clearing sessions" },
                ].map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-1.5 border-b border-border last:border-0"
                  >
                    <span className="text-foreground/70 font-medium">
                      {day}
                    </span>
                    <span className="text-ism-navy font-semibold text-right">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust note */}
            <div className="bg-ism-navy rounded-2xl p-5 text-center">
              <div className="font-display font-bold text-xl text-white mb-1">
                Free Demo Class
              </div>
              <p className="text-white/70 text-sm">
                No charges, no commitment. Just pure learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
