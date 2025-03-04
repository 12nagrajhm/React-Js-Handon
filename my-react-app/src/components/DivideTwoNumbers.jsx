import { useState } from "react";

function DivideTwoNumbers() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleDivide = () => {
    const number1 = Number(num1);
    const number2 = Number(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid Input");
      return;
    }

    if (number2 === 0) {
      setResult("Cannot divide by zero");
      return;
    }

    setResult(number1 / number2);
  };

  return (
    <div>
      <h2>Divide Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter the first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Enter the second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleDivide}>Divide</button>
      <br />
      <br />
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default DivideTwoNumbers;
