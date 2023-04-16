import React from "react";
import { Link } from "react-router-dom";
import "../css/QuizPage.css";
import "../css/NavBar.css";
import defaultImg from "../assets/default.jpg";

const Quiz = ({ quiz, questions }) => {
  return (
    <>
      <div>
        <div>
          <div>
            <p className="fw-bold fs-600">{quiz.name}</p>
            <p className="fw-semi-bold fs-500">{quiz.description}</p>
          </div>
          <div>
            <img
              className="Quiz-img"
              src={quiz.image_url ? quiz.image_url : defaultImg}
              alt="This was supposed to be something else"
            />
          </div>
        </div>
        <div>
          <p className="fw-semi-bold fs-600">{quiz.category}</p>
          <Link to="/Question" state={{ questions }}>
            <button className="quiz-button">Solve</button>
          </Link>
          <p className="fw-semi-bold fs-600">Questions : {questions.length} </p>
        </div>
      </div>
    </>
  );
};

export default Quiz;
