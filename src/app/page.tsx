import Hero from "@/components/home/Hero";
import SearchSection from "@/components/home/SearchSection";
import FeaturedInventory from "@/components/home/FeaturedInventory";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutSection from "@/components/home/AboutSection";
import CustomerReviews from "@/components/home/CustomerReviews";
import ProcessSection from "@/components/home/ProcessSection";
import FinanceSection from "@/components/home/FinanceSection";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Hero />
      <SearchSection />
      <FeaturedInventory />
      <WhyChooseUs />
      <AboutSection />
      <CustomerReviews />
      <ProcessSection />
      <FinanceSection />
      <CallToAction />
    </div>
  );
}
