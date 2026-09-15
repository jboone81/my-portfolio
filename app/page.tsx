import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import SpoilerSection from '@/components/SpoilerSection'
import ProjectsSection from '@/components/ProjectSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
 
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SpoilerSection />
      <ContactSection />
      <Footer />
    </>
  )
}