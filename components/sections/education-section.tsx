"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

const educationData = [
  {
    degree: "Bachelor's Degree in General Computer Science",
    institution: "Conservatoire National des Arts et Métiers (CNAM), Paris, France",
    location: "Delivered through IMSET Sousse, Tunisia",
    date: "2023 - 2026",
    courses: [
      "Full Stack Web Development", "Software Engineering", "Artificial Intelligence", 
      "Database Systems", "Web Technologies", "Object-Oriented Programming", 
      "Software Architecture", "Operating Systems", "Computer Networks", "Project Management"
    ]
  },
  {
    degree: "Higher Technician Certificate (BTS) in Web Development",
    institution: "IMSET Sousse",
    location: "Sousse, Tunisia",
    date: "2021 - 2023",
    courses: [
      "HTML5, CSS3, JavaScript", "PHP & MySQL", "Python Programming", 
      "Java Programming", "Web Application Development", "UI/UX Design", 
      "Database Design", "Software Engineering Fundamentals", "Git & Version Control", "Agile Development"
    ]
  }
];

export function EducationSection() {
  return (
    <Section id="education" title="Education" subtitle="Academic Background">
      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <GlassCard hoverEffect className="p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-primary pointer-events-none">
                <GraduationCap size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-primary font-medium text-lg">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-sm text-muted-foreground border-b border-white/10 pb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{edu.date}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span 
                        key={i} 
                        className="text-xs md:text-sm bg-secondary/50 border border-white/5 px-3 py-1.5 rounded-full text-white/80"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
