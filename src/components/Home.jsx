import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { TiArrowDownThick } from "react-icons/ti";
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
        className="max-w-[1000px] px-8 flex flex-col lg:justify-center pt-[150px] lg:pt-0 lg:pb-10 h-full text-center mx-auto"
      >
        <img
          className="l-[250px] w-[250px]  visible max-w-[500] rounded-full bg-gradient-to-b from-teal-400 to-gray-900 mx-auto overflow-hidden"
          src={process.env.PUBLIC_URL + "/james.png"}
          alt="Avatar"
        />
        <h1
          className="lg:text-8xl md:text-7xl sm:text-7xl text-5xl font-bold 
         text-white pt-10"
        >
          James Proud
        </h1>
        <h2 className="mt-2 text-2xl lg:text-4xl sm:text-3xl font-bold text-teal-400">
          <TypeAnimation
            sequence={[
              2000,
              "Web Developer",
              2000,
              "Systems Administrator",
              2000,
              "IT Professional",
              2000,
              "Homo Sapien",
              1000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </h2>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[35px] h-[5px] flex justify-center items-center mb-16 pr-6">
        <Link to="about" spy={true} smooth={true} duration={500}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          >
            <TiArrowDownThick className="text-white ml-1 mr-2 hover:text-teal-400 w-[30px] h-[30px] cursor-pointer" />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
