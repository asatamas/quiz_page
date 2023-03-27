import React from "react";
import AboutPage from "./page_components/AboutPage";
import HowToPage from "./page_components/HowToPage";
import HomePage from "./page_components/HomePage";
import QuizPage from "./page_components/QuizPage";
import NoPage from "./page_components/NoPage";
import NavBar from "./page_components/NavBar";
import Question from "./page_components/Question";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/HowToPage" element={<HowToPage />} />
        <Route path="/QuizPage" element={<QuizPage />} />
        <Route path="/Question" element={<Question />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default App;
