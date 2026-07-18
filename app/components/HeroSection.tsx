import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-svh w-full overflow-hidden">

      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

    
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

     
      <div className="relative z-20 h-full">

        
        <nav className="flex items-center justify-between px-12 py-6">

       
          <Image
            src="/images/logo2.png"
            alt="Logo"
            width={180}
            height={60}
            priority
            className="h-16 w-auto "
          />

         
          <ul className="flex gap-10 text-white text-sm font-medium">
            <li className="cursor-pointer hover:text-yellow-300 duration-300">
              About
            </li>
            <li className="cursor-pointer hover:text-yellow-300 duration-300">
              Services
            </li>
            <li className="cursor-pointer hover:text-yellow-300 duration-300">
              Work
            </li>
            <li className="cursor-pointer hover:text-yellow-300 duration-300">
              Contact
            </li>
          </ul>

        </nav>

      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-32 z-20">
        <h1 className="text-[280px] tracking-wide font-normal leading-none text-[#F5F360]">
          Elevate
        </h1>
        <p className="mt-5 text-4xl font-normal text-white">Ideas{" "}
          <span className=" mx-3 text-base text-[#F5F360] font-normal align-middle">into
          </span>{" "}
          Experiences.
          </p>
      </div>

    </section>
  );
};

export default HeroSection;