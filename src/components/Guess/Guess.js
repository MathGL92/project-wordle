import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess
        ? guess.split("").map((letter, index) => (
            <span key={index} className="cell">
              {letter}
            </span>
          ))
        : range(0, 5).map((index) => (
            <span key={index} className="cell"></span>
          ))}
    </p>
  );
}

export default Guess;
