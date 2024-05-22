import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


const Square = ({ children, isSelected, updateBoard, index }) => {
  const turnClassName = `flex items-center justify-center uppercase border w-[70px] h-[70px] text-4xl rounded-sm ${isSelected ? 'is-selected border-none' : ''}`

const handleClick = () => {
  updateBoard(index)
}

  return (
    <div onClick={handleClick} className={turnClassName}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    
    if (board[index] || winner) return 
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard) // Guardo el último turno, actualizo el tablero

    // Cambio el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner) // guardo ganador
    }

  }

  return (
    <main className='text-stone-50 flex flex-col items-center'>
      <h1 className='mb-1 text-center'>Tic Tac Toe</h1>
      <button 
        className="center border w-[100px] rounded-md mb-2"
        onClick={resetGame}
      >
          Reset del juego
      </button>
      <section className='grid grid-cols-3 gap-1'>
        {
          board.map((_,index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='flex justify-center gap-1 mt-2 relative'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {
        winner !== null && (
          <section className='absolute w-screen h-screen top-0 left-0 grid items-center justify-center'>
            <div className='flex flex-col justify-center items-center gap-2 w-[250px] h-[250px] bg-zinc-800 border rounded-lg'>
              <h2>
                {
                  winner === false
                   ? 'Empate'
                   : 'Ganó:'
                }
              </h2>

              <header className=''>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button 
                  className="center border w-[100px] rounded-md"
                  onClick={resetGame}
                >
                  Empezar de nuevo
                </button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
