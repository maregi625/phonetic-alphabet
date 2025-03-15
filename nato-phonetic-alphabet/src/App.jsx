import { useState } from "react";
import "./App.css";

const natoPhoneticAlphabet = {
  a: "alpha",
  b: "bravo",
  c: "charlie",
  d: "delta",
  e: "echo",
  f: "foxtrot",
  g: "golf",
  h: "hotel",
  i: "india",
  j: "juliett",
  k: "kilo",
  l: "lima",
  m: "mike",
  n: "november",
  o: "oscar",
  p: "papa",
  q: "quebec",
  r: "romeo",
  s: "sierra",
  t: "tango",
  u: "uniform",
  v: "victor",
  w: "whiskey",
  x: "x-ray",
  y: "yankee",
  z: "zulu",
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  "!": "exclamation mark",
  '"': "double quote",
  "#": "hash",
  $: "dollar sign",
  "%": "percent sign",
  "&": "ampersand",
  "'": "apostrophe",
  "(": "left parenthesis",
  ")": "right parenthesis",
  "*": "asterisk",
  "+": "plus sign",
  ",": "comma",
  "-": "hyphen",
  ".": "period",
  "/": "slash",
  ":": "colon",
  ";": "semicolon",
  "<": "less than",
  "=": "equals sign",
  ">": "greater than",
  "?": "question mark",
  "@": "at symbol",
  "[": "left square bracket",
  "\\": "backslash",
  "]": "right square bracket",
  "^": "caret",
  _: "underscore",
  "`": "grave accent",
  "{": "left curly brace",
  "|": "vertical bar",
  "}": "right curly brace",
  "~": "tilde",
};

function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (event) => {
    const text = event.target.value.toLowerCase();
    setInputText(text);

    const convertedText = text
      .split("")
      .map((char) => natoPhoneticAlphabet[char] || char)
      .join(" ");

    setOutputText(convertedText);
  };

  return (
    <div className="App">
      <h1>NATO PHONETIC ALPHABET</h1>
      <h2> Convert Text to Nato Phonetic Alphabet </h2>
      <textarea
        placeholder="Enter text here..."
        value={inputText}
        onChange={handleInputChange}
      />
      <div className="output">
        <p>{outputText}</p>
      </div>
    </div>
  );
}

export default App;