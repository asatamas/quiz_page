import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/HomePage.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div id="home-container">
        <div className="header-container lg">
          <header>
            <h1 id="home-hdr">Welcome to QuizHub!</h1>
            <p className="home-p">
              Enjoy your time by creating and playing quizzes on whichever
              topics you like!
            </p>
          </header>
          <p className="body-p">
            Get started by creating a new quiz or by playing already existing
            one! You can do that by either clicking the buttons below or by
            using navigation bar on the top of the page!
          </p>

          <div className="buttons-container">
            <Link to="/QuizPage">
              <button className="quiz-btn">Play a quiz</button>
            </Link>
            <Link to="/NoPage">
              <button className="quiz-btn">Create a quiz</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
