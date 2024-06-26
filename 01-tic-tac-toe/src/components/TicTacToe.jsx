import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./Square";
import { TURNS_TICTACTOE } from "../constants.js";
import { checkWinnerFromTicTacToe, checkEndGame } from "../logic/board.js";
import { Winner } from "./Winner.jsx";
import {
  resetGameStorage,
  resetMatchStorage,
  saveGameToStorage,
  saveWinToStorage,
} from "../logic/storage/index.js";
import { Link } from "react-router-dom";

import { FaArrowCircleLeft } from "react-icons/fa";
import { ButtonFinishGame } from "./ButtonFinishGame.jsx";

const game = "TicTacToe";

export const TicTacToe = () => {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem(`board ${game}`);
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  }); // check localStorage y creo el tablero

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem(`turn ${game}`);
    return turnFromStorage ? turnFromStorage : TURNS_TICTACTOE.X;
  });

  const [puntos, setPuntos] = useState(() => {
    const puntosFromStorage = window.localStorage.getItem(`puntos ${game}`);
    return puntosFromStorage ? JSON.parse(puntosFromStorage) : Array(2).fill(0);
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    sumarPuntos();
    winner === false && resetGameStorage({ game: game });
    setBoard(Array(9).fill(null));
    setTurn(TURNS_TICTACTOE.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard); // Guardo el último turno, actualizo el tablero

    // Cambio el turno
    const newTurn =
      turn === TURNS_TICTACTOE.X ? TURNS_TICTACTOE.O : TURNS_TICTACTOE.X;
    setTurn(newTurn);
    // guardar aqui partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
      game: game,
    });

    // revisar si hay ganador
    const newWinner = checkWinnerFromTicTacToe(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner); // guardo ganador
      resetGameStorage({ game: game });
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // Empate
    }
  };

  const sumarPuntos = () => {
    const newPuntos = [...puntos];
    winner === "❌" && (newPuntos[0] = puntos[0] + 1);
    winner === "⭕" && (newPuntos[1] = puntos[1] + 1);
    setPuntos(newPuntos);

    saveWinToStorage({
      puntos: newPuntos,
      game: game,
    });
  };

  const handleFinish = () => {
    setPuntos(Array(2).fill(0));
    setBoard(Array(9).fill(null));
    resetMatchStorage({ game: game });
  };

  return (
    <main>
      <div className="flex flex-col items-center">
        <Link to={"/"} className="text-3xl mb-4">
          <FaArrowCircleLeft />
        </Link>
        <h2 className="text-4xl mb-2 text-center">Tic Tac Toe</h2>
        <section className="flex justify-center gap-1 my-2 relative">
          {puntos.map((punto, index) => {
            return <Square key={index}>{punto}</Square>;
          })}
        </section>
        <button
          className="center border w-[100px] text-sm rounded-md mb-2"
          onClick={resetGame}
        >
          Reset del juego
        </button>
        <section className="grid grid-cols-3 gap-1">
          {board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>
        <section className="flex justify-center gap-1 mt-2 relative">
          <Square isSelected={turn === TURNS_TICTACTOE.X}>
            {TURNS_TICTACTOE.X}
          </Square>
          <Square isSelected={turn === TURNS_TICTACTOE.O}>
            {TURNS_TICTACTOE.O}
          </Square>
        </section>

        <ButtonFinishGame handleFinish={handleFinish} />
        <Winner winner={winner} resetGame={resetGame} />
      </div>
    </main>
  );
};
