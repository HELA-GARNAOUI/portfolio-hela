"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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

export function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ email: "", message: "" })
    alert("Message sent successfully!")
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"Let's"} Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {"I'm"} always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`order-2 md:order-1 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card resize-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full gap-2 group relative overflow-hidden" 
                disabled={isSubmitting}
              >
                <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`order-1 md:order-2 flex flex-col justify-center ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Feel free to reach out through the contact form or connect with me on social media. 
                  I typically respond within 24-48 hours.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hela@example.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">hela@example.com</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">github.com/helagarneoui</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">linkedin.com/in/helagarneoui</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
