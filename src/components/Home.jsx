import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { PiArrowFatLinesDownBold } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-900">
      {/* Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 1, y: 0 },
        }}
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
      >
        <h1 className="md:text-8xl sm:text-7xl text-6xl font-bold text-center text-white">
          James Proud
        </h1>
        <h2 className="mt-2 text-3xl text-center sm:text-4xl font-bold text-teal-400">
          <TypeAnimation
            sequence={[
              1000,
              "Web Developer",
              1000,
              "Systems Administrator",
              1000,
              "IT Professional",
              1000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </h2>
      </motion.div>

      <div className="absolute xs:bottom-10 bottom-32  w-full flex justify-center items-center">
        <Link to="about" spy={true} smooth={true} duration={500}>
          <div className="w-[35px] h-[5px] flex justify-center items-start p-2 hover:cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-secondary mb-1">
              <PiArrowFatLinesDownBold className="text-white ml-1 mr-2 hover:text-teal-400" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
