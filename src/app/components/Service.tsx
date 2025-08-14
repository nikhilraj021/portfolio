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
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
];
