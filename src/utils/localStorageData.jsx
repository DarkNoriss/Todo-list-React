import { LOCAL_STORAGE_KEY } from "../constants";

export const loadData = () => {
  console.log("Loading local storage...");
  try {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storedTasks || [];
  } catch (error) {
    console.error("Error loading data from local storage:", error.message);
    return [];
  }
};

export const saveData = (array) => {
  console.log("Saving to local storage...");
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(array));
};
