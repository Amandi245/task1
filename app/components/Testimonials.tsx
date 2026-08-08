import Image from "next/image";
import Marquee from "react-fast-marquee";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
});

const testimonials = [
  {
    image: "/images/h2.png",
    title: "Brew & Bean Packaging",
    description: "Eco-friendly coffee packaging with a modern twist.",
    review:
      "Working with this team has been a game changer for our business. The results exceeded our expectations and we couldn't be happier.",
    avatar: "/images/person1.png",
    name: "Alex Johnson",
    role: "CEO of Bright Solutions",
    bg: "#F8E48A",
    text: "#000000",
  },
  {
    image: "/images/h1.png",
    title: "NovTech Landing Page",
    description: "Modern landing page with a clean user experience.",
    review:
      "Everything from communication to execution was outstanding. Highly recommended.",
    avatar: "/images/person2.png",
    name: "Priya Patel",
    role: "Operations Manager",
    bg: "#D78600",
    text: "#ffffff",
  },
  {
    image: "/images/h4.png",
    title: "Urban Leaf Mobile App",
    description: "Mobile experience designed with usability first.",
    review:
      "Communication was excellent and the final product perfectly matched our expectations.",
    avatar: "/images/person3.png",
    name: "Daniel Smith",
    role: "Founder",
    bg: "#E9B0F2",
    text: "#000000",
  },
  {
    image: "/images/h5.png",
    title: "Horizon Branding",
    description: "Complete branding solution with a modern identity.",
    review:
      "The collaboration process was smooth and the quality exceeded our expectations.",
    avatar: "/images/person4.png",
    name: "Samantha Lee",
    role: "Marketing Director",
    bg: "#0C5C48",
    text: "#ffffff",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="overflow-hidden pt-0 pb-20">
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
                TESTIMONIALS
              </span>

              <Image
                src="/images/star.svg"
                alt="Star"
                width={55}
                height={55}
                className="mx-10"
              />

              <span
                className={`${cormorant.className} text-[128px] font-bold uppercase text-[#D5D5D5] leading-none`}
              >
                TESTIMONIALS
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-10 pt-0 pb-8 flex flex-col gap-2">
        {testimonials.map((item, index) => (
          <article
            key={item.title}
            className="flex flex-col md:flex-row overflow-hidden rounded min-h-47.5"
            style={{
              backgroundColor: item.bg,
              color: item.text,
            }}
          >
            <div className="relative w-100 h-100 shrink-0 ">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 27vw"
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-[43%] px-8 py-6 flex flex-col justify-between">
              <div>
                <h3
                  className={`${dmSans.className} text-[44px] leading-[100%] font-medium tracking-[-0.03em] max-w-[10ch]`}
                >
                  {item.title}
                </h3>

                <button
                  type="button"
                  className={`${dmSans.className} mt-2 inline-flex items-center gap-1 text-xs font-medium text-current/55 transition-opacity hover:opacity-80`}
                >
                  view case-study
                  <span aria-hidden="true" className="text-[11px] leading-none">
                    ↗
                  </span>
                </button>
              </div>

              <p
                className={`${dmSans.className} text-sm leading-6 max-w-[24ch]`}
              >
                {item.description}
              </p>
            </div>

            <div
              className="w-full md:w-[30%] border-l-0 md:border-l px-6 py-5 flex flex-col justify-between"
              style={{
                borderLeftColor: index % 2 === 0 ? "#000000" : "#ffffff",
              }}
            >
              <p className={`${dmSans.className} text-sm leading-6`}>
                "{item.review}"
              </p>

              <div
                className="-mx-6 border-t mt-6 pt-4 px-6 flex items-center gap-4"
                style={{
                  borderTopColor:
                    index % 2 === 0 ? "#000000" : "#ffffff",
                }}
              >
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className={`${dmSans.className} text-sm font-medium`}>
                    {item.name}
                  </h4>

                  <p className={`${dmSans.className} text-xs opacity-70`}>
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
