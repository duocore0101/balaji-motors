"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/hero.png" 
                alt="Balaji Motors Alephata Showroom" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-xl hidden md:block">
                <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
                  <span className="block text-4xl font-bold font-heading mb-1">15+</span>
                  <span className="block text-sm font-medium">Years of<br/>Trust</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4 leading-tight">
              About Balaji Motors Alephata
              </h2>
              <div className="w-16 h-1.5 bg-primary rounded-full mb-6"></div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
              Balaji Motors Alephata is committed to delivering genuine, quality pre-owned vehicles at affordable prices. Every vehicle undergoes a careful inspection before being listed. 
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With transparent dealings, trusted service, and customer-first support, we help buyers purchase their next car with complete peace of mind.
            </p>
            </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              {["Careful Inspection", "Affordable Prices", "Transparent Dealings", "Customer-First Support"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-primary font-bold" />
                  </div>
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-border">
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-heading text-foreground">500+</span>
                <span className="text-sm text-muted-foreground">Happy Customers</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-heading text-foreground">50+</span>
                <span className="text-sm text-muted-foreground">Cars in Stock</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
