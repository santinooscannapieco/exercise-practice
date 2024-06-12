import { useEffect, useState } from "react";

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("effect ", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
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

  const classNameCursor = enabled ? "block" : "block";

  return (
    <>
      <div
        className={classNameCursor}
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
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
