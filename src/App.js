import "./App.css";
import React from "react";
import { useState } from "react";
let data = [
  {
    question: "wyhats is tebdb vefyh first question",
    options: [
      { id: 0, text: "New York City", isCorrect: false },
      { id: 1, text: "Boston", isCorrect: false },
      { id: 2, text: "Santa Fe", isCorrect: false },
      { id: 3, text: "Washington DC", isCorrect: true },
    ],
  },
  {
    question: "how efhkjfhakjsn  khkfhn second question",
    options: [
      { id: 0, text: "New York City", isCorrect: false },
      { id: 1, text: "Boston", isCorrect: false },
      { id: 2, text: "Santa Fe", isCorrect: false },
      { id: 3, text: "Washington DC", isCorrect: true },
    ],
    crct_answer: 1,
  },
  {
    question: "this is the third question",
    options: [
      { id: 0, text: "New York City", isCorrect: false },
      { id: 1, text: "Boston", isCorrect: false },
      { id: 2, text: "Santa Fe", isCorrect: false },
      { id: 3, text: "Washington DC", isCorrect: true },
    ],
    crct_answer: 1,
  },
  {
    question: "this is the fourth question ",
    options: [
      { id: 0, text: "New York City", isCorrect: false },
      { id: 1, text: "Boston", isCorrect: false },
      { id: 2, text: "Santa Fe", isCorrect: false },
      { id: 3, text: "Washington DC", isCorrect: true },
    ],
    crct_answer: 1,
  },
];

function Api() {
  const [ShowResults, setShowResults] = useState();
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const optionClicked = (isCorrect) => {
    console.log(isCorrect, currentQuestion);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < data.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const [progress, setProgress] = useState(0); // Update progress to 50%
  if (progress === 99) {
    console.log("hekdfugf");
  }

  /* Resets the game back to default */

  return (
    <div>
      <div style={{ paddingTop: 40, alignContent: "center" }}>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      {ShowResults ? (
        <p>This is the result page {score}</p>
      ) : (
        <div className="App">
          <p className="topic">views</p>
          <p className="question">{data[currentQuestion].question}</p>

          <ul>
            {data[currentQuestion].options.map((option) => {
              return (
                <div
                  key={option.id}
                  className="option"
                  onClick={() => {
                    setProgress((currentQuestion + 1) * 25);

                    optionClicked(option.isCorrect);
                  }}>
                  <center className="option--text">{option.text}</center>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Api;
