"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

type BadgeType = "hackathon" | "competition" | "program" | "award";

const certificates: {
  name: string;
  issuer: string;
  date: string;
  description: string;
  type: BadgeType;
  rank?: string;
}[] = [
  {
    name: "Tunify — Travel in Tunisia",
    issuer: "Hackathon 2026",
    date: "2026",
    description: "1st place winner. Built Tunify, an innovative travel platform showcasing Tunisian destinations and experiences.",
    type: "hackathon",
    rank: "🥇 1st Place",
  },
  {
    name: "SnapCompta — AI Accounting",
    issuer: "Hackathon 2026",
    date: "2026",
    description: "1st place winner. Developed SnapCompta, an AI-powered accounting tool that automates financial document processing.",
    type: "hackathon",
    rank: "🥇 1st Place",
  },
  {
    name: "Hackathon Participant",
    issuer: "Hackathon 2025",
    date: "2025",
    description: "Participated and competed in a national-level hackathon, delivering an innovative full-stack solution within 48 hours.",
    type: "hackathon",
  },
  {
    name: "Hackathon Participant",
    issuer: "Hackathon 2024",
    date: "2024",
    description: "Competed in a hackathon challenge, building a scalable application under tight time constraints.",
    type: "hackathon",
  },
  {
    name: "Rainification Water System",
    issuer: "National Competition",
    date: "2025",
    description: "Built an automated rainwater collection and management system as a participant in a national innovation competition.",
    type: "competition",
  },
  {
    name: "Moraine Formation",
    issuer: "Bureau d'Emploi",
    date: "2026",
    description: "Obtained a certification upon completing the Moraine formation program, organized by the national employment office.",
    type: "program",
  },
  {
    name: "Business Innovation Plan (BIP)",
    issuer: "BIP Formation",
    date: "2026",
    description: "Completed the Business Innovation Plan formation and obtained an official certification in entrepreneurship and business strategy.",
    type: "program",
  },
];

export function CertificationsSection() {
  const iconMap = {
    hackathon: Zap,
    competition: Trophy,
    program: Star,
    award: Award,
  };

  const colorMap = {
    hackathon: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    competition: "bg-primary/10 text-primary border-primary/20",
    program: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    award: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  };

  const iconColorMap = {
    hackathon: "bg-blue-500/10 text-blue-400",
    competition: "bg-primary/10 text-primary",
    program: "bg-purple-500/10 text-purple-400",
    award: "bg-yellow-500/10 text-yellow-400",
  };

  return (
    <Section id="certificates" title="Achievements & Awards" subtitle="Hackathons · Competitions · Programs">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => {
          const Icon = iconMap[cert.type];
          return (
            <motion.div
              key={`${cert.name}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <GlassCard hoverEffect className="group h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${iconColorMap[cert.type]}`}>
                      <Icon size={22} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border capitalize ${colorMap[cert.type]}`}>
                      {cert.type}
                    </span>
                  </div>

                  {cert.rank && (
                    <p className="text-sm font-bold mb-2 text-yellow-400">{cert.rank}</p>
                  )}

                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-xs font-medium text-white/50">{cert.issuer}</span>
                  <span className="text-xs font-semibold text-primary">{cert.date}</span>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
