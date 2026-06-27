function Result({
  studentName,
  score,
  total,
  onReview,
  onRestart,
}) {

  const percentage = ((score / total) * 100).toFixed(0);

  const status = percentage >= 50 ? "PASS ✅" : "FAIL ❌";

  return (
    <div className="result-container">

      <div className="card">

        <h1>🎉 Exam Completed</h1>

        <h2>Student : {studentName}</h2>

        <h3>Total Questions : {total}</h3>

        <h3>Correct Answers : {score}</h3>

        <h3>Wrong Answers : {total - score}</h3>

        <h3>Percentage : {percentage}%</h3>

        <h2>Status : {status}</h2>

        <button
          className="start-btn"
          onClick={onReview}
        >
          View Answers
        </button>

        <button
          className="start-btn"
          onClick={onRestart}
        >
          Restart Exam
        </button>

      </div>

    </div>
  );
}

export default Result;