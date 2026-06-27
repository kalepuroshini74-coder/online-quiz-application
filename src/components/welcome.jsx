import React from "react";

function Welcome({
  studentName,
  setStudentName,
  rollNumber,
  setRollNumber,
  startExam,
}) {
  return (
    <div className="welcome-container">
      <div className="card">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="Logo"
          className="logo"
        />

        <h1>ONLINE QUIZ APPLICATION</h1>

        <p className="subtitle">
          Welcome to the Online Examination Portal
        </p>

        <input
          type="text"
          placeholder="Enter Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />

        <button className="start-btn" onClick={startExam}>
          Start Exam
        </button>

      </div>
    </div>
  );
}

export default Welcome;