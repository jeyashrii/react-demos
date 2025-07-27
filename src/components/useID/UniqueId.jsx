import React from "react";
import { useId } from "react";

const UniqueId = () => {
  const id = useId();
  return (
    <div>
      {/* <label htmlFor={`${id}--email`}>email</label>
      <input type="email" id={`${id}--email`}></input>
      <label htmlFor={`${id}--password`}>password</label>
      <input type="password" id={`${id}--password`}></input> */}
      <label htmlFor={id}>email</label>
      <input type="email" id={id}></input>
    </div>
  );
};

export default UniqueId;
