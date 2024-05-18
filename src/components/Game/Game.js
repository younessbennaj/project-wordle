import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  function onWordSubmit(word) {
    const newWords = [...guesses, word];
    setGuesses(newWords);
  }
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((id) => {
          return <Guess answer={answer} guess={guesses[id]} key={id} />;
        })}
      </div>
      <GuessInput onWordSubmit={onWordSubmit} />
      <div className="guess-results">
        {guesses.map((word) => {
          return <p key={word}>{word}</p>;
        })}
      </div>
    </>
  );
}

export default Game;
