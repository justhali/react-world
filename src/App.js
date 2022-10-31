import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
      // A mettre en premier car c'est un élément principal pour la navigation
      <BrowserRouter>
        <Routes>
          {/* Liens vers les pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Le path="*" fonctionne si jamais l'url ne correspond à riien de déclaré au dessus */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
