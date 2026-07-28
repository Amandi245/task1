import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Marquee from "react-fast-marquee";

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
      <div className="overflow-hidden border-b border-gray-300">
        <Marquee speed={70} gradient={false}>
          <Image
            src="/images/frame-services.svg"
            alt="Services Marquee"
            width={1600}
            height={120}
            className="h-24 w-auto mr-8"
            priority
          />

          <Image
            src="/images/frame-services.svg"
            alt="Services Marquee"
            width={1600}
            height={120}
            className="h-24 w-auto mr-8"
            priority
          />
        </Marquee>
      </div>

      <div className="w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="group w-full border-b border-gray-300 hover:bg-[#F5F360] transition-all duration-300 cursor-pointer h-fit"
          >
            <div className="mx-auto flex max-w-7xl items-start justify-between px-10 py-7">
            
              <h3
                className={`${dmSans.className}text-black text-[96px] font-light transition-all duration-300 group-hover:text-[64px]`}
              >
                {service.title}
              </h3>

             
              <div className="hidden w-[45%] grid-cols-2 gap-x-10 gap-y-2 text-base text-gray-800 group-hover:grid">
                {service.details.map((item, i) => (
                  <p key={i}>{item}</p>
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
