"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  MonitorSmartphone, 
  BrainCircuit, 
  Database, 
  Network, 
  Palette, 
  Server, 
  Globe, 
  Smartphone 
} from "lucide-react";

const services = [
  { title: "Full Stack Development", icon: MonitorSmartphone, desc: "End-to-end web applications built with scalable architectures and modern frameworks." },
  { title: "AI Solutions", icon: BrainCircuit, desc: "Intelligent systems integrating machine learning and cutting-edge AI technologies." },
  { title: "Backend Systems", icon: Database, desc: "Development of robust backend systems and database architectures." },
  { title: "API Development", icon: Network, desc: "Robust and secure RESTful APIs to connect your services and data seamlessly." },
  { title: "UI/UX Design", icon: Palette, desc: "Intuitive, premium, and user-centric designs that engage and convert." },
  { title: "Database Design", icon: Server, desc: "Optimized database structures for performance, security, and scalability." },
  { title: "Website Development", icon: Globe, desc: "High-performance, SEO-optimized, and visually stunning corporate websites." },
  { title: "Mobile Friendly Apps", icon: Smartphone, desc: "Responsive applications that deliver perfect experiences across all devices." },
];

export function ServicesSection() {
  return (
    <Section id="services" title="My Services" subtitle="What I can do for you">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <GlassCard hoverEffect className="h-full group">
              <div className="w-14 h-14 rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center text-white group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
