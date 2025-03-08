import React, { Suspense } from "react";
import { ThemeProvider } from "./components/ThemeContext"; // Ensure correct path
import Home from "./components/Home"; // Ensure correct path

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
