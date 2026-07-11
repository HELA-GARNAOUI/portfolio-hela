"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { projects } from "@/lib/projects-data";



const N = projects.length;
const SPEED = 360 / 36000; // full rotation in 36 seconds (deg/ms)

export function ProjectsSection() {
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const angleRef = useRef(0);
  const targetAngleRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  
  // Responsive dimensions state
  const [dims, setDims] = useState({ cardW: 210, cardH: 430, radius: 450 });

  // DOM refs for direct style manipulation (no re-renders)
  const ringRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>(Array(N).fill(null));

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // Adjust dimensions dynamically for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        // Small mobile
        setDims({ cardW: 130, cardH: 265, radius: 200 });
      } else if (w < 768) {
        // Mobile
        setDims({ cardW: 165, cardH: 330, radius: 280 });
      } else if (w < 1024) {
        // Tablet
        setDims({ cardW: 190, cardH: 390, radius: 380 });
      } else {
        // Desktop
        setDims({ cardW: 210, cardH: 430, radius: 450 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const tick = (ts: number) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;

      if (!pausedRef.current) {
        targetAngleRef.current += SPEED * dt;
      }

      // Smoothly interpolate current angle towards the target angle
      const diff = targetAngleRef.current - angleRef.current;
      angleRef.current += diff * 0.08;

      const a = angleRef.current;

      // Rotate the ring
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translateX(-50%) translateY(-50%) rotateY(${a}deg)`;
      }

      // Counter-rotate each card so it always faces the viewer
      cardRefs.current.forEach((el, i) => {
        if (el) {
          const base = (360 / N) * i;
          // Exact inverse of ring + slot rotation keeps card face-on
          el.style.transform = `rotateY(${-(a + base)}deg)`;
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <Section id="projects" title="Featured Projects" subtitle="My recent work">
      {/* 3-D Circular Carousel */}
      <div
        className="relative mx-auto overflow-visible group"
        style={{ height: dims.cardH + 80 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={() => { targetAngleRef.current -= 360 / N; }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full glass border border-white/10 text-white/50 hover:text-primary hover:border-primary/50 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 -ml-4 md:-ml-8"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={() => { targetAngleRef.current += 360 / N; }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full glass border border-white/10 text-white/50 hover:text-primary hover:border-primary/50 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 -mr-4 md:-mr-8"
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
        {/* Perspective wrapper */}
        <div
          className="absolute inset-0"
          style={{ perspective: 1200, perspectiveOrigin: "50% 45%" }}
        >
          {/* Rotating ring — positioned at center */}
          <div
            ref={ringRef}
            className="absolute left-1/2 top-1/2"
            style={{
              width: 0,
              height: 0,
              transformStyle: "preserve-3d",
              transform: "translateX(-50%) translateY(-50%) rotateY(0deg)",
            }}
          >
            {projects.map((project, i) => {
              const slotAngle = (360 / N) * i;
              return (
                /* Card slot — places the card on the circle */
                <div
                  key={project.id}
                  style={{
                    position: "absolute",
                    width: dims.cardW,
                    height: dims.cardH,
                    left: -dims.cardW / 2,
                    top: -dims.cardH / 2,
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${slotAngle}deg) translateZ(${dims.radius}px)`,
                    transition: "transform 0.5s ease-out", // smooth transition on resize
                  }}
                >
                  {/* Counter-rotation wrapper — keeps card face-on */}
                  <div
                    ref={(el) => { cardRefs.current[i] = el; }}
                    style={{
                      width: "100%",
                      height: "100%",
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${-slotAngle}deg)`,
                    }}
                  >
                    <PhoneCard project={project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ground glow */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
          style={{
            width: dims.radius * 2 + dims.cardW,
            height: 50,
            background:
              "radial-gradient(ellipse, rgba(255,107,53,0.14) 0%, transparent 70%)",
            transition: "width 0.5s ease-out",
          }}
        />

        {/* Pause pill */}
        {paused && (
          <div className="absolute top-4 right-6 z-30 pointer-events-none glass px-3 py-1 rounded-full text-xs font-mono text-primary border border-primary/30">
            ⏸ PAUSED
          </div>
        )}
      </div>
    </Section>
  );
}

/* ─── Phone-style project card ─── */
function PhoneCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.id}`}
      className="w-full h-full flex flex-col rounded-[1.2rem] sm:rounded-[2rem] overflow-hidden border-2 cursor-pointer no-underline"
      style={{
        background: "var(--card)",
        backdropFilter: "blur(12px)",
        borderColor: hovered ? project.color : "var(--border)",
        boxShadow: hovered
          ? `0 0 45px ${project.color}35, 0 15px 45px rgba(0,0,0,0.15)`
          : "0 10px 30px rgba(0,0,0,0.03)",
        transform: hovered ? "scale(1.05) translateY(-5px)" : "scale(1)",
        transition: "all 0.3s ease-out",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Notch bar */}
      <div className="relative flex-shrink-0 h-3 sm:h-6 flex items-center justify-center">
        <div className="w-8 sm:w-14 h-0.5 sm:h-1 bg-foreground/10 rounded-full" />
      </div>

      {/* Screenshot */}
      <div className="relative flex-shrink-0 h-24 sm:h-32 md:h-44">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${project.color}10 0%, var(--background) 100%)`,
          }}
        />
        <span
          className="absolute top-2 sm:top-4 left-2 sm:left-3 text-[7px] sm:text-[9px] font-black px-1.5 sm:px-2 py-0.5 rounded-full z-10"
          style={{ background: project.color, color: "#000" }}
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-2 sm:p-4 gap-1 sm:gap-2">
        {/* ID + Type */}
        <div className="flex items-center justify-between">
          <span
            className="text-[7px] sm:text-[9px] font-bold tracking-widest border px-1.5 sm:px-2 py-0.2 sm:py-0.5 rounded-full"
            style={{ color: project.color, borderColor: `${project.color}50` }}
          >
          {project.badge}
          </span>
          <span className="text-[7px] sm:text-[8px] text-muted-foreground tracking-wider font-mono">
            {project.type}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[11px] sm:text-sm font-black italic uppercase leading-tight transition-colors duration-300 line-clamp-1"
          style={{ color: hovered ? project.color : "var(--foreground)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[8px] sm:text-[10px] text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {project.desc}
        </p>

        {/* Tech tags */}
        <div className="hidden sm:flex flex-wrap gap-1">
          {project.tech.slice(0, 2).map((t) => (
            <span key={t} className="text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground border border-border font-mono">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-1.5 mt-auto pt-0.5">
          <span
            className="flex-1 flex items-center justify-center gap-0.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[7px] sm:text-[9px] font-black tracking-widest transition-all duration-300"
            style={{
              background: hovered ? project.color : "var(--secondary)",
              color: hovered ? "#000" : project.color,
              border: `1px solid ${project.color}60`,
            }}
          >
            RECORD <ArrowUpRight size={8} className="sm:inline" />
          </span>
          <span
            className="flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 rounded-lg sm:rounded-xl bg-secondary border border-border transition-colors"
          >
            <Github size={10} className="text-muted-foreground" />
          </span>
        </div>
      </div>
    </Link>
  );
}
