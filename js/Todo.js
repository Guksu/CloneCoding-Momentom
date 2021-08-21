const toDoForm = document.getElementById("todo-Form");
const toDoInput = document.querySelector("#todo-Form input");
const toDoList = document.getElementById("todo-List");
const TODOS_KEY = "todos";
let toDos = []; //이 변수가 const이면 아래의 코드로 인해 새로고침하면 toDos가 초기화된다.

function handleToDoSubmit() {
  event.preventDefault();
  const newTodo = toDoInput.value; //이 코드로 newTodo 변수를 만듦으로써 toDoInput값을 없애도 이전의 Input값은 newTodo로 남아있는다.
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //Date.now 는 지금 시간을 초단위 숫자로 알려주는 코드
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function paintToDo(newTodo) {
  const toDoli = document.createElement("li");
  toDoli.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo.text;
  button.innerText = "❌"; //이모지
  button.addEventListener("click", deleteToDo);
  toDoli.appendChild(span);
  toDoli.appendChild(button);
  toDoList.appendChild(toDoli);
}

//원하는 li만 삭제하기 위해 deleteToDo가 작동되는 target을 찾고 그 target의 parentElement를 찾는코드
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array를 JSON문자열로 바꿔주는 코드
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//아래의 코드 덕분에 새로고침해도 toDoLi가 유지됨
const savedToDos = localStorage.getItem(TODOS_KEY); //저장된 데이터를 array로 바꾸는 코드
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //parsedToDos의 array의 각각의 item을 실행시키는 코드//지금은 모든 item에 ()내용을 실행시키라는 뜻
}

//function 함수이름()={return (원하는 true)}
// [].filter()함수는 매개변수를 []만큼 실행시키는 코드 // 각각의 리턴값이 true인것만 출력하고 false는 버린다.
