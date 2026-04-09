import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We increased our hotel revenues by 50% within the first year of using Booking4U.",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "Grand Pacific Hotels",
    growth: "50%",
  },
  {
    quote: "Stable OTA connectivity and zero overbooking hassles. A game changer for our operations.",
    name: "James Chen",
    role: "Operations Director",
    company: "Horizon Resort Chain",
    growth: "75%",
  },
  {
    quote: "The analytics tools helped us make smarter pricing decisions and boost occupancy rates.",
    name: "Maria Rodriguez",
    role: "Revenue Manager",
    company: "Sunset Boutique Hotels",
    growth: "40%",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="success-stories" className="py-24 bg-surface-warm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Success Stories</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Why Over 2,000 Hotels Trust Booking4U
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 shadow-sm relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-medium mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{t.growth}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
