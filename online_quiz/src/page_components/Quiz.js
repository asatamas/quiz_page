import React from "react";
import { Link } from "react-router-dom";
import "../css/QuizPage.css";
import defaultImg from "../assets/default.jpg";

const Quiz = ({ key, quiz, questions }) => {
  return (
    <>
      <div>
        <div>
          <div>
            <p>{quiz.name}</p>
          </div>
          <div>
            <p>{quiz.description}</p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="Quiz-img"
          src={quiz.image_url ? quiz.image_url : defaultImg}
          alt="This was supposed to be something else"
        />
      </div>
      <div>
        <p>{quiz.category}</p>
        <Link to="/Question" state={{ questions }}>
          <button className="button">Solve</button>
        </Link>
        <p>Questions : {questions.length} </p>
      </div>
    </>
  );
};

export default Quiz;
