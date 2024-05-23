import { Square } from "./Square"

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
        </>
    )
}