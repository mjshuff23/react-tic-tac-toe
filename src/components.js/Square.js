import React, { useState } from 'react';

function Square({ value, squares, handleClick }) {
  return (
    <button
      className='square'
      onClick={(e) => handleClick(e.target.id)}
      id={value}
    >
      {squares[value]}
    </button>
  );
}

export default Square;
