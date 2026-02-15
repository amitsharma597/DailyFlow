
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const totalCountEl = document.getElementById('total-count');
    const completedCountEl = document.getElementById('completed-count');
    const pendingCountEl = document.getElementById('pending-count');

    const saveTasks = () => {
        const tasks = [];

        document.querySelectorAll('#task-list li').forEach(li => {
            const text = li.querySelector('span').textContent;
            const checked = li.querySelector('.checkbox').checked;
            tasks.push({ text, checked });
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const updateStats = () => {
        const allTasks = document.querySelectorAll('#task-list li');
        const completedTasks = document.querySelectorAll('#task-list li .checkbox:checked');

        const total = allTasks.length;
        const completed = completedTasks.length;
        const pending = total - completed;

        totalCountEl.textContent = total;
        pendingCountEl.textContent = pending;
        completedCountEl.textContent = completed;

    };

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            createTask(task.text, task.checked);
        });
    };

    const createTask = (tasktext, ischecked = false) => {

        const li = document.createElement("li");

        li.innerHTML = `<input type="checkbox" class="checkbox"></input>
        <span>${tasktext}</span>
        <div class="task-buttons">
              <button class="delete-btn">Delete</button>
        </div>
       `;

        const checkbox = li.querySelector('.checkbox');
        checkbox.checked = ischecked;

        checkbox.addEventListener('change', () => {
            saveTasks();
            updateStats();

        });


        li.querySelector(".delete-btn").addEventListener('click', () => {
            li.remove();
            saveTasks();
            updateStats(); ''
        });

        taskList.appendChild(li);

    };

    const addTask = (event) => {
        const taskText = taskInput.value.trim();
        if (!taskText) {
            return
        }

        createTask(taskText);
        saveTasks();
        updateStats();

        taskInput.value = '';
    };



    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(e);
        }

    });

    loadTasks();
    updateStats();


});
