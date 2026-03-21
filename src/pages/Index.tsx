import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrainingSection from "@/components/TrainingSection";
import CertificatesSection from "@/components/CertificatesSection";
import AchievementSection from "@/components/AchievementSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TrainingSection />
      <CertificatesSection />
      <AchievementSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Index;
