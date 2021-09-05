const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoLi = document.getElementById("todoList");
const todoKey = "todoKey";
let todoArr = [];

function createTodo(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    id: Date.now(),
    text: todo,
  };
  todoArr.push(todoObj);
  addTodo(todoObj);
  localStorage.setItem(todoKey, JSON.stringify(todoArr));
}

function addTodo(todoObj) {
  const li = document.createElement("li");
  li.id = todoObj.id;
  const span = document.createElement("span");
  span.innerText = todoObj.text;
  const btn = document.createElement("button");
  btn.innerHTML = "❌";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  todoLi.appendChild(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoArr = todoArr.filter((todo) => todo.id !== parseInt(li.id));
  localStorage.setItem(todoKey, JSON.stringify(todoArr));
}

todoForm.addEventListener("submit", createTodo);

const getTodo = localStorage.getItem(todoKey);

if (getTodo !== null) {
  const parsedTodo = JSON.parse(getTodo);
  todoArr = parsedTodo;
  parsedTodo.forEach(addTodo);
}
