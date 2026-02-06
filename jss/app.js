
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
        
        li.innerHTML = `<input type="checkbox" class="checkbox"></input>
        <span>${tasktext}</span>
        <div class="task-buttons">
              <button class="delete-btn">Delete</button>
        </div>

        

           
       
       `;

       li.querySelector(".delete-btn").addEventListener('click', ()=>{
        li.remove();
       });

       

        
        tasklist.appendChild(li);
        taskinput.value = '';

    };



    addtaskbtn.addEventListener('click',addtask);
    taskinput.addEventListener('keypress',(e) =>{
        if(e.key === 'Enter')
        {
            addtask(e);
        }

        })


})
