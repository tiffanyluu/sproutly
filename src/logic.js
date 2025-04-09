let projects = {};

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}

if (storageAvailable("localStorage")) {
    const storedProjects = localStorage.getItem("projects");
    projects = storedProjects ? JSON.parse(storedProjects) : {};
}

function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function createProject(projectTitle) {
    if (projectTitle in projects) {
        alert('Project Title already exists! Please choose another name.');
        return false;
    }
    projects[projectTitle] = [];
    saveProjects();
    return true;
}

function createTask(projectTitle, taskTitle, date) {
    let taskId = crypto.randomUUID();
    let taskObject = {
        projectTitle: projectTitle,
        taskTitle: taskTitle,
        date: date,
        starred: false,
        isDone: false,
        taskId: taskId,
    }
    projects[projectTitle].push(taskObject);
    saveProjects();
    return taskId;
}

function deleteTask(projectTitle, taskId) {
    const index = projects[projectTitle].findIndex(task => task.taskId === taskId);
    if (index !== -1) {
        projects[projectTitle].splice(index, 1);
        saveProjects();
    }
}

function deleteProject(projectTitle) {
    delete projects[projectTitle];
    saveProjects();
}

function getAllTasks() {
    return Object.values(projects).flat();
}

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().split("T")[0];
}

function getTodayTasks() {
    let currentDate = getCurrentDate();

    let todayTasks = Object.values(projects).flat().filter(task => task.date === currentDate);
    return todayTasks;
}

function getFutureTasks() {
    let currentDate = getCurrentDate();

    let futureTasks = Object.values(projects).flat().filter(task => task.date && new Date(task.date) > new Date(currentDate));
    return futureTasks;
}

function getStarredTasks () {
    let starredTasks = Object.values(projects).flat().filter(task => task.starred === true);
    return starredTasks;
}

export { projects, createProject, createTask, deleteProject, deleteTask, getAllTasks, getTodayTasks, getFutureTasks, getStarredTasks, saveProjects, storageAvailable };
