import React from "react";
import { Timeline } from "./ui/timeline";
import {
  CheckCircle,
  Code2,
  Layers,
  Database,
  GitBranch,
  BookOpen,
  Rocket,
  Bot,
  Cloud,
  Server,
} from "lucide-react";
import { assets } from "../../../assets/assets";
import Image from "next/image";

export default function Experience() {
  const data = [
    {
      title: "Full Stack Developer",
      content: (
        <div>
          <p className="mb-8 text-xs font-semibold text-neutral-800 md:text-sm dark:text-neutral-200">
           Blackcoat.Ai (Jan 2025 – Present), Gurugram.
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
              <Code2 className="w-6 h-6 text-green-500" />
              Developed a multi-role (Admin, Vendor, Customer) e-commerce
              platform managing 20,000+ SKUs with advanced product, order, and
              inventory workflows.
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
              <Server className="w-6 h-6 text-blue-500" />
              Built secure role-based authentication and authorization systems.
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
              <Cloud className="w-6 h-6 text-orange-500" />
              Implemented full Firebase ecosystem (Authentication, Firestore,
              Storage, Hosting, Cloud Functions).
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
              <Bot className="w-6 h-6 text-purple-500" />
              Integrated AI-powered features to enhance product recommendations
              and user experience.
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
              <Database className="w-6 h-6 text-pink-500" />
              Worked with real-time data synchronization and optimized database
              queries.
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "Associate Software Developer",
      content: (
        <div>
          <p className="mb-8 text-xs font-semibold text-neutral-800 md:text-sm dark:text-neutral-200">
            SpY D Technology (Mar 2024 – Jan 2025), Hyderabad.
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
              <Code2 className="w-6 h-6 text-green-500" />
              Developed a feature-rich E-Learning platform using Vite, React.js,
              and Tailwind CSS.
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
              <Layers className="w-6 h-6 text-purple-500" />
              Built multiple responsive pages ensuring cross-device
              compatibility.
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
              <Database className="w-6 h-6 text-orange-500" />
              Integrated real-time data for dynamic user experiences.
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
              <Rocket className="w-6 h-6 text-pink-500" />
              Focused on UI/UX improvements to enhance usability and engagement.
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
              <GitBranch className="w-6 h-6 text-blue-500" />
              Used Git and GitHub for version control and collaborative
              development.
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "Training Program",
      content: (
        <div>
          <p className="mb-8 text-xs font-semibold text-neutral-800 md:text-sm dark:text-neutral-200">
            Professional Training in Full Stack Development – NxtWave (Jun 2023
            – Feb 2024)
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <BookOpen className="w-6 h-6 text-blue-500" />
              Completed intensive Full Stack Development training program.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <Code2 className="w-6 h-6 text-green-500" />
              Gained expertise in HTML, CSS, Bootstrap, JavaScript, React,
              Node.js, Express.js, and Python.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <Layers className="w-6 h-6 text-purple-500" />
              Built multiple full-stack projects integrating front-end and
              back-end technologies.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <Database className="w-6 h-6 text-orange-500" />
              Worked with SQL databases (SQLite) for data storage and retrieval.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <GitBranch className="w-6 h-6 text-yellow-500" />
              Used Git for version control and collaborative development.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={assets.reactjs.src}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={assets.nodejs.src}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={assets.python.src}
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={assets.database.src}
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Internship",
      content: (
        <div key={"Changelog"}>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Internship – Manac Infotech Pvt. Ltd. (Oct 2022 – Feb 2023)
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Learned HTML, CSS, Bootstrap, and JavaScript for front-end
              development.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Built responsive and interactive web pages using modern UI
              frameworks.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Gained experience in layout design, styling, and basic client-side
              scripting.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Collaborated with team members to understand real-world project
              workflows.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Enhanced problem-solving skills by implementing practical web
              solutions.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={assets.internship.src}
              alt="Internship"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="experience" className="relative w-full overflow-visible scroll-mt-20">
      <Timeline data={data} />
    </div>
  );
}
