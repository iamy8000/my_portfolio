import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { EducationAndExperienceSection } from "@/sections/Experiences";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header id="top"/>
      <HeroSection id="hero" />
      <AboutSection id="about"/>
      <EducationAndExperienceSection id="experiences"/>
      <ProjectsSection id ="projects" />
      <TapeSection />
      <ContactSection id="contact"/>
      <Footer />
    </div>
  );
}
