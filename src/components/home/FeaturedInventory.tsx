"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Search, MessageCircle, Calendar, Fuel, Gauge, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const cars = [
  {
    id: 1,
    name: "Mahindra Scorpio N",
    type: "SUV",
    year: "2023",
    fuel: "Diesel",
    transmission: "Automatic",
    kmDriven: "12,500 km",
    owner: "1st Owner",
    price: "₹ 21,50,000",
    emi: "₹ 35,000/m",
    image: "/scorpio_n.png",
    featured: true,
  },
  {
    id: 2,
    name: "Honda City ZX",
    type: "Sedan",
    year: "2022",
    fuel: "Petrol",
    transmission: "Automatic",
    kmDriven: "25,000 km",
    owner: "1st Owner",
    price: "₹ 15,25,000",
    emi: "₹ 24,000/m",
    image: "/honda_city.png",
    featured: true,
  },
  {
    id: 3,
    name: "Hyundai Creta SX",
    type: "SUV",
    year: "2021",
    fuel: "Diesel",
    transmission: "Manual",
    kmDriven: "45,000 km",
    owner: "1st Owner",
    price: "₹ 14,50,000",
    emi: "₹ 23,000/m",
    image: "/hyundai_creta.png",
    featured: false,
  },
  {
    id: 4,
    name: "Toyota Innova Crysta",
    type: "SUV",
    year: "2020",
    fuel: "Diesel",
    transmission: "Manual",
    kmDriven: "65,000 km",
    owner: "2nd Owner",
    price: "₹ 18,90,000",
    emi: "₹ 31,000/m",
    image: "/toyota_innova.png",
    featured: true,
  },
  {
    id: 5,
    name: "Tata Nexon EV",
    type: "SUV",
    year: "2023",
    fuel: "Electric",
    transmission: "Automatic",
    kmDriven: "8,000 km",
    owner: "1st Owner",
    price: "₹ 15,75,000",
    emi: "₹ 25,500/m",
    image: "/tata_nexon.png",
    featured: false,
  },
  {
    id: 6,
    name: "Swift Dzire ZXI",
    type: "Sedan",
    year: "2019",
    fuel: "Petrol",
    transmission: "Manual",
    kmDriven: "55,000 km",
    owner: "1st Owner",
    price: "₹ 7,20,000",
    emi: "₹ 12,000/m",
    image: "/swift_dzire.png",
    featured: false,
  },
  {
    id: 7,
    name: "Kia Seltos HTX",
    type: "SUV",
    year: "2022",
    fuel: "Petrol",
    transmission: "Automatic",
    kmDriven: "22,000 km",
    owner: "1st Owner",
    price: "₹ 16,10,000",
    emi: "₹ 26,000/m",
    image: "/kia_seltos.png",
    featured: true,
  },
  {
    id: 8,
    name: "Maruti Brezza ZXI",
    type: "SUV",
    year: "2021",
    fuel: "Petrol",
    transmission: "Manual",
    kmDriven: "35,000 km",
    owner: "1st Owner",
    price: "₹ 9,80,000",
    emi: "₹ 16,000/m",
    image: "/maruti_brezza.png",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function FeaturedInventory() {
  return (
    <section id="inventory" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4"
            >
              Featured <span className="text-primary">Inventory</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Explore our handpicked selection of premium, fully-inspected pre-owned cars. Find your dream car at the best price.
            </motion.p>
          </div>
          <Button variant="outline" className="shrink-0 rounded-full group border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all">
            View All Cars <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6"
        >
          {cars.map((car) => (
            <motion.div 
              key={car.id} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border group flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-32 md:h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-2 md:p-4">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={300}
                  height={200}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                />
                <div className="absolute top-2 left-2 md:top-3 md:left-3 flex gap-1 md:gap-2">
                  {car.featured && (
                    <Badge className="bg-primary hover:bg-primary text-primary-foreground font-semibold text-[10px] md:text-xs px-1.5 py-0 md:px-2 md:py-0.5">Featured</Badge>
                  )}
                </div>
                <button className="absolute top-2 right-2 md:top-3 md:right-3 w-6 h-6 md:w-8 md:h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white transition-colors shadow-sm">
                  <Heart className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-3 md:p-5 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-xs md:text-xl text-foreground mb-2 md:mb-3 truncate">{car.name}</h3>
                
                <div className="grid grid-cols-2 gap-y-1.5 md:gap-y-3 gap-x-1 md:gap-x-2 text-[10px] md:text-sm text-muted-foreground mb-3 md:mb-4">
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                    <span className="truncate">{car.year}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <Fuel className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                    <span className="truncate">{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <Settings className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                    <span className="truncate">{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <Gauge className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                    <span className="truncate">{car.kmDriven}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-1.5 col-span-2 hidden md:flex">
                    <User className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                    <span className="truncate">{car.owner}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-2 md:mb-4 border-t border-border pt-2 md:pt-4">
                    <div>
                      <p className="text-[9px] md:text-xs text-muted-foreground font-medium mb-0.5 md:mb-1">Price</p>
                      <p className="font-heading font-bold text-xs md:text-xl text-foreground">{car.price}</p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-[9px] md:text-xs text-muted-foreground font-medium mb-0.5 md:mb-1">EMI Starts</p>
                      <p className="font-bold text-[10px] md:text-sm text-primary">{car.emi}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Button variant="outline" className="w-full text-[10px] md:text-xs font-semibold h-7 md:h-10 rounded-lg md:rounded-xl hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors hidden md:flex">
                      <Search className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5" /> Quick View
                    </Button>
                    <Button className="w-full text-[10px] md:text-xs font-semibold h-8 md:h-10 rounded-lg md:rounded-xl bg-black text-white hover:bg-black/80 transition-colors px-0 md:px-4">
                      Book Test Drive
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full mt-2 text-[10px] md:text-xs font-semibold h-8 md:h-10 rounded-lg md:rounded-xl border-green-500/30 text-green-600 hover:bg-green-50 hover:border-green-500/50 hover:text-green-700 transition-colors px-0 md:px-4">
                    <MessageCircle className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5" /> WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center md:hidden">
           <Button variant="outline" className="rounded-full group border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all px-8">
            View All Cars <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Simple icon component to avoid importing another lucide icon inside the file if not already imported at top
function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
