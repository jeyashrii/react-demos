import React, { useState, useEffect } from "react";
import "./AutoComplete.css";
const AutoComplete = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchResults = async () => {
    if (cache[input]) {
      console.log("cache returned", input);
      setResult(cache[input]);
    }
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResult(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
    console.log("api returned", input);
  };
  useEffect(() => {
    const timer = setTimeout(fetchResults, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  return (
    <>
      <div className="app">
        <h1>AutoCompleteSearchBar</h1>

        <input
          className="search-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        ></input>
        <div className="result-container">
          {showResults &&
            result.map((r) => {
              return (
                <span className="result" key={r.id}>
                  {r.name}
                </span>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default AutoComplete;
