import React from "react";

function Btn(props) {
  return (
    <div className="Time">
      <button
        className={props.type === "Start" ? "start" : "reset"}
        onClick={props.action}
      >
        {props.type}
      </button>
    </div>
  );
}
export default Btn;
