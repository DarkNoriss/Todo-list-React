import React, { useState, useRef } from "react";
import { Modal } from "./modal";
import "../styles/app.scss";

export const App = () => {
  // const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState([]);
  // const taskDescRef = useRef();

  function handleAddTask(event) {
    console.log(event);
    setNewTask({ name: `${event.name}`, desc: `${event.desc} ` });
    console.log({ newTask });
  }

  const showModal = () => {
    const modal = document.querySelector(".modal");
    modal.showModal();
  };

  return (
    <div className="app">
      <nav className="nav-bar">
        <button onClick={showModal}>Create Task</button>
        <button>Remove finished tasks</button>
      </nav>
      <div className="tasks-container"></div>
      <Modal onCreateTask={handleAddTask} />
    </div>
  );
};
