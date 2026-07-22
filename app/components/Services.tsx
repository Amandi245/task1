import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
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
      "Website Design",
      "UI / UX Design",
      "Landing Pages",
      "SEO Optimization",
      "Website Maintenance",
    ],
  },
  {
    title: "Creative & Content",
    details: [
      "Social Media Design",
      "Photography",
      "Video Editing",
      "Copywriting",
      "Content Strategy",
    ],
  },
  {
    title: "Marketing & Promotion",
    details: [
      "Digital Marketing",
      "Email Campaigns",
      "Google Ads",
      "Facebook Ads",
      "Analytics & Reports",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-white pt-6 pb-12 overflow-hidden">
      <div className="overflow-hidden border-b border-gray-300">
        <div className="animate-services-marquee">
          {[1, 2].map((item) => (
            <Image
              key={item}
              src="/images/frame-services.svg"
              alt="Services Marquee"
              width={1600}
              height={120}
              className="h-24 w-auto flex-shrink-0"
              priority
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group border-b border-gray-300 transition-all duration-300 hover:bg-[#F5F360] cursor-pointer"
          >
            <div className="flex items-center justify-between px-10 py-7">
              <h3 className="text-[52px] font-light transition-all duration-300 group-hover:text-[28px]">
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
