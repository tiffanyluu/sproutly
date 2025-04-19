import {
  projects,
  loadProjects,
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
  initialDisplay,
  displayAllProjectsSidebar,
} from "./display-dom.js";

loadProjects();

const allTasksButton = document.querySelector(".all-tasks-button");
const todayButton = document.querySelector(".today-button");
const futureButton = document.querySelector(".future-button");
const starredButton = document.querySelector(".starred-button");

function handleView(displayFn, taskFetcher) {
  const taskContainer = document.querySelector(".task-container");
  const projectHeading = taskContainer.querySelector(".project-heading");
  const listContainer = taskContainer.querySelector(".list-container");
  const addTaskButton = document.querySelector(".add-task-button");

  if (addTaskButton) addTaskButton.style.display = "none";
  if (projectHeading) projectHeading.style.display = "none";

  if (listContainer) listContainer.remove();

  const newListContainer = document.createElement("div");
  newListContainer.className = "list-container";
  const taskList = document.createElement("ul");
  taskList.className = "task-list";
  newListContainer.appendChild(taskList);
  taskContainer.appendChild(newListContainer);
  taskContainer.setAttribute("data-current-project", "");

  const tasks = taskFetcher();
  displayFn(tasks);

  document.querySelector(".content-container").style.display = "block";
}

allTasksButton.addEventListener("click", () => {
  handleView(displayAllTasks, getAllTasks);
});

todayButton.addEventListener("click", () => {
  handleView(displayTodayTasks, getTodayTasks);
});

futureButton.addEventListener("click", () => {
  handleView(displayFutureTasks, getFutureTasks);
});

starredButton.addEventListener("click", () => {
  handleView(displayStarredTasks, getStarredTasks);
});

window.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  displayAllProjectsSidebar(projects);

  if (allTasksButton) {
    allTasksButton.click();
  }
});
