import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
});

const services = [
  "Branding & Strategy",
  "Digital & Web",
  "Creative & Content",
  "Marketing & Promotion",
];

const Services = () => {
  return (
    <section className="bg-white pt-6 pb-12 overflow-hidden">
      
      <div className="overflow-hidden border-b border-gray-300">
        <div className="animate-services-marquee gap-10 py-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-8 whitespace-nowrap"
            >
              <h2
                className={`${cormorant.className} text-7xl uppercase text-gray-300`}
              >
                Services
              </h2>

              <span className="text-red-500 text-5xl">✿</span>

              <h2
                className={`${cormorant.className} text-7xl uppercase text-gray-300`}
              >
                Services
              </h2>

              <span className="text-yellow-400 text-5xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {services.map((service, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-6 px-10 hover:bg-gray-50 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-[52px] font-light">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
