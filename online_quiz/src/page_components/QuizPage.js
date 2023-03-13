import React from "react";
import "../css/QuizPage.css";
import "../css/HomePage.css";
import quizPic1 from "../assets/quizPage-1.JPG";
import quizPic2 from "../assets/quizPage-2.JPG";
import quizPic3 from "../assets/quizPage-3.JPG";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const QuizPage = () => {
  return (
    <>
      <div className="QPageHeaderContainer">
        <h1 id="home-hdr">Quizzes quizzes quizzes!!!</h1>
        <p className="home-p">Play as many as you'd like!</p>
      </div>

      <div className="QPageQuizzesContainer">
        {/*comment for line spacing, for readability*/}

        <div className="QPageQuizContainer">
          <div className="QPageQuizInfoContainer">
            <p className="QPageQuizHeader">
              Shapes
              <br></br>
              <p className="QPageQuizText">
                Learn to discern various geometrical shapes.
              </p>
            </p>
            <img
              className="QPageQuizImage QPageQuizImageBorder"
              src={quizPic1}
            />
          </div>
          <div className="QPageQuizButtonContainer">
            <Link to="./Quiz1">
              <button className="quiz-btn">Solve quiz</button>
            </Link>
          </div>
          {/* define the route for quiz1 */}
        </div>

        {/*comment for line spacing, for readability*/}

        <div className="QPageQuizContainer">
          <div className="QPageQuizInfoContainer">
            <img
              className="QPageQuizImage QPageQuizImageBorder"
              src={quizPic2}
            />
            <p className="QPageQuizHeader">
              Planets
              <br></br>
              <p className="QPageQuizText">
                Learn about our solar system planets.
              </p>
            </p>
          </div>

          <div className="QPageQuizButtonContainer">
            <Link to="./Quiz2">
              <button className="quiz-btn">Solve quiz</button>
            </Link>
          </div>
        </div>

        {/*comment for line spacing, for readability*/}

        <div className="QPageQuizContainer">
          <div className="QPageQuizInfoContainer">
            <p className="QPageQuizHeader">
              Fruits
              <br></br>
              <p className="QPageQuizText">Learn to discern fruits.</p>
            </p>
            <img
              className="QPageQuizImage QPageQuizImageBorder"
              src={quizPic3}
            />
          </div>

          <div className="QPageQuizButtonContainer">
            <Link to="./Quiz3">
              <button className="quiz-btn">Solve quiz</button>
            </Link>
          </div>
        </div>

        {/*comment for line spacing, for readability*/}
      </div>
    </>
  );
};

export default QuizPage;
