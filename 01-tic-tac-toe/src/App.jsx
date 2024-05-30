import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { Winner } from './components/Winner.jsx'
import { resetGameStorage, resetMatchStorage, saveGameToStorage, saveWinToStorage } from './logic/storage/index.js'

// TODO: Pasar de tic tac toe a cuatro en raya

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }) // check localStorage y creo el tablero

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })
  
  const [puntos, setPuntos] = useState(() => {
    const puntosFromStorage = window.localStorage.getItem('puntos')
    return puntosFromStorage ? JSON.parse(puntosFromStorage) : Array(2).fill(0)
  })
  
  const [winner, setWinner] = useState(null)  

  const resetGame = () => {   
    sumarPuntos() 
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return 
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard) // Guardo el último turno, actualizo el tablero

    // Cambio el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar aqui partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner) // guardo ganador
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
    }
  }

  const sumarPuntos = () => {
    const newPuntos = [...puntos]
    winner === '❌' && (newPuntos[0] = puntos[0] + 1)
    winner === '⭕' && (newPuntos[1] = puntos[1] + 1)
    setPuntos(newPuntos)

    saveWinToStorage({
      puntos: newPuntos
    })
  }

  const handleFinish = () => {
    setPuntos(Array(2).fill(0))
    setBoard(Array(9).fill(null))
    resetMatchStorage()
  }


  return (
    <main className='text-stone-50 flex flex-col items-center'>
      <h1 className='mb-1 text-center'>Tic Tac Toe</h1>
      <section className='flex justify-center gap-1 my-2 relative'>
        {
            puntos.map((punto, index) => {
                return(
                    <Square key={index}>
                        {punto}
                    </Square>
                )
            })
        }
      </section>
      <button 
        className="center border w-[100px] text-sm rounded-md mb-2"
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

      <button 
        className="center border bg-red-700 w-[150px] text-md rounded-md mt-5"
        onClick={handleFinish}
      >
        TERMINAR PARTIDA
      </button>

      <Winner 
        winner={winner}
        resetGame={resetGame}
      />
    </main>
  )
}

export default App
