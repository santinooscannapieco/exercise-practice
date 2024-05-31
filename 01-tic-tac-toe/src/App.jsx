import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TicTacToe } from "./components/TicTacToe";
import { Inicio } from "./components/Inicio";
import { CuatroEnLinea } from "./components/CuatroEnLinea";

// TODO: Pasar de tic tac toe a cuatro en raya

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/juegos/tictactoe" element={<TicTacToe />} />
        <Route path="/juegos/cuatroenLinea" element={<CuatroEnLinea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
