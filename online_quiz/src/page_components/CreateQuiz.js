import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/HomePage.css";
//import "../css/CreateQuiz.css"
import QuestionInput from "./QuestionInput";
import QuizInput from "./QuizInput";

const CreateQuiz = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [questions, setQuestions] = useState([
    { text: "", errorText: "", answers: [] },
  ]);
  const [errorMsg, setErrorMsg] = useState("");

  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");

  const addQuestion = () => {
    setQuestions([...questions, { text: "", errorText: "", answers: [] }]);
  };

  const handleQuestionChange = (event, index) => {
    const newQuestions = [...questions];
    newQuestions[index].text = event.target.value;
    setQuestions(newQuestions);
  };

  const removeQuestion = (indexToRemove) => {
    const newQuestions = questions.filter(
      (_, index) => index !== indexToRemove
    );
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (event, questionIndex, answerIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex].text = event.target.value;
    setQuestions(newQuestions);
  };

  const addAnswer = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.push({
      text: "",
      errorText: "",
      isCorrect: false,
    });
    setQuestions(newQuestions);
  };

  const removeAnswer = (questionIndex, answerIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.splice(answerIndex, 1);
    setQuestions(newQuestions);
  };

  const updateCorrectAnswer = (event, questionIndex, answerIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex].isCorrect =
      event.target.checked;
    setQuestions(newQuestions);
    console.log(newQuestions[questionIndex].answers[answerIndex].isCorrect);
  };

  const renderQuestions = () => {
    return questions.map((question, questionIndex) => (
      <QuestionInput
        questionIndex={questionIndex}
        question={question}
        handleQuestionChange={handleQuestionChange}
        handleQuestionBlur={handleQuestionBlur}
        removeQuestion={removeQuestion}
        addAnswer={addAnswer}
        handleAnswerChange={handleAnswerChange}
        handleAnswerBlur={handleAnswerBlur}
        removeAnswer={removeAnswer}
        updateCorrectAnswer={updateCorrectAnswer}
      />
    ));
  };

  const validateName = (name) => {
    return name.length >= 5;
  };

  const validateDescription = (description) => {
    return description.length >= 5;
  };

  const validateCategory = (category) => {
    return category.length >= 5;
  };

  const validateImageUrl = (url) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  const validateQuestion = (questionIndex) => {
    return questions[questionIndex].text.length >= 5;
  };

  const validateAnswer = (questionIndex, answerIndex) => {
    return questions[questionIndex].answers[answerIndex].text.length >= 2;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  // handleBlur method for main quiz attributes only (name, description, category, imageUrl)
  const handleBlur = (
    elementId,
    value,
    validateMethod,
    setErrorMethod,
    errorMessage
  ) => {
    const element = document.getElementById(elementId);
    if (!validateMethod(value)) {
      setErrorMethod(errorMessage);
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
    } else {
      setErrorMethod("");
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
    }
  };

  const handleQuestionBlur = (questionIndex) => {
    const element = document.getElementById(`question-${questionIndex}`);
    const newQuestions = [...questions];
    if (!validateQuestion(questionIndex)) {
      newQuestions[questionIndex].errorText = "Question is too short!";
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
    } else {
      newQuestions[questionIndex].errorText = "";
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
    }
    setQuestions(newQuestions);
  };

  const handleAnswerBlur = (questionIndex, answerIndex) => {
    const element = document.getElementById(
      `answer-${questionIndex}-${answerIndex}`
    );
    const newQuestions = [...questions];
    if (!validateAnswer(questionIndex, answerIndex)) {
      newQuestions[questionIndex].answers[answerIndex].errorText =
        "Answer is too short!";
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
    } else {
      newQuestions[questionIndex].answers[answerIndex].errorText = "";
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
    }
    setQuestions(newQuestions);
  };

  const validateForm = () => {
    if (questions.length === 0) return false;

    // Check, if questions and answers are not empty
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].text.length === 0 || questions[i].errorText.length > 0)
        return false;
      for (let j = 0; j < questions[i].answers.length; j++) {
        if (
          questions[i].answers[j].text.length === 0 ||
          questions[i].answers[j].errorText.length > 0
        )
          return false;
      }
    }

    // Check, if other attributes are not empty
    if (
      nameError ||
      descriptionError ||
      categoryError ||
      imageUrlError ||
      !name ||
      !description ||
      !category ||
      !imageUrl
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check, if submitted data is correct/valid
    if (!validateForm()) {
      setErrorMsg("Please fill all fields correctly!");
      console.log("Incorrect data!");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const formData = new FormData();

    // Add main quiz attributes to the FormData object
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("imageUrl", imageUrl);

    // Add the questions array to the FormData object
    formData.append("questions", JSON.stringify(questions));

    try {
      // Make POST request to the server (PHP file)
      const response = await fetch(
        "http://localhost:8000/php/insert_quiz.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setErrorMsg("");
        console.log("Data inserted successfully!");
        console.log(questions);
        console.log(questions.answers);
        navigate("/QuizPage"); // this will redirect to '/QuizPage' path
      } else {
        console.log("There was an error inserting data: ", response.statusText);
      }
    } catch (error) {
      console.log("There was an error inserting data: ", error);
    }
  };

  return (
    <div className="main_container">
      <header>
        <h1 id="home-hdr">Create Quiz</h1>
        {errorMsg && <h2 className="error-msg-hdr">{errorMsg}</h2>}
      </header>

      <form onSubmit={handleSubmit}>
        <QuizInput
          header="Quiz name:"
          name="name"
          value={name}
          handleChange={handleNameChange}
          handleBlur={() =>
            handleBlur(
              "name",
              name,
              validateName,
              setNameError,
              "Quiz name is too short!"
            )
          }
          errorMsg={nameError}
        />

        <QuizInput
          header="Quiz description:"
          name="description"
          value={description}
          handleChange={handleDescriptionChange}
          handleBlur={() =>
            handleBlur(
              "description",
              description,
              validateDescription,
              setDescriptionError,
              "Quiz description is too short!"
            )
          }
          errorMsg={descriptionError}
        />

        <QuizInput
          header="Quiz category:"
          name="category"
          value={category}
          handleChange={handleCategoryChange}
          handleBlur={() =>
            handleBlur(
              "category",
              category,
              validateCategory,
              setCategoryError,
              "Quiz category is too short!"
            )
          }
          errorMsg={categoryError}
        />

        <QuizInput
          header="Quiz image URL:"
          name="image-url"
          value={imageUrl}
          handleChange={handleImageUrlChange}
          handleBlur={() =>
            handleBlur(
              "image-url",
              imageUrl,
              validateImageUrl,
              setImageUrlError,
              "Invalid URL address!"
            )
          }
          errorMsg={imageUrlError}
        />

        {renderQuestions()}

        <div className="button-container">
          <button type="button" className="quiz-btn" onClick={addQuestion}>
            Add question
          </button>
          <button type="submit" className="create-quiz-btn">
            Create!
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;
