import React from "react";

function GuessInput() {
  const [, setGuess] = React.useState("");
  const [label, setLabel] = React.useState("");

  const handleSubmitEvent = (event) => {
    event.preventDefault();

    const nextGuess = label.toUpperCase();

    if (!nextGuess.match(/\S{5}/)) {
      window.alert(`${nextGuess} is not 5 letter long!`);
      return;
    }

    setGuess(nextGuess);
    console.info({ guess: nextGuess });
    setLabel("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitEvent}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={label}
        onChange={(event) => {
          setLabel(event.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;
