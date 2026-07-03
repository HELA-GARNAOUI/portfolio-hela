"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's work together">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-8"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Let&apos;s build something awesome together!</h3>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-6">
            <GlassCard className="p-4 flex items-center gap-4 hoverEffect">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider">Location</h4>
                <p className="text-white font-medium">Tunisia</p>
              </div>
            </GlassCard>

            <GlassCard className="p-4 flex items-center gap-4 hoverEffect">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider">Email</h4>
                <a href="mailto:hela.garnaoui@example.com" className="text-white font-medium hover:text-primary transition-colors interactive">
                  hela.garnaoui@example.com
                </a>
              </div>
            </GlassCard>
            
            <GlassCard className="p-4 flex items-center gap-4 hoverEffect">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider">Phone</h4>
                <p className="text-white font-medium">+216 XX XXX XXX</p>
              </div>
            </GlassCard>
          </div>

          <div className="pt-4">
            <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-primary hover:-translate-y-1 transition-all interactive">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-primary hover:-translate-y-1 transition-all interactive">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-primary hover:-translate-y-1 transition-all interactive">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-primary hover:-translate-y-1 transition-all interactive">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <GlassCard className="p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full">
                Send Message <Send size={18} className="ml-2" />
              </MagneticButton>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
