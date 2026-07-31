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
    subtitle: "Lorem ipsum dolor sit amet",
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
    subtitle: "Lorem ipsum dolor sit amet",
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
    subtitle: "Lorem ipsum dolor sit amet",
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
    subtitle: "Lorem ipsum dolor sit amet",
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
      <div className="overflow-hidden pt-0 pb-1 ">
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

      <div className="max-w-7xl mx-auto px-10 pt-1 pb-8 flex flex-col gap-2">
        {testimonials.map((item) => (
          <article
            key={item.title}
            className="flex flex-col md:flex-row overflow-hidden rounded border border-black/15 min-h-47.5"
            style={{
              backgroundColor: item.bg,
              color: item.text,
            }}
          >
            <div className="relative w-full md:w-[27%] shrink-0 min-h-56 md:min-h-0">
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

                <p className={`${dmSans.className} text-xs mt-2 opacity-70`}>
                  {item.subtitle}
                </p>
              </div>

              <p className={`${dmSans.className} text-sm leading-6`}>
                {item.description}
              </p>
            </div>

            <div className="w-full md:w-[30%] border-l-0 md:border-l border-black/20 px-8 py-6 flex flex-col justify-between">
              <p className={`${dmSans.className} text-sm leading-6`}>
                "{item.review}"
              </p>

              <div className=" w-full border-t border-black/20 pt-5 flex items-center gap-4 mt-8">
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
