import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleAddGuess = (tentativeGuess) => {
    const nextGuess = { id: Math.random(), value: tentativeGuess };
    const nextGuesses = [...guesses, nextGuess];

    setGuesses(nextGuesses);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
