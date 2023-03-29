import React, { useState } from "react";
import uuidv4 from "uuid/v4";
import { Modal } from "./modal";
import { Task } from "./task";
import { loadData, saveData } from "../utils/localStorageData";
import "../styles/app.scss";
import { useEffect } from "react";

export const App = () => {
  const [tasks, setTasks] = useState(() => loadData() || []);

  useEffect(() => {
    saveData(tasks);
  }, [tasks]);

  const handleAddTask = (event) => {
    const newTask = {
      id: uuidv4(),
      name: event.name,
      desc: event.desc,
      done: false,
    };

    setTasks((prevTodos) => {
      return [...prevTodos, newTask];
    });
  };

  const showModal = () => {
    const modal = document.querySelector(".modal");
    modal.showModal();
  };

  // use for showTask button to show tasks array in console
  // const showTasks = () => {
  //   console.log(tasks);
  // };

  const createTask = tasks.map((task) => {
    return <Task key={task.id} name={task.name} desc={task.desc} done={task.done} />;
  });

  return (
    <div className="app">
      <nav className="nav-bar">
        <button onClick={showModal}>Create Task</button>
        <button>Remove finished tasks</button>
        {
          // <button onClick={showTasks}>Show tasks</button> // used only to show tasks array in console
        }
      </nav>
      <div className="tasks-container">
        <div className="tasks-list">{createTask}</div>
      </div>
      <Modal onCreateTask={handleAddTask} />
    </div>
  );
};
