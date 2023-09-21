import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import ReactImg from "../assets/react.png";
import NodeJS from "../assets/node.png";
import Python from "../assets/python.png";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", image: HTML, style: "shadow-orange-400" },
  { name: "CSS", image: CSS, style: "shadow-blue-500" },
  { name: "JavaScript", image: JS, style: "shadow-yellow-400" },
  { name: "React", image: ReactImg, style: "shadow-teal-400" },
  { name: "Node.js", image: NodeJS, style: "shadow-green-400" },
  { name: "Python", image: Python, style: "shadow-blue-400" },
  { name: "Tailwind", image: Tailwind, style: "shadow-teal-300" },
  { name: "GitHub", image: GitHub, style: "shadow-gray-400" },
];

const Skills = () => {
  return (
    <div name="skills" className="bg-gray-900 text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
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
          <p className="text-4xl font-bold text-teal-400">Skills</p>
          <p className="py-4">This is what I've been working with</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`shadow-md ${skill.style} hover:scale-110 duration-500`}
            >
              <img
                className="pt-4 w-20 mx-auto"
                src={skill.image}
                alt={skill.name}
              />
              <p className="my-2 font-bold">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
