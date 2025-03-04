import { useState } from "react";

function SubTwoNumbers() {
  const [num1, setNum1] = useState(""); // Changed initial state from 0 to ""
  const [num2, setNum2] = useState(""); // Changed initial state from 0 to ""
  const [difference, setDifference] = useState(null); // Changed initial state from 0 to null

  const handleSubtraction = () => {
    setDifference(Number(num1) - Number(num2));
  };

  return (
    <div>
      <h2>Subtract Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter the first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />
      <button onClick={handleSubtraction}>Subtract</button>
      <br /><br />
      {difference !== null && <h3>Difference: {difference}</h3>}
    </div>
  );
}

export default SubTwoNumbers;
