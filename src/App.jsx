import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ─────────────────────────────────────────────────────────────
//  App.jsx — to ADD or REMOVE a section:
//  • Comment out / delete the component here
//  • Also update navLinks in src/data/portfolio.js
// ─────────────────────────────────────────────────────────────

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
