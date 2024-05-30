export const saveGameToStorage = ({board, turn}) => {
    // guardar aqui partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const saveWinToStorage = ({puntos}) => {
    window.localStorage.setItem('puntos', JSON.stringify(puntos))
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}

export const resetMatchStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('puntos')
}