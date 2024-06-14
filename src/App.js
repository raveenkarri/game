import React, { useState } from "react";
import { Image } from "react-bootstrap";

const Page = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const array = ["Rock", "Paper", "Scissor"];

  const playGame = (playerChoice) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const computerChoice = array[randomIndex];

    if (
      (playerChoice === "Rock" && computerChoice === "Scissor") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
      setPlayerScore(playerScore + 1);
      alert(`You chose ${playerChoice}, Computer chose ${computerChoice}. You won!`);
    } else if (playerChoice === computerChoice) {
      alert(`You chose ${playerChoice}, Computer chose ${computerChoice}. It's a draw!`);
    } else {
      setComputerScore(computerScore + 1);
      alert(`You chose ${playerChoice}, Computer chose ${computerChoice}. You lost!`);
    }
  };

  return (
    <main>
      <div className="header">
        <h1>ROCK PAPER SCISSORS</h1>
      </div>
      <div className="scores">
        <div className="score">Player Score: {playerScore}</div>
        <div className="score">Computer Score: {computerScore}</div>
      </div>
      <div className="buttonGroup">
        <button className="button" onClick={() => playGame("Rock")}>
          Rock
          <Image src="/rock.jpg" alt="rock" height={50} width={50} />
        </button>
        <button className="button" onClick={() => playGame("Paper")}>
          Paper
          <Image src="/paper.jpg" alt="paper" height={50} width={50} />
        </button>
        <button className="button" onClick={() => playGame("Scissor")}>
          Scissor
          <Image src="/scissor.jpg" alt="scissor" height={50} width={50} />
        </button>
      </div>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #f0f0f0;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .scores {
          display: flex;
          justify-content: space-around;
          width: 100%;
          max-width: 600px;
          margin-bottom: 20px;
        }
        .score {
          font-size: 24px;
        }
        .buttonGroup {
          display: flex;
          gap: 10px;
        }
        .button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: background-color 0.3s ease;
        }
        .button:hover {
          background-color: #0056b3;
        }
        .button img {
          border-radius: 50%;
        }
      `}</style>
    </main>
  );
};

export default Page;
