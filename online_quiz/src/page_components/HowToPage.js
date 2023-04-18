import React from "react";
import "../css/HowToPage.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HowToPage() {
  return (
    /**Text and images that explain how to use our quiz platform */
    <>
      <header className="primary-header padding-block-600">
        <div className="container">
          <h className="fs-primary-heading fw-semi-bold ">How to use QuizHub</h>
          <p className="fs-500">
            Welcome to QuizHub, the fun and engaging quiz platform! We have
            designed our platform to be user-friendly and easy to navigate so
            that everyone can enjoy learning through our quizzes. Here's how to
            get started:
          </p>
        </div>
      </header>

      <section className="padding-block-700">
        <div className="container stuff-go-center">
          <h className="fs-650 fw-semi-bold ">Create an account</h>
          <p className="fs-500">
            The first step to using QuizHub is to create an account. Simply
            click on the "Sign Up" button on the top right corner of the
            homepage and fill out the registration form. You'll then receive a
            confirmation email with a link to activate your account.
          </p>
        </div>
      </section>
      <section className="padding-block-700">
        <div className="container stuff-go-center">
          <h className="fs-650 fw-semi-bold ">Browse our quizzes</h>
          <p className="fs-500">
            Once you've signed up and logged in, you'll have access to all our
            quizzes. You can browse by category, search for specific topics or
            simply scroll through our featured quizzes. Click on a quiz to read
            its description and start playing.
          </p>
        </div>
      </section>
      <section className="padding-block-700">
        <div className="container stuff-go-center">
          <h className="fs-650 fw-semi-bold ">Take a quiz</h>
          <p className="fs-500">
            Our quizzes are designed to be fun and educational. They consist of
            multiple-choice questions with different levels of difficulty.
            You'll have a limited amount of time to answer each question, so
            make sure to read carefully and choose your answer wisely. At the
            end of the quiz, you'll receive your score and can see how you
            compare to other players.
          </p>
        </div>
      </section>
      <section className="padding-block-700">
        <div className="container stuff-go-center">
          <h className="fs-650 fw-semi-bold ">Earn points and badges</h>
          <p className="fs-500">
            As you take more quizzes and score higher, you'll earn points and
            badges. These achievements are a fun way to track your progress and
            show off your knowledge to others.
          </p>
        </div>
      </section>

      <footer className="padding-block-400 container">
        <h className="fs-secondary-heading fw-semi-bold">Contact Us</h>
        <p className="fs-500">
          We hope you enjoy using QuizHub as much as we enjoyed creating it. If
          you have any questions or feedback, please don't hesitate to contact
          us. You can reach us through the contact form on our website or by
          sending an email to support@quizhub.com.
        </p>
      </footer>
    </>
  );
}
