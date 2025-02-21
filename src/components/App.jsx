import { useState } from "react";
import Game from "./Game";

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [ActiveMovView, setActiveMoveView] = useState(history.length - 1);
  const [isSortAsc, setIsSortAsc] = useState(true);
  const [movePostionsArr, setmovePostionsArr] = useState([]);
  const currentSquares = history[ActiveMovView];
  const isXTurn = ActiveMovView % 2 === 0;
  const winner = calculateWinner(currentSquares);
  const isGameOver = Boolean(winner);

  const handleClickSquare = (id) => {
    let nextGrid = [...currentSquares];
    let newHistory = [...history];
    let newMovePostionsArr = [...movePostionsArr];
    let winner = calculateWinner(nextGrid);
    let row = Math.ceil((id + 1) / 3);
    let col = Math.floor(id - (row - 1) * 3) + 1;

    if (!currentSquares[id] && !winner) {
      nextGrid[id] = isXTurn ? "x" : "o";

      if (ActiveMovView < history.length - 1) {
        newHistory.splice(ActiveMovView + 1, history.length, nextGrid);
        newMovePostionsArr.splice(ActiveMovView, newMovePostionsArr.length, {
          row,
          col,
        });
      } else {
        newHistory.push(nextGrid);
        newMovePostionsArr.push({ row, col });
      }

      setHistory(newHistory);
      setActiveMoveView(newHistory.length - 1);
      setmovePostionsArr(newMovePostionsArr);
    }
  };
  function jumpToMove(num) {
    if (history[num]) {
      setActiveMoveView(num);
    }
  }
  const handleSortClick = () => {
    setIsSortAsc(!isSortAsc);
  };
  return (
    <div>
      <h1>React.js Tic Tac Toe</h1>
      <Game
        gameGrid={currentSquares}
        isXTurn={isXTurn}
        handleClickSquare={handleClickSquare}
        onJumpTo={jumpToMove}
        history={history}
        isGameOver={isGameOver}
        win={winner}
        ActiveMovView={ActiveMovView}
        isSortAsc={isSortAsc}
        onSortClick={handleSortClick}
        movePostionsArr={movePostionsArr}
      />
    </div>
  );
};

export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], indexArr: [a, b, c] };
    }
  }
  return null;
};

export default App;
