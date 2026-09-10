import type { Metadata } from "next";
import WorkHero from "../components/WorkHero";
import WorkProjects from "../components/WorkProjects";
import AboutFooter from "../components/AboutFooter";

export const metadata: Metadata = {
  title: "Work | Elevate",
  description: "Comprehensive case-studies, Exceptional Results",
};

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <WorkHero />
      <WorkProjects />
      <AboutFooter />

    </main>
  );
}
