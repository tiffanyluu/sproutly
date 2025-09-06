import { displayTaskOnMain } from "./display-dom.js";
import { createTask } from "./logic.js";

const taskForm = document.querySelector(".task-form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(taskForm);
  const obj = Object.fromEntries(fd);
  let projectTitle = document.querySelector(".project-heading").textContent;
  if (!obj.taskTitle) {
    alert("Project name cannot be blank!");
    return;
  }
  let taskId = createTask(projectTitle, obj.taskTitle, obj.date);
  displayTaskOnMain(obj.taskTitle, obj.date, taskId);
  taskForm.reset();
  document.querySelector(".task-form").style.display = "none";
});

const addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener("click", () => {
  document.querySelector(".task-form").style.display = "block";
});

const cancelTaskForm = document.querySelector(".cancel-task-form");
cancelTaskForm.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  taskForm.reset();
  document.querySelector(".task-form").style.display = "none";
});

const addTaskForm = document.querySelector(".add-task-form");
addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".task-form").style.display = "none";
});
