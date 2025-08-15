// import React from "react";
// import { workData } from "../content/content";
// import Image from "next/image";
// import { assets } from "../../../assets/assets";

// const Work = () => {
//   return (
//     <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
//       <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
//       <h2 className="text-center text-5xl font-ovo">My Latest Work</h2>

//       <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
//         Here you can explore some of the projects I've worked on showcasing my
//         skills and creativity. Each project reflects my dedication to quality
//         and innovation in Full Stack Development.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
//         {workData.map((project, i) => (
//           <div
//             key={i}
//             style={{ backgroundImage: `url(${project.bgImage})` }}
//             className="aspect-square bg-no-repeat bg-cover bg-center relative group rounded-lg cursor-pointer"
//           >
//             <div className="absolute bg-white w-10/12 rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
//               <div>
//                 <h2 className="font-semibold">{project.title}</h2>
//                 <p className="text-sm text-gray-700">{project.description}</p>
//               </div>
//               <div className="border rounded-full border-black aspect-square w-9 flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 trasition duration-300">
//                 <Image src={assets.send_icon} alt="" className="w-5" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Work;


"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { workData } from "../content/content";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20 relative z-30">
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My Latest Work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Here you can explore some of the projects I've worked on showcasing my
        skills and creativity. Each project reflects my dedication to quality
        and innovation in Full Stack Development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 relative z-30">
        {workData.map((project, i) => (
          <div key={i} className="flex items-center justify-center w-full h-[25rem] relative z-30">
            <PinContainer
              title={project.title}
              href={project.link || "#"}
              containerClassName="relative z-30"
            >
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] relative z-30">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <p className="text-base !m-0 !p-0 font-normal text-slate-500">
                  {project.description}
                </p>
                <div 
                  className="flex-1 w-full rounded-lg mt-4 bg-cover bg-no-repeat bg-center relative z-30"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
