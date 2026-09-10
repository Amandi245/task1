"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Branding & Strategy",
  "Digital & Web Development",
  "Content & Creative",
  "Marketing",
];

const projects = [
  {
    id: 1,
    title: "Glow Cosmetics Website",
    description: "Responsive web design with immersive product storytelling.",
    category: "Digital & Web Development",
    image: "/images/h5.png",
  },
];

export default function WorkProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full bg-white py-12 text-black">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 px-4 pb-16">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-md border px-5 py-2 text-sm transition-all duration-200 ${
                isActive
                  ? "border-black font-medium text-black shadow-sm"
                  : "border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-600"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects List Container */}
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="flex flex-col gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 border border-black/80 md:grid-cols-2"
            >
              {/* Left Column: Text Content */}
              <div className="flex flex-col justify-center border-b border-black/80 p-8 md:border-b-0 md:border-r md:p-16">
                <h2 className="text-3xl font-medium tracking-tight text-black md:text-5xl">
                  {project.title}
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-gray-700 md:text-lg">
                  {project.description}
                </p>
              </div>

              {/* Right Column: Full Image Container */}
              <div className="relative min-h-[400px] w-full overflow-hidden bg-red-600 md:min-h-[550px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
