import React, {useState, useEffect} from "react";
import "../css/QuizPage.css";
import "../css/HomePage.css";
import quizPic1 from "../assets/quizPage-1.JPG";
import quizPic2 from "../assets/quizPage-2.JPG";
import quizPic3 from "../assets/quizPage-3.JPG";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Quiz from "./Quiz";

const QuizPage = () => {

  const [quizzes, setQuizzes] = useState([]);

  const fetchData = async () => {
    try {

      const response = await fetch('http://localhost:8000/php/fetch_data.php?tableName=quizzes');
      const result = await response.json();
      setQuizzes(result);

    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (

    <>
    {quizzes.length > 0 ? 
    
    <>
      <div className="QPageHeaderContainer">
       <h1 id="home-hdr">Quizzes quizzes quizzes!!!</h1>
       <p1 className="home-p">Play as many as you'd like!</p1>
       <p1 className="home-p">Total quizzes: {quizzes.length}</p1>
      </div>

      <div className="QPageQuizzesContainer">
       {/*comment for line spacing, for readability*/} 

       {quizzes.map(quiz =>  {
        return  <Quiz key={quiz.id} quiz={quiz}/>
       })}

      </div> 
    
    </> 
    
    :
    
    <div className="QPageHeaderContainer">
       <h1 id="home-hdr">No Quizzes to show! :(</h1>
    </div>
  
  }
    
    </>



  );
};

export default QuizPage;
