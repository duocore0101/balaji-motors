"use client";

import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SearchSection() {
  return (
    <section className="relative -mt-16 z-30 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-bold font-heading flex items-center gap-2">
              <Search className="text-primary" /> Find Your Perfect Car
            </h3>
            <Button variant="ghost" size="sm" className="hidden md:flex text-muted-foreground hover:text-primary">
              <SlidersHorizontal size={16} className="mr-2" /> Advanced Search
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Brand */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Brand</label>
              <select className="w-full h-11 bg-background/50 border border-border rounded-xl px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                <option value="">Any Brand</option>
                <option value="maruti">Maruti Suzuki</option>
                <option value="hyundai">Hyundai</option>
                <option value="tata">Tata</option>
                <option value="mahindra">Mahindra</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="kia">Kia</option>
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Budget</label>
              <select className="w-full h-11 bg-background/50 border border-border rounded-xl px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                <option value="">Any Budget</option>
                <option value="under-5">Under ₹5 Lakh</option>
                <option value="5-10">₹5 - ₹10 Lakh</option>
                <option value="10-15">₹10 - ₹15 Lakh</option>
                <option value="15-20">₹15 - ₹20 Lakh</option>
                <option value="above-20">Above ₹20 Lakh</option>
              </select>
            </div>

            {/* Fuel */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Fuel Type</label>
              <select className="w-full h-11 bg-background/50 border border-border rounded-xl px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                <option value="">Any Fuel</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="cng">CNG</option>
                <option value="electric">Electric</option>
              </select>
            </div>

            {/* Transmission */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Transmission</label>
              <select className="w-full h-11 bg-background/50 border border-border rounded-xl px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                <option value="">Any</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
            </div>

            {/* Year */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Year</label>
              <select className="w-full h-11 bg-background/50 border border-border rounded-xl px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                <option value="">Any Year</option>
                <option value="2023">2023 & Above</option>
                <option value="2020">2020 & Above</option>
                <option value="2018">2018 & Above</option>
                <option value="2015">2015 & Above</option>
              </select>
            </div>

            {/* Mileage */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">KM Driven</label>
              <select className="w-full h-11 bg-background/50 border border-border rounded-xl px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                <option value="">Any Mileage</option>
                <option value="under-10k">Under 10,000 km</option>
                <option value="under-30k">Under 30,000 km</option>
                <option value="under-50k">Under 50,000 km</option>
                <option value="under-75k">Under 75,000 km</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button size="lg" className="w-full md:w-auto px-12 rounded-full font-bold text-base h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
              <Search className="mr-2 w-5 h-5" /> Search 150+ Cars
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
