// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the input, button, and task list elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input and remove spaces

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create <li> for task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add click event to remove task
        removeBtn.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Add button to task, and task to list
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when 'Enter' is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Don't re-save
    }

    // Save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            const taskText = li.firstChild.textContent.trim(); // Get only the text, excluding the button
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add a task to the list
    function addTask(taskText, save = true) {
        if (!taskText || taskText.trim() === '') {
            alert('Please enter a task!');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        removeBtn.onclick = () => {
            taskList.removeChild(listItem);
            saveTasks(); // Update localStorage after removal
        };

        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        if (save) {
            saveTasks(); // Save only if not from loadTasks()
        }

        taskInput.value = ''; // Clear input
    }

    // Add task from input field
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Add task on pressing Enter key
    taskInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks on page load
    loadTasks();
});

