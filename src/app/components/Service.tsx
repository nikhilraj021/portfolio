import { HoverEffect } from "./ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div id="services" className="max-w-7xl mx-auto px-8 scroll-mt-20 py-10">
      <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am a Full Stack Developer with 2 years of experience with multiple
        companies like Blackcoat.Ai and SypD Technologies
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Full Stack Development",
    description:
      "Delivering complete web solutions from frontend UI to backend logic, ensuring seamless integration.",
    link: "",
  },
  {
    title: "Backend Development",
    description:
      "Developing secure and scalable server-side applications with Node.js, Express, and REST APIs.",
    link: "",
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive, user-friendly interfaces using React, Next.js, Tailwind CSS, and modern UI frameworks.",
    link: "",
  },
  {
    title: "Version Control",
    description:
      "Managing source code efficiently and deploying applications with modern CI/CD practices.",
    link: "",
  },
];
