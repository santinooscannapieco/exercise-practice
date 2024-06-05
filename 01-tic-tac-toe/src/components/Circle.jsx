import PropTypes from "prop-types";

export const Circle = ({ children, updateBoard, index, isSelected, board }) => {
  const classNameClick = `text-center content-center w-[70px] h-[70px] text-4xl border-none rounded-full ${
    isSelected
      ? board[index] === "1"
        ? "bg-red-500"
        : "bg-green-500"
      : "bg-zinc-800"
  }`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={classNameClick}>
      {children}
    </div>
  );
};

Circle.propTypes = {
  children: PropTypes.node,
  updateBoard: PropTypes.func,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  board: PropTypes.array,
};
