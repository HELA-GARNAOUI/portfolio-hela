"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

export function ContactSection() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's work together">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Let&apos;s build something awesome together!</h3>
          <p className="text-muted-foreground text-lg">
            Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
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
              <a href="mailto:helagarneoui@gmail.com" className="text-white font-medium hover:text-primary transition-colors interactive">
                helagarneoui@gmail.com
              </a>
            </div>
          </GlassCard>

          <GlassCard className="p-4 flex items-center gap-4 hoverEffect">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider">Phone</h4>
              <a href="tel:+21620580920" className="text-white font-medium hover:text-primary transition-colors interactive">+216 20 580 920</a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-5">Follow Me</h4>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/HELA-GARNAOUI"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center text-white hover:text-primary hover:-translate-y-1 transition-all interactive"
            >
              <Github size={22} />
            </a>
            <a
              href="http://www.linkedin.com/in/hela-garneoui-35077a282"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center text-white hover:text-primary hover:-translate-y-1 transition-all interactive"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
