import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess guess={guess} key={index} />
      ))}
      {range(0, NUM_OF_GUESSES_ALLOWED - guesses.length).map((index) => (
        <Guess key={index} />
      ))}
    </div>
  );
}

export default GuessResults;
