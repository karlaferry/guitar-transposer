import adjustTuning from "../utils/utils";

describe("#adjustTuning function", () => {
  it("returns an array", () => {
    expect(Array.isArray(adjustTuning(1))).toBe(true);
  });
  it("returns an array of guitar strings", () => {
    const expected = ["E", "A", "D", "G", "B", "E"];
    expect(adjustTuning(0)).toEqual(expected);
  });
  it("returns an array of guitar strings moved one up", () => {
    const expected = ["F", "A#", "D#", "G#", "C", "F"];
    expect(adjustTuning(1)).toEqual(expected);
  });
  it("returns an array of guitar strings moved five up", () => {
    const expected = ["A", "D", "G", "C", "E", "A"];
    expect(adjustTuning(5)).toEqual(expected);
  });
  it("returns an array of guitar strings moved one down", () => {
    const expected = ["D#", "G#", "C#", "F#", "A#", "D#"];
    expect(adjustTuning(-1)).toEqual(expected);
  });
  it("returns an array of guitar strings moved five down", () => {
    const expected = ["B", "E", "A", "D", "F#", "B"];
    expect(adjustTuning(-5)).toEqual(expected);
  });
});
