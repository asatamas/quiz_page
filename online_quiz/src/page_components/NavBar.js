import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/HomePage" className="online_quiz">
        QuizHub
      </Link>
      <ul>
        <CustomLink to="/HomePage">Home</CustomLink>
        <CustomLink to="/AboutPage">About Us</CustomLink>
        <CustomLink to="/HowToPage">How To</CustomLink>
        <CustomLink to="/QuizPage">Quizzes</CustomLink>
        <CustomLink to="/Question">Question</CustomLink>
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
