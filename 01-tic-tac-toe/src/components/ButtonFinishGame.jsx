import PropTypes from "prop-types";

export const ButtonFinishGame = ({ handleFinish }) => {
  return (
    <button
      className="center border bg-red-700 w-[150px] text-md rounded-md mt-5"
      onClick={handleFinish}
    >
      TERMINAR PARTIDA
    </button>
  );
};

ButtonFinishGame.propTypes = {
  handleFinish: PropTypes.func,
};
