import ProjectCard from "../components/projects/ProjectCard";
import projectsData from "../components/projects/ProjectsData";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <Reveal>
      <div className="mt-20 px-4" id="projects">
        {/* Title */}
        <h1 className="bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text text-2xl md:text-4xl font-extrabold hover:translate-x-2 transition-transform duration-300 ease-in-out">
          <span>__</span>&nbsp;PROJECTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
