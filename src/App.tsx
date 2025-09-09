import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <AboutMe />
        <Skills />
        <Education />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
