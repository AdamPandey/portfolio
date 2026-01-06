import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-primary min-h-screen text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;