import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import Guess from "../Guess";
import Keyboard from "../Keyboard";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import { HappyBanner, SadBanner } from "../Banners/Banners";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = useState(() => {
    return sample(WORDS);
  });
  console.info({ answer });
  const [guesses, setGuesses] = useState([]);
  const [isWin, setIsWin] = useState(false);
  const [checkedLetters, setCheckedLetters] = useState({});

  const isLoose = guesses.length === 6 && !isWin;

  function onWordSubmit(word) {
    const newWords = [...guesses, word];
    const checks = checkGuess(word, answer);

    const obj = checks.reduce(
      (acc, cur) => {
        return { ...acc, [cur.letter]: cur.status };
      },
      { ...checkedLetters }
    );

    setCheckedLetters(obj);

    setIsWin(checks.every((check) => check.status === "correct"));

    setGuesses(newWords);
  }

  function handleReset() {
    setGuesses([]);
    setIsWin(false);
    setCheckedLetters({});
    setAnswer(() => {
      return sample(WORDS);
    });
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
        <HappyBanner
          guessesNumber={guesses.length}
          onResetClick={handleReset}
        />
      )}
      {isLoose && <SadBanner answer={answer} onResetClick={handleReset} />}
      <Keyboard checkedLetters={checkedLetters} />
    </>
  );
}

export default Game;
