import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdMail } from "react-icons/md";

const Socials = () => {
  return (
    <>
      <div className="w-full h-[10px] bg-gray-900 flex justify-center text-center items-center p-4 ">
        <div className="text-5xl flex justify-center gap-5 py-3 text-gray-600 mb-10">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jamesedproud"
          >
            <AiFillGithub className="text-white hover:text-teal-400 hover:cursor-pointer" />{" "}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/james-proud-55990b148/"
          >
            <AiFillLinkedin className="text-white hover:text-teal-400 hover:cursor-pointer" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:jamesproud@live.co.uk"
          >
            <MdMail className="text-white hover:text-teal-400 hover:cursor-pointer" />
          </a>
        </div>
      </div>

      <p className="text-gray-400 text-sm text-center bg-gray-900 ">
        Built with{" "}
        {
          <a
            target="_blank"
            rel="noreferrer"
            href="https://react.dev/"
            className="text-white hover:cursor-pointer hover:text-teal-400"
          >
            React
          </a>
        }{" "}
        and{" "}
        {
          <a
            target="_blank"
            rel="noreferrer"
            href="https://tailwindcss.com/"
            className="text-white hover:cursor-pointer hover:text-teal-400"
          >
            Tailwind.css
          </a>
        }{" "}
        by James Proud
      </p>
    </>
  );
};

export default Socials;
