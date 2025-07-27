import React from "react";
import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      });
  }, [url]);
  return [data];
}
export default useFetch;
