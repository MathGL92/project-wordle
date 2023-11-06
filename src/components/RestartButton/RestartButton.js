import React from "react";

function RestartButton({ handleRestartGame }) {
  return (
    <button
      type="button"
      className="restart-button"
      onClick={handleRestartGame}
    >
      Restart Game
    </button>
  );
}

export default RestartButton;
