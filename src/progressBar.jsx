import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="progressBar">
      <progress max={20} value={props.quesNo} style={{ top: 0 }}></progress>
    </div>
  );
};

export default ProgressBar;
