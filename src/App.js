import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Portfolio/Projects";
import Skills from "./components/Skills/Skills";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Projects />} />
      <Route path="/projectdetail" element={<ProjectDetail />} />
      <Route path="/projectdetail/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
