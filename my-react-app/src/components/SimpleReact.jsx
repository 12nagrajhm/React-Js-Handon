import { useState } from "react";

const SimpleReact = () => {
  const [hello, setHello] = useState("");

  const handleHello = () => {
    setHello("Hello to my simple React app!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <nav>
        <button onClick={handleHello}>Click Me</button>
      </nav>
      <h2>{hello}</h2>
    </div>
  );
};

export default SimpleReact;
