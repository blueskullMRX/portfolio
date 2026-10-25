import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => (
  <>
    <a className="skip" href="#about">Skip to content</a>
    <Nav />
    <main>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
    </main>
    <Contact />
  </>
);

export default App;
