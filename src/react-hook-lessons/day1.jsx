import React, { useState } from 'react';
import './day1.css'

function Hooks1() {
  const [count, setCount] = useState(5);
 

  return (
    <>
      <button>add</button>
      <div className='wrapper'>
        <button onClick={ () => setCount(count - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
}

export default Hooks1;