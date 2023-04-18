import React from "react";
import "../css/AboutPage.css";
import "../css/NavBar.css";
import logo1 from "../assets/aboutPage1.jpg";
import logo2 from "../assets/aboutPage2.jpg";
import logo3 from "../assets/aboutPage3.jpg";
import logo4 from "../assets/aboutPage4.avif";

const AboutPage = () => {
  return (
    /**Mostly text that explains our situation and our goals + images */
    <>
      <header className="primary-header padding-block-600">
        <div className="container">
          <h className="fs-primary-heading fw-semi-bold">About us</h>
        </div>
      </header>

      <section className="padding-block-700">
        <div className="container even-column">
          <div>
            <p className="fs-500">
              Our team is a group of passionate students who have come together
              to create a fun and engaging quiz platform on the internet. We
              believe that learning can be both entertaining and educational,
              and our platform aims to provide just that. We have combined our
              diverse skill sets in programming, design, and marketing to bring
              this project to life.
            </p>
          </div>
          <div>
            <img className="stuff-go-center img-medium" src={logo1} alt="" />
          </div>
        </div>
      </section>

      <section className="padding-block-700">
        <div className="container even-column">
          <div>
            <p className="fs-500">
              Our quiz platform is designed to cater to a wide range of users,
              from students to adults who are looking to test their knowledge on
              various topics. We have created an intuitive user interface that
              is easy to navigate, making it accessible to everyone. We offer a
              variety of quizzes, ranging from general knowledge to specialized
              subjects, to cater to the different interests of our users.
            </p>
          </div>
          <div>
            <img className="stuff-go-center img-medium" src={logo2} alt="" />
          </div>
        </div>
      </section>

      <section className="padding-block-700">
        <div className="container even-column">
          <div>
            <p className="fs-500">
              As a team, we have worked tirelessly to ensure that our quiz
              platform is of the highest quality. We have conducted extensive
              research, testing, and development to make sure that the platform
              is user-friendly and offers an excellent user experience. Our goal
              is to make learning fun and accessible to everyone, and we believe
              that our quiz platform is a step in that direction.
            </p>
          </div>
          <div>
            <img className="stuff-go-center img-medium" src={logo3} alt="" />
          </div>
        </div>
      </section>

      <section className="padding-block-700">
        <div className="container even-column">
          <div>
            <p className="fs-500">
              We are thrilled to have created this quiz platform and are excited
              about the possibilities it offers. We hope to continue to develop
              and improve our platform to cater to the needs of our users and
              provide an enjoyable learning experience. We are grateful for the
              opportunity to work together as a team and for the support we have
              received from our peers and mentors.
            </p>
          </div>
          <div>
            <img className="stuff-go-center img-medium" src={logo4} alt="" />
          </div>
        </div>
      </section>

      <section className="padding-block-700">
        <div className="container even-column">
          <div>
            <img
              className="stuff-go-center img-small"
              src="https://www.pngkit.com/png/detail/34-347000_black-businessman-png-worth-the-wait.png"
              alt=""
            />
          </div>
          <div>
            <p className="fs-500 stuff-go-center">
              "We have revolutionized how people think. Bing chilling"
            </p>
            <p className="fs-400 stuff-go-center">
              – Aurimas Gasparas, CEO of QuizHub
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
