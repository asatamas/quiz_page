import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import "../css/RegisterPage.css";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration action using name, email, and password values
    console.log(
      "Registering with name:",
      name,
      ", email:",
      email,
      ", and password:",
      password
    );
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatchError(event.target.value !== password);
  };

  return (
    <>
      <header className="primary-header padding-block-500">
        <div className="container">
          <h className="fs-primary-heading fw-semi-bold">
            Register for QuizHub
          </h>
        </div>
      </header>

      <div className="container">
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label className="fs-500">Name</Form.Label>
            <Form.Control
              className="login-input"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="fs-500">Email address</Form.Label>
            <Form.Control
              className="login-input"
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="fs-500">Password</Form.Label>
            <Form.Control
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setPasswordMatchError(confirmPassword !== event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label className="fs-500">Confirm Password</Form.Label>
            <Form.Control
              className="login-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {passwordMatchError && (
              <Form.Text className="text-danger">
                Passwords do not match.
              </Form.Text>
            )}
          </Form.Group>
          <div className="even-column">
            <Link to="/NoPage">
              <button
                variant="primary"
                type="submit"
                className="rgl-button fw-bold"
                disabled={passwordMatchError}
              >
                Register
              </button>
            </Link>

            <Link to="/LogInPage">
              <button
                variant="secondary"
                type="button"
                className="rgl-button fw-bold"
              >
                Login
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
