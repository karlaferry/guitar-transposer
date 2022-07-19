exports.adjustTuning = (increment) => {
  const notes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];
  // convert increment to a positive number for splice to work
  increment < 0 && (increment = notes.length + increment);
  // splice original notes array and push spliced elements to move indexes around
  notes.push(...notes.splice(0, increment));
  // return only the required chord
  return [notes[7], notes[0], notes[5], notes[10], notes[2], notes[7]];
};
