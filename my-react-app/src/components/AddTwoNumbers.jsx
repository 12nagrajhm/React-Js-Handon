import { useState } from "react";

function AddNumbers() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);

  const handleAddition = () => {
    setSum(Number(num1) + Number(num2)); // Convert input values to numbers before adding
  };

  return (
    <center>
      <h2>Add Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter first number"
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
      <button onClick={handleAddition}>Add</button>
      <br /><br />
      {sum !== null && <h3>Sum: {sum}</h3>}
    </center>
  );
}

export default AddNumbers;
