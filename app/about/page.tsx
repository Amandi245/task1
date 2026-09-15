import type { Metadata } from "next";
import AboutStory from "../components/AboutStory";
import AboutGlance from "../components/AboutGlance";
import AboutPurpose from "../components/AboutPurpose";
import AboutCrew from "../components/AboutCrew";
import LetsTalkSection from "../components/LetsTalkSection";

import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About | Elevate",
  description:
    "Meet Elevate — designers, storytellers, and strategists creating experiences that inspire, engage, and drive results.",
};

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#080808] [font-family:Arial,Helvetica,sans-serif]">
      <AboutStory />
      <AboutGlance />
      <AboutPurpose />
      <AboutCrew />
      <LetsTalkSection />
      <Footer />
    </main>
  );
}
