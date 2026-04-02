import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;

