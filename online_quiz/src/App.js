import React from "react";
import AboutPage from "./page_components/AboutPage";
import HowToPage from "./page_components/HowToPage";
import NavBar from "./page_components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page_components/HomePage";

const App = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/HowToPage" element={<HowToPage />} />
        </Routes>
    </>
  )
}

export default App;
