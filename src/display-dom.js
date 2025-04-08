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

    let currentProject = taskContainer.getAttribute('data-current-project');

    if (currentProject === null) {
        taskContainer.setAttribute('data-current-project', '');
        currentProject = '';
    }

    if (projectTitle === currentProject) {
        console.log('You are already viewing this project.');
        return;
    }

    const projectHeading = taskContainer.querySelector('.project-heading');
    const listContainer = taskContainer.querySelector('.list-container');
    if (projectHeading) {
        projectHeading.remove();
    }
    if (listContainer) {
        listContainer.remove();
    }

    const newProjectHeading = document.createElement('div');
    newProjectHeading.className = 'project-heading';
    newProjectHeading.textContent = projectTitle;
    newProjectHeading.setAttribute('data-title', projectTitle);
    taskContainer.appendChild(newProjectHeading);

    const newListContainer = document.createElement('div');
    newListContainer.className = 'list-container';
    const taskList = document.createElement('ul');
    taskList.className = 'task-list';
    newListContainer.appendChild(taskList);
    taskContainer.appendChild(newListContainer);

    taskContainer.setAttribute('data-current-project', projectTitle);
}



function displayTaskOnMain(taskTitle, taskDate, taskId) {
    const taskList = document.querySelector('.task-list');
    const listItem = document.createElement('div');
    const bundle1 = document.createElement('div');
    const projectTitle = document.querySelector('.project-heading').textContent;

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
    star.id = 'star1';
    star.classList.add('star-checkbox');
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
    label.setAttribute('for', 'star1');
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

// function displayAllTasks(tasks) {

// }
// function displayTodayTasks(tasks);
// function displayFutureTasks(tasks);
// function displayStarredTasks(tasks);

export { displayProjectOnMain, displayProjectOnSidebar, displayTaskOnMain };
