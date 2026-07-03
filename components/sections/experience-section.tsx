"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

const experiences = [
  {
    type: "Internship",
    title: "Software Engineer Intern",
    company: "Tech Innovators Inc.",
    date: "Jun 2023 - Sep 2023",
    description: "Developed and maintained full-stack web applications using React and Node.js. Integrated AI APIs to enhance user experience.",
  },
  {
    type: "Freelance",
    title: "Full Stack Developer",
    company: "Upwork & Local Clients",
    date: "Jan 2023 - Present",
    description: "Delivering custom backend solutions and modern web applications for various small to medium businesses.",
  },
  {
    type: "Competition",
    title: "Winner - National Hackathon",
    company: "DevFest Tunisia",
    date: "Nov 2023",
    description: "Built an AI-powered agriculture solution in 48 hours, winning first place among 50+ participating teams.",
  },
  {
    type: "Competition",
    title: "Business Innovation Plan",
    company: "JCI Startup Challenge",
    date: "Mar 2023",
    description: "Pitched a scalable tech business plan focused on AI-driven market analysis and secured seed funding.",
  },
  {
    type: "Academic",
    title: "Senior Capstone Project",
    company: "University",
    date: "Sep 2023 - May 2024",
    description: "Developed a comprehensive management system customized for educational institutions, utilizing Next.js and PostgreSQL.",
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience" title="My Experience" subtitle="Career Journey">
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 transform md:-translate-x-1/2"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              
              {/* Center Dot */}
              <div className="absolute left-[-4px] md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_10px_rgba(255,107,53,0.8)] z-10"></div>
              
              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`w-full md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}
              >
                <GlassCard hoverEffect className="p-6 md:p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
                    {exp.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="text-sm font-medium text-white/80 mb-4 flex flex-col md:flex-row justify-between md:items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-muted-foreground">{exp.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
