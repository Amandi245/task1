"use client";

import Link from "next/link";
import Image from "next/image";

export default function LetsTalkSection() {
  return (
    <section
      className="relative min-h-[650px] w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #FAFAFA 0%, #FAFAFA 24%, #F8F89A 62%, #F5F360 100%)",
      }}
    >
      {/* Yellow Glow Background */}
      <div
        className="pointer-events-none absolute inset-x-[-25%] bottom-[-18%] h-[120%] blur-[12px] sm:inset-x-[-10%] sm:bottom-[-25%] sm:h-[135%] sm:blur-[28px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 100%, #F5F360 0%, #F5F360 30%, rgba(245,243,96,0.85) 50%, rgba(248,248,154,0.5) 70%, transparent 100%)",
        }}
      />

      {/* Lets Talk Button */}
      <div className="relative z-10 flex justify-center pt-[245px] px-6">
        <Link
          href="/#contact"
          className="
            group
            flex
            w-full
            max-w-[750px]
            h-[125px]
            items-center
            justify-center
            gap-7
            rounded-[8px]
            border
            border-black/20
            bg-[#F0F000]
            text-black
            shadow-[0_12px_25px_rgba(0,0,0,0.15)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_18px_35px_rgba(0,0,0,0.18)]
          "
        >
          {/* Star Icon */}
          <Image
            src="/images/blackStar.svg"
            alt=""
            width="48"
            height="48"
            className="shrink-0"
          />

          {/* Text */}
          <span className="text-5xl sm:text-6xl md:text-[60px] font-light tracking-tight">
            Lets Talk
          </span>
        </Link>
      </div>
    </section>
  );
}
