import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        const guess = guesses[num];

        const result = checkGuess(guess, answer);

        return <Guess key={num} result={result} />;
      })}
    </div>
  );
}

export default GuessResults;
