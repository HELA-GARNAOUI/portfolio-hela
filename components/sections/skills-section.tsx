"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Django", "Flask", "Python", "PHP"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "Figma", "PlatformIO", "ESP32", "ESP8266"],
  },
  {
    category: "Other",
    skills: ["REST API", "JWT", "Machine Learning", "Artificial Intelligence", "IoT"],
  },
];

export function SkillsSection() {
  return (
    <Section id="skills" title="My Skills" subtitle="Technologies I use">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={idx === 3 || idx === 4 ? "lg:col-span-1" : ""}
          >
            <GlassCard hoverEffect className="h-full">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full inline-block"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + skillIdx * 0.05 }}
                    className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-white/90 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors interactive"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
