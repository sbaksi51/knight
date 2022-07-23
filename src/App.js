import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import WebDevPage from "./pages/WebDevPage";
import WebDesignPage from "./pages/WebDesignPage";
import UiuxPage from "./pages/UiuxPage";
import DigitalPage from "./pages/DigitalPage";
import SeoPage from "./pages/SeoPage";
import VideoEditingPage from "./pages/VideoEditingPage";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="webdesign" element={<WebDesignPage />} />
        <Route path="webdev" element={<WebDevPage />} />
        <Route path="uiux" element={<UiuxPage />} />
        <Route path="digitalmarketing" element={<DigitalPage />} />
        <Route path="seo" element={<SeoPage />} />
        <Route path="videoediting" element={<VideoEditingPage />} />
      </Routes>
    </div>
  );
}

export default App;
