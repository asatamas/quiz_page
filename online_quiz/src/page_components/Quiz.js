import React from "react";
import "../css/QuizPage.css";
import defaultImg from "../assets/default.jpg";

const Quiz = ({ quiz, questions }) => {
  return (
    <>
      <div className="Quiz-cont">
        <div className="Quiz-info">
          <div>
            <p className="Quiz-head">{quiz.name}</p>
          </div>
          <div>
            <p className="Quiz-text">{quiz.description}</p>
          </div>
        </div>
        <div className="Quiz-cont">
          <img
            className="Quiz-img Quiz-img"
            src={quiz.image_url ? quiz.image_url : defaultImg}
            alt="This was supposed to be something else"
          />
        </div>
        <div>
          <p className="Quiz-head">{quiz.category}</p>
        </div>
        <div>
          <p className="Quiz-head">Questions : {questions.length} </p>
          {/* answers array can be accesed via questions.answers */}
        </div>
      </div>
    </>
  );
};

export default Quiz;
