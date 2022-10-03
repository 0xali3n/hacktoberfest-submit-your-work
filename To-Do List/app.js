const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');
const filteroption = document.querySelector('.filter-todo')
//eventlisteners

todobutton.addEventListener('click', addtodo);
todolist.addEventListener('click', deletecheck);
filteroption.addEventListener('click', filterTodo);
//functions

function addtodo(event) {
    //prevents form from submitting
    event.preventDefault();
    //tododiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoinput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check btn
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //trash btn
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


    //append to list
    todolist.appendChild(todoDiv);

    //clear input value
    todoinput.value = '';
}

function deletecheck(e) {
    const item = e.target;
    //delete
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }

    //check
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e) {
    const todos = todolist.childNodes;
todos.forEach((todo)=>{
    if(todo.classList !== undefined){
        switch (e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
                case "completed":
                    if(todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                    break;
                    case "pending":
                    if(!todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                    break;
                    default:
                        break;
        }
    }
    return;
});
}