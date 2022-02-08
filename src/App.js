import './App.css';
import React, { useState } from 'react';
import Board from './components.js/Board';

function App() {
  // History is an array of objects that contains the state of the board
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  let [xIsNext, setXIsNext] = useState(true);
  let [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (targetId) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const squaresCopy = [...current.squares];

    if (calculateWinner(squaresCopy) || squaresCopy[Number(targetId)]) return;
    console.log(targetId);
    squaresCopy[Number(targetId)] = xIsNext ? 'X' : 'O';
    setHistory([...history, { squares: squaresCopy }]);
    setXIsNext(!xIsNext);
    setStepNumber(historyCopy.length);
    console.log(`history`, history);
    console.log(`squaresCopy`, squaresCopy);
  };

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const jumpTo = (step) => {
    setStepNumber(step);
    xIsNext = step % 2 === 0;
  };

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          squares={current.squares}
          handleClick={handleClick}
          status={status}
        />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default App;
