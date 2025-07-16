import React, { useRef } from "react";
function FocusInput() {
  const input = useRef(null);
  console.log(input);
  function FocusInput() {
    input.current.focus();
  }
  return (
    <>
      <input type="text" ref={input}></input>
      <button onClick={() => FocusInput()}>click</button>
    </>
  );
}
export default FocusInput;
