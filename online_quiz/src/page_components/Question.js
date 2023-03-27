import React, { createElement } from "react";
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
    let counter;

    let shuffleQuestions, currentQuestionIndex;

    startButton.addEventListener("click", startGame);
    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      setNextQuestion();
    });

    function startGame() {
      console.log("Started");
      counter = 0;
      questionElement.classList.remove("hide");
      answerButtonsElement.classList.remove("hide");
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
      if (correct) {
        counter++;
      }
      if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
      } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        // questionElement.classList.add("hide");
        // answerButtonsElement.classList.add("hide");
        const printScore = document.getElementById("question");
        printScore.classList.add("result_screen");
        printScore.innerText =
          "YOU HAVE GOTTEN " +
          counter +
          " CORRECT ANSWERS\n" +
          "Hit 'Restart' for a better score!";
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
        question: "What is the largest planet in our solar system?",
        answers: [
          { text: "Mars", correct: false },
          { text: "Saturn", correct: true },
          { text: "Earth", correct: false },
          { text: "Neptune", correct: false },
        ],
      },
      {
        question: "How many planets are there in our solar system?",
        answers: [
          { text: 7, correct: false },
          { text: 8, correct: true },
          { text: 9, correct: false },
          { text: 6, correct: false },
        ],
      },
      {
        question:
          "How long does it take for light from the Sun to reach Earth?",
        answers: [
          { text: "8 minutes", correct: true },
          { text: "1 minute", correct: false },
          { text: "8 seconds", correct: false },
          { text: "10 hours", correct: false },
        ],
      },
      {
        question:
          "In order from the sun, where does Saturn sit in the order of the planets? ",
        answers: [
          { text: "Sixth from the sun", correct: true },
          { text: "Fifth from the sun", correct: false },
          { text: "Seventh from the sun", correct: false },
          { text: "Eith from the sun", correct: false },
        ],
      },
      {
        question: "Which planet is the smallest?",
        answers: [
          { text: "Mercury", correct: true },
          { text: "Venus", correct: false },
          { text: "Uranus", correct: false },
          { text: "Mars", correct: false },
        ],
      },
      {
        question: "How many planets have rings?",
        answers: [
          { text: "4", correct: true },
          { text: "3", correct: false },
          { text: "2", correct: false },
          { text: "8", correct: false },
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
