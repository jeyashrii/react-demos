import { useState, useEffect } from "react";
import React from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
    console.log("j");
  }, []);

  return (
    <div>
      <ul>
        {data.map((data) => {
          return (
            <section key={data.id}>
              <li>title----{data.title}</li>
              <li>body-----{data.body}</li>
            </section>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchDataEffect;
