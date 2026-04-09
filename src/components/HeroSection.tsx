import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Luxury hotel lobby" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/95 via-hero/80 to-hero/40" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Simple Solution. Smarter Hotel.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight mb-6">
            Control, Enhance &{" "}
            <span className="text-primary">Maximise</span> Revenues Like Never Before.
          </h1>
          <p className="text-surface-dark-foreground text-lg max-w-lg mb-8">
            The all-in-one hotel management platform that helps you manage operations, 
            boost distribution, and drive revenue growth — effortlessly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 font-semibold text-base gap-2 group">
              Request Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-semibold text-base gap-2 border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            <div className="w-80 h-80 rounded-full border-2 border-primary/30 flex items-center justify-center">
              <div className="w-60 h-60 rounded-full border-2 border-primary/50 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-5xl font-display font-bold text-primary">B4U</span>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            {[
              { label: "PMS", angle: 0 },
              { label: "CRM", angle: 72 },
              { label: "OTA", angle: 144 },
              { label: "Rev", angle: 216 },
              { label: "AI", angle: 288 },
            ].map((item) => {
              const r = 180;
              const rad = (item.angle * Math.PI) / 180;
              return (
                <motion.div
                  key={item.label}
                  className="absolute w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-lg"
                  style={{
                    left: `calc(50% + ${Math.cos(rad) * r}px - 24px)`,
                    top: `calc(50% + ${Math.sin(rad) * r}px - 24px)`,
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: item.angle / 100 }}
                >
                  {item.label}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
