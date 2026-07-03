"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animation?: "typing" | "reveal" | "slideUp";
}

export function AnimatedText({ text, className, delay = 0, animation = "reveal" }: AnimatedTextProps) {
  // Typing animation variants
  const typingContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const typingChild = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
  };

  // Reveal animation variants
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay,
      },
    },
  };

  // Slide up animation variants
  const slideUpVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay,
      },
    },
  };

  if (animation === "typing") {
    // Split by character but keep spaces
    const characters = Array.from(text);
    return (
      <motion.span
        className={cn("inline-block", className)}
        variants={typingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={typingChild}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (animation === "reveal") {
    return (
      <motion.div
        className={cn(className)}
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        {text}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {text}
    </motion.div>
  );
}
