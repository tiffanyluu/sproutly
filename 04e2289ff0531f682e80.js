import "./styles.css";
import "./project-dom.js";
import "./task-dom.js";
import { displayProjectOnMain, displayProjectOnSidebar, displayTaskOnMain, initialDisplay } from "./display-dom.js";
import './home-dom.js';
import { projects, createProject, createTask, deleteProject, deleteTask, getAllTasks, getTodayTasks, getFutureTasks, getStarredTasks } from "./logic.js";

initialDisplay();