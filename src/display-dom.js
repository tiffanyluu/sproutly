import {
  projects,
  deleteProject,
  deleteTask,
  saveProjects,
  storageAvailable,
} from "./logic.js";

function displayProjectOnSidebar(title) {
  const projectsList = document.querySelector(".projects-list");
  const projectItem = document.createElement("div");
  projectItem.className = "project-item";

  const button = document.createElement("button");
  button.textContent = title;
  button.className = "project-title";
  button.addEventListener("click", () => {
    document.querySelector(".content-container").style.display = "block";
    displayProjectOnMain(title);
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-sidebar";
  deleteButton.textContent = "Delete";
  deleteButton.id = `delete-${title}`;
  deleteButton.addEventListener("click", () => {
    deleteProject(title);
    projectsList.removeChild(projectItem);
    const taskContainer = document.querySelector(".task-container");
    const projectHeading = taskContainer.querySelector(".project-heading");
    const listContainer = taskContainer.querySelector(".list-container");
    const addTaskButton = document.querySelector(".add-task-button");

    if (addTaskButton) addTaskButton.style.display = "none";
    if (projectHeading) projectHeading.style.display = "none";

    if (listContainer) listContainer.remove();
  });

  const deleteLabel = document.createElement("label");
  deleteLabel.setAttribute("for", `delete-${title}`);
  deleteLabel.className = "trashcan-sidebar";

  projectItem.appendChild(button);
  projectItem.appendChild(deleteButton);
  projectItem.appendChild(deleteLabel);
  projectsList.append(projectItem);
}

function displayProjectOnMain(projectTitle) {
  const taskContainer = document.querySelector(".task-container");
  const addTaskButton = document.querySelector(".add-task-button");
  addTaskButton.style.display = "block";

  let currentProject = taskContainer.getAttribute("data-current-project");
  const projectHeading = taskContainer.querySelector(".project-heading");
  const listContainer = taskContainer.querySelector(".list-container");

  if (currentProject === null) {
    taskContainer.setAttribute("data-current-project", "");
    currentProject = "";
  }

  if (projectHeading) projectHeading.style.display = "block";
  if (listContainer) listContainer.style.display = "block";

  if (projectTitle === currentProject) {
    let taskList = taskContainer.querySelector(".task-list");
    if (taskList) taskList.innerHTML = "";

    const tasks = projects[projectTitle] || [];
    displayAllTasks(tasks);
    return;
  }

  if (projectHeading) projectHeading.remove();
  if (listContainer) listContainer.remove();

  const newProjectHeading = document.createElement("div");
  newProjectHeading.className = "project-heading";
  newProjectHeading.textContent = projectTitle;
  newProjectHeading.setAttribute("data-title", projectTitle);
  taskContainer.appendChild(newProjectHeading);

  const newListContainer = document.createElement("div");
  newListContainer.className = "list-container";
  let taskList = document.createElement("ul");
  taskList.className = "task-list";
  newListContainer.appendChild(taskList);
  taskContainer.appendChild(newListContainer);

  taskContainer.setAttribute("data-current-project", projectTitle);
  const tasks = projects[projectTitle] || [];
  displayAllTasks(tasks);
}

function displayTaskOnMain(taskTitle, taskDate, taskId) {
  const taskContainer = document.querySelector(".task-container");
  let taskList;
  if (!document.querySelector(".task-list")) {
    taskList = document.createElement("ul");
    taskList.className = "task-list";
    taskContainer.appendChild(taskList);
  } else {
    taskList = document.querySelector(".task-list");
  }
  const listItem = document.createElement("div");
  const bundle1 = document.createElement("div");
  let projectTitle = taskContainer.getAttribute("data-current-project");

  bundle1.className = "bundle1";
  listItem.className = "list-item";

  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.className = "checkbox";
  inputCheckbox.id = `circle-${taskId}`;
  const task = Object.values(projects)
    .flat()
    .find((t) => t.taskId === taskId);
  if (task && task.isDone) {
    inputCheckbox.checked = true;
  }

  inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      const taskToUpdate = Object.values(projects)
        .flat()
        .find((task) => task.taskId === taskId);
      if (taskToUpdate) {
        taskToUpdate.isDone = true;
        saveProjects();
      }
    } else {
      const taskToUpdate = Object.values(projects)
        .flat()
        .find((task) => task.taskId === taskId);
      if (taskToUpdate) {
        taskToUpdate.isDone = false;
        saveProjects();
      }
    }
  });

  const circleLabel = document.createElement("label");
  circleLabel.setAttribute("for", `circle-${taskId}`);
  circleLabel.className = "circle";

  const text = document.createElement("div");
  text.className = "text";
  text.textContent = taskTitle;
  bundle1.appendChild(inputCheckbox);
  bundle1.appendChild(circleLabel);
  bundle1.appendChild(text);

  const bundle2 = document.createElement("div");
  bundle2.className = "bundle2";
  const star = document.createElement("input");
  star.type = "checkbox";
  star.id = `star-${taskId}`;
  star.classList.add("star-checkbox");

  if (task && task.starred) {
    star.checked = true;
  }

  star.addEventListener("click", () => {
    if (star.checked) {
      const taskToUpdate = Object.values(projects)
        .flat()
        .find((task) => task.taskId === taskId);
      if (taskToUpdate) {
        taskToUpdate.starred = true;
        saveProjects();
      }
    } else {
      const taskToUpdate = Object.values(projects)
        .flat()
        .find((task) => task.taskId === taskId);
      if (taskToUpdate) {
        taskToUpdate.starred = false;
        saveProjects();
      }
    }
  });

  const label = document.createElement("label");
  label.setAttribute("for", `star-${taskId}`);
  label.classList.add("star");

  const date = document.createElement("div");
  date.className = "date";

  if (taskDate) {
    const dateObj = new Date(taskDate);
    const options = { 
      month: 'short', 
      day: 'numeric'
    };
    date.textContent = dateObj.toLocaleDateString('en-US', options);
  } else {
    date.textContent = "No date";
  }

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-task";
  deleteButton.textContent = "Delete";
  deleteButton.id = `delete-${taskId}`;
  deleteButton.addEventListener("click", () => {
    deleteTask(projectTitle, taskId);
    taskList.removeChild(listItem);
  });

  const deleteLabel = document.createElement("label");
  deleteLabel.setAttribute("for", `delete-${taskId}`);
  deleteLabel.className = "trashcan";

  bundle2.append(star);
  bundle2.append(label);
  bundle2.append(date);
  bundle2.append(deleteButton);
  bundle2.append(deleteLabel);

  listItem.appendChild(bundle1);
  listItem.appendChild(bundle2);
  taskList.appendChild(listItem);
}

function displayAllProjectsSidebar(projectsObject) {
  const projectList = document.querySelector(".projects-list");
  projectList.innerHTML = "";

  for (const projectTitle in projectsObject) {
    displayProjectOnSidebar(projectTitle);
  }
}

function displayAllTasks(tasks) {
  const taskList = document.querySelector(".task-list");

  if (taskList) {
    taskList.innerHTML = "";
  }

  if (!tasks || tasks.length === 0) {
    return;
  }

  tasks.forEach((task) => {
    displayTaskOnMain(task.taskTitle, task.date, task.taskId);
  });
}

function displayTodayTasks(tasks) {
  const taskList = document.querySelector(".task-list");

  if (taskList) {
    taskList.innerHTML = "";
  }

  if (!tasks || tasks.length === 0) {
    return;
  }

  tasks.forEach((task) => {
    displayTaskOnMain(task.taskTitle, task.date, task.taskId);
  });
}

function displayFutureTasks(tasks) {
  const taskList = document.querySelector(".task-list");

  if (taskList) {
    taskList.innerHTML = "";
  }

  if (!tasks || tasks.length === 0) {
    return;
  }

  tasks.forEach((task) => {
    displayTaskOnMain(task.taskTitle, task.date, task.taskId);
  });
}

function displayStarredTasks(tasks) {
  const taskList = document.querySelector(".task-list");

  if (taskList) {
    taskList.innerHTML = "";
  }

  if (!tasks || tasks.length === 0) {
    return;
  }

  tasks.forEach((task) => {
    displayTaskOnMain(task.taskTitle, task.date, task.taskId);
  });
}

function initialDisplay() {
  if (!storageAvailable("localStorage")) {
    return;
  }

  displayAllProjectsSidebar(projects);

  const taskForm = document.querySelector(".task-form");
  if (taskForm) {
    taskForm.style.display = "none";
  }
}

// Add this right before the export statement in display-dom.js

// Mobile menu functionality
function initializeMobileMenu() {
  // Create mobile menu toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'mobile-menu-toggle';
  toggleButton.setAttribute('aria-label', 'Toggle menu');
  document.body.appendChild(toggleButton);
  
  // Create close button inside sidebar
  const closeButton = document.createElement('button');
  closeButton.className = 'sidebar-close';
  closeButton.textContent = '× Close Menu';
  
  const sidebar = document.querySelector('.sidebar-container');
  sidebar.insertBefore(closeButton, sidebar.firstChild);
  
  toggleButton.addEventListener('click', function() {
    sidebar.classList.add('open');
  });
  
  closeButton.addEventListener('click', function() {
    sidebar.classList.remove('open');
  });
  
  // Close sidebar when clicking outside
  document.addEventListener('click', function(e) {
    if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

// Call the function when DOM is ready
document.addEventListener('DOMContentLoaded', initializeMobileMenu);

export {
  displayProjectOnMain,
  displayProjectOnSidebar,
  displayTaskOnMain,
  displayAllTasks,
  displayTodayTasks,
  displayFutureTasks,
  displayStarredTasks,
  displayAllProjectsSidebar,
  initialDisplay,
  initializeMobileMenu,
};
