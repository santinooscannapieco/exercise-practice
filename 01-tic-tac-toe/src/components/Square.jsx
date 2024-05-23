
export const Square = ({ children, isSelected, updateBoard, index }) => {
    // ternario para definir las clases del turno
    const turnClassName = `flex items-center justify-center uppercase border w-[70px] h-[70px] text-4xl rounded-sm ${isSelected ? 'is-selected border-none' : ''}`
  
    const handleClick = () => {
        updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={turnClassName}>
        {children}
      </div>
    )
  }