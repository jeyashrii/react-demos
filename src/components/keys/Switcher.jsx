import React, { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);

  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      <input type="text" key={sw ? "Dark" : "Light"}></input>
      {/*THE INPUT VALUE WILL BE LOST ONCE BUTTON IS CLICKED BECAUSE THE KEY
      CHANGES, CAUSING REACT TO RECREATE THE ELEMENT*/}
      {sw ? <span>Dark</span> : <span>Light</span>}
      <input type="text"></input>
      {/*} THE INPUT VALUE WILL BE PRESERVED WITHOUT THE KEY BECAUSE REACT DOES
      NOT RECREATE THE ELEMENT*/}
      <button onClick={() => setSw((s) => !s)}>switch</button>
    </div>
  );
};
export default Switcher;
