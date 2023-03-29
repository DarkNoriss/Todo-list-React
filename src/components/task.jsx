import React from "react";
import "../styles/task.scss";

export const Task = (props) => {
  // console.log(props);
  return (
    <div className="task">
      <h2 className="task-name"> {props.name} </h2>{" "}
      <p className="task-description"> {props.desc} </p>
      <label className="task-done">
        <input
          type="checkbox"
          name="done"
          className="done-checkbox"
          checked={props.done ? "checked" : undefined}
        />
        <span className="done-text">Done</span>
      </label>
    </div>
  );
};
