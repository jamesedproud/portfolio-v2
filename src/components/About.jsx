import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import James from "../assets/james.png";
import James2 from "../assets/james2.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div name="about" className="w-full h-screen bg-gray-900 text-white">
        <div
          className="
          flex flex-col justify-center items-center w-full h-full"
        >
          <div className="max-w-[1000px] ml-10 w-full grid grid-cols-2 gap-8 justify-center items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="md:text-4xl font-bold inline text-2xl text-teal-400">
                A little about me.
              </p>
              <div>
                <p className="pt-5 pb-5">
                  Hello! I'm James, an IT professional originally from the UK,
                  and currently living in Japan. Over the past few years, I have
                  worked in Data Center Operations at major cloud providers,
                  granting me invaluable insights into the intricacies of cloud
                  technology. My passion lies in software and application
                  development, where I've harnessed my skills in my workplace
                  and have become somewhat of a "rogue developer" crafting
                  internal tools and applications that benefit more than 10,000
                  staff members within the organizations I have worked in. I've
                  also had the privilege of engaging in mentoring sessions with
                  internal software development teams and presenting my work to
                  senior directors and VPs. I'm on the lookout for opportunities
                  in both Japan and the UK. Please feel free to explore my
                  resume and delve into my skills and experiences below.
                </p>
              </div>

              <div>
                <button className="text-white  group border-2 px6 mt-2 pl-2 py-3 my-2 flex items-center hover:text-teal-400 hover:border-teal-400">
                  Download Resume
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-2 mr-2" />
                  </span>
                </button>
              </div>
            </motion.div>

            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              src={James}
              alt="James"
              className="max-w-[500] rounded-full w-3/4 bg-gradient-to-b from-teal-400 ml-10 mx-auto overflow-hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
