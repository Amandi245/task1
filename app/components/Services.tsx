import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const services = [
  {
    title: "Branding & Strategy",
    details: [
      "Brand Identity & Logo Design",
      "Brand Strategy & Positioning",
      "Naming & Tagline Creation",
      "Market Research & Audience Analysis",
      "Visual Guidelines & Style Guides",
    ],
  },
  {
    title: "Digital & Web",
    details: [
      "Brand Identity & Logo Design",
      "Brand Strategy & Positioning",
      "Naming & Tagline Creation",
      "Market Research & Audience Analysis",
      "Visual Guidelines & Style Guides",
    ],
  },
  {
    title: "Creative & Content",
    details: [
      "Brand Identity & Logo Design",
      "Brand Strategy & Positioning",
      "Naming & Tagline Creation",
      "Market Research & Audience Analysis",
      "Visual Guidelines & Style Guides",
    ],
  },
  {
    title: "Marketing & Promotion",
    details: [
      "Brand Identity & Logo Design",
      "Brand Strategy & Positioning",
      "Naming & Tagline Creation",
      "Market Research & Audience Analysis",
      "Visual Guidelines & Style Guides",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-white pt-6 pb-12 overflow-hidden">
      <div className="overflow-hidden border-b border-gray-300 py-3">
        <Marquee speed={70} gradient={false}>
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center whitespace-nowrap mr-24"
            >
              <Image
                src="/images/flower.svg"
                alt="Flower"
                width={55}
                height={55}
                className="mr-10"
              />

              <span
                className={`${cormorant.className} text-[128px] font-bold uppercase text-[#D5D5D5] leading-none`}
              >
                SERVICES
              </span>

              <Image
                src="/images/star.svg"
                alt="Star"
                width={55}
                height={55}
                className="ml-10 mr-10"
              />

              <span
                className={`${cormorant.className} text-[128px] font-bold uppercase text-[#D5D5D5] leading-none`}
              >
                SERVICES
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="group w-full border-b border-gray-300 bg-white hover:bg-[#F5F360] transition-colors duration-500 cursor-pointer"
          >
            <div className="mx-auto flex max-w-7xl h-[220px] items-center justify-between px-10">
              <div className="w-1/2">
                <h3
                  className={`${dmSans.className} text-[80px] font-light text-black transition-all duration-500 group-hover:text-[64px]`}
                >
                  {service.title}
                </h3>
              </div>

              <div className="w-[45%] grid grid-cols-2 gap-x-10 gap-y-3 opacity-0 translate-y-4 pointer-events-nonetransition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                {service.details.map((item, i) => (
                  <p key={i} className="text-base text-gray-800">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
