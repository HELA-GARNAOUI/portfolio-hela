import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Calendar, User, Tag } from "lucide-react";
import { projects } from "@/lib/projects-data";
import { ProjectGallery } from "@/components/project-gallery";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Hela Garnaoui`,
    description: project.desc,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-white">
      {/* ── Hero Banner ── */}
      <div className="relative w-full h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse at 60% 40%, ${project.color}55 0%, transparent 70%)`,
          }}
        />

        {/* Back link */}
        <div className="absolute top-6 left-6 z-20">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium border border-white/10 hover:border-white/30 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>

        {/* Badge + title */}
        <div className="absolute bottom-10 left-0 right-0 px-8 md:px-16 z-10">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-[10px] font-black px-3 py-1 rounded-full"
              style={{ background: project.color, color: "#000" }}
            >
              {project.badge}
            </span>
            <span className="text-xs text-white/50 font-mono tracking-widest">
              TYPE // {project.type}
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-black italic uppercase leading-tight"
            style={{ color: project.color }}
          >
            {project.title}
          </h1>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-16">

        {/* Meta row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Calendar size={16} />, label: "Year", value: project.year },
            { icon: <User size={16} />, label: "Role", value: project.role },
            { icon: <Tag size={16} />, label: "Category", value: project.category },
            {
              icon: <CheckCircle2 size={16} />,
              label: "Status",
              value: project.status,
              highlight: project.status === "Completed",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="glass rounded-2xl p-4 border border-white/5 flex flex-col gap-2"
            >
              <span className="flex items-center gap-1.5 text-xs text-white/40 font-mono">
                {item.icon} {item.label}
              </span>
              <span
                className="text-sm font-bold"
                style={item.highlight ? { color: project.color } : {}}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Description + Features side by side */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Full description */}
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: project.color }}>
              About the Project
            </h2>
            <div className="space-y-4">
              {project.fullDesc.trim().split("\n\n").map((para, i) => (
                <p key={i} className="text-white/65 leading-relaxed text-sm">
                  {para.trim()}
                </p>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: project.color }}>
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: project.color }} />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech stack */}
        <div>
          <h2 className="text-2xl font-black mb-6" style={{ color: project.color }}>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-all hover:scale-105"
                style={{
                  borderColor: `${project.color}50`,
                  color: project.color,
                  background: `${project.color}12`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Demo Video */}
        {/* @ts-ignore - 'video' property may not be defined in Project type yet */}
        {project.video && (
          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: project.color }}>
              Demo Video
            </h2>
            <div className="relative w-full rounded-2xl overflow-hidden glass border border-white/10 shadow-xl">
              {/* @ts-ignore */}
              <video
                src={project.video}
                controls
                className="w-full h-auto max-h-[70vh] object-contain bg-black/50"
              />
            </div>
          </div>
        )}

        {/* Gallery */}
        <ProjectGallery gallery={project.gallery || []} color={project.color} />

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={project.demo}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-wider transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: project.color, color: "#000", boxShadow: `0 0 20px ${project.color}40` }}
          >
            Live Demo <ExternalLink size={16} />
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-wider glass border border-white/10 hover:border-white/30 transition-all hover:scale-105"
          >
            View Code <Github size={16} />
          </a>
        </div>

        {/* ── Other Projects ── */}
        <div>
          <h2 className="text-2xl font-black mb-8 text-white/80">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-[9px] font-black px-2 py-0.5 rounded-full"
                    style={{ background: p.color, color: "#000" }}
                  >
                    {p.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3
                    className="font-black italic uppercase text-sm group-hover:opacity-80 transition-opacity"
                    style={{ color: p.color }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-white/45 mt-1 line-clamp-2">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
