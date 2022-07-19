import React from "react";
import { adjustTuning } from "../utils/utils";

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
    "text-xs font-bold text-black hover:bg-black hover:border hover:border-solid hover:border-white hover:text-white hover:cursor-pointer focus:bg-slate-500 border border-solid border-black uppercase font-varela w-8 p-2 bg-white mx-1";
  return (
    <button onClick={() => handleTuning(increment)} className={buttons}>
      {increment}
    </button>
  );
}
