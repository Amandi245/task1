import Image from "next/image";
import Marquee from "react-fast-marquee";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
      "Working with this team has been a game changer for our business. The results exceeded our expectations, and the process was smooth from start to finish.",
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
      "When we first approached this team, we only had a rough concept of what we wanted. They took the time to truly understand our goals and turned the vision into something much more.",
    avatar: "/images/person2.png",
    name: "Priya Patel",
    role: "Operations Manager at Nova Inc.",
    bg: "#D78600",
    text: "#ffffff",
  },
  {
    image: "/images/h4.png",
    title: "Urban Leaf Mobile App",
    description: "Mobile experience designed with usability first.",
    review:
      "From start to finish, the communication was clear, and the end product was exactly what we needed. I would highly recommend them.",
    avatar: "/images/person3.png",
    name: "Daniel Smith",
    role: "Product Manager at AlphaWorks",
    bg: "#E9B0F2",
    text: "#000000",
  },
  {
    image: "/images/h5.png",
    title: "Horizon Branding",
    description: "Complete branding solution with a modern identity.",
    review:
      "The collaboration process was smooth, transparent, and truly enjoyable. They were responsive and always driven by results.",
    avatar: "/images/person4.png",
    name: "Samantha Lee",
    role: "Marketing Director at Horizon Group",
    bg: "#0C5C48",
    text: "#ffffff",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white">
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
                className="mr-4 h-7 w-7 sm:mr-10 sm:h-auto sm:w-auto"
              />

              <span
                className={`${cormorant.className} text-[52px] sm:text-[128px] font-bold uppercase text-[#D5D5D5] leading-none`}
              >
                TESTIMONIALS
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
                TESTIMONIALS
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-10 pb-8">
        {testimonials.map((item, index) => (
          <article
            key={item.title}
            className="flex min-h-[500px] w-full flex-col overflow-hidden rounded md:h-[300px] md:flex-row md:min-h-0"
            style={{
              backgroundColor: item.bg,
              color: item.text,
            }}
          >
            <div className="relative h-48 w-full shrink-0 md:h-full md:w-[27%]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 27vw"
                className="object-cover"
              />
            </div>

            <div className="flex w-full flex-col justify-between px-5 py-5 md:w-[43%] md:px-8 md:py-6">
              <div>
                <h3
                  className={`${dmSans.className} max-w-[14ch] text-3xl font-medium leading-[100%] tracking-[-0.03em] md:text-[40px]`}
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
                className={`${dmSans.className} max-w-[24ch] text-sm leading-6`}
              >
                {item.description}
              </p>
            </div>

            <div
              className="flex w-full flex-col px-5 pt-4 pb-3 md:h-full md:w-[30%] md:px-6 md:pb-0 md:border-l"
              style={{
                borderLeftColor: index % 2 === 0 ? "#000000" : "#ffffff",
              }}
            >
              <p className={`${dmSans.className} text-[14px] leading-[15px]`}>
                &quot;{item.review}&quot;
              </p>

              <div className="mt-auto mb-2">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              </div>

              <div
                className="-mx-6 mt-0 h-[50px] border-t px-6 py-4"
                style={{
                  borderTopColor: index % 2 === 0 ? "#000000" : "#ffffff",
                }}
              >
                <h4
                  className={`${dmSans.className} text-[14px] font-medium leading-[12px]`}
                >
                  {item.name}
                </h4>

                <p
                  className={`${dmSans.className} text-[10px] leading-[10px] opacity-70`}
                >
                  {item.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
