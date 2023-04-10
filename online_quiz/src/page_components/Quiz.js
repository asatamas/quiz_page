import React from "react";
import {Link} from 'react-router-dom';
import "../css/QuizPage.css";
import defaultImg from "../assets/default.jpg";

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
      </Link>
    </>
  );
};

export default Quiz;
