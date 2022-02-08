import React, { useState } from 'react';
import Square from './Square';

function Board({ squares, status, handleClick }) {
  const renderSquare = (i) => {
    return <Square value={i} squares={squares} handleClick={handleClick} />;
  };

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
