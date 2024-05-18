import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import { NUM_OF_GUESSES_ALLOWED, MAX_LENGTH_WORD } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Guess({ word }) {
  return (
    <p className="guess">
      {range(0, MAX_LENGTH_WORD).map((id) => {
        return (
          <span className="cell" key={id}>
            {word && word[id]}
          </span>
        );
      })}
    </p>
  );
}

function Game() {
  const [words, setWords] = useState([]);
  function onWordSubmit(word) {
    const newWords = [...words, word];
    setWords(newWords);
  }
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((id) => {
          return <Guess key={id} word={words[id]} />;
        })}
      </div>
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
