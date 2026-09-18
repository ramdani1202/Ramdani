import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

// Urutan section sesuai PDF: 1. Hero  2. About  3. Project
// Skills & Contact ditambahkan sebagai pelengkap karena isinya
// sudah diminta secara eksplisit di brief (list skill, kontak WA/LinkedIn/Instagram).
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
      </main>
      <Contact />
    </>
  );
}
