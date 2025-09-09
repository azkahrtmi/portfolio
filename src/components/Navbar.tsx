import TypingLogo from "./TypingLogo";

export default function Navbar() {
  return (
    <nav className="bg-black/30 backdrop-blur flex h-20 md:h-20 justify-between items-center px-6 md:px-16 shadow-md fixed top-0 w-full z-50">
      {/* Logo */}
      <a href="/">
        <TypingLogo
          firstText="Azun."
          finalText="Azka.Hartami"
          className="text-xl md:text-3xl font-extrabold"
        />
      </a>

      {/* Menu - tampil di md ke atas */}
      <div className="hidden md:flex gap-9 text-gray-300 text-[16px] scroll-smooth">
        <a
          href="#about"
          className="cursor-pointer hover:text-white transition-colors"
        >
          About
        </a>
        <a
          href="#skills"
          className="cursor-pointer hover:text-white transition-colors"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="cursor-pointer hover:text-white transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="cursor-pointer hover:text-white transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Tombol Resume */}
      <a href="/cv_azka_hartami.pdf" target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-black font-semibold rounded-xl px-5 py-2 md:px-5 md:py-2 hover:bg-gray-300 transition-colors cursor-pointer">
          Resume
        </button>
      </a>
    </nav>
  );
}
