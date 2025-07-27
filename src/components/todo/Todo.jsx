import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({ text: input, id: Math.floor(Math.random() * 10) });
    });
    setInput("");
  };
  const removeTodo = (id) => {
    setTodos((todos) => {
      return todos.filter((t) => t.id !== id);
    });
  };
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <input
        type="text"
        value={input}
        placeholder="add your todo"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span> {text}</span>{" "}
            <button onClick={() => removeTodo(id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
