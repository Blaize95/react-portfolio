import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="About" element={<About />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Resume" element={<Resume />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }


export default App;

