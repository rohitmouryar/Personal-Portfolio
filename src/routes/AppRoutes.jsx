import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Projects from "../page/Projects";
import Contact from "../page/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;