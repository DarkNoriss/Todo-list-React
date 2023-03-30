import React, { useState, useEffect } from "react";
import uuidv4 from "uuid/v4";
import { faker } from "@faker-js/faker";
import { Header } from "./Header";
import { Footer } from "./Foter";
import { Modal } from "./Modal";
import { TaskList } from "./TaskList";
import { loadData, saveData } from "../utils/localStorageData";
import "../styles/app.scss";

export const App = () => {
  const [tasks, setTasks] = useState(() => loadData());
  const [init, setInit] = useState(() => true);

  useEffect(() => {
    if (init) return setInit(!init);
    saveData(tasks);
  }, [tasks]);

  const handleAddTask = (event) => {
    return createTask(event.name, event.desc);
  };

  const handleRandomTask = () => {
    const name = faker.lorem.words(faker.datatype.number({ min: 3, max: 7 }));
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    const desc = faker.lorem.paragraph(faker.datatype.number({ min: 1, max: 3 }));

    return createTask(capName, desc);
  };

  const createTask = (name, desc) => {
    const newTask = {
      id: uuidv4(),
      name: name,
      desc: desc,
      done: false,
    };

    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const handleRemoveFinishedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.done));
  };

  const handleRemoveAllTasks = () => {
    return setTasks([]);
  };

  const handleTaskDone = (taskId, isDone) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, done: isDone } : task))
    );
  };

  const showModal = () => {
    const modal = document.querySelector(".modal");
    modal.showModal();
  };

  // use for showTask button to show tasks array in console
  // const showTasks = () => {
  //   console.log(tasks);
  // };

  return (
    <>
      <Header />
      <div className="app">
        <nav className="nav-bar">
          <button onClick={showModal}>Create Task</button>
          <button onClick={handleRandomTask}>Create random task</button>
          <button onClick={handleRemoveFinishedTasks}>Remove finished tasks</button>
          <button onClick={handleRemoveAllTasks}>Remove all tasks</button>
          {
            // <button onClick={showTasks}>Show tasks</button> // used only to show tasks array in console
          }
        </nav>
        <div className="tasks-container">
          <div className="tasks-list">
            <TaskList tasks={tasks} handleTaskDone={handleTaskDone} />
          </div>
        </div>
      </div>
      <Footer />
      <Modal onCreateTask={handleAddTask} />
    </>
  );
};
