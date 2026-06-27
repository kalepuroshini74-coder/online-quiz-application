function Review({ answers, onRestart }) {
  return (
    <div className="review-container">
      <div className="card">

        <h1>📖 Answer Review</h1>

        {answers.map((item, index) => (
          <div className="review-box" key={index}>

            <h3>
              Question {index + 1}
            </h3>

            <p>
              <b>{item.question}</b>
            </p>

            <p>
              <span className="wrong">
                Your Answer :
              </span>{" "}
              {item.selected === "" ? "Not Answered" : item.selected}
            </p>

            <p>
              <span className="correct">
                Correct Answer :
              </span>{" "}
              {item.correct}
            </p>

            {item.selected === item.correct ? (
              <p className="correct">✅ Correct</p>
            ) : (
              <p className="wrong">❌ Wrong</p>
            )}

          </div>
        ))}

        <button
          className="start-btn"
          onClick={onRestart}
        >
          Back to Home
        </button>

      </div>
    </div>
  );
}

export default Review;