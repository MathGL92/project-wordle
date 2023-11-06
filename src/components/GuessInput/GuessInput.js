import React from "react";

function GuessInput({ handleAddGuess, enabled }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmitEvent = (event) => {
    event.preventDefault();

    handleAddGuess(guess);

    console.info({ guess });

    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitEvent}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={!enabled}
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
