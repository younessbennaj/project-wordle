import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = useState([]);
  function onWordSubmit(word) {
    const newWords = [...words, word];
    setWords(newWords);
  }
  return (
    <>
      <GuessInput onWordSubmit={onWordSubmit} />
      <div className="guess-results">
        {words.map((word) => {
          return <p key={word}>{word}</p>;
        })}
      </div>
    </>
  );
}

export default Game;
