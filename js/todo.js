const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOLIST_KEY = "todoList";
let toDos = [];

function saveToDos() {
  localStorage.setItem(`${TODOLIST_KEY}`, JSON.stringify(toDos));
}
function deleteToDo(event) {
  //addEventListenr를 사용할 때 event인자를 넣게 되면 event인자에 많은 정보가 담겨있다. 이 function은 click을 받아왔기 때문에 click된 위치 정보도 받아올 수 있다.
  //console.log(event);
  //console.dir(event.target);
  const li = event.target.parentElement;
  const listLabelTx = event.target.previousElementSibling.innerText;
  //const li = event.path[1]; 위에 줄이랑 같은기능.. 왜 위에껄로 썻을지? -> by. nico 나중에 코드를 볼때 parentElement를 사용하는게 더 직관적으로 보기 쉽기 때문.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id를 console.log 찍어보면 string으로 나오고 toDo.id는 int이기 때문에 둘은 무조건 달라서 true가 나오게 된다. 따라서 string을 int로 바꿔야 한다.
  saveToDos();
  li.remove();
  localStorage.removeItem(listLabelTx);
}

function listLineThrough(event) {
  console.dir(event);
  if (event.path[0] === "input") {
    const listSpan = event.target;
    const checkStatus = event.target.previousElementSibling.checked;
    if (checkStatus) {
      ifChecked(listSpan);
    } else {
      ifUnchecked(listSpan);
    }
  } else {
    const listSpan = event.target.nextElementSibling;
    const checkStatus = event.target.checked;
    if (checkStatus) {
      ifChecked(listSpan);
    } else {
      ifUnchecked(listSpan);
    }
  }
}
function ifChecked(span) {
  const spanTx = span.innerText;
  span.style.textDecoration = "line-through";
  span.style.color = "grey";
  localStorage.setItem(spanTx, 1);
}
function ifUnchecked(span) {
  const spanTx = span.innerText;
  span.style.textDecoration = "none";
  span.style.color = "white";
  localStorage.removeItem(spanTx);
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const label = document.createElement("label");
  label.classList.add("checkBox");
  const input = document.createElement("input");
  input.type = "checkbox";
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "ⓧ";
  label.appendChild(input);
  label.appendChild(span);
  li.appendChild(label);
  li.appendChild(button);
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(li);
  const listCheckBox = document.querySelectorAll(".checkBox");
  listCheckBox.forEach((check) =>
    check.addEventListener("click", listLineThrough)
  );
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  //toDoInput의 value를 바꿔도 newToDo라는 변수에 이미 값을 복사해 놨기 때문에 newToDo의 값은 변하지 않는다.
  //const newToDo=toDoInput.value 와 toDoInput.value="";의 위아래를 바꾸면 newToDo의 값에는 아무것도 들어가지 않는다.
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOLIST_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

const checkBox = document.querySelectorAll(".checkBox");
for (i = 0; i < checkBox.length; i++) {
  const checkBoxSpan = checkBox[i].children[1];
  const checkBoxTx = checkBoxSpan.innerText;
  const checkBoxCheck = checkBox[i].children[0];
  const savedChecked = localStorage.getItem(checkBoxTx);
  if (savedChecked == 1) {
    checkBoxCheck.checked = "true";
    ifChecked(checkBoxSpan);
  }
}
