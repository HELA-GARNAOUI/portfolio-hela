"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          scrolled ? "py-4" : "py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
      >
        <div className="container mx-auto w-full px-2 xs:px-4 sm:px-6 md:px-12">
          <div
            className={cn(
              "flex items-center justify-between rounded-full transition-all duration-500",
              scrolled
                ? "bg-background/70 backdrop-blur-md border border-border px-3 py-2 sm:px-6 sm:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                : "bg-transparent px-0 py-0"
            )}
          >
            {/* Logo */}
            <Link href="#home" className="text-[13px] xs:text-sm sm:text-xl font-bold tracking-tighter flex items-center gap-1.5 xs:gap-2 sm:gap-3 interactive whitespace-nowrap shrink-0">
              <div className="relative w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
                <Image src="/icon.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-foreground">Garnaoui Hela</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors interactive relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>

              {/* Theme Toggle Button */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full border border-border bg-secondary hover:bg-muted text-foreground transition-all duration-300 interactive"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}
            </div>

            {/* Mobile Header Buttons */}
            <div className="flex items-center gap-2 sm:gap-4 md:hidden">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-1.5 sm:p-2 rounded-full border border-border bg-secondary text-foreground transition-all duration-300 interactive"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                </button>
              )}
              <button
                className="p-1.5 text-foreground interactive"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium text-white hover:text-primary transition-colors interactive"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
