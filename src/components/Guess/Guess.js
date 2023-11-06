import React from "react";
import { range } from "../../utils";

function Guess({ result }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        const letter = result ? result[num].letter : undefined;
        const classeName = result ? `cell ${result[num].status}` : "cell";

        return (
          <span key={num} className={classeName}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
