"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "HireXS",
    description: "Web app which facilitates seamless hiring process",
    image: "/images/projects/hirexs.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhishekkRao/HireXS",
    previewUrl: "https://hire-xs.vercel.app/",
  },
  {
    id: 2,
    title: "Taurus",
    description: "currently under development",
    image: "/images/projects/taurus.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhishekkRao/taurus",
    previewUrl: "https://taurus6.vercel.app/",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description: "Replicates the core functionalities of Spotify",
    image: "/images/projects/spotify.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhishekkRao/SpotifyClone",
    previewUrl: "https://spotifyclone-abhishekkrao.vercel.app/",
  },
  {
    id: 4,
    title: "TEDxNSUT Website",
    description: "Built a website for TEDxNSUT",
    image: "/images/projects/tedxnsut.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhishekkRao",
    previewUrl: "https://github.com/AbhishekkRao",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description: "Portfolio made with NextJS",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhishekkRao",
    previewUrl: "https://github.com/AbhishekkRao",
  },
  {
    id: 6,
    title: "Simon Game",
    description: "A simple simon game using JavasScript",
    image: "/images/projects/simon.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhishekkRao",
    previewUrl: "https://github.com/AbhishekkRao",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.length > 0 ? filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        )) : (
          <p className="">
            Projects are under construction!
          </p>
        )}
      </ul>
    </section>
  );
};

export default ProjectsSection;
