import { useEffect } from "react";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

// Layout mengikuti pola bento-grid 2 kolom dari referensi desain:
// setiap "row" adalah dua panel rounded berdampingan, dengan jarak (gap)
// dan latar gelap di antaranya — nav ikut menyatu di dalam panel hero.
export default function App() {
  // Animasi scroll-reveal: tiap panel fade + slide-up halus saat masuk viewport.
  // Kartu/tile di dalamnya ikut muncul bertahap (stagger) lewat CSS begitu
  // panel induknya dapat class "is-visible".
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    if (!("IntersectionObserver" in window)) {
      panels.forEach((panel) => panel.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

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
