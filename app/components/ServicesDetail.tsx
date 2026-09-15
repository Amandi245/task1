"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function ServicesDetail() {
  const serviceSections = [
    {
      id: "branding",
      title: "Branding & Strategy",
      description:
        "Building impactful brand identities and strategies that connect with audiences and drive growth",
      col1: ["Brand identity design", "Market positioning strategies"],
      col2: ["Brand storytelling", "Strategic roadmaps for growth"],
      bgColor: "bg-[#FDEB8E]",
      textColor: "text-[#1A1A1A]",
      borderColor: "border-[#1A1A1A]/30",
      graphic: "/images/cart1.svg",
    },
    {
      id: "digital",
      title: "Digital & Web Development",
      description:
        "Building impactful brand identities and strategies that connect with audiences and drive growth",
      col1: ["Brand identity design", "Market positioning strategies"],
      col2: ["Brand storytelling", "Strategic roadmaps for growth"],
      bgColor: "bg-[#D07000]",
      textColor: "text-white",
      borderColor: "border-white/30",
      graphic: "/images/cart2.svg",
    },
    {
      id: "creative",
      title: "Creative & Content",
      description:
        "Building impactful brand identities and strategies that connect with audiences and drive growth",
      col1: ["Brand identity design", "Market positioning strategies"],
      col2: ["Brand storytelling", "Strategic roadmaps for growth"],
      bgColor: "bg-[#FCB3FF]",
      textColor: "text-[#1A1A1A]",
      borderColor: "border-[#1A1A1A]/30",
      graphic: "/images/cart3.svg",
    },
    {
      id: "marketing",
      title: "Marketing & Promotion",
      description:
        "Building impactful brand identities and strategies that connect with audiences and drive growth",
      col1: ["Brand identity design", "Market positioning strategies"],
      col2: ["Brand storytelling", "Strategic roadmaps for growth"],
      bgColor: "bg-[#004D3F]",
      textColor: "text-white",
      borderColor: "border-white/30",
      graphic: "/images/cart4.svg",
    },
  ];

  return (
    <section className={`w-full ${inter.className}`}>
      {serviceSections.map((service) => (
        <div
          key={service.id}
          className={`relative w-full ${service.bgColor} ${service.textColor} overflow-hidden py-4 sm:py-16 md:py-20 px-3 sm:px-12 md:px-16 lg:px-20`}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Row: Title & Top Right Text */}
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-start pb-4 sm:pb-8">
              <div className="col-span-8 lg:col-span-8 pr-0 sm:pr-4">
                <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight">
                  {service.title}
                </h2>
              </div>
              <div className="col-span-4 lg:col-span-4 pl-0 lg:pl-8">
                <p className="text-[9px] sm:text-sm md:text-base leading-tight sm:leading-relaxed opacity-90 font-light max-w-xs">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Divider Line */}
            <div
              className={`w-full border-t ${service.borderColor} my-3 sm:my-8 lg:w-[70%]`}
            />

            {/* Features list (2 Columns) */}
            <div className="grid grid-cols-2 gap-y-2 gap-x-5 sm:gap-y-4 sm:gap-x-12 lg:w-[70%] mb-5 sm:mb-10">
              <div className="space-y-2 sm:space-y-4">
                {service.col1.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-[11px] sm:text-xl md:text-2xl font-normal tracking-tight leading-tight"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="space-y-2 sm:space-y-4">
                {service.col2.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-[11px] sm:text-xl md:text-2xl font-normal tracking-tight leading-tight"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* View Case Studies Button */}
            <div>
              <Link
                href="/#work"
                className="inline-block bg-white text-gray-900 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-sm text-[9px] sm:text-sm font-normal"
              >
                view case studies
              </Link>
            </div>
          </div>

          {/* Right Side Background Graphic Overlay (Design matching) */}
          <div className="absolute -right-16 sm:-right-10 top-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[515px] sm:h-[515px] pointer-events-none opacity-90 z-0">
            <Image
              src={service.graphic}
              alt={service.title}
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
