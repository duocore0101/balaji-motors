"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Car, Wallet, Wrench, Banknote, FileText, Smile } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Trusted Car Dealer", desc: "Years of trust and reliability in Alephata" },
  { icon: CheckCircle2, title: "Genuine Vehicles", desc: "100% genuine and verified pre-owned cars" },
  { icon: Car, title: "Quality Checked Cars", desc: "Rigorous multi-point inspection process" },
  { icon: Wallet, title: "Budget Friendly Options", desc: "Cars fitting every budget requirement" },
  { icon: Wrench, title: "Well Maintained", desc: "Spotless interiors and perfect mechanics" },
  { icon: Banknote, title: "Easy Finance", desc: "Hassle-free loan approvals and assistance" },
  { icon: FileText, title: "RC Transfer Support", desc: "We handle all the tedious paperwork" },
  { icon: Smile, title: "Customer Satisfaction", desc: "Our highest priority is your happiness" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4"
          >
            Why Choose <span className="text-primary">Balaji Motors Alephata</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Experience the difference of buying a premium used car from a dealer who puts transparency and quality above all else.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card p-4 md:p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 border border-border/50 group"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-sm md:text-lg mb-1 md:mb-2 text-foreground leading-tight">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden sm:block">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
