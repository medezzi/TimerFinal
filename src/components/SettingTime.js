import React from "react";

function SettingTime(props) {
  return (
    <div className="Time">
      <label>Setting the time in ms </label>
      <input
        className="date"
        type="number"
        placeholder="enter the time in ms"
        value={props.value}
        onChange={props.action}
      />
    </div>
  );
}
export default SettingTime;
