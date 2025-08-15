import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 ">
      <div className="text-center sm:flex items-center justify-between mt-12 mx-[10%] py-6">
        <h1 className="font-lora text-4xl font-extrabold dark:text-white cursor-pointer">
          DNR
        </h1>
        <div className="md:flex">
          <p>© 2025 Nikhilraj Dumpeti.</p>
          <p> All rights reserved.</p>
        </div>

        <ul className="flex items-center justify-center gap-6 md:gap-4 mt-4 sm:mt-0">
          <li>
            <a href="https://www.linkedin.com/in/nikhilraj-dumpeti" target="_blank">
              <FaLinkedinIn className="size-6" />
            </a>
          </li>
          <li>
            <a href="https://github.com/nikhilraj021" target="_blank">
              <FaGithub className="size-6" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ni_kill_raj_021/" target="_blank">
              <FaInstagram className="size-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
