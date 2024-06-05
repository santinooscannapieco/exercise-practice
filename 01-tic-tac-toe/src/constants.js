export const TURNS_TICTACTOE = {
    X: '❌',
    O: '⭕'
}

// combos ganadores posibles
export const WINNER_COMBOS_TICTACTOE = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



export const TURNS_CONECTFOUR = {
    red: "1",
    green: "2"
}

// Generar todas las combinaciones ganadoras para 4 en línea
function generateWinnerCombos() {
    const winnerCombos = [];
    const rows = 6;
    const cols = 7;

    // Horizontales
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols - 3; col++) {
            winnerCombos.push([
                row * cols + col,
                row * cols + col + 1,
                row * cols + col + 2,
                row * cols + col + 3
            ]);
        }
    }

    // Verticales
    for (let row = 0; row < rows - 3; row++) {
        for (let col = 0; col < cols; col++) {
            winnerCombos.push([
                row * cols + col,
                (row + 1) * cols + col,
                (row + 2) * cols + col,
                (row + 3) * cols + col
            ]);
        }
    }

    // Diagonales (de izquierda a derecha)
    for (let row = 0; row < rows - 3; row++) {
        for (let col = 0; col < cols - 3; col++) {
            winnerCombos.push([
                row * cols + col,
                (row + 1) * cols + col + 1,
                (row + 2) * cols + col + 2,
                (row + 3) * cols + col + 3
            ]);
        }
    }

    // Diagonales (de derecha a izquierda)
    for (let row = 0; row < rows - 3; row++) {
        for (let col = 3; col < cols; col++) {
            winnerCombos.push([
                row * cols + col,
                (row + 1) * cols + col - 1,
                (row + 2) * cols + col - 2,
                (row + 3) * cols + col - 3
            ]);
        }
    }

    return winnerCombos;
}

export const WINNER_COMBOS_CONNECTFOUR = generateWinnerCombos();