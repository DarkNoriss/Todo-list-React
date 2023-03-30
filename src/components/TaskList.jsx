import React, { useEffect, useState, useRef } from "react";
import "../styles/task.scss";

export const TaskList = ({ tasks, handleTaskDone }) => {
  const sortedTasks = tasks.sort((a) => (a.done ? 1 : -1));

  const createTask = sortedTasks.map((task) => {
    return <Task key={task.id} task={task} handleTaskDone={handleTaskDone} />;
  });

  return <> {createTask}</>;
};

const Task = ({ task, handleTaskDone }) => {
  const [checked, setChecked] = useState(() => task.done);
  const init = useRef(() => true);

  useEffect(() => {
    if (init) return () => !init;
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
