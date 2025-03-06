import React, { useState, useEffect } from "react";
import "./style.css";

const DebounceSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, onSearch]);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default DebounceSearch;
