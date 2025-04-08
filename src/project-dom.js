import { displayProjectOnSidebar } from "./display-dom.js";
import { projects, createProject, createTask, deleteProject, deleteTask, getAllTasks, getTodayTasks, getFutureTasks, getStarredTasks } from './logic.js';

const projectForm = document.querySelector('.project-form');
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(projectForm);
    const obj = Object.fromEntries(fd);
    createProject(obj.title);
    displayProjectOnSidebar(obj.title);
    projectForm.reset();
    document.querySelector('.project-form').style.display = 'none';
})

const addProject = document.querySelector('.add-project');
addProject.addEventListener('click', () => {
    document.querySelector('.project-form').style.display='block';
});

const cancelProjectForm = document.querySelector('.cancel-project-form');
cancelProjectForm.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    projectForm.reset();
    document.querySelector('.project-form').style.display='none';
});

const addProjectForm = document.querySelector('.add-project-form');
addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('.project-form').style.display='none';
})

