import React, { useState, useEffect } from "react";
import "../css/QuizPage.css";
import "../css/HomePage.css";
import defaultImg from "../assets/default.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Quiz = ({ quiz, questions }) => {
  return (
    <>
    {console.log(questions)}
      <Link to="/Question" className="QPageLinkFont">
        <div className="QPageQuizContainer">
          <div className="QPageQuizInfoContainer">
            <div>
              <p className="QPageQuizHeader">{quiz.name}</p>
            </div>
            <div>
              <p className="QPageQuizText">{quiz.description}</p>
            </div>
          </div>
          <div className="QPageQuizContainer">
            <img
              className="QPageQuizImage QPageQuizImageBorder"
              src={quiz.image_url ? quiz.image_url : defaultImg}
            />
          </div>
          <div>
            <p className="QPageQuizHeader">{quiz.category}</p>
          </div>
          <div>
            <p className="QPageQuizHeader">Questions : {questions.length} </p>
            {/* answers array can be accesed via questions.answers */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Quiz;
