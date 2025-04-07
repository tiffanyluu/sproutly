import "./display-dom.js";

const taskForm = document.querySelector('.task-form');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(taskForm);
    const obj = Object.fromEntries(fd);
    //createTask(obj.title);
    displayTaskOnMain(obj.title);
    taskTitle = obj.title;
    taskForm.reset();
    document.querySelector('.task-form').style.display = 'none';
})

const addTaskButton = document.querySelector('.add-task-button');
addTaskButton.addEventListener('click', () => {
    document.querySelector('.task-form').style.display = 'block';
})

const cancelTaskForm = document.querySelector('.cancel-task-form');
cancelTaskForm.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    cancelTaskForm.reset();
    document.querySelector('.task-form').style.display='none';
});

const addTaskForm = document.querySelector('.add-task-form');
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('.task-form').style.display='none';
})