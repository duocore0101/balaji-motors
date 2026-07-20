"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    id: 1,
    name: "Rahul Deshmukh",
    initials: "RD",
    rating: 5,
    text: "Good Quality of Cars Available. Genuine and Trusted Car Mall. Very happy with my purchase of Hyundai Creta.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Priya Sharma",
    initials: "PS",
    rating: 5,
    text: "Well Maintained Cars. The staff was very polite and explained all features properly. RC transfer was done smoothly.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Sandeep Patil",
    initials: "SP",
    rating: 5,
    text: "Good Budget Friendly Cars. I was looking for a car under 5 lakhs and they showed me the perfect Swift Dzire.",
    date: "2 months ago"
  },
  {
    id: 4,
    name: "Amit Kulkarni",
    initials: "AK",
    rating: 5,
    text: "Good Condition Cars. Highly recommended dealership in Alephata for premium pre-owned cars.",
    date: "3 months ago"
  }
];

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4"
          >
            What Our <span className="text-primary">Customers Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Don't just take our word for it. Read honest reviews from our satisfied customers who found their dream cars with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col"
            >
              <div className="flex gap-1 mb-2 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className={`md:w-4 md:h-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted"}`} />
                ))}
              </div>
              <p className="text-foreground leading-relaxed flex-1 italic mb-4 md:mb-6 text-xs md:text-base">"{review.text}"</p>
              
              <div className="flex items-center gap-2 md:gap-4 mt-auto pt-3 md:pt-4 border-t border-border">
                <Avatar className="h-8 w-8 md:h-10 md:w-10 border border-primary/20 shrink-0">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.name}&backgroundColor=D4AF37`} alt={review.name} />
                  <AvatarFallback className="text-[10px] md:text-xs">{review.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h4 className="font-bold text-[10px] md:text-sm text-foreground truncate">{review.name}</h4>
                  <p className="text-[9px] md:text-xs text-muted-foreground truncate">{review.date}</p>
                </div>
                {/* Google G icon logic can go here */}
                <div className="ml-auto opacity-20 hidden md:block">
                  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
