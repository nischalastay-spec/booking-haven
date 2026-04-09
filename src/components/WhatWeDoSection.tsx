import { motion } from "framer-motion";
import { Settings, Globe, BarChart3, Building2, CreditCard, Search } from "lucide-react";

const categories = [
  {
    title: "Operations",
    description: "Better sales operations, better guest experiences.",
    icon: Settings,
    items: ["Property Management System", "Central Reservation System", "Reporting & Analytics"],
  },
  {
    title: "Distribution",
    description: "Maintain Inventory & Price Parity Across Channels.",
    icon: Globe,
    items: ["Hotel Channel Manager", "Direct Booking Engine", "Meta-search Advertising"],
  },
  {
    title: "Intelligence",
    description: "Let data guide your business decisions.",
    icon: BarChart3,
    items: ["Online Reputation Management", "Hotel Rate Shopper", "Revenue Manager"],
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="products" className="py-24 bg-surface-warm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground max-w-2xl mx-auto">
            Booking4U manages, controls and enhances online sales & guest experience for hotels
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">{cat.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{cat.description}</p>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
