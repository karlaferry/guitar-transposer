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
  return (
    <button
      onClick={() => handleTuning(increment)}
      className="text-3xl font-bold text-white uppercase font-varela"
    >
      {increment}
    </button>
  );
}
