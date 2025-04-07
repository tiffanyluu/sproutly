function displayProjectOnSidebar(title) {
    const projectsList = document.querySelector('.projects-list');
    const button = document.createElement('button');
    button.textContent = title;
    button.className = 'project-item';
    button.addEventListener('click', () => {
        document.querySelector('.content-container').style.display = 'block';
        displayProjectOnMain(title);
    });
    projectsList.appendChild(button);
}

function displayProjectOnMain(projectTitle) {
    const taskContainer = document.querySelector('.task-container');
    const existingHeading = taskContainer.querySelector(`.project-heading[data-title="${projectTitle}"]`);

    if (!existingHeading) {
        const projectHeading = document.createElement('div');
        projectHeading.className = 'project-heading';
        projectHeading.textContent = projectTitle;
        taskContainer.appendChild(projectHeading);

        const listContainer = document.createElement('div');
        listContainer.className = 'list-container';
        const taskList = document.createElement('ul');
        taskList.className = 'task-list';

        listContainer.appendChild(taskList);
        taskContainer.appendChild(listContainer);

        //loop through array and display each corresponding task
    } else {
        console.log('Project heading already exists.');
    }
}

function displayTaskOnMain(taskTitle) {
    const taskList = document.querySelector('.task-list');
    const listItem = document.createElement('div');
    const bundle1 = document.createElement('div');
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
    const label = document.createElement('label');
    label.setAttribute('for', 'star1'); // Link label to checkbox via the id
    label.classList.add('star');
    bundle2.append(star);
    bundle2.append(label);


    listItem.appendChild(bundle1);
    listItem.appendChild(bundle2);
    taskList.appendChild(listItem);
}