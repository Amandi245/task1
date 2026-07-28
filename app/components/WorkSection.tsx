import Image from "next/image";
import Marquee from "react-fast-marquee";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

const works = [
  {
    image: "/images/h5.png",
    title: "Glow Cosmetics Website",
    description: "Responsive web design with immersive product storytelling.",
  },
  {
    image: "/images/h4.png",
    title: "iPhone App UI/UX Design",
    description: "Responsive app design with intuitive product experience.",
  },
  {
    image: "/images/h1.png",
    title: "On-Location Film Production",
    description:
      "Commercial shoot highlighting collaboration and creative direction.",
  },
  {
    image: "/images/h3.png",
    title: "Portrait Photography",
    description: "Professional portrait session with natural lighting.",
  },
  {
    image: "/images/h2.png",
    title: "Macro Photography of Foliage",
    description: "Exploration of nature through macro photography.",
  },
];

const WorkSection = () => {
  return (
    <section className="bg-white pb-20 overflow-hidden">
      <div className="overflow-hidden border-b border-gray-300">
        <Marquee speed={70} gradient={false}>
          <Image
            src="/images/frame-work.svg"
            alt="Work Marquee"
            width={1600}
            height={120}
            className="h-24 w-auto mr-8"
            priority
          />

          <Image
            src="/images/frame-work.svg"
            alt="Work Marquee"
            width={1600}
            height={120}
            className="h-24 w-auto mr-8"
            priority
          />
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-10">
        <div className="flex gap-2 mb-2">
          <div className="w-3/5 relative overflow-hidden group">
            <Image
              src={works[0].image}
              alt={works[0].title}
              width={800}
              height={400}
              className="w-full h-[300px] object-cover "
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white">
              <h3 className={`${dmSans.className} font-semibold text-yellow-300 max-w-[180px]`}>
                {works[0].title}
              </h3>

              <p className="text-xs text-right max-w-[180px]">
                {works[0].description}
              </p>
            </div>
          </div>

          <div className="w-2/5 relative overflow-hidden group">
            <Image
              src={works[1].image}
              alt={works[1].title}
              width={600}
              height={400}
              className="w-full h-[300px] object-cover "
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white">
              <h3
                className={`${dmSans.className} font-semibold text-yellow-300 max-w-[180px]`}
              >
                {works[1].title}
              </h3>

              <p className="text-xs text-right max-w-[180px]">
                {works[1].description}
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden group mb-2">
          <Image
            src={works[2].image}
            alt={works[2].title}
            width={1200}
            height={650}
            className="w-full h-[450px] object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white">
            <h3
              className={`${dmSans.className} font-semibold text-yellow-300 max-w-[180px]`}
            >
              {works[2].title}
            </h3>

            <p className="text-xs text-right max-w-[250px]">
              {works[2].description}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-2/5 relative overflow-hidden group">
            <Image
              src={works[3].image}
              alt={works[3].title}
              width={600}
              height={400}
              className="w-full h-[300px] object-cover "
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white">
              <h3
                className={`${dmSans.className} font-semibold text-yellow-300 max-w-[180px]`}
              >
                {works[3].title}
              </h3>
              <p className="text-xs text-right max-w-[180px]">
                {works[3].description}
              </p>
            </div>
          </div>

          <div className="w-3/5 relative overflow-hidden group">
            <Image
              src={works[4].image}
              alt={works[4].title}
              width={800}
              height={400}
              className="w-full h-[300px] object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white">
              <h3
                className={`${dmSans.className} font-semibold text-yellow-300 max-w-[180px]`}
              >
                {works[4].title}
              </h3>

              <p className="text-xs text-right max-w-[180px]">
                {works[4].description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[#F5F360] hover:bg-yellow-300 transition duration-300 px-10 py-3 rounded-md font-medium">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
