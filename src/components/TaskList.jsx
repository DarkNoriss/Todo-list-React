import React, { useEffect, useState, useRef } from "react";
import "../styles/task.scss";

export const TaskList = ({ tasks, handleTaskDone }) => {
  console.log("sorting...");
  const sortedTasks = tasks.sort((a) => (a.done ? 1 : -1));
  console.log("creating...");
  const createTask = sortedTasks.map((task) => {
    return <Task key={task.id} task={task} handleTaskDone={handleTaskDone} />;
  });

  return <> {createTask}</>;
};

const Task = ({ task, handleTaskDone }) => {
  const [getChecked, setChecked] = useState(() => task.done);
  const isMounted = useRef(false);
  // const init = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return () => (isMounted.current = !isMounted.current);
    // if (!init.current) return () => (init.current = !init.current);
    console.log("saving change...");
    handleTaskDone(task.id, getChecked);
  }, [getChecked]);

  const handleToggle = () => setChecked(!getChecked);

  return (
    <div className="task" data-task-id={task.id}>
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
