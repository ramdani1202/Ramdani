import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

// Layout mengikuti pola bento-grid 2 kolom dari referensi desain:
// setiap "row" adalah dua panel rounded berdampingan, dengan jarak (gap)
// dan latar gelap di antaranya — nav ikut menyatu di dalam panel hero.
export default function App() {
  return (
    <div className="page">
      <Hero />
      <Skills />
      <div className="bento-row">
        <About />
        <Project />
      </div>
      <Contact />
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Ramdani — built with React &amp; Vite.</span>
      </footer>
    </div>
  );
}
