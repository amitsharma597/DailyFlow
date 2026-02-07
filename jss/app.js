
document.addEventListener('DOMContentLoaded', ()=> {
    const taskinput = document.getElementById("task-input");
    const addtaskbtn = document.getElementById("add-task-btn");
    const tasklist = document.getElementById("task-list");

    const savetasks = () => {
        const tasks = [];

        document.querySelectorAll('#task-list li').forEach(li => {
            const text = li.querySelector('span').textContent;
            const checked = li.querySelector('.checkbox').checked;
            tasks.push({text, checked});
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const loadtasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            createtask(task.text, task.checked);
        });
        };

        const createtask = (tasktext, ischecked=false) => {
            
             const li = document.createElement("li");
        
        li.innerHTML = `<input type="checkbox" class="checkbox"></input>
        <span>${tasktext}</span>
        <div class="task-buttons">
              <button class="delete-btn">Delete</button>
        </div>

        

           
       
       `;

       const checkbox = li.querySelector('.checkbox');
       checkbox.checked = ischecked;

       checkbox.addEventListener('change', savetasks);

       
       li.querySelector(".delete-btn").addEventListener('click', ()=>{
        li.remove();
        savetasks();
       });

       

        
        tasklist.appendChild(li);
     


        };

    const addtask = (event) => {
        const tasktext = taskinput.value.trim();
        if(!tasktext) {
            return
        }

        createtask(tasktext);
        savetasks();

        taskinput.value = '';

       


    };



    addtaskbtn.addEventListener('click',addtask);
    taskinput.addEventListener('keypress',(e) =>{
        if(e.key === 'Enter')
        {
            addtask(e);
        }

        });

        loadtasks();


});
