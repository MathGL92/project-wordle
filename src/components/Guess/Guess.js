import React from "react";
import { range } from "../../utils";

function Guess({ value, result }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        const valueDisplayed = value ? value[num] : undefined;
        const statusClasseName = result && result[num].status;

        return (
          <span key={num} className={`cell ${statusClasseName}`}>
            {valueDisplayed}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
