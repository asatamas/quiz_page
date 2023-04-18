import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../assets/default.jpg";
import "../css/NavBar.css";
import "../css/QuizPage.css";

const Quiz = ({ quiz, questions }) => {
  return (
    <>
      <div className="Quiz-cont">
        <div className="even-columns">
          <div className="stuff-go-center padding-block-400">
            <p className="fw-bold fs-600">{quiz.name}</p>
            <p className="fw-semi-bold fs-500">{quiz.description}</p>
          </div>
          <div className="stuff-go-center">
            <img
              className="img-small Quiz-img-bord"
              src={quiz.image_url ? quiz.image_url : defaultImg}
              alt="This was supposed to be something else"
            />
          </div>
        </div>
        <div className="even-columns stuff-go-center">
          <p className="fw-semi-bold fs-600 temp-mg-zero-text">
            {quiz.category}
          </p>
          <Link to="/Question" state={{ questions }}>
            <button className="quiz-button">Solve</button>
          </Link>
          <p className="fw-semi-bold fs-600 temp-mg-zero-text">
            Questions : {questions.length}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Quiz;
