import React, { useState, useEffect, useRef } from "react";
import "./otp.css";

const Otp = () => {
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const digitCount = 4;
  const [inputArray, setInputArray] = useState(new Array(digitCount).fill(""));
  const refArr = useRef([]);

  const handleChange = (value, index) => {
    console.log(value);
    if (isNaN(value)) return;
    const newValue = value.trim();
    console.log(newValue);
    const newArray = [...inputArray];
    newArray[index] = newValue.slice(-1);
    setInputArray(newArray);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      !e.target.value && refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      <h1>OTP Validation</h1>
      {inputArray.map((input, index) => {
        return (
          <input
            className="input-box"
            type="text"
            value={inputArray[index]} //this is controlled input .value is set to the state value.so wont be able to type in inputbox.need to change that state value in handlechange to update
            key={index}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          ></input>
        );
      })}
    </div>
  );
};

export default Otp;
