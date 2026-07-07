import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/sections/about-section").then(mod => mod.AboutSection));
const SkillsSection = dynamic(() => import("@/components/sections/skills-section").then(mod => mod.SkillsSection));
const ServicesSection = dynamic(() => import("@/components/sections/services-section").then(mod => mod.ServicesSection));
const EducationSection = dynamic(() => import("@/components/sections/education-section").then(mod => mod.EducationSection));
const ExperienceSection = dynamic(() => import("@/components/sections/experience-section").then(mod => mod.ExperienceSection));
const ProjectsSection = dynamic(() => import("@/components/sections/projects-section").then(mod => mod.ProjectsSection));
const CertificationsSection = dynamic(() => import("@/components/sections/certifications-section").then(mod => mod.CertificationsSection));
const ContactSection = dynamic(() => import("@/components/sections/contact-section").then(mod => mod.ContactSection));
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Content */}
      <div className="flex flex-col gap-0">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <EducationSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
