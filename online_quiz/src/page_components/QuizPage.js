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
        <p1 className="home-p">Play as many as you'd like!</p1>
      </div>

      <div className="QPageQuizzesContainer">
        {/*comment for line spacing, for readability*/}

        <div className="QPageQuizContainer">
          <div className="QPageQuizInfoContainer">
            <p1 className="QPageQuizHeader">
              Shapes
              <br></br>
              <p2 className="QPageQuizText">
                Learn to discern various geometrical shapes.
              </p2>
            </p1>
            <img
              className="QPageQuizImage QPageQuizImageBorder"
              src={quizPic1}
            />
          </div>
          <div className="QPageQuizButtonContainer">
            <Link to="/QuizPage/Quiz1">
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
            <p1 className="QPageQuizHeader">
              Planets
              <br></br>
              <p2 className="QPageQuizText">
                Learn about our solar system planets.
              </p2>
            </p1>
          </div>

          <div className="QPageQuizButtonContainer">
            <Link to="/QuizPage/Quiz2">
              <button className="quiz-btn">Solve quiz</button>
            </Link>
          </div>
        </div>

        {/*comment for line spacing, for readability*/}

        <div className="QPageQuizContainer">
          <div className="QPageQuizInfoContainer">
            <p1 className="QPageQuizHeader">
              Fruits
              <br></br>
              <p2 className="QPageQuizText">Learn to discern fruits.</p2>
            </p1>
            <img
              className="QPageQuizImage QPageQuizImageBorder"
              src={quizPic3}
            />
          </div>

          <div className="QPageQuizButtonContainer">
            <Link to="/QuizPage/Quiz3">
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
