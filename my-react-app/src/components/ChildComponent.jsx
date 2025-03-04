import React from "react";
import GrandChildComponent from "./GrandChildComponent"; // Import Path

function ChildComponent({ message }) {
  return <GrandChildComponent message={message} />;
}

export default ChildComponent;
