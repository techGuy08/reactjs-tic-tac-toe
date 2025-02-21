import { calculateWinner } from "./App";
import Square from "./Square";

const Board = ({ onClickSquare, gameGrid }) => {
  let winner = calculateWinner(gameGrid);
  const btns = Array(9)
    .fill(0)
    .map((el, i) => {
      return (
        <Square
          classes={winner && winner.indexArr.includes(i) ? "win" : ""}
          onClickSquare={onClickSquare}
          value={gameGrid[i] || ""}
          key={i}
          id={i}
        />
      );
    });

  return <div className="boardGrid">{btns}</div>;
};

export default Board;
