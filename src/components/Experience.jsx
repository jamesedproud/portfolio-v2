import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AWS from "../assets/aws.png";
import Oracle from "../assets/oracle.png";
import Greenwich from "../assets/greenwich.jpg";
import { motion } from "framer-motion";

const jobs = [
  {
    title: "BSc (Hons) Computing, First Class Honors",
    company: "University of Greenwich, London",
    dates: "Sep 2014 - Jul 2017",
    logo: Greenwich,
    points: [
      "Awarded the Computer Information Systems Department Prize for Outstanding Achievement.",
      "Dissertation: An investigation into how gamification may enhance education and improve overall performance and motivation. Awarded: 90%.",
      "Completed a variety of other software, game and application development projects both alone and in groups using various programming languages including Java, PHP, C# and C++.",
      "Covered a broad range of technical modules such as database application technologies, 3D computer graphics, systems development and web application development.",
    ],
  },
  {
    title: "Data Center Technician",
    company: "Amazon Web Services, Tokyo",
    dates: "Jul 2020 - Feb 2022",
    logo: AWS,
    points: [
      "Developed and provided ongoing updates to a complex script used by over 10,000 employees globally, significantly improving the functionality and usability of the internal ticketing system.",
      "Used various tools for troubleshooting server hardware and network-related issues.",
      "Configured, provisioned and replaced network hardware from various vendors.",
      "Developed, implemented and managed internal process improvement projects.",
    ],
  },
  {
    title: "Systems Administrator, Data Center Ops",
    company: "Oracle, Tokyo",
    dates: "Feb 2022 - Present",
    logo: Oracle,
    points: [
      "Developing and maintaining a web application used by all technicians and managers in Japan for tracking incoming rack deliveries to data centers.",
      "Installing, deploying and decommissioning of data center infrastructure.",
      "Leading troubleshooting and repair of server hardware and network-related issues.",
      "Using Linux tools in order to carry out hardware component diagnosis and troubleshooting.",
    ],
  },
  {
    title: "Site Lead, Data Center Ops",
    company: "Oracle, Tokyo",
    dates: "Jun 2023 - Present",
    logo: Oracle,
    points: [
      "Overseeing the Tokyo East data centers and ensuring the daily operations are carried out to a high standard.",
      "Acting as the initial point of escalation for technicians.",
      "Leading team meetings, addressing areas of concern and ensuring technicians understand priorities.",
      "Creating and maintaining the monthly shift schedules and ensuring that the data centers are adequately manned.",
    ],
  },
];

const ExperienceCard = ({ job }) => {
  const isOracle = job.logo === Oracle;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgb(17 24 39)",
        border: "1px solid white",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid white" }}
      iconStyle={{ background: job.logo }}
      date={job.dates}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={job.logo}
            alt={job.company}
            className={`w-[${isOracle ? "110%" : "110%"}] h-[${
              isOracle ? "110%" : "110%"
            }] object-contain border-1 border-white rounded-full`}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[18px] font-bold text-white-400">{job.title}</h3>
        <p
          className="text-secondary text-[14px] font-semibold text-white-400 italic"
          style={{ margin: 0 }}
        >
          {job.company}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {job.points.map((point, index) => (
          <li
            key={`job-point-${index}`}
            className={`text-[12px] pl-1 tracking-wider text-gray-400`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div name="experience" className="w-full bg-gray-900 text-white">
      <div className="mx-auto p-4 flex flex-col justify-center w-full pt-20">
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
          <p className="text-4xl font-bold text-[#64ffda] mb-5">Experience</p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="mt-0 flex flex-col">
          <VerticalTimeline>
            {jobs.map((job, index) => (
              <ExperienceCard key={index} job={job} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
