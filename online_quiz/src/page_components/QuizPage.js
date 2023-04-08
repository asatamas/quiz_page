import React, { useState, useEffect } from "react";
import "../css/QuizPage.css";
import "../css/HomePage.css";
import Quiz from "./Quiz";

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [questionsData, setQuestions] = useState([]);
  const [answersData, setAnswers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/php/fetch_data.php?tableName=quizzes"
      );
      const result = await response.json();
      setQuizzes(result);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchQuestionData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/php/fetch_data.php?tableName=questions"
      );
      const result = await response.json();
      setQuestions(result);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAnswersData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/php/fetch_data.php?tableName=answers"
      );
      const result = await response.json();
      setAnswers(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchQuestionData();
    fetchAnswersData();
  }, []);

  return (
    <>
      {quizzes.length > 0 ? (
        <>
          <div className="QPageHeaderContainer">
            <h1 id="home-hdr">Quizzes quizzes quizzes!!!</h1>
            <p1 className="home-p">Play as many as you'd like!</p1>
            <p1 className="home-p">Total quizzes: {quizzes.length}</p1>
          </div>

          <div className="QPageQuizzesContainer">
            {/*comment for line spacing, for readability*/}

            {quizzes.map((quiz) => {
              const quizQuestions = questionsData
                .filter((question) => question.quiz_id === quiz.id)
                .map((question) => {
                  const questionAnswers = answersData.filter(
                    (answer) => answer.question_id === question.id
                  );
                  return {
                    ...question,
                    answers: questionAnswers,
                  };
                });
              return <Quiz quiz={quiz} questions={quizQuestions} />;
            })}
          </div>
        </>
      ) : (
        <div className="QPageHeaderContainer">
          <h1 id="home-hdr">No Quizzes to show! :(</h1>
        </div>
      )}
    </>
  );
};

export default QuizPage;
