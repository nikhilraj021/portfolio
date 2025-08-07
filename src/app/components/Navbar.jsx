import Image from "next/image";
import React from "react";
import { assets } from "../../../assets/assets.js";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0right-0 w-11/12 -z-10 translate-y-[-80%] ">
        <Image
          src={assets.header_bg_color}
          alt="bg-color-image"
          className="w-full"
        />
      </div>
      <nav className="w-full fixed flex justify-between items-center px-5 lg:px-8 xl:px-[8%] py-4 z-50 ">
        <a href="#top">
          <h1>Nikhilraj</h1>
        </a>

        <ul className="hidden font-ovo md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 shadow-sm">
          <li className="">
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
          <a
            href="#contact"
            className="hidden md:block px-10 py-2.5 border border-gray-500 rounded-full "
          >
            Contact
          </a>
          <button className="block md:hidden ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
