import React from "react";
import { useLocation } from "react-router-dom";
import "../css/Question.css";
import "bootstrap/dist/css/bootstrap.css";
import { useRef, useState, useEffect } from "react";
import $ from "jquery";

export default function Question() {
  let timer = 5;
  let intervalIds = [];

  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    const startButton = document.getElementById("start_btn");
    const nextButton = document.getElementById("next_btn");
    const questionContainerElement =
      document.getElementById("question_container");
    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer_buttons");
    let score;

    let shuffleQuestions, currentQuestionIndex;

    startButton.addEventListener("click", startGame);
    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      setNextQuestion();
    });

    //TIMER
    //------------------------------------------------------------------------
    function normalTimer() {
      clearIntervals();
      timer = 10;
      $(".timer").text(10);

      intervalIds.push(
        setInterval(() => {
          timer--;
          $(".timer").text(timer);

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
      score = 0;
      document.getElementById("question_count").classList.remove("hide");
      $(".quiz_score").text("Current score: " + score);
      questionElement.classList.remove("hide");
      answerButtonsElement.classList.remove("hide");
      startButton.classList.add("hide");
      shuffleQuestions = data.questions
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
      normalTimer();
      questionElement.innerText = question.name;
      question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.name;
        button.classList.add("question_btn");
        if (answer.isCorrect === "1") {
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
      const selectedButton = e.target;
      const correct = selectedButton.dataset.correct;
      selectedButton.classList.add("focus");
      setStatusClass(document.body, correct);
      Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
        button.classList.add("no-click");
      });
      if (correct) {
        calculateScore();
      }
      if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
      } else {
        endScreen();
      }
    }

    function endScreen() {
      document.getElementById("question_count").classList.add("hide");
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
  }, []);

  const [questionIndex, setIndex] = useState(0);

  function handleClick() {
    console.log(questionIndex);
    if (questionIndex === data.questions.length) {
      setIndex(questionIndex - (data.questions.length - 1));
    } else {
      setIndex(questionIndex + 1);
    }
  }

  return (
    <main>
      <div className="question_body">
        <h1> </h1>
        <div className="timer"></div>
        <div className="question-page_container">
          <div id="question_container" className="hide">
            <p1 id="question_count">
              {" "}
              Question {questionIndex} of {data.questions.length}
            </p1>
            <div id="question">Question</div>
            <div id="answer_buttons" className="btn-grid">
              <button className="question_btn">Answer1</button>
              <button className="question_btn">Answer2</button>
              <button className="question_btn">Answer3</button>
              <button className="question_btn">Answer4</button>
            </div>
          </div>
          <div className="controls">
            <button
              id="start_btn"
              className="start_button question_btn"
              onClick={handleClick}
            >
              Start
            </button>
            <button
              id="next_btn"
              className="next_button question_btn hide"
              onClick={handleClick}
            >
              Next
            </button>
          </div>
        </div>
        <div className="quiz_score"></div>
      </div>
    </main>
  );
}
//export default Question;
