import { useState } from "react";
import Reveal from "../components/Reveal";

export default function Education() {
  const [rotate, setRotate] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const rotateY = (x / width - 0.5) * 20; // kiri -10°, kanan +10°
    setRotate(rotateY);
  };

  const handleMouseLeave = () => {
    setRotate(0);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Reveal>
      <div className="mt-20 px-4 md:pl-[275px]">
        {/* Title */}
        <h1 className="bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text text-2xl md:text-4xl font-extrabold hover:translate-x-2 transition-transform duration-300 ease-in-out">
          <span>__</span>&nbsp;EDUCATION
        </h1>

        {/* Container utama */}
        <div
          className={`
          max-w-6xl w-full md:w-[900px] mx-auto rounded-2xl 
          bg-gradient-to-r from-[#121212] to-[#262626] text-white 
          flex flex-col mt-10 p-5 md:p-8 gap-6 group cursor-pointer
          transition-all duration-500 ease-out
          ${rotate !== 0 ? "shadow-[0_0_25px_rgba(255,255,255,0.5)]" : ""}
          `}
          style={{
            transform: `perspective(1000px) rotateY(${rotate}deg)`,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={toggleOpen} // biar bisa tap di HP
        >
          {/* Bagian atas */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center font-extrabold text-white gap-2">
              <h3 className="text-xl md:text-3xl">Bachelor&apos;s Degree</h3>
              <span className="bg-white/10 backdrop-blur rounded-xl px-3 py-1 text-[10px] md:text-xs border border-gray-500 shadow-lg w-fit">
                Sep 2020 - Mar 2025
              </span>
            </div>
            <span className="text-gray-500 font-extrabold text-sm md:text-base">
              UPN &quot;Veteran&quot; Yogyakarta
            </span>
            <span className="text-justify text-sm md:text-base pt-4">
              Fresh Computer Science graduate with 2+ years of experience in web
              application development through freelance projects, academic
              research, and contract work.
            </span>
          </div>

          {/* Bagian bawah: hover di desktop OR toggle di mobile */}
          <div
            className={`
            transition-all duration-700 ease-in-out overflow-hidden
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
            group-hover:max-h-[500px] group-hover:opacity-100
          `}
          >
            <hr className="border-gray-700 my-4" />
            <div>
              <span className="font-semibold">Achievements:</span>
              <ul className="space-y-3 mt-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-gray-500 flex-shrink-0"></span>
                  <p className="m-0 text-xs md:text-sm leading-relaxed text-justify">
                    I developed two end-to-end business applications from
                    scratch—one for a homestay booking system (RoemahDjogja) and
                    another for a vehicle rental service (BayangTrans), covering
                    frontend, backend, database, and deployment.
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-gray-500 flex-shrink-0"></span>
                  <p className="m-0 text-xs md:text-sm leading-relaxed text-justify">
                    For my undergraduate thesis research, I developed a
                    deformation analysis tool for the Merapi dome using Digital
                    Image Correlation, which was then utilized in a study at
                    BPPTKG.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
