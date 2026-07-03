"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
}

export function Section({ children, id, title, subtitle, className, fullWidth = false, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative", className)} {...props}>
      <div className={cn("mx-auto px-6 md:px-12", fullWidth ? "w-full" : "container")}>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            {subtitle && (
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                {title}
              </h2>
            )}
            <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full mt-6"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
