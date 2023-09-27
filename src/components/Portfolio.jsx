import React from "react";
import PT from "../assets/password.png";
import PortfolioScreenShot from "../assets/portfolio-ss.png";
import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({
  title,
  description,
  imageSrc,
  demoLink,
  codeLink,
  tech,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      className={`group bg-gray-800 rounded-md mac-w-[42rem] overflow-hidden relative md:h-[20rem] md:mb-8 mb-3 last:mb-0 mx-4 ${
        isEven ? "md:even:pl-8" : "md:odd:pr-8" // Apply padding based on even/odd
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, x: isEven ? -50 : 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="pt-4 pb-7 px-3 md:pl-10 md:pr-2 md:pt-5 md:max-w-[60%] max-h-[500px] flex flex-col sm:h-full lg:group-even:ml-[26rem] md:group-even:ml-[18rem] md:group-odd:pr-[2rem]  z-50 md:mt-8">
        <div className="flex flex-wrap absolute top-3 right-3 gap-2">
          <TbBrandGithub
            size={27}
            className="hover:text-[#64ffda] hover:cursor-pointer transition duration-500"
          />
          <BiLinkExternal
            size={27}
            className="hover:text-[#64ffda] hover:cursor-pointer transition duration-500"
          />
        </div>
        <div className="">
          <h3 className="text-2xl font-extrabold hover:text-[#64ffda] hover:cursor-pointer transition duration-500 mt-2">
            {title}
          </h3>
          <p
            className={`mt-0 leading-relaxed text-gray-400 bg-gray-800 rounded-md py-5 z-10 font-light${
              isEven ? "md:mr-[0px]" : "md:mr-[65px]"
            }`}
          >
            {description}
          </p>
          <ul className="flex flex-wrap mt-0 gap-2">
            {tech.map((tech, index) => (
              <li
                className="bg-gray-800 border-2 border-[#64ffda] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="opacity-50 hover:opacity-100 transition-opacity duration-400">
          <img
            src={imageSrc}
            alt="Milk Runner"
            quality={95}
            className=" md:visible invisible absolute lg:top-16 md:top-20 right-5 lg:w-[25.25rem] md:w-[20.25rem] rounded-t-lg shadow-2xl transition hover:scale-[1.02] duration-300 hover:cursor-pointer group-even:right-[initial] group-even:left-5"
          />
        </div>
      </div>
    </motion.section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "The Milk Runner",
      description:
        "A web application for ordering fresh milk to your home straight from the farm.",
      imageSrc: PT,
      demoLink:
        "http://www.thepasswordtoolkit.com.s3-website.eu-west-2.amazonaws.com/",
      codeLink: "https://github.com/jamesedproud/ThePasswordToolkit",
      tech: ["Next.js", "Tailwind", "Flask", "PostgreSQL", "AWS"],
    },
    {
      title: "Portfolio Website v2.0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: PortfolioScreenShot,
      demoLink:
        "http://www.thepasswordtoolkit.com.s3-website.eu-west-2.amazonaws.com/",
      codeLink: "https://github.com/jamesedproud/ThePasswordToolkit",
      tech: ["React", "Tailwind", "Vercel"],
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: PT,
      demoLink:
        "http://www.thepasswordtoolkit.com.s3-website.eu-west-2.amazonaws.com/",
      codeLink: "https://github.com/jamesedproud/ThePasswordToolkit",
      tech: ["React", "Tailwind", "Vercel"],
    },
    // Add more projects here later
  ];

  return (
    <div name="portfolio" className="w-full bg-gray-900 text-white pt-20">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full mb-44">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="pb-8 text-center"
        >
          <p className="text-4xl font-bold inline text-[#64ffda]">Projects</p>
          <p className="py-6">
            Currently working on some cool full stack apps. Check back here
            soon...👨‍💻
          </p>
        </motion.div>
        {/* Project Container */}
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
