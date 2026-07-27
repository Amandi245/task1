import Image from "next/image";

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
        <div className="animate-work-marquee flex w-max">
          {[1, 2].map((item) => (
            <Image
              key={item}
              src="/images/frame-work.svg"
              alt="Work Marquee"
              width={1600}
              height={120}
              className="h-24 w-auto flex-shrink-0"
              priority
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-10">
       
        <div className="grid grid-cols-2 gap-4">
          {works.slice(0, 2).map((work, index) => (
            <div key={index} className="relative group overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                width={600}
                height={400}
                className="w-full h-[280px] object-cover"
              />

              <div className="absolute inset-0 bg-black/25"></div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                <h3 className="font-semibold leading-tight max-w-[180px]">
                  {work.title}
                </h3>

                <p className="text-xs text-right max-w-[180px]">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      
        <div className="relative overflow-hidden">
          <Image
            src={works[2].image}
            alt={works[2].title}
            width={1200}
            height={650}
            className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/25"></div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
            <h3 className="font-semibold leading-tight max-w-[220px]">
              {works[2].title}
            </h3>

            <p className="text-xs text-right max-w-[250px]">
              {works[2].description}
            </p>
          </div>
        </div>

     
        <div className="grid grid-cols-2 gap-4 mt-4">
          {works.slice(3, 5).map((work, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                width={600}
                height={400}
                className="w-full h-[280px] object-cover"
              />

              <div className="absolute inset-0 bg-black/25"></div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                <h3 className="font-semibold leading-tight max-w-[180px]">
                  {work.title}
                </h3>

                <p className="text-xs text-right max-w-[180px]">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>

       
        <div className="flex justify-center mt-10">
          <button className="bg-[#F5F360] hover:bg-yellow-300 transition px-10 py-3 rounded-md font-medium">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
