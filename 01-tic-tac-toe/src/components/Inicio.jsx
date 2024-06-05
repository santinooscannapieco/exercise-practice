import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <main className="text-center">
      <h2 className="text-4xl h-20">Seleccione el juego</h2>
      <section className="w-[400px] flex justify-between gap-4">
        <Link
          to={"/juegos/tictactoe"}
          className="border w-[150px] h-[75px] content-center text-xl rounded-xl hover:bg-slate-700 hover:scale-125"
        >
          TIC TAC TOE
        </Link>
        <Link
          to={"/juegos/conectFour"}
          className="border w-[150px] h-[75px] content-center text-xl rounded-xl hover:bg-slate-700 hover:scale-125"
        >
          4 EN LÍNEA
        </Link>
      </section>
    </main>
  );
};
