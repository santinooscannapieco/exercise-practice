

export const GAME_OVER_COMBOS = ({ position, rect }) => {
    if (
        position.right >= rect.left &&
        position.right <= rect.right &&
        position.bottom >= rect.top &&
        position.bottom <= rect.bottom ||
        position.left >= rect.left &&
        position.left <= rect.right &&
        position.bottom >= rect.top &&
        position.bottom <= rect.bottom ||
        position.left >= rect.left &&
        position.left <= rect.right &&
        position.bottom >= rect.top &&
        position.bottom <= rect.bottom &&
        position.top >= rect.top &&
        position.top <= rect.bottom ||
        position.left >= rect.left &&
        position.left <= rect.right &&
        position.top >= rect.top &&
        position.top <= rect.bottom ||
        position.right >= rect.left &&
        position.right <= rect.right &&
        position.top >= rect.top &&
        position.top <= rect.bottom ||
        position.right >= rect.left &&
        position.right <= rect.right &&
        position.bottom >= rect.top &&
        position.bottom <= rect.bottom &&
        position.top >= rect.top &&
        position.top <= rect.bottom
    ) {
        return true
    }
}
/* 
OP 1 = 
    position.right >= rect.left &&
    position.right <= rect.right &&
    position.bottom >= rect.top &&
    position.bottom <= rect.bottom

OP 2 = 
    position.left >= rect.left &&
    position.left <= rect.right &&
    position.bottom >= rect.top &&
    position.bottom <= rect.bottom

OP 3 =
    position.left >= rect.left &&
    position.left <= rect.right &&
    position.bottom >= rect.top &&
    position.bottom <= rect.bottom
    position.top >= rect.top &&
    position.top <= rect.bottom

OP 4 =
    position.left >= rect.left &&
    position.left <= rect.right &&
    position.top >= rect.top &&
    position.top <= rect.bottom

OP 5 = 
    position.right >= rect.left &&
    position.right <= rect.right &&
    position.top >= rect.top &&
    position.top <= rect.bottom

OP 6 =
    position.right >= rect.left &&
    position.right <= rect.right &&
    position.bottom >= rect.top &&
    position.bottom <= rect.bottom
    position.top >= rect.top &&
    position.top <= rect.bottom
*/