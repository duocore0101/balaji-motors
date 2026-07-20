"use client";

import { motion } from "framer-motion";
import { Search, CalendarDays, CheckSquare, FileText, Key } from "lucide-react";

const steps = [
  { icon: Search, title: "Choose Your Car", desc: "Browse our inventory of premium certified used cars and select your favorite." },
  { icon: CalendarDays, title: "Book Test Drive", desc: "Schedule a free test drive at your convenience to experience the car." },
  { icon: CheckSquare, title: "Vehicle Inspection", desc: "Review the comprehensive 150-point inspection report with our experts." },
  { icon: FileText, title: "Easy Documentation", desc: "We handle all the paperwork including RTO transfer and loan processing." },
  { icon: Key, title: "Drive Home", desc: "Take delivery of your fully polished, ready-to-drive premium car." },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4"
          >
            How It <span className="text-primary">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Our seamless 5-step process ensures a hassle-free and completely transparent car buying experience.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0"></div>
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-1 bg-border z-0"></div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-10 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 flex-1"
                >
                  <div className="w-16 h-16 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center shrink-0 z-10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold font-heading text-lg mb-2 text-foreground">
                      <span className="text-primary md:hidden mr-2">0{index + 1}.</span>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
