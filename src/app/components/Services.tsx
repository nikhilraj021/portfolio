import React from "react";
import { serviceData } from "../../../assets/assets";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am a Full Stack Developer with 2 years of experience with multiple
        companies like Blackcoat.Ai and SypD Technologies
      </p>

      <div>
        {serviceData.map((service, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Services;
