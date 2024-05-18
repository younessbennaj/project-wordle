import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [isWin, setIsWin] = useState(false);

  const isLoose = guesses.length === 6 && !isWin;

  function onWordSubmit(word) {
    const newWords = [...guesses, word];
    const checks = checkGuess(word, answer);
    setIsWin(
      checks.every((check) => {
        return check.status === "correct";
      })
    );

    setGuesses(newWords);
  }

  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((id) => {
          return <Guess answer={answer} guess={guesses[id]} key={id} />;
        })}
      </div>
      <GuessInput disabled={isWin || isLoose} onWordSubmit={onWordSubmit} />
      {isWin && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}

      {isLoose && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
