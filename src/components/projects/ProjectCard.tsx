import React, { useState } from "react";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  github: string;
  demo?: string; // opsional
  status?: "Completed" | "On-Going";
  techStack: string[];
  features: string[];
  demoAccount?: {
    email: string;
    password: string;
  }; // opsional
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  image,
  github,
  demo,
  status = "Completed",
  techStack,
  features,
  demoAccount,
}) => {
  const [rotate, setRotate] = useState(0);
  const [shadow, setShadow] = useState({ x: 0, y: 20 });
  const isValidUrl = (value: string) => value.startsWith("http");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateY = (x / width - 0.5) * 20;
    const rotateX = -(y / height - 0.5) * 10;

    setRotate(rotateY);

    const shadowX = (x / width - 0.5) * 30;
    const shadowY = (y / height - 0.5) * 30;
    setShadow({ x: shadowX, y: shadowY });

    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    e.currentTarget.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0,0,0,0.4)`;
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setRotate(0);
    setShadow({ x: 0, y: 20 });
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    e.currentTarget.style.boxShadow = `0px 20px 40px rgba(0,0,0,0.4)`;
  };

  // Tentukan warna berdasarkan status
  const statusColor = status === "Completed" ? "bg-green-600" : "bg-purple-600";

  return (
    <div
      className={`
        max-w-6xl w-full md:w-[500px] mx-auto rounded-2xl 
        bg-gradient-to-r from-[#121212] to-[#262626] text-white 
        flex flex-col mt-10 p-5 md:p-8 gap-6
        transition-all duration-300 ease-out
      `}
      style={{
        transform: `perspective(1000px) rotateY(${rotate}deg)`,
        boxShadow: `${shadow.x}px ${shadow.y}px 40px rgba(0,0,0,0.4)`,
        transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gambar */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover"
        />
        {status && (
          <span
            className={`${statusColor} absolute top-3 right-3 px-3 py-1 text-xs rounded-full font-bold shadow-lg`}
          >
            {status}
          </span>
        )}
      </div>

      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="bg-gray-400/30 w-max px-2 rounded-xl py-0.5">
          <span className="text-sm text-white font-light">{category}</span>
        </div>

        <h2 className="text-2xl font-extrabold">{title}</h2>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

        <div className="grid grid-cols-[70px_10px_1fr] gap-2">
          {/* Github */}
          <span className="font-medium text-gray-400">Github</span>
          <span>:</span>
          {isValidUrl(github) ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 italic hover:underline block truncate max-w-[200px] sm:max-w-[300px] md:max-w-full"
            >
              {github}
            </a>
          ) : (
            <span className="text-gray-500 italic">{github}</span> // kalau private
          )}

          {/* Demo */}
          {demo && (
            <>
              <span className="font-medium text-gray-400">Demo</span>
              <span>:</span>
              {isValidUrl(demo) ? (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 italic hover:underline block truncate max-w-[200px] sm:max-w-[300px] md:max-w-full"
                >
                  {demo}
                </a>
              ) : (
                <span className="text-gray-500 italic">{demo}</span> // kalau private
              )}
            </>
          )}
        </div>
      </div>

      {/* Tech stack */}
      <div>
        <h3 className="text-sm font-bold mb-2 text-gray-400">TECH STACK</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-md bg-white/10 border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h3 className="text-sm font-bold mb-3 text-gray-400">KEY FEATURES</h3>
        <ul className="space-y-3 text-sm text-gray-300">
          {features.map((feature, idx) => (
            <li key={idx}>• {feature}</li>
          ))}
        </ul>
      </div>

      {/* Demo Account (opsional) */}
      {demoAccount && (
        <div>
          <h3 className="text-sm font-bold mb-2 text-gray-400">DEMO ACCOUNT</h3>
          <p className="text-sm text-gray-300">
            <span className="font-medium">Email:</span> {demoAccount.email}
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-medium">Password:</span>{" "}
            {demoAccount.password}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
