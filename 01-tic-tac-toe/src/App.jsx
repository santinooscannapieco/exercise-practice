import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TicTacToe } from "./components/TicTacToe";
import { Inicio } from "./components/Inicio";
import { ConectFour } from "./components/ConectFour";

// TODO: Pasar de tic tac toe a cuatro en raya

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/juegos/tictactoe" element={<TicTacToe />} />
        <Route path="/juegos/conectFour" element={<ConectFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
