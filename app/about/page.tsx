import type { Metadata } from "next";
import AboutStory from "../components/AboutStory";
import AboutGlance from "../components/AboutGlance";
import AboutPurpose from "../components/AboutPurpose";
import AboutCrew from "../components/AboutCrew";
import AboutFooter from "../components/AboutFooter"; // Footer වෙනුවට AboutFooter ලෙස වෙනස් විය

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
      <AboutFooter />
    </main>
  );
}
