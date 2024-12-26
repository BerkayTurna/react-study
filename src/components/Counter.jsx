import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 10);
  }

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={handleClick}>+10</button>
    </>
  );
}

export default Counter;
