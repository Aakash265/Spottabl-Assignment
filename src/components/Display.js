import React from "react";
import Show from "./Show";
import "./Display.css";

const Display = (props) => {
  return (
    <div className="display">
      {props.item.map((val) => (
        <Show show={val.name} />
      ))}
    </div>
  );
};

export default Display;
