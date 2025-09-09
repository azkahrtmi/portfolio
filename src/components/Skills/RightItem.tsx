import React from "react";

export default function RightItem() {
  return (
    <div className="flex-1 flex-col">
      <h2 className="font-extrabold text-lg md:text-xl flex items-center">
        <span className="border-l-4 border-white h-6 mr-2"></span>
        Tools & Technologies
      </h2>

      <p className="mt-2 text-justify md:pr-6 text-[13px] md:text-[14px] font-extralight text-gray-300">
        My toolkit is constantly expanding as I explore new technologies that
        enhance user experiences and streamline development workflows. These are
        my daily companions in crafting digital solutions.
      </p>

      {/* Grid Tools */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mt-6">
        {[
          { icon: "R", name: "React" },
          { icon: "T", name: "TypeScript" },
          { icon: "N", name: "Node.js" },
          { icon: "D", name: "Docker" },
          { icon: "E", name: "Express" },
          { icon: "S", name: "Styled Components" },
          { icon: "G", name: "Git" },
          { icon: "F", name: "Figma" },
          { icon: "S", name: "Supabase" },
          { icon: "P", name: "PostgreSQL" },
          { icon: "N", name: ".NET" },
          { icon: "L", name: "Laravel" },
          { icon: "G", name: "Golang" },
          { icon: "P", name: "Python" },
          { icon: "M", name: "MySQL" },
        ].map((tool, index) => (
          <div
            key={index}
            className="flex items-center bg-[#1a1a1a] rounded-lg p-3 md:p-4 shadow-md hover:translate-y-[-2px] transition-transform duration-300"
          >
            <span className="w-8 h-8 flex items-center justify-center rounded bg-black font-bold mr-3 text-sm md:text-base">
              {tool.icon}
            </span>
            <span className="text-xs md:text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
