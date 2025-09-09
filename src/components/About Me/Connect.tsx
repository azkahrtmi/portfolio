import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Connect() {
  return (
    <div className="flex-1">
      <h2 className="font-bold mb-3 text-2xl md:text-3xl bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
        CONNECT
      </h2>
      <div className="flex flex-col gap-3">
        <a
          href="https://www.facebook.com/fhioioaf/"
          target="_blank"
          className="bg-[#1a1a1a] p-4 rounded-lg flex items-center justify-between hover:bg-black text-xl md:text-2xl w-full transition-all duration-200 hover:translate-x-2"
        >
          <div className="flex items-center gap-3">
            <FaFacebook className="text-2xl md:text-3xl" />
            <span className="font-medium">Facebook</span>
          </div>
          <span className="text-sm md:text-lg text-gray-300">Azka Hartami</span>
        </a>
        <a
          href="https://www.linkedin.com/in/azka-hartami/"
          target="_blank"
          className="bg-[#1a1a1a] p-4 rounded-lg flex items-center justify-between hover:bg-black text-xl md:text-2xl w-full transition-all duration-200 hover:translate-x-2"
        >
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-2xl md:text-3xl" />
            <span className="font-medium">LinkedIn</span>
          </div>
          <span className="text-sm md:text-lg text-gray-300">Azka Hartami</span>
        </a>
        <a
          href="https://github.com/azkahrtmi"
          target="_blank"
          className="bg-[#1a1a1a] p-4 rounded-lg flex items-center justify-between hover:bg-black text-xl md:text-2xl w-full transition-all duration-200 hover:translate-x-2"
        >
          <div className="flex items-center gap-3">
            <FaGithub className="text-2xl md:text-3xl" />
            <span className="font-medium">GitHub</span>
          </div>
          <span className="text-sm md:text-lg text-gray-300">azkahrtmi</span>
        </a>
      </div>
    </div>
  );
}
