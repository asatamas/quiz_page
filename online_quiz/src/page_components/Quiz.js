import React, { useState, useEffect } from "react";
import "../css/QuizPage.css";
import "../css/HomePage.css";
import quizPic1 from "../assets/quizPage-1.JPG";
import quizPic2 from "../assets/quizPage-2.JPG";
import quizPic3 from "../assets/quizPage-3.JPG";
import defaultImg from "../assets/default.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  return (
    <>
      <div className="QPageQuizContainer">
        <div className="QPageQuizInfoContainer">
          <p1 className="QPageQuizHeader">
            {quiz.name}
            <br></br>
            <p2 className="QPageQuizText">{quiz.description}</p2>
          </p1>
          <img
            className="QPageQuizImage QPageQuizImageBorder"
            src={quiz.image_url ? quiz.image_url : defaultImg}
          />
        </div>
        <div className="QPageQuizButtonContainer">
          <Link to="/Question">
            <button className="quiz-btn">Solve quiz</button>
          </Link>
        </div>
        {/* define the route for quiz1 */}
      </div>
    </>
  );
};

export default Quiz;
