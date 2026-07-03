"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:hela.garnaoui@example.com" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-xl pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(255,107,53,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="inline-block group mb-6 interactive">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold tracking-tighter flex items-center gap-3"
              >
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                  H
                </div>
                <span>Garnaoui</span>
              </motion.div>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8">
              Building premium digital experiences with modern web technologies and AI solutions.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <MapPin size={20} className="text-primary" />
              <span>Tunisia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors interactive inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-1 hover:glow-shadow transition-all duration-300 interactive"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hela Garnaoui. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,107,53,0.5)] interactive"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
}
