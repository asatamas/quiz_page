import React from "react";
import "../css/Question.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

const Question = () => {
  useEffect(() => {
    const startButton = document.getElementById("start_btn");
    const nextButton = document.getElementById("next_btn");
    const questionContainerElement =
      document.getElementById("question_container");
    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer_buttons");

    let shuffleQuestions, currentQuestionIndex;

    startButton.addEventListener("click", startGame);
    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      setNextQuestion();
    });

    function startGame() {
      console.log("Started");
      startButton.classList.add("hide");
      shuffleQuestions = questions
        .sort(() => Math.random() - 0.5)
        .map((e) => {
          e.answers.sort(() => Math.random() - 0.5);
          return e;
        });
      currentQuestionIndex = 0;
      questionContainerElement.classList.remove("hide");
      setNextQuestion();
    }

    function showQuestion(question) {
      questionElement.innerText = question.question;
      question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
      });
    }

    function setNextQuestion() {
      resetState();
      showQuestion(shuffleQuestions[currentQuestionIndex]);
    }

    function resetState() {
      nextButton.classList.add("hide");
      while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
      }
    }

    function selectAnswer(e) {
      const selectedButton = e.target;
      const correct = selectedButton.dataset.correct;
      setStatusClass(document.body, correct);
      Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
      });
      if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
      } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
      }
    }

    function setStatusClass(element, correct) {
      clearStatusClass(element);
      if (correct) {
        element.classList.add("correct");
      } else {
        element.classList.add("wrong");
      }
    }

    function clearStatusClass(element) {
      element.classList.remove("correct");
      element.classList.remove("wrong");
    }

    const questions = [
      {
        question: "What is 2+2?",
        answers: [
          { text: 4, correct: true },
          { text: 10, correct: false },
          { text: 5, correct: false },
          { text: 40, correct: false },
        ],
      },
      {
        question: "What da dog doing?",
        answers: [
          { text: "chilling", correct: true },
          { text: "bruh dead", correct: false },
          { text: "idk", correct: false },
          { text: "chilling but better", correct: false },
        ],
      },
    ];
  }, []);

  return (
    <main>
      <div className="question_body">
        <div className="question-page_container">
          <div id="question_container" className="hide">
            <div id="question">Question</div>
            <div id="answer_buttons" className="btn-grid">
              <button className="btn">Answer1</button>
              <button className="btn">Answer2</button>
              <button className="btn">Answer3</button>
              <button className="btn">Answer4</button>
            </div>
          </div>
          <div className="controls">
            <button id="start_btn" className="start_button btn">
              Start
            </button>
            <button id="next_btn" className="next_button btn hide">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

// document.addEventListener("DOMContentLoaded", () => {});

export default Question;
