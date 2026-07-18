import Image from "next/image";
const images = [
  "/images/h1.png",
  "/images/h2.png",
  "/images/h3.png",
  "/images/h4.png",
  "/images/h5.png",
];

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-16">

      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-7xl font-bold leading-tight">
          We build <em className="italic font-normal">experiences</em>
          <br />
          that people remember
          <br />
          and share.
        </h2>

        <p className="mt-10 max-w-2xl text-gray-300 leading-8">
          We design experiences that people remember and share,
          blending creativity, strategy, and empathy to create
          moments that truly matter. Every project we take on
          is built to spark connection, foster engagement, and
          leave a meaningful, lasting impact.
        </p>
        <div className="overflow-hidden mt-20">

  <div className="flex w-max animate-marquee gap-4">

    {[...images, ...images].map((image, index) => (

      <Image
        key={index}
        src={image}
        alt=""
        width={280}
        height={180}
        className="h-44 w-72 object-cover"
      />

    ))}

  </div>

</div>

      </div>

    </section>
  );
};

export default AboutSection;