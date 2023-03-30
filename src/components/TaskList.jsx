import React, { useState } from "react";
import { useUpdateEffect } from "../utils/useUpdateEffect";
import "../styles/task.scss";

export const TaskList = ({ tasks, handleTaskDone }) => {
  const sortedTasks = tasks.sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));

  const createTask = sortedTasks.map((task) => {
    return <Task key={task.id} task={task} handleTaskDone={handleTaskDone} />;
  });

  return <> {createTask}</>;
};

const Task = ({ task, handleTaskDone }) => {
  const [getChecked, setChecked] = useState(() => task.done);

  useUpdateEffect(() => handleTaskDone(task.id, getChecked), [getChecked]);

  const handleToggle = () => setChecked(!getChecked);

  return (
    <div className="task">
      <h2>{task.name}</h2>
      <p>{task.desc}</p>
      <div className="done">
        <input
          type="checkbox"
          id="checkbox"
          className="done-checkbox"
          checked={getChecked}
          onChange={handleToggle}
        />
        <p>Done</p>
      </div>
    </div>
  );
};
