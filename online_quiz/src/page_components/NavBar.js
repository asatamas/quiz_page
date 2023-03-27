import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/HomePage" className="online_quiz">
        <img
          src="https://cdn.discordapp.com/attachments/1019698765969490052/1089578819704328296/image-removebg-preview.png"
          alt="QuizHub"
        />
      </Link>

      <ul>
        <CustomLink to="/HomePage">Home</CustomLink>
        <CustomLink to="/AboutPage">About Us</CustomLink>
        <CustomLink to="/HowToPage">How To</CustomLink>
        <CustomLink to="/QuizPage">Quizzes</CustomLink>
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
