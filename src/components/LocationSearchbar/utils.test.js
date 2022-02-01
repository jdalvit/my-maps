import { splitStringByMatch } from "./utils";

describe("Computing treatment duration", () => {
  it("Correctly splits a string that doesn't match", () => {
    const text = "I don't match";
    const match = "Woohoo!";
    expect(splitStringByMatch(text, match)).toEqual({ prefix: text });
  });
  it("Correctly splits a string that that matches at the beggining", () => {
    const text = "I do match";
    const match = "I do";
    expect(splitStringByMatch(text, match)).toEqual({
      prefix: "",
      match: "I do",
      suffix: " match",
    });
  });
  it("Correctly splits a string that that matches in the middle", () => {
    const text = "I do match";
    const match = "o m";
    expect(splitStringByMatch(text, match)).toEqual({
      prefix: "I d",
      match: "o m",
      suffix: "atch",
    });
  });
  it("Correctly splits a string that that matches in the end", () => {
    const text = "I do match";
    const match = "ch";
    expect(splitStringByMatch(text, match)).toEqual({
      prefix: "I do mat",
      match: "ch",
      suffix: "",
    });
  });
  it("Correctly splits a string with empty text", () => {
    const text = "";
    const match = "The match";
    expect(splitStringByMatch(text, match)).toEqual({
      prefix: "",
    });
  });
  it("Correctly splits a string with empty match", () => {
    const text = "The text";
    const match = "";
    expect(splitStringByMatch(text, match)).toEqual({
      prefix: "",
      match: "",
      suffix: "The text",
    });
  });
});
