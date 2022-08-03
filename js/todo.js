const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("list", JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  //addEventListenr를 사용할 때 event인자를 넣게 되면 event인자에 많은 정보가 담겨있다. 이 function은 click을 받아왔기 때문에 click된 위치 정보도 받아올 수 있다.
  //console.log(event);
  //console.dir(event.target);
  const li = event.target.parentElement;
  //const li = event.path[1]; 위에 줄이랑 같은기능.. 왜 위에껄로 썻을지? 댓글확인!
  li.remove();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  //toDoInput의 value를 바꿔도 newToDo라는 변수에 이미 값을 복사해 놨기 때문에 newToDo의 값은 변하지 않는다.
  //const newToDo=toDoInput.value 와 toDoInput.value="";의 위아래를 바꾸면 newToDo의 값에는 아무것도 들어가지 않는다.
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
