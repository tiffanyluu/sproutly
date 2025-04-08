import { projects, createProject, createTask, deleteProject, deleteTask, getAllTasks, getTodayTasks, getFutureTasks, getStarredTasks } from './logic.js';

function displayProjectOnSidebar(title) {
    const projectsList = document.querySelector('.projects-list');
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';

    const button = document.createElement('button');
    button.textContent = title;
    button.className = 'project-title';
    button.addEventListener('click', () => {
        document.querySelector('.content-container').style.display = 'block';
        displayProjectOnMain(title);
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-sidebar';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteProject(title);
        projectsList.removeChild(projectItem)
    })

    projectItem.appendChild(button);
    projectItem.appendChild(deleteButton);
    projectsList.append(projectItem);
}

function displayProjectOnMain(projectTitle) {
    //redisplay all tasks corresponding to project when clicked on
    const taskContainer = document.querySelector('.task-container');
    const addTaskButton = document.querySelector('.add-task-button');
    addTaskButton.style.display = 'block'; 

    let currentProject = taskContainer.getAttribute('data-current-project');
    const projectHeading = taskContainer.querySelector('.project-heading');
    const listContainer = taskContainer.querySelector('.list-container');

    if (currentProject === null) {
        taskContainer.setAttribute('data-current-project', '');
        currentProject = '';
    }

    if (projectHeading) projectHeading.style.display = 'block';
    if (listContainer) listContainer.style.display = 'block';

    if (projectTitle === currentProject) {
        let taskList = taskContainer.querySelector('.task-list');
        if (taskList) taskList.innerHTML = '';

        const tasks = projects[projectTitle] || [];
        displayAllTasks(tasks);
        return;
    }

    if (projectHeading) projectHeading.remove();
    if (listContainer) listContainer.remove();

    const newProjectHeading = document.createElement('div');
    newProjectHeading.className = 'project-heading';
    newProjectHeading.textContent = projectTitle;
    newProjectHeading.setAttribute('data-title', projectTitle);
    taskContainer.appendChild(newProjectHeading);

    const newListContainer = document.createElement('div');
    newListContainer.className = 'list-container';
    let taskList = document.createElement('ul');
    taskList.className = 'task-list';
    newListContainer.appendChild(taskList);
    taskContainer.appendChild(newListContainer);

    taskContainer.setAttribute('data-current-project', projectTitle);
    const tasks = projects[projectTitle] || [];
    console.log("Tasks for project:", tasks);
    displayAllTasks(tasks);
}

function displayTaskOnMain(taskTitle, taskDate, taskId) {
    const taskContainer = document.querySelector('.task-container');
    let taskList;
    if (!document.querySelector('.task-list')) {
        taskList = document.createElement('ul');
        taskList.className = 'task-list';
        taskContainer.appendChild(taskList);
    } else {
        taskList = document.querySelector('.task-list');
    }
    const listItem = document.createElement('div');
    const bundle1 = document.createElement('div');
    let projectTitle = taskContainer.getAttribute('data-current-project');

    bundle1.className = 'bundle1';
    listItem.className = 'list-item';
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.className = 'checkbox';
    const text = document.createElement('div');
    text.className = 'text';
    text.textContent = taskTitle;
    bundle1.appendChild(inputCheckbox);
    bundle1.appendChild(text);

    const bundle2 = document.createElement('div');
    bundle2.className = 'bundle2';
    const star = document.createElement('input');
    star.type = 'checkbox';
    star.id = `star-${taskId}`;
    star.classList.add('star-checkbox');

    const task = Object.values(projects).flat().find(t => t.taskId === taskId);
    if (task && task.starred) {
        star.checked = true;
    }

    star.addEventListener('click', () => {
        if (star.checked) {
            const taskToUpdate = Object.values(projects).flat().find(task => task.taskId === taskId);
            console.log(taskToUpdate);
            if (taskToUpdate) {
                taskToUpdate.starred = true;

            }
        } else {
            const taskToUpdate = Object.values(projects).flat().find(task => task.taskId === taskId);
            if (taskToUpdate) {
                taskToUpdate.starred = false;
            }
        }
    });

    const label = document.createElement('label');
    label.setAttribute('for', `star-${taskId}`);
    label.classList.add('star');

    const date = document.createElement('div');
    date.className = 'date';
    date.textContent = taskDate;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-task';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteTask(projectTitle, taskId);
        taskList.removeChild(listItem);
    })

    bundle2.append(star);
    bundle2.append(label);
    bundle2.append(date);
    bundle2.append(deleteButton);


    listItem.appendChild(bundle1);
    listItem.appendChild(bundle2);
    taskList.appendChild(listItem);
}

function displayAllTasks(tasks) {
    tasks.forEach(task => {
        displayTaskOnMain(task.taskTitle, task.date, task.taskId);
    });
}

function displayTodayTasks(tasks) {
    tasks.forEach(task => {
        displayTaskOnMain(task.taskTitle, task.date, task.taskId);
    });
}
function displayFutureTasks(tasks) {
    tasks.forEach(task => {
        displayTaskOnMain(task.taskTitle, task.date, task.taskId);
    });
}

function displayStarredTasks(tasks) {
    tasks.forEach(task => {
        displayTaskOnMain(task.taskTitle, task.date, task.taskId);
    });
}

export { displayProjectOnMain, displayProjectOnSidebar, displayTaskOnMain, displayAllTasks, displayTodayTasks, displayFutureTasks, displayStarredTasks };
