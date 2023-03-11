import React from 'react';

const HomePage = () => {

    return (
        <>
        
    <header>
      <h1>Welcome to My Quiz</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Quiz</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h2>About My Quiz</h2>
        <p>Welcome to My Quiz, the best online quiz platform on the web! Our quizzes cover a wide range of topics, from history and science to pop culture and sports. With challenging questions and fun animations, My Quiz is the perfect way to test your knowledge and have some fun.</p>
      </section>
      <section>
        <h2>How to Play</h2>
        <p>Playing My Quiz is easy. Simply click on the Quiz link in the navigation bar to start a quiz. Each quiz consists of multiple-choice questions, and you'll have a limited amount of time to answer each one. The faster you answer correctly, the more points you'll earn. At the end of the quiz, you'll receive a score and a ranking based on how well you did.</p>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 My Quiz. All rights reserved.</p>
    </footer>

        
        </>
    );
}

export default HomePage;