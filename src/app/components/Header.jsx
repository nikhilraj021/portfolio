import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets.js";

const Header = () => {
  return (
    <div>
      <div>
        <Image
          src={assets.profile_img}
          alt="profile-pic"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo ">
        Hi I'm Nikhilraj Dumpeti
        <Image src={assets.hand_icon} alt="hand-icon" className="w-32" />
      </h3>
      <h1 className="text-3xl md:text-6xl lg:text-[66px] font-ovo">
        Full Stack Developer at BlackCoat.Ai
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I am a Full Stack Developer with 2 years of experience with multiple
        companies like Blackcoat.Ai and SypD Technologies
      </p>
      <div>
        <a href="#contact">
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="profile-pic"
            className="w-4"
          />
        </a>
        <a href="/Nikhilraj_Dumpeti_Resume.pdf" target="_blank">
          My Resume
          <Image
            src={assets.download_icon}
            alt="profile-pic"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
