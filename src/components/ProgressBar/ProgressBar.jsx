import React, { useState, useEffect } from "react";
import "./progressBar.css";

const ProgressBar = ({ progress }) => {
  const [updatedProgress, setUpdatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setUpdatedProgress(progress);
    }, 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          //width: `${progress}%`,
          transform: `translateX(${updatedProgress - 100}%)`,
          color: updatedProgress < 5 ? "black" : "white",
        }}
        role="progress-bar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
