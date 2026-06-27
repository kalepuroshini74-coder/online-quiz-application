import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

function Quiz({
  studentName,
  currentQuestion,
  totalQuestions,
  question,
  onAnswer,
}) {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    setTimeLeft(30);
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft === 0) {
      onAnswer("");
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onAnswer]);

  return (
    <div className="quiz-container">

      <div className="card">

        <h2>Online Quiz Examination</h2>

        <div className="top-bar">
          <h3>Student : {studentName}</h3>
          <h3>⏰ {timeLeft}s</h3>
        </div>

        <ProgressBar
          current={currentQuestion + 1}
          total={totalQuestions}
        />

        <h3>
          Question {currentQuestion + 1} / {totalQuestions}
        </h3>

        <h2>{question.question}</h2>

        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="option-btn"
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Quiz;