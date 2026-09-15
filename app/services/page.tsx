import Footer from "../components/Footer";
import LetsTalkSection from "../components/LetsTalkSection";
import ServicesDetail from "../components/ServicesDetail";
import ServicesHero from "../components/ServicesHero";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesDetail />
      <LetsTalkSection />
      <Footer />
    </main>
  );
}
