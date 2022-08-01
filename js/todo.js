const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  //toDoInput의 value를 바꿔도 newToDo라는 변수에 이미 값을 복사해 놨기 때문에 newToDo의 값은 변하지 않는다.
  //const newToDo=toDoInput.value 와 toDoInput.value="";의 위아래를 바꾸면 newToDo의 값에는 아무것도 들어가지 않는다.
}

toDoForm.addEventListener("submit", handleToDoSubmit);
