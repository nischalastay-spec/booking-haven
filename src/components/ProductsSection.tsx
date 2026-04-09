import { motion } from "framer-motion";
import { CalendarCheck, Repeat, CreditCard, BarChart2, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: CalendarCheck,
    name: "B4U CRS",
    subtitle: "Centralised Reservation System",
    desc: "Connect and control all your offline and online revenue sources through a single cloud-based Smart Chart.",
  },
  {
    icon: Repeat,
    name: "B4U Connect",
    subtitle: "Channel Manager",
    desc: "Never miss updating your room inventory on any of your online sales channels.",
  },
  {
    icon: CreditCard,
    name: "B4U Direct Book",
    subtitle: "Booking & Payment Engine",
    desc: "A booking engine integrated with Hotel CRS and Channel Manager for simplified management.",
  },
  {
    icon: BarChart2,
    name: "B4U Insight",
    subtitle: "Analytics Tool",
    desc: "Get real-time actionable insights to optimize pricing and maximize occupancy rates.",
  },
  {
    icon: Star,
    name: "B4U Reputation",
    subtitle: "Review Management",
    desc: "Monitor and manage your online reputation across 100+ review platforms worldwide.",
  },
  {
    icon: Zap,
    name: "B4U Revenue",
    subtitle: "Revenue Manager",
    desc: "AI-powered dynamic pricing that automatically adjusts rates for maximum revenue.",
  },
];

const ProductsSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Products</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Customise Your Technology Suite
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            From marketing tools to distribution systems, pick options as per your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{p.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{p.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold">
            View Pricing Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
