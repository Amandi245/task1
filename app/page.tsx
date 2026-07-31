import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import WorkSection from "./components/WorkSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <WorkSection />
      <Testimonials/>
    </>
    
       
    
  );
}