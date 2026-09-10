"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
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
          className={`relative w-full ${service.bgColor} ${service.textColor} overflow-hidden py-14 sm:py-10 md:py-20 px-6 sm:px-12 md:px-16 lg:px-20`}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Row: Title & Top Right Text */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-8">
              <div className="lg:col-span-8 pr-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight">
                  {service.title}
                </h2>
              </div>
              <div className="lg:col-span-4 lg:pl-8">
                <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-90 font-light max-w-xs">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Divider Line */}
            <div
              className={`w-full border-t ${service.borderColor} my-6 sm:my-8 lg:w-[70%]`}
            />

            {/* Features list (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 lg:w-[70%] mb-10">
              <div className="space-y-4">
                {service.col1.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-lg sm:text-xl md:text-2xl font-normal tracking-tight"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="space-y-4">
                {service.col2.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-lg sm:text-xl md:text-2xl font-normal tracking-tight"
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
                className="inline-block bg-white text-gray-900 px-5 py-2.5 rounded-sm text-sm font-normal shadow-sm hover:bg-gray-100 transition-colors"
              >
                view case studies
              </Link>
            </div>
          </div>

          {/* Right Side Background Graphic Overlay */}
          <div className="absolute -right-12 sm:-right-16 md:-right-20 top-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[540px] h-[280px] sm:h-[380px] md:h-[480px] lg:h-[540px] pointer-events-none opacity-85">
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
