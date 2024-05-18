const qwertyAlphabet = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ checkedLetters }) {
  return (
    <div className="keyboard">
      {qwertyAlphabet.map((row) => {
        return (
          <div className="keyboard-row" key={JSON.stringify(row)}>
            {row.map((character) => {
              const status = checkedLetters[character];
              return (
                <span
                  className={`keyboard-key ${status ?? ""}`}
                  key={character}
                >
                  {character.toUpperCase()}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
