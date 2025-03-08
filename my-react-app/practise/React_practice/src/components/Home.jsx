import React, { Suspense } from "react";
import { useTheme } from "./ThemeContext";

// Lazy load components
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="home-container">
      <h1>Welcome to the {theme.toUpperCase()} Theme!</h1>
      <button onClick={toggleTheme} className="theme-button">
        Toggle Theme
      </button>

      <Suspense fallback={<div>Loading About section...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div>Loading Contact section...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
