import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  function handleClick(event) {
    setHeading(text);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={text}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
