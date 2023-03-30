import React, { useEffect, useState } from "react";
import "../styles/task.scss";

export const TaskList = ({ tasks, handleTaskDone }) => {
  const createTask = tasks.map((task) => {
    return <Task key={task.id} task={task} handleTaskDone={handleTaskDone} />;
  });

  return <> {createTask}</>;
};

const Task = ({ task, handleTaskDone }) => {
  const [checked, setChecked] = useState(() => task.done);
  const [init, setInit] = useState(() => true);

  useEffect(() => {
    if (init) return setInit(!init);
    handleTaskDone(task.id, checked);
  }, [checked]);

  const handleToggle = () => setChecked(!checked);

  return (
    <div className="task" data-task-id={task.id}>
      <h2>{task.name}</h2>
      <p>{task.desc}</p>
      <div className="done">
        <input
          type="checkbox"
          id="checkbox"
          className="done-checkbox"
          checked={checked}
          onChange={handleToggle}
        />
        <p>Done</p>
      </div>
    </div>
  );
};
