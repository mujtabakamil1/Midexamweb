
const inputField = document.getElementById('input');


const todosList = document.getElementById('todos');


let todos = [];



function renderTodos() {
 
  todosList.innerHTML = '';


  todos.forEach((todo, index) => {

    const listItem = document.createElement('li');
    listItem.innerText = todo.text;

   
    if (todo.done) {
      listItem.classList.add('completed');
    }

    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTodo(index);
    });

    
    const doneButton = document.createElement('button');
    doneButton.innerText = 'COmpleted/DonE';

    doneButton.addEventListener('click', () => {
      markAsDone(index);
    });

    
    listItem.appendChild(deleteButton);
    listItem.appendChild(doneButton);

   
    todosList.appendChild(listItem);
  });
}


function addTodo() {
  const todoText = inputField.value.trim();

  
  if (todoText !== '') {
   
    const newTodo = {
      text: todoText, done: false
    };

    
    todos.push(newTodo);

    
    renderTodos();

    
    inputField.value = '';
  }
}


function deleteTodo(index) {
  
  todos.splice(index, 1);

 
  renderTodos();
}


function markAsDone(index) {

  todos[index].done = !todos[index].done;

 
  renderTodos();
}

// uSING Enter 
inputField.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    addTodo(); 
  }

});
renderTodos();