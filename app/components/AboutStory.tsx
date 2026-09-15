import Navbar from "./Navbar";
import { Bodoni_Moda } from "next/font/google";

const editorial = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

function Gauge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="3.2" />
      <path d="M50 50 84 16" stroke="currentColor" strokeWidth="3.2" />
      <rect x="43" y="43" width="13" height="13" rx="1.8" fill="currentColor" />
    </svg>
  );
}

export default function AboutStory() {
  return (
    <section
      className="relative bg-black text-[#f5f55b] before:pointer-events-none before:absolute before:-top-[13vw] before:left-[16%] before:h-[18vw] before:w-[68%] before:bg-[radial-gradient(ellipse,#dfe35b80,transparent_70%)] before:blur-[2.7vw]"
      aria-labelledby="story-title"
    >
      {/* Reusable Navbar */}
      <div className="relative z-30">
        <Navbar variant="light" />
      </div>

      <div className="flex h-[340px] flex-col items-center pt-8 min-[601px]:h-[42.2vw] min-[601px]:pt-[4.1vw]">
        <Gauge className="mb-[22px] h-[30px] w-[30px] text-[#afb32e] min-[601px]:mb-[2.4vw] min-[601px]:h-[3.6vw] min-[601px]:w-[3.6vw]" />
        <h1
          id="story-title"
          className="flex flex-col items-center text-[#d3d64e]"
        >
          <span className="text-[60px] leading-[.95] min-[601px]:text-[7.8vw]">
            our
          </span>
          <strong
            className={`${editorial.className} text-[110px] font-bold leading-[.94] tracking-[-5px] min-[601px]:text-[13.2vw]`}
          >
            Story
          </strong>
        </h1>
      </div>
      <div className="grid grid-cols-[24%_76%] border-t-2 border-[#343434] min-[601px]:h-[37.1vw] min-[601px]:grid-cols-[35.55%_64.45%]">
        <div className="relative overflow-hidden border-r-2 border-[#343434]">
          <Gauge className="absolute left-[-160px] top-[50px] h-[250px] w-[250px] min-[601px]:left-[-8.9vw] min-[601px]:top-[4.8vw] min-[601px]:h-[37.5vw] min-[601px]:w-[37.5vw]" />
        </div>
        <div className="flex flex-col gap-[22px] px-[22px] py-7 text-sm leading-[1.5] text-[#898989] min-[601px]:gap-[2.9vw] min-[601px]:px-[3.8vw] min-[601px]:py-[4.25vw] min-[601px]:text-[1.87vw]">
          <p>
            We&apos;re a team of designers, storytellers, and strategists who
            believe creativity has the power to move people and transform
            brands. At Elevate, we turn bold ideas into experiences that
            inspire, engage, and deliver results.
          </p>
          <p>
            Founded with the vision of bringing fresh, human-centered design
            into the digital world, we started as a small group of creatives
            with big dreams. Today, we partner with brands across industries
            helping them stand out, connect deeply with their audiences, and
            grow with purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
