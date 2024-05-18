export function HappyBanner({ guessesNumber, onResetClick }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guessesNumber} guesses</strong>.
      </p>
      <button onClick={onResetClick}>Reset</button>
    </div>
  );
}

export function SadBanner({ answer, onResetClick }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={onResetClick}>Reset</button>
    </div>
  );
}
