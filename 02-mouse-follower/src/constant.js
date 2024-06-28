

export const COLLITION_COMBOS = ({ position, rect }) => {
    return (
        (position.left <= rect.right && position.right >= rect.left && position.top <= rect.bottom && position.bottom >= rect.top)
      )
}