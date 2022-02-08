import React, { useState } from 'react';

function Square({ value, squares, handleClick }) {
  return (
    <button className='square' onClick={handleClick} id={value}>
      {squares[value]}
    </button>
  );
}

export default Square;
