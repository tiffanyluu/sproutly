import "./styles.css";
import { projects, createProject, createTask, deleteProject, deleteTask, getAllTasks, getTodayTasks, getFutureTasks, getStarredTasks } from "./logic.js";
import "./project-dom.js";
import "./task-dom.js";
import { displayProjectOnMain, displayProjectOnSidebar, displayTaskOnMain } from "./display-dom.js";

window.projects = projects;