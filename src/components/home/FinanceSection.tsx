"use client";

import { motion } from "framer-motion";
import { Calculator, BadgePercent, Shield, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FinanceSection() {
  const [amount, setAmount] = useState(500000);
  const [tenure, setTenure] = useState(60);

  const interestRate = 8.5; // Annual percentage
  const monthlyRate = interestRate / 12 / 100;
  
  // EMI calculation: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const emi = Math.round(
    (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1)
  );

  return (
    <section id="finance" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
              Easy Finance & <span className="text-primary">Instant Approvals</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't let budget constraints stop you from driving your dream car. We have partnered with top banks and NBFCs to provide you with the best loan options.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Landmark, title: "Finance Available", desc: "Up to 90% funding on selected cars" },
                { icon: BadgePercent, title: "Low EMI Options", desc: "Competitive interest rates starting 8.5%" },
                { icon: Calculator, title: "Instant Loan Support", desc: "Quick processing and disbursement" },
                { icon: Shield, title: "Insurance Assistance", desc: "Comprehensive car insurance plans" },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/80 px-8">
              Apply For Loan
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 border border-border shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
              <Calculator className="text-primary" /> EMI Calculator
            </h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-foreground">Loan Amount</label>
                  <span className="text-primary font-bold">₹ {amount.toLocaleString('en-IN')}</span>
                </div>
                <input 
                  type="range" 
                  min="100000" 
                  max="5000000" 
                  step="50000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>1L</span>
                  <span>50L</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-foreground">Tenure (Months)</label>
                  <span className="text-primary font-bold">{tenure} Months</span>
                </div>
                <input 
                  type="range" 
                  min="12" 
                  max="84" 
                  step="12"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>1 Yr</span>
                  <span>7 Yrs</span>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-6 text-center border border-border">
                <p className="text-sm font-medium text-muted-foreground mb-1">Your Estimated EMI</p>
                <p className="text-4xl font-bold text-foreground font-heading">
                  ₹ {emi.toLocaleString('en-IN')} <span className="text-lg text-muted-foreground font-medium">/mo</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">@ 8.5% p.a. interest rate</p>
              </div>

              <Button className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold shadow-lg shadow-primary/20">
                Check Eligibility
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
