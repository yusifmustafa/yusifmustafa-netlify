import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default App;
