//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo");

//Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions
function addTodo(event){
  //prevent from submitting
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  
//create LI
const newTodo = document.createElement('li');
newTodo.innerText =todoInput.value;
newTodo.classList.add('todo-item'); 
todoDiv.appendChild(newTodo);

//add todo list to the local storage
saveLocalTodos(todoInput.value);

//check button
const completeBtn = document.createElement('button');
completeBtn.innerHTML = '<i class="fas fa-check"></i>'
completeBtn.classList.add("complete_btn");
todoDiv.appendChild(completeBtn);

//bin button
const binBtn = document.createElement('button');
binBtn.innerHTML = '<i class="fas fa-trash"></i>'
binBtn.classList.add("bin_btn");
todoDiv.appendChild(binBtn);

//append to the list
todoList.appendChild(todoDiv);

//clear the value from the input after an item been add. 
todoInput.value = "";
}


function deleteCheck(e){
  const item = e.target;
  //delete todo
  if(item.classList[0] === "bin_btn"){
    const todo = item.parentElement;
    todo.classList.add("fall");

    removeLocalTodos(todo);

    todo.addEventListener('transitionend', function(){
      todo.remove();
    });

  }
  if(item.classList[0] === "complete_btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

}

function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          }else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")){
            todo.style.display = "flex";
          }else{
            todo.style.display = "none";
          }
          break;
    }
  });
}

function saveLocalTodos(todo){
  //check if there are any items in the list.
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  } else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}


  function getTodos(){
    let todos;
    if(localStorage.getItem("todos") === null){
      todos =[];  
    }else{
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        //todo div
          const todoDiv = document.createElement('div');
          todoDiv.classList.add("todo");
          
          //create LI
          const newTodo = document.createElement('li');
          newTodo.innerText = todo;
          newTodo.classList.add('todo-item'); 
          todoDiv.appendChild(newTodo);

          //check button
          const completeBtn = document.createElement('button');
          completeBtn.innerHTML = '<i class="fas fa-check"></i>'
          completeBtn.classList.add("complete_btn");
          todoDiv.appendChild(completeBtn);

          //bin button
          const binBtn = document.createElement('button');
          binBtn.innerHTML = '<i class="fas fa-trash"></i>'
          binBtn.classList.add("bin_btn");
          todoDiv.appendChild(binBtn);

          //append to the list
          todoList.appendChild(todoDiv);
      });
  }



function removeLocalTodos(todo){
  let todos;
    if(localStorage.getItem("todos") === null){
      todos =[];  
    }else{
      todos = JSON.parse(localStorage.getItem("todos"));
    }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}