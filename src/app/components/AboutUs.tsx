import Image from "next/image";
import React from "react";
import { assets } from "../../../assets/assets";
import { infoList } from "../content/infoList";
import { toolsData } from "../content/tools";

// lighthover - #fcf4ff
// darkhover - #2a004a
// darktheme - #11001F

const AboutUs = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-20 my-20 w-full">
        <div className="w-64 md:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user_pic"
            className=" w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 font-ovo max-w-2xl">
            I'm a passionate software developer specializing in Mern-stack
            development with expertise in JavaScript, React, and Node.js. I
            focus on building user-friendly applications and writing clean code.
            I’m passionate about continuous learning and collaboration. Check
            out my portfolio to see my work!
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-grey-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt="icon" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-grey-700">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, i)=>(
              <li key={i} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-grey-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500">
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))} 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
