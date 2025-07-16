import React, { useState, useEffect, useRef } from "react";
function Timer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevcount) => prevcount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  function stopTimer() {
    clearInterval(intervalRef.current);
  }
  return (
    <>
      <div>Timer : {timer}</div>
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
}
export default Timer;
