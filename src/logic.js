const projects = {};

function createProject(projectTitle) {
    if (projectTitle in projects) {
        alert('Project Title already exists! Please choose another name.');
        return;
    }
    projects[projectTitle] = [];
}

function createTask(projectTitle, taskTitle, date) {
    let taskId = crypto.randomUUID();
    projects[projectTitle].push({
        projectTitle: projectTitle,
        taskTitle: taskTitle,
        date: date,
        starred: false,
        taskId: taskId,
    });
    return taskId;
}

function deleteTask(projectTitle, taskId) {
    const index = projects[projectTitle].findIndex(task => task.taskId === taskId);
    if (index !== -1) {
        projects[projectTitle].splice(index, 1);
    }
}

function deleteProject(projectTitle) {
    delete projects[projectTitle];
}

function getAllTasks() {
    return Object.values(projects).flat();
}

function getTodayTasks() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;


    let todayTasks = Object.values(projects).flat().filter(task => task.date === currentDate);
    return todayTasks;
}

function getFutureTasks() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;

    let futureTasks = Object.values(projects).flat().filter(task => task.date !== currentDate);
    return futureTasks;
}

function getStarredTasks () {
    let starredTasks = Object.values(projects).flat().filter(task => task.starred === true);
    return starredTasks;
}

export { projects, createProject, createTask, deleteProject, deleteTask, getAllTasks, getTodayTasks, getFutureTasks, getStarredTasks };
