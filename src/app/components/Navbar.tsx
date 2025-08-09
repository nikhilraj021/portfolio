"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../../assets/assets.js";
import { IoMoonOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0right-0 w-11/12 -z-10 translate-y-[-80%] ">
        <Image
          src={assets.header_bg_color}
          alt="bg-color-image"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed flex justify-between items-center px-5 lg:px-8 xl:px-[8%] py-4 z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <h1>Nikhilraj</h1>
        </a>

        <ul className={`hidden font-ovo md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScroll ? "" : "bg-white/50 shadow-sm"}`}>
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
            <IoMoonOutline className="size-6" />
          </button>
          <a
            href="#contact"
            className="hidden md:block px-10 py-2.5 border border-gray-500 rounded-full "
          >
            Contact
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <FiMenu className="size-6 cursor-pointer" />
          </button>
        </div>

        {/* Mobile menu  */}
        <ul
          ref={sideMenuRef}
          className="font-ovo md:hidden flex flex-col gap-4 px-10 py-20 -right-64 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 "
        >
          <button className="absolute top-4 right-4" onClick={closeMenu}>
            <RxCross2 className="size-6 cursor-pointer" />
          </button>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
