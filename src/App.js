import { useState } from "react";
import { adjustTuning } from "./utils/utils";

function App() {
  const [displayedTuning, setDisplayedTuning] = useState(adjustTuning(0));
  const [tuning, setTuning] = useState(0);

  const handleTuning = (increment) => {
    setTuning(increment);
    setDisplayedTuning(() => adjustTuning(increment));
  };
  return (
    <div>
      <h1>It's Transposing Time</h1>
      <p>Current Tuning: {tuning}</p>
      <button onClick={() => handleTuning(-5)}>-5</button>
      <button onClick={() => handleTuning(-4)}>-4</button>
      <button onClick={() => handleTuning(-3)}>-3</button>
      <button onClick={() => handleTuning(-2)}>-2</button>
      <button onClick={() => handleTuning(-1)}>-1</button>
      <button onClick={() => handleTuning(0)}>0</button>
      <button onClick={() => handleTuning(1)}>1</button>
      <button onClick={() => handleTuning(2)}>2</button>
      <button onClick={() => handleTuning(3)}>3</button>
      <button onClick={() => handleTuning(4)}>4</button>
      <button onClick={() => handleTuning(5)}>5</button>
      {displayedTuning.map((note, i) => (
        <p key={note + i}>{note}</p>
      ))}
    </div>
  );
}

export default App;
