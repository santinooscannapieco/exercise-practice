import { useEffect, useState } from "react";
import { GAME_OVER_COMBOS } from "../constant";

// TODO: Arreglar la lógica de la colisión con las paredes

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({
        top: clientX - 25,
        right: clientY + 25,
        bottom: clientX + 25,
        left: clientY - 25,
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

  /* console.log(position); */

  useEffect(() => {
    const checkCollicion = () => {
      const walls = document.querySelectorAll(".wall");
      for (const wall of walls) {
        const rect = wall.getBoundingClientRect();

        if (GAME_OVER_COMBOS({ position, rect })) {
          resetGame();
          console.log("perdiste");
          return;
        }
      }
    };

    checkCollicion();
  }, [position]);

  const resetGame = () => {
    alert("perdiste");
    /* const start = document.getElementById("start");
    const entrada = start.getBoundingClientRect();
    setPosition(entrada.top); */
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
          transform: `translate(${position.top + 25}px, ${
            position.right - 25
          }px)`,
        }}
      />

      <button
        onClick={() => setEnabled(!enabled)}
        className="border px-3 py-1 rounded-md bg-black"
      >
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};
