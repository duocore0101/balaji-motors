"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black text-white rounded-[3rem] p-10 md:p-16 lg:p-24 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden border border-white/10"
        >
          {/* Decorative gold circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 border-[30px] border-primary/20 rounded-full blur-sm"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 border-[40px] border-primary/20 rounded-full blur-sm"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Ready To Buy Your <br/> <span className="text-primary">Dream Car?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Book your test drive today and experience the luxury, performance, and reliability of our certified pre-owned vehicles.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Phone className="mr-2 w-5 h-5" /> Call Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-white/10 text-white hover:bg-white/20 border-white/20 h-14 px-8 text-lg font-semibold backdrop-blur-sm">
                <MessageCircle className="mr-2 w-5 h-5 text-green-400" /> WhatsApp Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
