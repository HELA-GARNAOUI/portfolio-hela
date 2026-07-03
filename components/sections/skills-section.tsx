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

const allSkills = [
  // Frontend
  {
    name: "React", color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Next.js", color: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <circle cx="12" cy="12" r="12" fill="#000" />
        <path d="M9.5 7.5v9l8-9v9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "TypeScript", color: "#3178C6",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <text x="2.5" y="17" fontSize="9" fill="white" fontWeight="bold" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  {
    name: "JavaScript", color: "#F7DF1E",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <text x="2.5" y="17" fontSize="9" fill="#333" fontWeight="bold" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  {
    name: "HTML5", color: "#E34F26",
    icon: (
      <svg viewBox="0 0 24 24" fill="#E34F26" className="w-8 h-8">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
  },
  {
    name: "CSS3", color: "#1572B6",
    icon: (
      <svg viewBox="0 0 24 24" fill="#1572B6" className="w-8 h-8">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.003-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
  },
  {
    name: "Tailwind", color: "#06B6D4",
    icon: (
      <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-8 h-8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Bootstrap", color: "#7952B3",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="4" fill="#7952B3" />
        <text x="4" y="17" fontSize="11" fill="white" fontWeight="bold" fontFamily="serif">B</text>
      </svg>
    ),
  },
  // Backend
  {
    name: "Node.js", color: "#539E43",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M12 1.85L1 7.7v8.6L12 22.15l11-5.85V7.7z" fill="#539E43" />
        <text x="5.5" y="16" fontSize="7" fill="white" fontWeight="bold" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  {
    name: "Express", color: "#aaaaaa",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#1a1a1a" />
        <text x="1" y="16" fontSize="7.5" fill="#aaa" fontWeight="bold" fontFamily="monospace">EXP</text>
      </svg>
    ),
  },
  {
    name: "Django", color: "#44B78B",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="4" fill="#092E20" />
        <text x="2.5" y="17" fontSize="9" fill="#44B78B" fontWeight="bold" fontFamily="sans-serif">DJ</text>
      </svg>
    ),
  },
  {
    name: "Flask", color: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#222" />
        <path d="M9 4h1v6L6 18h12l-4-8V4h1M9 4h6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Python", color: "#FFC331",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M11.99 0C5.44 0 5.82 2.8 5.82 2.8l.01 2.9h6.28v.87H3.67S0 6.17 0 12.79s3.17 6.4 3.17 6.4h1.89v-3.08s-.1-3.17 3.12-3.17h5.38s3.02.05 3.02-2.93V3.07S17.05 0 11.99 0zm-3 1.73a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" fill="#366994" />
        <path d="M12.01 24c6.55 0 6.17-2.8 6.17-2.8l-.01-2.9h-6.28v-.87h8.44S24 17.83 24 11.21s-3.17-6.4-3.17-6.4h-1.89v3.08s.1 3.17-3.12 3.17H10.44s-3.02-.05-3.02 2.93v4.94S6.95 24 12.01 24zm3-1.73a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z" fill="#FFC331" />
      </svg>
    ),
  },
  {
    name: "PHP", color: "#777BB4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <ellipse cx="12" cy="12" rx="12" ry="7" fill="#777BB4" />
        <text x="4" y="16" fontSize="8" fill="white" fontWeight="bold" fontFamily="monospace">PHP</text>
      </svg>
    ),
  },
  // Databases
  {
    name: "MongoDB", color: "#47A248",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.051-1.633-.197-2.218z" fill="#47A248" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL", color: "#336791",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <circle cx="12" cy="12" r="12" fill="#336791" />
        <text x="4.5" y="16" fontSize="8" fill="white" fontWeight="bold" fontFamily="monospace">PG</text>
      </svg>
    ),
  },
  {
    name: "MySQL", color: "#00758F",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#00758F" />
        <text x="1" y="16" fontSize="7" fill="white" fontWeight="bold" fontFamily="monospace">SQL</text>
      </svg>
    ),
  },
  {
    name: "SQLite", color: "#67ADDE",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#003B57" />
        <text x="1" y="16" fontSize="6.5" fill="#67ADDE" fontWeight="bold" fontFamily="monospace">SQLit</text>
      </svg>
    ),
  },
  // Tools
  {
    name: "Git", color: "#F05032",
    icon: (
      <svg viewBox="0 0 24 24" fill="#F05032" className="w-8 h-8">
        <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 1 1-1.102 1.036l-2.48-2.48v6.522a1.84 1.84 0 1 1-1.516-.018V9.082a1.836 1.836 0 0 1-.998-2.409L7.6 3.904.452 11.052a1.55 1.55 0 0 0 0 2.188l10.478 10.478a1.55 1.55 0 0 0 2.189 0l10.427-10.428a1.55 1.55 0 0 0 0-2.36z" />
      </svg>
    ),
  },
  {
    name: "GitHub", color: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <circle cx="12" cy="12" r="12" fill="#1b1f23" />
        <path d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 4.3 2.79 7.95 6.66 9.24.49.09.67-.21.67-.47v-1.65c-2.71.59-3.28-1.31-3.28-1.31-.44-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.87 1.49 2.29 1.06 2.85.81.09-.63.34-1.06.62-1.3-2.17-.25-4.45-1.08-4.45-4.83 0-1.07.38-1.94 1.01-2.62-.1-.25-.44-1.24.1-2.58 0 0 .82-.26 2.7 1.01A9.4 9.4 0 0 1 12 7.14a9.4 9.4 0 0 1 2.46.33c1.87-1.27 2.69-1.01 2.69-1.01.54 1.34.2 2.33.1 2.58.63.68 1.01 1.55 1.01 2.62 0 3.76-2.29 4.58-4.47 4.82.35.3.66.9.66 1.82v2.7c0 .26.18.57.67.47A9.75 9.75 0 0 0 21.75 12 9.75 9.75 0 0 0 12 2.25z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Docker", color: "#2496ED",
    icon: (
      <svg viewBox="0 0 24 24" fill="#2496ED" className="w-8 h-8">
        <path d="M13.98 11.08h2.12v-1.93h-2.12v1.93zm-2.95 0h2.12v-1.93h-2.12v1.93zm-2.95 0h2.12v-1.93H8.08v1.93zm-2.95 0h2.12v-1.93H5.13v1.93zm5.9-2.96h2.12V6.19h-2.12v1.93zm-2.95 0h2.12V6.19H8.08v1.93zM23.82 11.6a3.04 3.04 0 0 0-1.93-.63c-.32-1.83-1.62-2.72-1.73-2.79l-.35-.22-.25.33c-.32.44-.54 1-.6 1.57-.11.55-.04 1.1.2 1.59a3.4 3.4 0 0 1-1.18.27H.18l-.06.36c-.18 1.09-.18 4.46 2.11 6.17 1.1.83 2.71 1.25 4.79 1.25 4.38 0 7.73-2.03 9.54-5.67a7.26 7.26 0 0 0 2.92-.08c.89-.26 1.82-.88 2.34-2.15z" />
      </svg>
    ),
  },
  {
    name: "Postman", color: "#FF6C37",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <circle cx="12" cy="12" r="12" fill="#FF6C37" />
        <circle cx="12" cy="12" r="5" fill="white" opacity="0.9" />
        <circle cx="12" cy="12" r="2.5" fill="#FF6C37" />
      </svg>
    ),
  },
  {
    name: "Figma", color: "#1ABCFE",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4z" fill="#0ACF83" />
        <path d="M4 12c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" fill="#A259FF" />
        <path d="M4 4c0-2.21 1.79-4 4-4h4v8H8C5.79 8 4 6.21 4 4z" fill="#F24E1E" />
        <path d="M12 0h4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V0z" fill="#FF7262" />
        <path d="M20 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" fill="#1ABCFE" />
      </svg>
    ),
  },
  {
    name: "PlatformIO", color: "#F5822A",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="4" fill="#F5822A" />
        <text x="2" y="16" fontSize="7" fill="white" fontWeight="bold" fontFamily="monospace">PIO</text>
      </svg>
    ),
  },
  {
    name: "ESP32", color: "#E7352C",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#E7352C" />
        <text x="1" y="16" fontSize="6.5" fill="white" fontWeight="bold" fontFamily="monospace">ESP32</text>
      </svg>
    ),
  },
  {
    name: "ESP8266", color: "#00979D",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#00979D" />
        <text x="1" y="16" fontSize="5.5" fill="white" fontWeight="bold" fontFamily="monospace">8266</text>
      </svg>
    ),
  },
  // Other
  {
    name: "REST API", color: "#6BA539",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#1e2a3a" />
        <text x="1.5" y="16" fontSize="6.5" fill="#6BA539" fontWeight="bold" fontFamily="monospace">REST</text>
      </svg>
    ),
  },
  {
    name: "JWT", color: "#d63aff",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#000" />
        <text x="2" y="16" fontSize="8" fill="#d63aff" fontWeight="bold" fontFamily="monospace">JWT</text>
      </svg>
    ),
  },
  {
    name: "ML", color: "#FF6F00",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#1a237e" />
        <circle cx="6" cy="8" r="2" fill="#FF6F00" />
        <circle cx="18" cy="8" r="2" fill="#FF6F00" />
        <circle cx="12" cy="16" r="2" fill="#FF6F00" />
        <line x1="6" y1="8" x2="12" y2="16" stroke="#FF6F00" strokeWidth="1" />
        <line x1="18" y1="8" x2="12" y2="16" stroke="#FF6F00" strokeWidth="1" />
        <line x1="6" y1="8" x2="18" y2="8" stroke="#FF6F00" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "AI", color: "#9C27B0",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#1a0033" />
        <circle cx="12" cy="9" r="3" fill="none" stroke="#9C27B0" strokeWidth="1.5" />
        <path d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#9C27B0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="12" cy="9" r="1" fill="#9C27B0" />
      </svg>
    ),
  },
  {
    name: "IoT", color: "#00BCD4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#002633" />
        <circle cx="12" cy="12" r="3" fill="#00BCD4" />
        <path d="M5 12a7 7 0 0 1 7-7M19 12a7 7 0 0 1-7 7" stroke="#00BCD4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M2 12a10 10 0 0 1 10-10M22 12a10 10 0 0 1-10 10" stroke="#00BCD4" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
];

const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

export function SkillsSection() {
  return (
    <Section id="skills" title="My Skills" subtitle="Technologies I work with">

      {/* Left & right fade masks */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 w-28 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-28 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 — scrolls LEFT */}
        <div className="flex overflow-hidden mb-5">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-5 will-change-transform"
          >
            {[...row1, ...row1].map((skill, i) => (
              <motion.div
                key={`r1-${i}`}
                whileHover={{ scale: 1.12, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-shrink-0 flex flex-col items-center gap-3 glass px-6 py-5 rounded-2xl border border-border/40 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,107,53,0.15)] cursor-default"
                style={{ minWidth: 100 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: "linear" }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-xs font-semibold text-center leading-tight" style={{ color: skill.color }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 — scrolls RIGHT */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-5 will-change-transform"
          >
            {[...row2, ...row2].map((skill, i) => (
              <motion.div
                key={`r2-${i}`}
                whileHover={{ scale: 1.12, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-shrink-0 flex flex-col items-center gap-3 glass px-6 py-5 rounded-2xl border border-border/40 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,107,53,0.15)] cursor-default"
                style={{ minWidth: 100 }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 5 + (i % 5), repeat: Infinity, ease: "linear" }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-xs font-semibold text-center leading-tight" style={{ color: skill.color }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Skill Category Cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillsData.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <GlassCard hoverEffect className="h-full">
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full inline-block" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + skillIdx * 0.04 }}
                    className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-white/90 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

    </Section>
  );
}
