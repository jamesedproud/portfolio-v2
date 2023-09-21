// App.js

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Cursor from "./components/Cursor";
import { animateScroll as scroll } from "react-scroll"; // Import animateScroll from react-scroll

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Socials />
      <Cursor />
    </div>
  );
}

export default App;
