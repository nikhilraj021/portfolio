import React from "react";
import { Timeline } from "./ui/timeline";
import {
  CheckCircle,
  Code2,
  Layers,
  Database,
  GitBranch,
  BookOpen,
} from "lucide-react";
import { assets } from "../../../assets/assets";

export default function Experience() {
  const data = [
    {
      title: "Associate Software Developer",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
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
          </div>
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
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <BookOpen className="w-4 h-4 text-blue-500" />
              Completed intensive Full Stack Development training program.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <Code2 className="w-4 h-4 text-green-500" />
              Gained expertise in HTML, CSS, Bootstrap, JavaScript, React,
              Node.js, Express.js, and Python.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <Layers className="w-4 h-4 text-purple-500" />
              Built multiple full-stack projects integrating front-end and
              back-end technologies.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <Database className="w-4 h-4 text-orange-500" />
              Worked with SQL databases (SQLite) for data storage and retrieval.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <GitBranch className="w-4 h-4 text-yellow-500" />
              Used Git for version control and collaborative development.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={assets.reactjs.src}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={assets.nodejs.src}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={assets.python.src}
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
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
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Learned HTML, CSS, Bootstrap, and JavaScript for front-end
              development.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Built responsive and interactive web pages using modern UI
              frameworks.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Gained experience in layout design, styling, and basic client-side
              scripting.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Collaborated with team members to understand real-world project
              workflows.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Enhanced problem-solving skills by implementing practical web
              solutions.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
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
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
