"use client";
import Image from "next/image";
import React from "react";
import { assets } from "../../../assets/assets";
import { infoList } from "../content/content";
import { toolsData } from "../content/content";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] pt-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-20 my-20 w-full"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 md:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user_pic"
            className=" w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 font-ovo max-w-2xl">
            I'm a passionate software developer specializing in Mern-stack
            development with expertise in JavaScript, React, and Node.js. I
            focus on building user-friendly applications and writing clean code.
            I’m passionate about continuous learning and collaboration. Check
            out my portfolio to see my work!
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="border-[0.5px] border-grey-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt="icon" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-grey-700">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-6 text-gray-700 font-ovo"
          >
            Tools I use
          </motion.h4>

          <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, i) => (
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}  
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-grey-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
