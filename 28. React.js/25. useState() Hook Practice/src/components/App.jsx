import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString("it-IT");
  const [time, setTime] = useState(now);
  setInterval(getTime, 1000);

  function getTime() {
    setTime(new Date().toLocaleTimeString("it-IT"));
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
