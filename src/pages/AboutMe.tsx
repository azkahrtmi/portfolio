import Image from "/profile.jpg";
import TypingLogo from "../components/TypingLogo";
import Info from "../components/About Me/Info";
import Connect from "../components/About Me/Connect";
import Reveal from "../components/Reveal";

export default function AboutMe() {
  return (
    <Reveal>
      <div className="mt-20 px-4 md:px-8" id="about">
        <div className="max-w-6xl w-full mx-auto rounded-2xl bg-gradient-to-r from-[#121212] to-[#262626] text-white p-6 md:p-8 shadow-lg flex flex-col gap-6 md:mt-34 mt-22">
          {/* Profile + Info */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            {/* Foto profile */}
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
              <img
                src={Image}
                alt="profile"
                width={128}
                height={128}
                className="rounded-xl object-top"
              />
            </div>

            {/* Info utama */}
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <span className="text-green-400 text-sm font-semibold">
                ● AVAILABLE FOR HIRE
              </span>
              <TypingLogo
                firstText="AZUN"
                finalText="AZKA HARTAMI"
                className="text-xl md:text-3xl font-extrabold"
              />
            </div>
          </div>

          {/* Info tambahan */}
          <Info />

          {/* Garis */}
          <hr className="my-4 border-gray-700" />

          {/* About Me + Connect */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* About Me */}
            <div className="flex-1 text-left">
              <h2 className="font-bold mb-3 text-2xl md:text-3xl bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
                ABOUT ME
              </h2>
              <p className="text-gray-300 leading-relaxed text-justify text-base md:text-[16px]">
                I recently graduated with a degree in Computer Science. I am
                passionate about working as a full-stack developer, mainly using
                Next.js, React, Vite, Node.js, and PostgreSQL. I am also
                expanding my skills by learning Express, Python, Golang, .NET,
                and MySQL to strengthen my understanding of modern application
                development. Outside of programming, I enjoy working out and
                playing Dota in my free time, which helps me balance
                productivity and leisure.
              </p>
            </div>

            {/* Connect */}
            <Connect />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
