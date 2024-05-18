import { useState } from "react";

import { MAX_LENGTH_WORD } from "../../constants";

function GuessInput({ disabled, onWordSubmit }) {
  const [text, setText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ answer: text });
    onWordSubmit(text);
    setText("");
  }

  function handleTextChange(event) {
    const value = event.currentTarget.value.toUpperCase();
    setText(value);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        onChange={handleTextChange}
        type="text"
        minLength={MAX_LENGTH_WORD}
        maxLength={MAX_LENGTH_WORD}
        pattern={`[a-zA-Z]{${MAX_LENGTH_WORD}}`}
        title={`${MAX_LENGTH_WORD} letter word`}
        value={text}
      />
    </form>
  );
}

export default GuessInput;
