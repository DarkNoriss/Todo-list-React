import { LOCAL_STORAGE_KEY } from "../constants";

export const loadData = () => {
  const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  return storedTasks;
};

export const saveData = (array) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(array));
};
