document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${taskValue}</span>
            <button class="delete-btn">Delete</button>
        `;

        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';

        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });
    }
});