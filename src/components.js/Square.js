import React, { useState } from 'react';

function Square() {
  const clickCallback = (e) => setValue('X');
  const [squareValue, setValue] = useState('');

  return (
    <button className='square' onClick={clickCallback}>
      {squareValue}
    </button>
  );
}

export default Square;
