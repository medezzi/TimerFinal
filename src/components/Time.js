import React from "react";

function Time(props) {
  return (
    <div className="time">
      <h1>{props.hms}</h1>
      <h5>{props.smh}</h5>
    </div>
  );
}
export default Time;
