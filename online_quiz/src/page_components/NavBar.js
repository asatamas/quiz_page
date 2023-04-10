import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";
import iconImg from "../assets/QH_icon.jpg";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/HomePage" className="online_quiz">
        <img src={iconImg} alt="QuizHub" />
      </Link>

      <ul>
        <CustomLink to="/HomePage">Home</CustomLink>
        <CustomLink to="/AboutPage">About Us</CustomLink>
        <CustomLink to="/HowToPage">How To</CustomLink>
        <CustomLink to="/QuizPage">Quizzes</CustomLink>
        <CustomLink to="/LogInPage">Log in</CustomLink>
        <div class="dot"></div>
        <div class="dot"></div>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <la className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </la>
  );
}
