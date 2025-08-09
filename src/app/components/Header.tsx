import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets.js";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile-pic"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo ">
        Hi I'm Nikhilraj Dumpeti
        <Image src={assets.hand_icon} alt="hand-icon" className="w-6" />
      </h3>
      <h1 className="text-3xl md:text-6xl lg:text-[66px] font-ovo">
        Full Stack Developer at BlackCoat.Ai
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I am a Full Stack Developer with 2 years of experience with multiple
        companies like Blackcoat.Ai and SypD Technologies
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="profile-pic"
            className="w-4"
          />
        </a>
        <a
          href="/Nikhilraj_Dumpeti_Resume.pdf"
          download
          target="_blank"
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="profile-pic" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
