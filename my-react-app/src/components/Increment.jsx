import { useState } from "react";

function Increment() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(prevCount=>prevCount+1);
  };
  return (
    <div>
        <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Increment;
