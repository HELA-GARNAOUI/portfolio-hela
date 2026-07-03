"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedText } from "@/components/ui/animated-text";
import { useEffect, useState } from "react";
import Image from "next/image";

const roles = ["Full Stack Developer", "AI Enthusiast", "Software Engineer"];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 border border-primary/30 text-sm font-medium"
            >
              <span className="text-xl">👋</span> Hello, I&apos;m
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                <AnimatedText text="Hela Garnaoui" animation="reveal" />
              </h1>
              <div className="h-12 flex items-center overflow-hidden">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                  className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-300"
                >
                  {roles[roleIndex]}
                </motion.div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              "I build modern web applications, AI-powered solutions, and digital experiences that solve real-world problems."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#projects">
                <MagneticButton variant="primary">
                  View Projects <ArrowRight size={18} />
                </MagneticButton>
              </a>
              <a href="/cv.pdf" download>
                <MagneticButton variant="secondary">
                  Download CV <Download size={18} />
                </MagneticButton>
              </a>
              <a href="#contact">
                <MagneticButton variant="outline">
                  Contact Me <Mail size={18} />
                </MagneticButton>
              </a>
            </motion.div>
            
            {/* Statistics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-8 pt-8 mt-4 border-t border-border/50 w-full"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">20+</span>
                <span className="text-sm text-muted-foreground">Projects</span>
              </div>
              <div className="w-px h-10 bg-border/50"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">10+</span>
                <span className="text-sm text-muted-foreground">Certifications</span>
              </div>
              <div className="w-px h-10 bg-border/50"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">2+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-md aspect-square"
          >
            {/* Animated glowing circles behind */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border border-primary/40 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }}></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-2xl animate-pulse-glow"></div>
            
            {/* Glass effect wrapper */}
            <div className="absolute inset-6 rounded-full glass overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,107,53,0.2)]">
              {/* Fallback image if specific one is not provided, using a generic high-quality placeholder for a female developer */}
              <div className="w-full h-full relative bg-secondary/50">
                <Image 
                  src="/profile.jpg"
                  alt="Hela Garnaoui"
                  fill
                  className="object-cover mix-blend-overlay opacity-80"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-20 glass px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                ⚛️
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Frontend</p>
                <p className="text-sm font-bold">React & Next.js</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 bottom-32 glass px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg"
            >
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-primary">
                🧠
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Specialty</p>
                <p className="text-sm font-bold">AI Solutions</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
