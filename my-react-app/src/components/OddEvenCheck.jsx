import { useState } from "react";

function OddEvenCheck() {
  const [num1, setNum1] = useState("");
  const [result, setResult] = useState(null);

  const handleOddEvenCheck = () => {
    const number = Number(num1); // Convert string input to a number

    if (isNaN(number)) {
      setResult("Invalid Number");
      return;
    }

    if (number % 2 === 0) {
      setResult(`${number} is Even`);
    } else {
      setResult(`${number} is Odd`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Odd or Even Checker</h2>
      <input
        type="number"
        placeholder="Enter a number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />
      <button onClick={handleOddEvenCheck}>Check</button>
      <br /><br />
      {result !== null && <h3>{result}</h3>}
    </div>
  );
}

export default OddEvenCheck;
