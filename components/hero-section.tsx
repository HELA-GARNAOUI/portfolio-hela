"use client"

import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-500" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4 animate-slide-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          Welcome to my portfolio
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            {"Hi, I'm "}
          </span>
          <span className="inline-block text-primary animate-slide-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Hela Garneoui
          </span>
          <br />
          <span className="inline-block text-muted-foreground animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Software Developer
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty animate-slide-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          I build modern web applications and software solutions that are efficient, scalable, and user-friendly.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <Button size="lg" className="group relative overflow-hidden" asChild>
            <a href="#projects">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="group hover:border-primary hover:text-primary transition-all duration-300" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}
