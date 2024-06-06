import { WINNER_COMBOS_CONNECTFOUR, WINNER_COMBOS_TICTACTOE } from "../constants"

export const checkWinnerFromTicTacToe = (boardToCheck) => {
    for (const combo of WINNER_COMBOS_TICTACTOE) {
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

  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }




export const checkWinnerFromConectFour = (boardToCheck) => {
  for ( const combo of WINNER_COMBOS_CONNECTFOUR) {
    const [a, b, c, d] = combo
    if(
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c] &&
      boardToCheck[a] === boardToCheck[d]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}