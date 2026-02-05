
document.addEventListener('DOMContentLoaded', ()=> {
    const taskinput = document.getElementById("task-input");
    const addtaskbtn = document.getElementById("add-task-btn");
    const tasklist = document.getElementById("task-list");

    const addtask = (event) => {
        const tasktext = taskinput.value.trim();
        if(!tasktext) {
            return
        }

        const li = document.createElement("li");
        
        li.textContent = tasktext;
        
        tasklist.appendChild(li);
        taskinput.value = '';

    };

    addtaskbtn.addEventListener('click',addtask);
    taskinput.addEventListener('keypress',(e) =>{
        if(e.key === 'enter')
        {
            addtask(e);
        }

        })


})
