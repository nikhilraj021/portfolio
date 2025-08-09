"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="transition duration-700 "
    >
      {currentTheme === "dark" ? (
        <BiSun className="cursor-pointer size-7" />
      ) : (
        <BiMoon className="cursor-pointer size-7" />
      )}
    </button>
  );
};

export default ThemeToggler;
