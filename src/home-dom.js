import {
  projects,
  getAllTasks,
  getTodayTasks,
  getFutureTasks,
  getStarredTasks,
} from "./logic.js";
import {
  displayAllTasks,
  displayTodayTasks,
  displayFutureTasks,
  displayStarredTasks,
} from "./display-dom.js";

const allTasksButton = document.querySelector(".all-tasks-button");

const todayButton = document.querySelector(".today-button");
const futureButton = document.querySelector(".future-button");
const starredButton = document.querySelector(".starred-button");

allTasksButton.addEventListener("click", () => {
  if (Object.keys(projects).length === 0) return;
  const taskContainer = document.querySelector(".task-container");
  const projectHeading = taskContainer.querySelector(".project-heading");
  const listContainer = taskContainer.querySelector(".list-container");
  const addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.style.display = "none";
  projectHeading.style.display = "none";

  if (listContainer) listContainer.remove();

  const newListContainer = document.createElement("div");
  newListContainer.className = "list-container";
  const taskList = document.createElement("ul");
  taskList.className = "task-list";
  newListContainer.appendChild(taskList);
  taskContainer.appendChild(newListContainer);
  taskContainer.setAttribute("data-current-project", "");

  displayAllTasks(getAllTasks());
});

todayButton.addEventListener("click", () => {
  if (Object.keys(projects).length === 0) return;
  const taskContainer = document.querySelector(".task-container");
  const projectHeading = taskContainer.querySelector(".project-heading");
  const listContainer = taskContainer.querySelector(".list-container");
  const addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.style.display = "none";
  projectHeading.style.display = "none";

  if (listContainer) listContainer.remove();

  const newListContainer = document.createElement("div");
  newListContainer.className = "list-container";
  const taskList = document.createElement("ul");
  taskList.className = "task-list";
  newListContainer.appendChild(taskList);
  taskContainer.appendChild(newListContainer);
  taskContainer.setAttribute("data-current-project", "");

  displayTodayTasks(getTodayTasks());
});

futureButton.addEventListener("click", () => {
  if (Object.keys(projects).length === 0) return;
  const taskContainer = document.querySelector(".task-container");
  const projectHeading = taskContainer.querySelector(".project-heading");
  const listContainer = taskContainer.querySelector(".list-container");
  const addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.style.display = "none";
  projectHeading.style.display = "none";

  if (listContainer) listContainer.remove();

  const newListContainer = document.createElement("div");
  newListContainer.className = "list-container";
  const taskList = document.createElement("ul");
  taskList.className = "task-list";
  newListContainer.appendChild(taskList);
  taskContainer.appendChild(newListContainer);
  taskContainer.setAttribute("data-current-project", "");

  displayFutureTasks(getFutureTasks());
});

starredButton.addEventListener("click", () => {
  if (Object.keys(projects).length === 0) return;
  const taskContainer = document.querySelector(".task-container");
  const projectHeading = taskContainer.querySelector(".project-heading");
  const listContainer = taskContainer.querySelector(".list-container");
  const addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.style.display = "none";
  projectHeading.style.display = "none";

  if (listContainer) listContainer.remove();

  const newListContainer = document.createElement("div");
  newListContainer.className = "list-container";
  const taskList = document.createElement("ul");
  taskList.className = "task-list";
  newListContainer.appendChild(taskList);
  taskContainer.appendChild(newListContainer);
  taskContainer.setAttribute("data-current-project", "");

  displayStarredTasks(getStarredTasks());
});
