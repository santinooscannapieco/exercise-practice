import { useEffect, useState } from "react";
import { COLLITION_COMBOS } from "../constant";
import { Winner } from "./Winner";

// TODO: Agragar collisión con paredes de afuera
// Corregir reinicio de juego (Winner.jsx)

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({
        top: clientY - 25,
        right: clientX + 25,
        bottom: clientY + 25,
        left: clientX - 25,
      });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // cleanup
    // => se ejecuta cuando el componente se desmonta
    // => se ejecuta cuando cambian las dependencias, antes de ejecutar el efecto nuevo
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  useEffect(() => {
    const checkCollicion = () => {
      const walls = document.querySelectorAll(".wall");
      for (const wall of walls) {
        const rect = wall.getBoundingClientRect();

        if (COLLITION_COMBOS({ position, rect })) {
          setWinner(false);
          return;
        }
      }

      const exit = document.querySelector("#exit");
      const rect = exit.getBoundingClientRect();

      if (COLLITION_COMBOS({ position, rect })) {
        setWinner(true);
      }
    };

    if (enabled) {
      checkCollicion();
    }
  }, [position, enabled]);

  const resetGame = () => {
    setEnabled(false);
    setWinner(null);
    setPosition({ top: 0, right: 0, bottom: 0, left: 0 });
  };

  const classNameCursor = enabled ? "block" : "block";

  return (
    <>
      <div
        className={classNameCursor}
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",

          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.left + 25}px, ${
            position.bottom - 25
          }px)`,
        }}
      />

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setEnabled(!enabled)}
          className="border px-3 py-1 rounded-md bg-black"
        >
          {enabled ? "Pausa" : "Jugar"}
        </button>
      </div>

      <Winner winner={winner} resetGame={resetGame} />
    </>
  );
};
