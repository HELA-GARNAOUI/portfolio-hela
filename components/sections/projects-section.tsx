"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { projects } from "@/lib/projects-data";



const N = projects.length;
const CARD_W = 210;
const CARD_H = 430;
const RADIUS = Math.round((CARD_W * N) / (2 * Math.PI)) + 100; // ≈ 450px
const SPEED = 360 / 36000; // full rotation in 36 seconds (deg/ms)

export function ProjectsSection() {
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const angleRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // DOM refs for direct style manipulation (no re-renders)
  const ringRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>(Array(N).fill(null));

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const tick = (ts: number) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;

      if (!pausedRef.current) {
        angleRef.current = (angleRef.current + SPEED * dt) % 360;
      }

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
        className="relative mx-auto overflow-visible"
        style={{ height: CARD_H + 140 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
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
                    width: CARD_W,
                    height: CARD_H,
                    left: -CARD_W / 2,
                    top: -CARD_H / 2,
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${slotAngle}deg) translateZ(${RADIUS}px)`,
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
            width: RADIUS * 2 + CARD_W,
            height: 50,
            background:
              "radial-gradient(ellipse, rgba(255,107,53,0.14) 0%, transparent 70%)",
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
      className="w-full h-full flex flex-col rounded-[2rem] overflow-hidden border-2 cursor-pointer no-underline"
      style={{
        background: "var(--card)",
        backdropFilter: "blur(12px)",
        borderColor: hovered ? project.color : "var(--border)",
        boxShadow: hovered
          ? `0 0 40px ${project.color}44, 0 24px 60px rgba(0,0,0,0.15)`
          : "0 10px 40px rgba(0,0,0,0.05)",
        transform: hovered ? "scale(1.05) translateY(-8px)" : "scale(1)",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Notch bar */}
      <div className="relative flex-shrink-0 h-6 flex items-center justify-center">
        <div className="w-14 h-1 bg-foreground/10 rounded-full" />
      </div>

      {/* Screenshot */}
      <div className="relative flex-shrink-0" style={{ height: 175 }}>
        <Image src={project.image} alt={project.title} fill className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${project.color}15 0%, var(--background) 100%)`,
          }}
        />
        <span
          className="absolute top-4 left-3 text-[9px] font-black px-2 py-0.5 rounded-full z-10"
          style={{ background: project.color, color: "#000" }}
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* ID + Type */}
        <div className="flex items-center justify-between">
          <span
            className="text-[9px] font-bold tracking-widest border px-2 py-0.5 rounded-full"
            style={{ color: project.color, borderColor: `${project.color}50` }}
          >
          {project.badge}
          </span>
          <span className="text-[8px] text-muted-foreground tracking-wider font-mono">
            TYPE // {project.type}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-sm font-black italic uppercase leading-tight transition-colors duration-300"
          style={{ color: hovered ? project.color : "var(--foreground)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {project.desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-[8px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground border border-border font-mono">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto pt-1">
          <span
            className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-[9px] font-black tracking-widest transition-all duration-300"
            style={{
              background: hovered ? project.color : "var(--secondary)",
              color: hovered ? "#000" : project.color,
              border: `1px solid ${project.color}60`,
            }}
          >
            ACCESS_RECORD <ArrowUpRight size={9} />
          </span>
          <span
            className="flex items-center justify-center w-8 rounded-xl bg-secondary border border-border transition-colors"
          >
            <Github size={11} className="text-muted-foreground" />
          </span>
        </div>
      </div>
    </Link>
  );
}
