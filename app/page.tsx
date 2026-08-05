import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import WorkSection from "./components/WorkSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <WorkSection />
      <Testimonials/>
      <ContactSection />
    </>
    
       
    
  );
}