import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Experience from "./components/Experience"
import Tech from "./components/Tech"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 scroll-smooth">
      {/* Animated Background */}
      <div className="fixed top-0 -z-10 w-full h-full">
        <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        {/* Floating orbs for visual effect */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <Navbar/>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl"> 
        <Hero/>
        <About/>
        <Experience/>
        <Tech/>
        <Projects/>
        <Contact/>
        {/* Footer */}
        <footer className="py-8 text-center text-neutral-500 border-t border-neutral-800">
          <p className="text-sm">© 2024 Zakaria Amgrout. Crafted with ❤️</p>
        </footer>
      </div>
    </div>
  )
}

export default App
