// App.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";

// Page Components
import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
import Properties from "./pages/Properties";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/properties" element={<Properties />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
