import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Circle } from "./Circle";
import { TURNS_CONECTFOUR } from "../constants";
import { checkWinnerFromConectFour } from "../logic/board";
import { Winner } from "./Winner";

// TODO : Agregar la funcionalidad de LocalStorage

const rows = 6;
const cols = 7;

export const ConectFour = () => {
  const [board, setBoard] = useState(Array(rows * cols).fill(null));
  const [turn, setTurn] = useState(TURNS_CONECTFOUR.red);
  const [winner, setWinner] = useState(null);
  const [puntos, setPuntos] = useState([0, 0]);

  const resetGame = () => {
    sumarPuntos();
    setBoard(Array(rows * cols).fill(null));
    setTurn(TURNS_CONECTFOUR.red);
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (winner != null) return;

    const col = index % cols;

    for (let row = rows - 1; row >= 0; row--) {
      if (board[row * cols + col] === null) {
        const newBoard = [...board];
        newBoard[row * cols + col] = turn;
        setBoard(newBoard);

        const newWinner = checkWinnerFromConectFour(newBoard);
        setWinner(newWinner);

        const newTurn =
          turn === TURNS_CONECTFOUR.red
            ? TURNS_CONECTFOUR.green
            : TURNS_CONECTFOUR.red;
        setTurn(newTurn);
        break;
      }
    }
  };

  const sumarPuntos = () => {
    const newPuntos = [...puntos];
    winner === "1" && (newPuntos[0] = newPuntos[0] + 1);
    winner === "2" && (newPuntos[1] = newPuntos[1] + 1);
    setPuntos(newPuntos);
  };

  return (
    <main>
      <div className="flex flex-col items-center">
        <Link to={"/"} className="text-3xl mb-4">
          <FaArrowCircleLeft />
        </Link>
        <h2 className="text-4xl mb-2 text-center">4 en Linea</h2>

        <section className="flex justify-between w-[500px] my-4 text-center">
          <div>
            <div
              className={`w-[150px] text-2xl rounded-full ${
                turn === TURNS_CONECTFOUR.red ? "bg-red-500" : ""
              }`}
            >
              Jugador 1
            </div>
            <h3 className="text-2xl">{puntos[0]}</h3>
          </div>

          <div>
            <div
              className={`w-[150px] text-2xl rounded-full ${
                turn === TURNS_CONECTFOUR.green ? "bg-green-500" : ""
              }`}
            >
              Jugador 2
            </div>
            <h3 className="text-2xl">{puntos[1]}</h3>
          </div>
        </section>

        <section className="grid grid-cols-7 gap-x-5 gap-y-5 border-none rounded-2xl p-4 bg-zinc-500">
          {board.map((_, index) => {
            return (
              <Circle
                isSelected={board[index] != null}
                key={index}
                index={index}
                board={board}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Circle>
            );
          })}
        </section>
        <Winner winner={winner} resetGame={resetGame} />
      </div>
    </main>
  );
};
