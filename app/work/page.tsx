import type { Metadata } from "next";
import WorkHero from "../components/WorkHero";
import WorkProjects from "../components/WorkProjects";
import Footer from "../components/Footer";
import LetsTalkSection from "../components/LetsTalkSection";

export const metadata: Metadata = {
  title: "Work | Elevate",
  description: "Comprehensive case-studies, Exceptional Results",
};

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <WorkHero />
      <WorkProjects />
      <LetsTalkSection />
      <Footer />

    </main>
  );
}
