import "./App.css";
import { FollowMouse } from "./components/FollowMouse";
import { Board } from "./components/Board";

// TODO:
// 2. Juego de Laberinto
//    Un juego donde el usuario debe mover el puntero a través de un laberinto sin tocar las paredes

function App() {
  return (
    <main>
      <Board />
      <FollowMouse />
    </main>
  );
}

export default App;
