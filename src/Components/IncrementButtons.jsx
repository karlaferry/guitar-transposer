import React from "react";
import adjustTuning from "../utils/utils";

export default function IncrementButtons({
  setTuning,
  setDisplayedTuning,
  increment,
}) {
  const handleTuning = (increment) => {
    setTuning(increment);
    setDisplayedTuning(() => adjustTuning(increment));
  };
  const buttons =
    "text-xs font-bold text-white bg-black hover:bg-white hover:border hover:border-solid hover:border-white hover:text-black hover:cursor-pointer focus:bg-slate-500 border border-solid border-white uppercase font-varela w-8 p-2 mx-1 rounded-md";
  return (
    <button onClick={() => handleTuning(increment)} className={buttons}>
      {increment}
    </button>
  );
}
