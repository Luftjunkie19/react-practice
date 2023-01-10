import { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>COUNTER:</h1>
      <button onClick={increaseNumber}>Increase</button>
      <div>{number}</div>
      <button onClick={decreaseNumber}>Decrease</button>
    </div>
  );
}

export default Counter;
