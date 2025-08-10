"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../../assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "047af6da-f899-42c0-bc23-3f3d8ebb1e18");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I would love to hear from you! Whether you have a question, comments,
        feedback or want to collaborate on a project, feel free to reach out.
      </p>

      <form className="max-w-2xl mx-auto " onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10">
          <input
            type="text"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 bg-white rounded-md"
            placeholder="Enter your name"
            required
            name="name"
          />
          <input
            type="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 bg-white rounded-md"
            placeholder="Enter your email"
            required
            name="email"
          />
        </div>
        <textarea
          rows={6}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 bg-white rounded-md mb-6"
          placeholder="Enter your message"
          required
          name="message"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max bg-black/80 text-white flex items-center justify-between gap-2 rounded-full mx-auto hover:bg-black duration-500 "
        >
          Submit
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
