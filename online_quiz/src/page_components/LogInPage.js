import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import "../css/LogInPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login action using email and password values
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <>
      <header className="primary-header padding-block-500">
        <div className="container">
          <h className="fs-primary-heading fw-semi-bold">Login to QuizHub</h>
        </div>
      </header>

      <div className="container">
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="fs-650">Email address</Form.Label>
            <Form.Control
              className="login-input"
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="fs-650">Password</Form.Label>
            <Form.Control
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <div className="even-column">
            <Link to="/HomePage">
              <button
                variant="primary"
                type="submit"
                className="rgl-button fw-bold"
              >
                Login
              </button>
            </Link>

            <Link to="/RegisterPage">
              <button
                variant="primary"
                type="submit"
                className="rgl-button fw-bold"
              >
                Register
              </button>
            </Link>
          </div>
        </Form>
      </div>
      <footer className="padding-block-900 container">
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
