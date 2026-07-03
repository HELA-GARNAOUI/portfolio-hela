"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

const projects = [
  {
    title: "AI CV Matching",
    category: "AI",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
    desc: "An intelligent platform that uses NLP to match candidates' resumes with job descriptions accurately.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "#",
    demo: "#"
  },
  {
    title: "Management Dashboard",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    desc: "A comprehensive management system customized for small to medium businesses.",
    tech: ["Node.js", "Python", "PostgreSQL", "Next.js"],
    github: "#",
    demo: "#"
  },
  {
    title: "SkillBridge",
    category: "Web",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    desc: "A marketplace connecting mentors and mentees based on specific skill requirements.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "Love Connect",
    category: "Web",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
    desc: "A modern dating application with real-time chat and advanced matching algorithms.",
    tech: ["React Native", "Node.js", "Socket.io", "Firebase"],
    github: "#",
    demo: "#"
  },
  {
    title: "Rainify",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=800&auto=format&fit=crop",
    desc: "Smart weather and irrigation system using IoT sensors and machine learning predictions.",
    tech: ["ESP32", "C++", "Python", "React"],
    github: "#",
    demo: "#"
  },
  {
    title: "TweetClone",
    category: "Web",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800&auto=format&fit=crop",
    desc: "A fully functional microblogging platform mimicking Twitter's core functionalities.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    title: "DigiFlow Agency",
    category: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    desc: "A premium landing page for a digital marketing agency with smooth scroll and animations.",
    tech: ["React", "Framer Motion", "GSAP"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    category: "Web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    desc: "A luxurious, award-winning personal portfolio website featuring glassmorphism and Framer Motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#"
  }
];

const categories = ["All", "AI", "Web", "Backend", "IoT"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <Section id="projects" title="Featured Projects" subtitle="My recent work">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 interactive ${
              activeCategory === category
                ? "bg-primary text-white shadow-[0_0_15px_rgba(255,107,53,0.4)]"
                : "glass text-muted-foreground hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard hoverEffect className="p-0 overflow-hidden group flex flex-col h-full">
                {/* Project Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/50 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-sm">
                    <a href={project.github} className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-primary transition-colors interactive">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-primary transition-colors interactive">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-white/5 rounded text-white/70">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {project.desc}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs text-muted-foreground bg-black/20 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
