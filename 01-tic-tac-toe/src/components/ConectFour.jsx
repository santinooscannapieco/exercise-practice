import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Circle } from "./Circle";
import { TURNS_CONECTFOUR } from "../constants";

// TODO : Corregir lógica de juego (solo se deberia poder poner ficha de abajo para arriba)

export const ConectFour = () => {
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(TURNS_CONECTFOUR.red);

  const updateBoard = (index) => {
    if (board[index] != null) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    console.log(newBoard);
    setBoard(newBoard);

    const newTurn =
      turn === TURNS_CONECTFOUR.red
        ? TURNS_CONECTFOUR.green
        : TURNS_CONECTFOUR.red;
    setTurn(newTurn);
  };

  return (
    <main>
      <div className="flex flex-col items-center">
        <Link to={"/"} className="text-3xl mb-4">
          <FaArrowCircleLeft />
        </Link>
        <h2 className="text-4xl mb-2 text-center">4 en Linea</h2>
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
      </div>
    </main>
  );
};
