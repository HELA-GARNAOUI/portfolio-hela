"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "Software Engineering Degree",
    organization: "University of Tunisia",
    period: "2020 - 2024",
    description: "Studied software engineering with a focus on web development, databases, and software architecture. Completed multiple projects and internships.",
  },
  {
    type: "work",
    title: "Full Stack Developer Intern",
    organization: "Tech Company",
    period: "Summer 2023",
    description: "Developed and maintained web applications using React and Spring Boot. Collaborated with the team on database design and API development.",
  },
  {
    type: "education",
    title: "Web Development Certification",
    organization: "Online Academy",
    period: "2022",
    description: "Completed an intensive web development program covering modern frameworks, best practices, and deployment strategies.",
  },
  {
    type: "work",
    title: "Freelance Developer",
    organization: "Self-employed",
    period: "2022 - Present",
    description: "Building custom web solutions for clients, including e-commerce platforms, business websites, and web applications.",
  },
]

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

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Experience & Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`} />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } ${isInView ? (index % 2 === 0 ? 'animate-slide-in-right' : 'animate-slide-in-left') : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
              >
                {/* Icon */}
                <div className={`absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10 
                  ${isInView ? 'animate-scale-in' : 'opacity-0'} hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300`}
                  style={{ animationDelay: `${index * 150 + 100}ms`, animationFillMode: 'backwards' }}
                >
                  {item.type === "education" ? (
                    <GraduationCap className="w-4 h-4 text-primary" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-primary" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                    <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.organization}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
