import React from "react";
import ReactDOM from "react-dom";
const fName = "Gayanad";
const lName = "Patel";
const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello{" "}
      {fName +
        " https://codesandbox.io/p/sandbox/javascript-expressions-in-jsx-practice-1fde0?file=%2Fsrc%2Findex.js" +
        lName}
      !
    </h1>
    <p>Your Lucky number is {Math.floor(Math.random() * 10)} </p>
  </div>,
  document.getElementById("root")
);
