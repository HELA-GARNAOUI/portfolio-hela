"use client"

import { useState, useRef, useEffect } from "react"
import { ExternalLink, Github, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with product management, shopping cart, and secure payment integration.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Spring Boot", "MySQL", "Stripe"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, team features, and progress tracking.",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application displaying forecasts, maps, and weather alerts using external APIs.",
    image: "/projects/weather.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "API"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Blog CMS",
    description: "A content management system for bloggers with markdown support, SEO optimization, and analytics.",
    image: "/projects/blog.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "REST API Service",
    description: "A scalable RESTful API with authentication, rate limiting, and comprehensive documentation.",
    image: "/projects/api.jpg",
    technologies: ["Java", "Spring Boot", "MySQL", "Docker"],
    category: "Backend",
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills with smooth animations.",
    image: "/projects/portfolio.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

const categories = ["All", "Full Stack", "Frontend", "Backend"]

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    }, { threshold: 0.1 })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return isInView
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef)

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Featured Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className={`group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 
                transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2
                ${isInView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary">
                  <FolderOpen className="w-12 h-12 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
