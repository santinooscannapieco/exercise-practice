import PropTypes from "prop-types";

export const Winner = ({ winner, resetGame }) => {
  return (
    <>
      {winner !== null && (
        <section className="absolute w-screen h-screen top-0 left-0 grid items-center justify-center">
          <div className="flex flex-col items-center gap-4 w-[250px] h-[250px] border rounded-lg bg-black">
            <header className="text-2xl m-4">
              {winner ? "¡GANASTE!" : "¡Perdiste!"}
            </header>

            <article className="mb-4">Te felicito superaste el nivel</article>

            <button className="border w-[200px] rounded-full">
              VOLVER AL MENÚ
            </button>

            <button
              onClick={resetGame}
              className="border w-[200px] rounded-full"
            >
              JUGAR DE NUEVO
            </button>
          </div>
        </section>
      )}
    </>
  );
};

Winner.propTypes = {
  winner: PropTypes.node,
  resetGame: PropTypes.func,
};
