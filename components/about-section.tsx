"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Calendar, Code } from "lucide-react"

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    }, { threshold: 0.2 })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return isInView
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className={`relative ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary group">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center relative">
                <div className="text-8xl font-bold text-primary/30 group-hover:scale-110 transition-transform duration-500">HG</div>
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-500" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10 group-hover:bg-primary/20 transition-colors duration-500" />
            <div className={`absolute -top-4 -left-4 w-20 h-20 bg-primary/5 rounded-2xl -z-10 ${isInView ? 'animate-float animation-delay-200' : ''}`} />
          </div>

          {/* About Content */}
          <div className={`${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Passionate about building great software
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a passionate software developer focused on building efficient and scalable applications. 
              With expertise in both frontend and backend technologies, I create comprehensive solutions 
              that solve real-world problems. I love learning new technologies and continuously improving 
              my skills to deliver high-quality software.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I am not coding, you can find me exploring new frameworks, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground group hover:text-foreground transition-colors duration-300">
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>Tunisia</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground group hover:text-foreground transition-colors duration-300">
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <span>23 years old</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground group hover:text-foreground transition-colors duration-300">
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
                  <Code className="h-4 w-4 text-primary" />
                </div>
                <span>Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
