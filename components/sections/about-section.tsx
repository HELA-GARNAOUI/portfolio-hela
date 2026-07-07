"use client";

import { motion } from "framer-motion";
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
      <div className="flex justify-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full space-y-8 text-center"
        >
          <h3 className="text-3xl font-semibold text-white">
            Passionate Developer &amp; AI Innovator
          </h3>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg text-justify">
            <p>
              I am Hela Garnaoui, a dedicated Full Stack Developer and AI enthusiast with a deep passion for software engineering. I specialize in building scalable web applications, integrating AI-driven solutions, and optimizing performance.
            </p>
            <p>
              My journey in tech is driven by a constant desire to solve complex problems and create digital experiences that make a real impact. Whether it&apos;s crafting a seamless user interface or architecting a robust backend database, I bring dedication and innovation to every project.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-4 flex flex-col items-center gap-3 hoverEffect h-full text-center">
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
