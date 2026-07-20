import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold font-heading tracking-tight text-white">
                Balaji<span className="text-primary">Motors</span>
              </span>
            </Link>
            <p className="text-muted-foreground">
              Trusted Used Cars | Quality You Can Trust. Every car personally inspected for your complete peace of mind.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-heading text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["Inventory", "About", "Contact", "Finance"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-heading text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="text-primary shrink-0" />
                <span>53MV+56X, alephata, nagar kalyan rd, tal junnar,, Maharashtra 412411</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Phone className="text-primary shrink-0" />
                <span>098220 46352</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Mail className="text-primary shrink-0" />
                <span>info@balajimotorsalephata.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-heading text-white">Business Hours</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <Clock className="text-primary shrink-0" />
                <div>
                  <p className="font-medium text-white">Everyday</p>
                  <p>9:00 AM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Balaji Motors Alephata. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
