import React from "react";
import AboutPage from "./page_components/AboutPage";
import HowToPage from "./page_components/HowToPage";
import NavBar from "./page_components/NavBar";

import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/HowToPage" element={<HowToPage />} />
        </Routes>
    </>
  )
}

export default App;
