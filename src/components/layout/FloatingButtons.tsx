"use client";

import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Scroll to top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground shadow-lg flex items-center justify-center hover:bg-secondary/80 transition-colors border border-border"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Button */}
      <a
        href="tel:+919822046352"
        className="w-14 h-14 rounded-full bg-black text-white shadow-lg flex items-center justify-center hover:bg-black/80 transition-colors"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919822046352"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20b858] transition-colors animate-pulse-slow relative group"
        aria-label="WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
        <MessageCircle size={28} className="relative z-10" />
      </a>
    </div>
  );
}
