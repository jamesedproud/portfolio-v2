import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Socials from "./Socials";

//template_6d3hcss
//service_8n7f2ni
const pub_key = "cjUMeLB0W5aG0doai";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_8n7f2ni",
        "template_6d3hcss",
        {
          from_name: form.name,
          to_name: "James",
          from_email: form.email,
          to_email: "jamesedproud@gmail.com",
          message: form.message,
        },
        pub_key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you soon");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <>
      <div className="text-white w-full sm:h-screen bg-gray-900 flex flex-col justify-center text-center items-center -mt-56 md:p-20">
        <div
          name="contact"
          className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen"
        >
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
            <p className="text-4xl font-bold text-teal-400">Contact</p>
            <p className="mt-5 text-center">
              Feel free to send me a message via the form below or directly by
              email to <i>jamesproud@live.co.uk</i>
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-1 text-left">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-1 text-left">
                  Email
                </span>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-1 text-left">
                  Message
                </span>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
                />
              </label>
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl border-2 border-white hover:border-teal-400 hover:text-teal-400"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>
        </div>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="pt-0"
        >
          <Socials />
        </motion.span>
      </div>
    </>
  );
};

export default Contact;
