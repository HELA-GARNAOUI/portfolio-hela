"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

const certificates = [
  { name: "Business Innovation Plan", issuer: "Startup Challenge", date: "2023" },
  { name: "JCI Leadership & Management", issuer: "JCI", date: "2022" },
  { name: "Employment Office Training", issuer: "National Employment Office", date: "2023" },
  { name: "Applied AI and Machine Learning", issuer: "Coursera", date: "2023" },
  { name: "Full Stack Web Development", issuer: "Udacity", date: "2022" },
  { name: "Advanced Database Architectures", issuer: "Data Academy", date: "2024" },
  { name: "National Hackathon Winner", issuer: "DevFest", date: "2023" },
];

export function CertificationsSection() {
  return (
    <Section id="certificates" title="Certifications" subtitle="Continuous Learning">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <GlassCard hoverEffect className="group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {cert.issuer}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-xs font-medium text-white/50">{cert.date}</span>
                <button className="text-primary hover:text-white transition-colors interactive">
                  <ExternalLink size={16} />
                </button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
