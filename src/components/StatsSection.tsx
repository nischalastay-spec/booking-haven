import { motion } from "framer-motion";
import { Users, DollarSign, TrendingUp, Globe2 } from "lucide-react";

const stats = [
  { icon: Users, value: "2,500+", label: "Hotels Worldwide" },
  { icon: Globe2, value: "33+", label: "Countries" },
  { icon: DollarSign, value: "$150M+", label: "Bookings Per Year" },
  { icon: TrendingUp, value: "43%", label: "Avg. Revenue Growth" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-surface-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Why Booking4U?</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-hero-foreground">
            Fully Integrated Product Suite
          </h2>
          <p className="text-surface-dark-foreground mt-3 max-w-xl mx-auto">
            Covering Operations, Distribution, Marketing & Intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-hero-foreground">{stat.value}</p>
              <p className="text-surface-dark-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
