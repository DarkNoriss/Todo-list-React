import React from "react";
import "../styles/task.scss";

export const Task = () => {
  return (
    <div className="task">
      <h2 className="task-name">Task Name</h2>{" "}
      <p className="task-description">Task description goes here.</p>
      <label className="task-done">
        <input type="checkbox" name="done" className="done-checkbox" />
        <span className="done-text">Done</span>
      </label>
    </div>
  );
};
