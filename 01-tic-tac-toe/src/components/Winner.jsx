import { Square } from "./Square"
import PropTypes from 'prop-types'


export const Winner = ({ winner, resetGame }) => {
    return (
        <> 
        {
            winner !== null && (
              <section className='absolute w-screen h-screen top-0 left-0 grid items-center justify-center'>
                <div className='flex flex-col justify-center items-center gap-2 w-[250px] h-[250px] bg-zinc-800 border rounded-lg'>
                  <h2>
                    {
                      winner === false
                       ? 'EMPATE'
                       : 'GANADOR: '
                    }
                  </h2>
    
                  <header className=''>
                    {winner && <Square>{winner}</Square>}
                  </header>
    
                  <footer>
                    <button 
                      className="center border bg-green-700 w-[150px] text-md rounded-md px-1"
                      onClick={resetGame}
                    >
                      Empezar de nuevo
                    </button>
                  </footer>
                </div>
              </section>
            )
          }
        </>
    )
}

Winner.propTypes = {
  winner: PropTypes.node,
  resetGame: PropTypes.func
}