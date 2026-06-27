import { useState } from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Review from "./components/Review";
import questions from "./questions";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [studentName, setStudentName] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [answers, setAnswers] = useState([]);

  function startExam() {
    if (studentName.trim() === "" || rollNumber.trim() === "") {
      alert("Please enter Student Name and Roll Number");
      return;
    }
    setScreen("quiz");
  }

  function selectAnswer(option) {
    const correct = option === questions[currentQuestion].answer;

    if (correct) {
      setScore((prev) => prev + 1);
    }

    setAnswers([
      ...answers,
      {
        question: questions[currentQuestion].question,
        selected: option,
        correct: questions[currentQuestion].answer,
      },
    ]);

    if (currentQuestion === questions.length - 1) {
      setScreen("result");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function restartExam() {
    setStudentName("");
    setRollNumber("");
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setScreen("welcome");
  }

  if (screen === "welcome") {
    return (
      <Welcome
        studentName={studentName}
        setStudentName={setStudentName}
        rollNumber={rollNumber}
        setRollNumber={setRollNumber}
        startExam={startExam}
      />
    );
  }

  if (screen === "quiz") {
    return (
      <Quiz
        studentName={studentName}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        question={questions[currentQuestion]}
        onAnswer={selectAnswer}
      />
    );
  }

  if (screen === "result") {
    return (
      <Result
        studentName={studentName}
        score={score}
        total={questions.length}
        onReview={() => setScreen("review")}
        onRestart={restartExam}
      />
    );
  }

  return (
    <Review
      answers={answers}
      onRestart={restartExam}
    />
  );
}

export default App;