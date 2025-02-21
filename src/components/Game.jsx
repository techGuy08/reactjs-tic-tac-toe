import Board from "./Board";

const Game = ({
  handleClickSquare,
  gameGrid,
  isXTurn,
  isGameOver,
  win,
  history,
  onJumpTo,
  ActiveMovView,
  isSortAsc,
  onSortClick,
  movePostionsArr,
}) => {
  let moves = history.map((squares, move) => {
    let description = "Go to game start";
    if (move > 0) {
      description = "Go to move #" + move;
    }
    if (move === ActiveMovView) {
      description = "You are at " + (move > 0 ? "move #" + move : "start");
    }

    return (
      <li key={move}>
        <button onClick={() => onJumpTo(move)}>
          {description}
          {move > 0 &&
            ` (row: ${movePostionsArr[move - 1].row}, col: ${
              movePostionsArr[move - 1].col
            })`}
        </button>
      </li>
    );
  });
  if (!isSortAsc) {
    moves = moves.reverse();
  }

  return (
    <div className="row">
      <div className="col-left">
        <div className="game-main">
          {!isGameOver && gameGrid.some((v) => v === null) && (
            <p>Player {isXTurn ? "X" : "O"}'s Turn</p>
          )}
          {!isGameOver && ActiveMovView >= 9 && <p>Game Over, it's A Draw!</p>}
          {isGameOver && <p>Game Over, {win.winner.toUpperCase()} Wins!!</p>}

          <Board
            onClickSquare={handleClickSquare}
            gameGrid={gameGrid}
            isGameOver={isGameOver}
          />
        </div>
      </div>
      <div className="col-right">
        <div className="game-info">
          <p>
            Sort:{" "}
            <button onClick={onSortClick}>
              {isSortAsc ? "Ascending" : "Descending"}
            </button>
          </p>
          <ol>{history.length > 1 && moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default Game;
