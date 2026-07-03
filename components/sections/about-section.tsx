"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Code2, Brain, Database, Lightbulb } from "lucide-react";

export function AboutSection() {
  const stats = [
    { icon: Code2, label: "Full Stack", desc: "End-to-end Solutions" },
    { icon: Brain, label: "AI Solutions", desc: "Machine Learning & GPT" },
    { icon: Database, label: "Database", desc: "Architecture & Design" },
    { icon: Lightbulb, label: "Innovation", desc: "Problem Solving" },
  ];

  return (
    <Section id="about" title="About Me" subtitle="Discover my journey">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              {/* Fallback image */}
              <Image
                src="/profile.jpg"
                alt="About Hela Garnaoui"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          <h3 className="text-3xl font-semibold text-white">
            Passionate Developer & AI Innovator
          </h3>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              I am Hela Garnaoui, a dedicated Full Stack Developer and AI enthusiast with a deep passion for software engineering. I specialize in building scalable web applications, integrating AI-driven solutions, and optimizing performance.
            </p>
            <p>
              My journey in tech is driven by a constant desire to solve complex problems and create digital experiences that make a real impact. Whether it&apos;s crafting a seamless user interface or architecting a robust backend database, I bring dedication and innovation to every project.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-4 flex flex-col items-start gap-3 hoverEffect h-full">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{stat.label}</h4>
                    <p className="text-sm text-muted-foreground">{stat.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
