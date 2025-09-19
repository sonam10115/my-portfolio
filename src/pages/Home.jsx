import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillSection } from "@/components/SkillSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*theme toggle  */}
      <ThemeToggle></ThemeToggle>

      {/* background effects  */}
      <StarBackground></StarBackground>
      {/* navbar   */}
      <Navbar></Navbar>
      {/* main content */}
      <main>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <SkillSection></SkillSection>
        <ProjectSection></ProjectSection>
        <ContactSection></ContactSection>
      </main>
      {/* footer  */}
      <Footer></Footer>
    </div>
  );
};
