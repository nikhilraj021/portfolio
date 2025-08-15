
"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';

export default function BackgroundBeamsWithCollisionDemo() {


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "047af6da-f899-42c0-bc23-3f3d8ebb1e18");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json() as { success: boolean; message?: string; };

      if (data.success) {
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        console.error("Error", data);
        toast.error(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error('Failed to send message. Please try again later.');
    }
  };
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 2000,
          },
          error: {
            duration: 2000,
          },
        }}
      />
      <BackgroundBeamsWithCollision>
      <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg pt-14 font-ovo"
        >
          Connect with me
        </motion.h4>
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-ovo"
        >
          Get in touch
        </motion.h2>

        <motion.p
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        >
          I would love to hear from you! Whether you have a question, comments,
          feedback or want to collaborate on a project, feel free to reach out.
        </motion.p>

        <form className="max-w-2xl mx-auto " onSubmit={onSubmit}>
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10">
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
          </motion.div>
          <textarea
            rows={6}
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 bg-white rounded-md mb-6"
            placeholder="Enter your message"
            required
            name="message"
          ></textarea>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            type="submit"
            className="py-3 px-8 w-max bg-black/80 text-white flex items-center justify-between gap-2 rounded-full mx-auto hover:bg-black duration-500 "
          >
            Let&apos;s Talk
          </motion.button>
          {/* {result && <p className="mt-4 text-center">{result}</p>} */}
        </form>
      </div>
    </BackgroundBeamsWithCollision>
    </>)
  };
