import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      <h1>Login to QuizHub</h1>
      <div className="container1">
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="login-label">Email address</Form.Label>
            <Form.Control
              className="login-input"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>

          <a href="/RegisterPage" className="login-button">
            Register
          </a>
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
