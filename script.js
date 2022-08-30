// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', manageTodo);


// Functions

function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    // Append to list
    todoList.appendChild(todoDiv);
    // Clear Todo INPUT VALUE
    todoInput.value = '';
}

function manageTodo(e) {
    const item = e.target;
    // Delete TODO
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    // Complete CHECK MARK
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

