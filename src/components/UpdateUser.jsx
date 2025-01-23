import { useContext, useState } from "react";
import React from "react";
import { userContext } from "./UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(userContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Update username</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placheholder="enter new name"
        ></input>
        <button type="submit">update name</button>
      </form>
    </div>
  );
};

export default UpdateUser;
