import { useState } from "react";
import IncrementButtons from "./Components/IncrementButtons";
import adjustTuning from "./utils/utils.js";

function App() {
  const [displayedTuning, setDisplayedTuning] = useState(adjustTuning(0));
  const [tuning, setTuning] = useState(0);
  const incrementSteps = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-3xl font-bold text-white uppercase font-varela m-2">
        It's Transposing Time 🎸
      </h1>
      <p className="text-l font-bold text-white uppercase font-varela m-2">
        Current Tuning: {tuning}
      </p>
      <div className="my-6">
        {incrementSteps.map((increment) => (
          <IncrementButtons
            setTuning={setTuning}
            setDisplayedTuning={setDisplayedTuning}
            increment={increment}
            key={increment + Date.now()}
          />
        ))}
      </div>
      <div className="flex">
        {displayedTuning.map((note, i) => (
          <div
            className="flex bg-white mx-2 w-14 h-14 justify-center items-center rounded-full"
            key={note + i}
          >
            <p className="flex-col text-3xl font-bold text-black uppercase font-varela">
              {note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
