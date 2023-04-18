import React, { useState, useEffect } from "react";
import "../css/QuizPage.css";
import "../css/NavBar.css";
import Quiz from "./Quiz";
import Loading from "./Loading";

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [questionsData, setQuestions] = useState([]);
  const [answersData, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/php/fetch_data.php?tableName=quizzes"
      );
      const result = await response.json();
      setQuizzes(result);
      setLoading(false);
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
    fetchQuestionData();
    fetchAnswersData();
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {quizzes.length > 0 ? (
        <>
            <div className="quiz-hdr-cnt">
              <h className="fs-primary-heading fw-semi-bold">
                Quizzes quizzes quizzes!!!
              </h>
              <p className="fs-650">Play as many as you'd like!</p>
              <p className="fs-650">Total quizzes: {quizzes.length}</p>
            </div>

          <div className="container Quizzes-grid">
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
              return (
                <Quiz key={quiz.id} quiz={quiz} questions={quizQuestions} />
              );
            })}
          </div>
        </>
      ) : (
        <header className="primary-header">
          <div className="container">
            <h className="fs-primary-heading fw-semi-bold">
              No Quizzes to show! :(
            </h>
          </div>
        </header>
      )}
    </>
  );
};

export default QuizPage;
