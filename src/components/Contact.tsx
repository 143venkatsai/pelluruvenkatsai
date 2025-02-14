"use client";

import { motion } from "framer-motion";

import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const contactDetails = [
  {
    id: 1,
    icon: <MdEmail />,
    name: "venkatsaipelluru143@gmail.com",
  },
  {
    id: 2,
    icon: <IoLogoWhatsapp />,
    name: "+91 9705441781",
  },
  {
    id: 3,
    icon: <FaLocationDot />,
    name: "Nellore Andhra Pradesh",
  },
];

export default function Contact() {
  return (
    <div className="contact mb-20" id="contact">
      <h1 className="text-center sm:mb-10 mb-10 text-2xl text-green-400 font-semibold">
        Contact Me
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col">
          {contactDetails.map((contact) => (
            <motion.div
              key={contact.id}
              className="flex items-center my-2 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-green-950 p-2 text-lg text-green-400 rounded-full mr-4 transition-all transform hover:scale-125 duration-200">
                {contact.icon}
              </span>
              <span className="text-sm text-green-400">{contact.name}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <input
            type="text"
            id="name"
            placeholder="Your name"
            required
            className="bg-transparent border border-green-400 px-2 py-2 text-sm rounded"
          />
          <input
            type="email"
            id="email"
            placeholder="Your email"
            required
            className="bg-transparent border border-green-400 px-2 py-2 text-sm rounded"
          />
          <textarea
            name=""
            id=""
            placeholder="Your message"
            required
            className="bg-transparent border border-green-400 px-2 py-2 h-20 w-full text-sm rounded"
          ></textarea>
          <button className="text-green-950 border py-2 rounded border-green-400 bg-green-400 hover:text-green-500 hover:bg-transparent hover:border-green-400 transition-all duration-200">
            Send Message
          </button>
        </motion.div>
      </div>
    </div>
  );
}
