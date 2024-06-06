import PropTypes from "prop-types";

export const Circle = ({ updateBoard, index, isSelected, board }) => {
  const classNameClick = isSelected
    ? board[index] === "1"
      ? "bg-red-500"
      : "bg-green-500"
    : "bg-zinc-800";

  const handleClick = () => {
    updateBoard && updateBoard(index);
  };

  return (
    <div
      onClick={handleClick}
      className={`text-center content-center w-[70px] h-[70px] text-4xl border-none rounded-full ${classNameClick}`}
    ></div>
  );
};

Circle.propTypes = {
  updateBoard: PropTypes.func,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  board: PropTypes.array,
};
