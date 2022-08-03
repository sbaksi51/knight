import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import SpecsPage from "./pages/SpecsPage";
import WalletsPage from "./pages/WalletsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="specs" element={<SpecsPage />} />
        <Route path="wallets" element={<WalletsPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
