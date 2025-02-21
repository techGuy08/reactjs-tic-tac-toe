const Square = ({ value, onClickSquare, id, classes = "" }) => {
  return (
    <button className={"square " + classes} onClick={() => onClickSquare(id)}>
      {value}
    </button>
  );
};

export default Square;
