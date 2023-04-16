import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <h1>Register for QuizHub</h1>
      <div className="container1">
        <Form className="register-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="register-input"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="register-input"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="register-input"
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
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              className="register-input"
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
          <Button
            variant="primary"
            type="submit"
            className="register-button"
            disabled={passwordMatchError}
          >
            Register
          </Button>
          <Button variant="secondary" type="button" className="register-button">
            Login
          </Button>
        </Form>
      </div>
      <div className="contact-container">
        <Container>
          <Row>
            <Col>
              <h2>Contact Us</h2>
              <p>
                We hope you enjoy using QuizHub as much as we enjoyed creating
                it. If you have any questions or feedback, please don't hesitate
                to contact us. You can reach us through the contact form on our
                website or by sending an email to support@quizhub.com.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
