import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import ReactImg from "../assets/react.png";
import TS from "../assets/TS.png";
import NodeJS from "../assets/node.png";
import Python from "../assets/python.png";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", image: HTML, style: "shadow-orange-400" },
  { name: "CSS", image: CSS, style: "shadow-blue-500" },
  { name: "JavaScript", image: JS, style: "shadow-yellow-400" },
  { name: "TypeScript", image: TS, style: "shadow-blue-400" },
  { name: "React", image: ReactImg, style: "shadow-[#64ffda]" },
  { name: "Next.js", image: GitHub, style: "shadow-gray-400" },
  { name: "Python", image: Python, style: "shadow-blue-400" },
  { name: "Flask", image: GitHub, style: "shadow-gray-400" },
  { name: "Tailwind", image: Tailwind, style: "shadow-[#64ffda]" },
  { name: "Git", image: GitHub, style: "shadow-gray-400" },
  { name: "PostgreSQL", image: GitHub, style: "shadow-gray-400" },
  { name: "AWS", image: GitHub, style: "shadow-gray-400" },
];

const Skills = () => {
  return (
    <div name="skills" className="bg-gray-900 text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full sm:pt-44 pt-36">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-center"
        >
          <p className="text-4xl font-bold text-[#64ffda]">Skills</p>
          <p className="py-4 text-gray-300">
            This is what I've been working with lately
          </p>
        </motion.div>
        <ul className="text-center mt-10 flex flex-wrap justify-center text-lg gap-2">
          {skillsData.map((skill, index) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className=" bg-gray-900 text-[#64ffda] border border-[#64ffda] rounded-xl px-5 py-3 hover:bg-[#64ffda] hover:text-gray-900 hover:cursor-pointer"
              key={index}
            >
              {skill.name}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
