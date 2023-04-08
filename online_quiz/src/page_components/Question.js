import React, { createElement, useRef } from "react";
import "../css/Question.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useState } from "react";
//import Timer from "./Timer";
import $ from "jquery";

const Question = () => {
  //const [timer, setTimer] = useState(5);
  let timer = 5;
  let intervalIds = [];
  useEffect(() => {
    const startButton = document.getElementById("start_btn");
    const nextButton = document.getElementById("next_btn");
    const questionContainerElement =
      document.getElementById("question_container");
    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer_buttons");
    let counter;
    let score;

    let shuffleQuestions, currentQuestionIndex;

    startButton.addEventListener("click", startGame);
    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      setNextQuestion();
    });

    //TIMER
    //------------------------------------------------------------------------

    function normalTimer(correct) {
      clearIntervals();
      timer = 5;
      $(".timer").text(5);

      intervalIds.push(
        setInterval(() => {
          timer--;
          $(".timer").text(timer);
          //console.log("  Time: " + timer);

          if (timer < 0) {
            $(".timer").text(" ");
            clearIntervals();
            if (shuffleQuestions.length > currentQuestionIndex + 1) {
              nextButton.classList.remove("hide");
            } else {
              endScreen();
            }
            Array.from(answerButtonsElement.children).forEach((button) => {
              setStatusClass(button, button.dataset.correct);
              button.classList.add("no-click");
            });
          }
        }, 1000)
      );
    }

    function clearIntervals() {
      for (var i = 0; i < intervalIds.length; i++) {
        clearInterval(intervalIds[i]);
      }
    }
    //----------------------------------------------------------------------------------------

    function startGame() {
      console.log("Started");
      counter = 0;
      score = 0;
      $(".quiz_score").text("Current score: " + score);
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
      normalTimer(false, false);
      console.log("intervalIDS: " + intervalIds.length);
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
      clearIntervals();
      $(".timer").text(" ");
      console.log(timer);
      const selectedButton = e.target;
      const correct = selectedButton.dataset.correct;
      selectedButton.classList.add("focus");
      setStatusClass(document.body, correct);
      Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
      });
      if (correct) {
        counter++;
        calculateScore();
      }
      if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
      } else {
        endScreen();
      }
    }

    function endScreen() {
      startButton.innerText = "Restart";
      startButton.classList.remove("hide");
      $(".quiz_score").text("");
      const printScore = document.getElementById("question");
      printScore.classList.add("result_screen");
      printScore.innerText =
        "YOU HAVE GOTTEN " +
        score +
        " POINTS\n" +
        "Hit 'Restart' for a better score!";
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

    function calculateScore() {
      score = score + timer * 100;
      $(".quiz_score").text("Current score: " + score);
    }

    const questions = [
      {
        question: "What is the largest planet in our solar system?",
        answers: [
          { text: "Mars", correct: false },
          { text: "Jupiter", correct: true },
          { text: "Earth", correct: false },
          { text: "Saturn", correct: false },
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
          { text: "Eigth from the sun", correct: false },
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
        <div className="timer"></div>
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
        <div className="quiz_score"></div>
      </div>
    </main>
  );
};
export default Question;
