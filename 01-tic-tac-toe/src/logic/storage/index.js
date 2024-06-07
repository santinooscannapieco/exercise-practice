export const saveGameToStorage = ({board, turn, game}) => {
    // guardar aqui partida
    window.localStorage.setItem(`board ${game}`, JSON.stringify(board))
    window.localStorage.setItem(`turn ${game}`, turn)
}

export const saveWinToStorage = ({puntos, game}) => {
    window.localStorage.setItem(`puntos ${game}`, JSON.stringify(puntos))
}

export const resetGameStorage = ({game}) => {
    window.localStorage.removeItem(`board ${game}`)
    window.localStorage.removeItem(`turn ${game}`)
}

export const resetMatchStorage = ({game}) => {
    window.localStorage.removeItem(`board ${game}`)
    window.localStorage.removeItem(`turn ${game}`)
    window.localStorage.removeItem(`puntos ${game}`)
}