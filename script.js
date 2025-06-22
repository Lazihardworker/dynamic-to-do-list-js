// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select key DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task to the list
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim input

        // Validate input
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add remove functionality
        removeBtn.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Append button to list item, then item to list
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on pressing Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
