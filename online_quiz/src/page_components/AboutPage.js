import React from "react";
import "../css/AboutPage.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// document.body.style = 'background: gray;';
const AboutPage = () => {
  return (
    /**Mostly text that explains our situation and our goals + images */
    <>
      <h1>About us</h1>
      <div className="container1">
        <p className="para1">
          Our team is a group of passionate students who have come together to
          create a fun and engaging quiz platform on the internet. We believe
          that learning can be both entertaining and educational, and our
          platform aims to provide just that. We have combined our diverse skill
          sets in programming, design, and marketing to bring this project to
          life.
        </p>
        <img
          className="image1"
          src="https://media.istockphoto.com/id/1167992655/photo/college-students-with-books-smiling-to-camera-over-grey-wall.jpg?s=612x612&w=0&k=20&c=YYQ1iSCklhc3FaVSCP9jUzn0CfG6SeMVOI4F-5_gJy8="
        ></img>
      </div>

      <div className="container2">
        <p className="para2">
          Our quiz platform is designed to cater to a wide range of users, from
          students to adults who are looking to test their knowledge on various
          topics. We have created an intuitive user interface that is easy to
          navigate, making it accessible to everyone. We offer a variety of
          quizzes, ranging from general knowledge to specialized subjects, to
          cater to the different interests of our users.
        </p>
        <img
          className="image2"
          src="https://st2.depositphotos.com/3591429/8626/i/450/depositphotos_86260782-stock-photo-group-of-diversity-people-celebrating.jpg"
        ></img>
      </div>

      <div className="container1">
        <p className="para1">
          As a team, we have worked tirelessly to ensure that our quiz platform
          is of the highest quality. We have conducted extensive research,
          testing, and development to make sure that the platform is
          user-friendly and offers an excellent user experience. Our goal is to
          make learning fun and accessible to everyone, and we believe that our
          quiz platform is a step in that direction.
        </p>
        <img
          className="image1"
          src="https://www.starmind.ai/hubfs/AdobeStock_416047176.jpg"
        ></img>
      </div>

      <div className="container2">
        <p className="para2">
          We are thrilled to have created this quiz platform and are excited
          about the possibilities it offers. We hope to continue to develop and
          improve our platform to cater to the needs of our users and provide an
          enjoyable learning experience. We are grateful for the opportunity to
          work together as a team and for the support we have received from our
          peers and mentors.
        </p>
        <img
          className="image2"
          src="https://img.freepik.com/free-photo/business-people-shaking-hands-meeting-room_53876-15185.jpg"
        ></img>
      </div>
      <br></br>

      <figure>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <div>
                <img
                  className="quote-bubble"
                  src="https://www.pngkit.com/png/detail/34-347000_black-businessman-png-worth-the-wait.png"
                ></img>
              </div>
            </Col>
            <Col md="auto">
              <div className="quote">
                <blockquote className="blockquote">
                  <p>
                    "We have revolutionized how people think. Bing chilling"
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Aurimas Gasparas,{" "}
                  <cite title="Source Title">CEO of QuizHub</cite>
                </figcaption>
              </div>
            </Col>
          </Row>
        </Container>
      </figure>
    </>
  );
}

export default AboutPage;
