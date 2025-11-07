import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "New Arrivals", href: "#" },
      { name: "Dresses", href: "#" },
      { name: "Evening Wear", href: "#" },
      { name: "Sale", href: "#" },
    ],
    about: [
      { name: "Our Story", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Size Guide", href: "#" },
      { name: "Careers", href: "#" },
    ],
    help: [
      { name: "Contact Us", href: "#" },
      { name: "Shipping & Returns", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Track Order", href: "#" },
    ],
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
              Join Our Community
            </h3>
            <p className="text-foreground/70 mb-6">
              Subscribe to receive exclusive offers, style inspiration, and updates on new arrivals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-4">Elegance</h2>
            <p className="text-foreground/70 mb-6 max-w-sm">
              Crafting timeless pieces for the modern woman. Every dress tells a story of grace, confidence, and sophistication.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © 2024 Elegance. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
