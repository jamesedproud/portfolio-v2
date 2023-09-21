import React from "react";
import PT from "../assets/password.png";
import { motion } from "framer-motion";

/* Project Card Component */
const ProjectCard = ({ title, imageSrc, demoLink, codeLink }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageSrc})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover Effect */}
      <div className="opacity-0 group-hover:opacity-100 text-center">
        <span className="text-2xl font-bold tracking-wider text-white">
          {title}
        </span>
        <div className="pt-8 text-center">
          <a target="_blank" rel="noreferrer" href={demoLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg hover:scale-110 duration-300">
              Demo
            </button>
          </a>
          <a target="_blank" rel="noreferrer" href={codeLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg hover:scale-110 duration-300">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Vanilla JavaScript Application (Old)",
      imageSrc: PT,
      demoLink:
        "http://www.thepasswordtoolkit.com.s3-website.eu-west-2.amazonaws.com/",
      codeLink: "https://github.com/jamesedproud/ThePasswordToolkit",
    },
    {
      title: "Vanilla JavaScript Application (Old)",
      imageSrc: PT,
      demoLink:
        "http://www.thepasswordtoolkit.com.s3-website.eu-west-2.amazonaws.com/",
      codeLink: "https://github.com/jamesedproud/ThePasswordToolkit",
    },
    // Add more projects here later
  ];

  return (
    <div name="portfolio" className="w-full h-screen bg-gray-900 text-white">
      <div className="max-w-[1000px] mx-auto p4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="pb-8 text-center"
        >
          <p className="text-4xl font-bold inline text-teal-400">Portfolio</p>
          <p className="py-6">Check out some of my recent projects</p>
        </motion.div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 ms:grid-cols-3 gap-4 pl-2 pr-2">
          {/* Map over projects and render Project component */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
