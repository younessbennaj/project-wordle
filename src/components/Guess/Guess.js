import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
import { MAX_LENGTH_WORD } from "../../constants";

function Guess({ answer, guess }) {
  const checks = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(0, MAX_LENGTH_WORD).map((id) => {
        return (
          <span className={`cell ${checks ? checks[id].status : ""}`} key={id}>
            {checks && checks[id].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
