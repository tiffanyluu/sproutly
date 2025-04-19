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

function loadProjects() {
  if (!storageAvailable("localStorage")) {
    return;
  }

  const storedProjects = localStorage.getItem("projects");
  if (storedProjects) {
    try {
      projects = JSON.parse(storedProjects);
    } catch (e) {
      projects = {};
    }
  } else {
    projects = {};
  }
}

function saveProjects() {
  if (!storageAvailable("localStorage")) {
    return;
  }

  try {
    localStorage.setItem("projects", JSON.stringify(projects));
  } catch (e) {}
}

function createProject(projectTitle) {
  if (projectTitle in projects) {
    alert("Project Title already exists! Please choose another name.");
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
  };

  if (!projects[projectTitle]) {
    projects[projectTitle] = [];
  }

  projects[projectTitle].push(taskObject);
  saveProjects();
  return taskId;
}

function deleteTask(projectTitle, taskId) {
  let index = null;
  let projectName = null;

  if (!projectTitle) {
    for (const [key, taskArray] of Object.entries(projects)) {
      index = taskArray.findIndex((task) => task.taskId === taskId);
      if (index !== -1) {
        projectName = key;
        break;
      }
    }

    if (index !== -1 && projectName) {
      projects[projectName].splice(index, 1);
      saveProjects();
    }
  } else {
    if (projects[projectTitle]) {
      index = projects[projectTitle].findIndex(
        (task) => task.taskId === taskId
      );
      if (index !== -1) {
        projects[projectTitle].splice(index, 1);
        saveProjects();
      }
    }
  }
}

function deleteProject(projectTitle) {
  if (projects[projectTitle]) {
    delete projects[projectTitle];
    saveProjects();
    return true;
  }
  return false;
}

function getAllTasks() {
  if (Object.keys(projects).length === 0) {
    return [];
  }
  return Object.values(projects).flat();
}

function getCurrentDate() {
  const currentDate = new Date();
  return currentDate.toISOString().split("T")[0];
}

function getTodayTasks() {
  let currentDate = getCurrentDate();

  if (Object.keys(projects).length === 0) {
    return [];
  }

  let todayTasks = Object.values(projects)
    .flat()
    .filter((task) => task.date === currentDate);
  return todayTasks;
}

function getFutureTasks() {
  let currentDate = getCurrentDate();

  if (Object.keys(projects).length === 0) {
    return [];
  }

  let futureTasks = Object.values(projects)
    .flat()
    .filter((task) => task.date && new Date(task.date) > new Date(currentDate));
  return futureTasks;
}

function getStarredTasks() {
  if (Object.keys(projects).length === 0) {
    return [];
  }

  let starredTasks = Object.values(projects)
    .flat()
    .filter((task) => task.starred === true);
  return starredTasks;
}

export {
  projects,
  loadProjects,
  createProject,
  createTask,
  deleteProject,
  deleteTask,
  getAllTasks,
  getTodayTasks,
  getFutureTasks,
  getStarredTasks,
  saveProjects,
  storageAvailable,
};
