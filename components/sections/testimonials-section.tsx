"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";

const testimonials = [
  {
    name: "Ahmed Ben Ali",
    role: "CEO at Tech Innovators",
    text: "Hela is an exceptional developer. She transformed our outdated internal systems into a modern, lightning-fast application. Her understanding of AI integration gave us a huge competitive advantage.",
    initials: "AB"
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    text: "Working with Hela on the Love Connect app was a breeze. She perfectly translated our designs into flawless code with smooth animations. Highly recommend her for any front-end work.",
    initials: "SJ"
  },
  {
    name: "Youssef Mansour",
    role: "Startup Founder",
    text: "Her technical skills are only matched by her problem-solving ability. She delivered the MVP for our AI CV matching tool ahead of schedule and the code quality was impeccable.",
    initials: "YM"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Section id="testimonials" title="Testimonials" subtitle="What people say">
      <div className="max-w-4xl mx-auto relative">
        {/* Quote Icon Background */}
        <div className="absolute top-0 left-0 text-primary/10 -translate-x-1/2 -translate-y-1/2 z-0">
          <Quote size={120} />
        </div>

        <div className="relative z-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <GlassCard className="p-8 md:p-12 text-center">
                <Quote size={32} className="text-primary mx-auto mb-6 opacity-50" />
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xl">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-primary text-sm font-medium">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-primary transition-colors interactive"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 interactive ${
                  idx === currentIndex ? "bg-primary w-8" : "bg-white/20 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-primary transition-colors interactive"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
}
