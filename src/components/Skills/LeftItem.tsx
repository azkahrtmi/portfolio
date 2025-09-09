export default function LeftItem() {
  return (
    <div className="flex-1 flex-col">
      <h2 className="font-extrabold text-lg md:text-xl flex items-center">
        <span className="border-l-4 border-white h-6 mr-2"></span>
        Technical Proficiency
      </h2>

      <p className="mt-2 text-justify md:pr-6 text-[13px] md:text-[14px] font-extralight text-gray-300">
        Years of dedicated practice and real-world projects have sharpened my
        technical skills. Each percentage represents my confidence and
        experience level with these technologies.
      </p>

      {/* Skill bar */}
      <div className="flex flex-col gap-3 md:gap-4 pr-0 md:pr-6 pt-8">
        {[
          { name: "React Vite", percent: 85 },
          { name: "JavaScript", percent: 85 },
          { name: "Next.js", percent: 70 },
          { name: "TypeScript", percent: 70 },
          { name: "Tailwind CSS", percent: 80 },
          { name: "Node.js", percent: 80 },
          { name: "PostgreSQL & MySQL", percent: 70 },

          { name: "Python", percent: 60 },
        ].map((skill, index) => (
          <div key={index} className="mb-1">
            <div className="flex justify-between mb-1 text-sm md:text-base">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>
            <div className="w-full bg-gray-700 h-0.5 rounded">
              <div
                className="bg-gray-300 h-0.5 rounded"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
