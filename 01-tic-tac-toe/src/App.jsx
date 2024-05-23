import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { Winner } from './components/Winner.jsx'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) // creo el tablero
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)  

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
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner) // guardo ganador
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
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

      <Winner 
        winner={winner}
        resetGame={resetGame}
      />
    </main>
  )
}

export default App
