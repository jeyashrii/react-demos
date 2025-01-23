import React, { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);

  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      <input type="text" key={sw ? "Dark" : "Light"}></input>
      <button onClick={() => setSw((s) => !s)}>switch</button>
    </div>
  );
};
export default Switcher;
