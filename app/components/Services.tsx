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
    <section id="services" className="w-full bg-white">
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
                className="mr-4 h-7 w-7 sm:mr-10 sm:h-auto sm:w-auto"
              />

              <span
                className={`${cormorant.className} text-[52px] sm:text-[128px] font-bold uppercase text-[#D5D5D5] leading-none`}
              >
                SERVICES
              </span>

              <Image
                src="/images/star.svg"
                alt="Star"
                width={55}
                height={55}
                className="mx-4 h-7 w-7 sm:mx-10 sm:h-auto sm:w-auto"
              />

              <span
                className={`${cormorant.className} text-[52px] sm:text-[128px] font-bold uppercase text-[#D5D5D5] leading-none`}
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
            className="group w-full cursor-pointer border-b border-gray-300 bg-white transition-colors duration-500 hover:bg-[#F5F360]"
          >
            <div className="mx-auto flex min-h-[150px] max-w-7xl flex-col items-start justify-center gap-3 px-4 py-5 sm:h-[180px] sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-0">
              <div className="w-full sm:w-1/2">
                <h3
                  className={`${dmSans.className} text-3xl font-[300] leading-tight tracking-[0] text-black transition-all duration-500 sm:whitespace-nowrap sm:text-[96px] sm:leading-[1.2] sm:group-hover:text-[60px] sm:group-hover:font-[500]`}
                >
                  {service.title}
                </h3>
              </div>

              <div className="grid w-full grid-cols-1 gap-y-1 opacity-100 sm:w-[45%] sm:grid-flow-col sm:grid-rows-3 sm:gap-x-10 sm:gap-y-0 sm:translate-y-4 sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                {service.details.map((item, i) => (
                  <p
                    key={i}
                    className={`${dmSans.className} text-base font-[300] text-gray-800`}
                  >
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
