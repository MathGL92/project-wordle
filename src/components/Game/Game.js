import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import RestartButton from "../RestartButton";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  const handleAddGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];

    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  const handleRestartGame = () => {
    setAnswer(sample(WORDS));
    setGameStatus("running");
    setGuesses([]);
  };

  return (
    <>
      <RestartButton handleRestartGame={handleRestartGame} />
      <GuessResults
        guesses={guesses}
        answer={answer}
        setResult={setGameStatus}
      />
      <GuessInput
        enabled={gameStatus === "running"}
        handleAddGuess={handleAddGuess}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
