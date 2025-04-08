import { projects, createProject, createTask, deleteProject, deleteTask, getAllTasks, getTodayTasks, getFutureTasks, getStarredTasks } from './logic.js';

const allTasksButton = document.querySelector('.all-tasks-button');
const todayButton = document.querySelector('.today-button');
const futureButton = document.querySelector('.future-button');
const starredButton = document.querySelector('.starred-button');

allTasksButton.addEventListener('click', () => {
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';
    displayAllTasks(getAllTasks());
})

todayButton.addEventListener('click', () => {
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';
    displayTodayTasks(getTodayTasks());
})

futureButton.addEventListener('click', () => {
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';
    displayFutureTasks(getFutureTasks());
})

starredButton.addEventListener('click', () => {
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';
    displayStarredTasks(getStarredTasks());
})