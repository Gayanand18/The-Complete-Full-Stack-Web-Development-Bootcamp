import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, addItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
  }

  function handleClick() {
    addItems((prevItems) => {
      return [...prevItems, text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={text} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li> {todoItem} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
