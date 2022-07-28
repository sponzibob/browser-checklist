const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// string만 저장하는 변수는 대문자로 작성하는 것이 관례이다.

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const typedUserName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, typedUserName);
  //greeting.innerText = "Hello " + username; 이것은 `Hello ${username}`; 과 같은 결과를 나타낸다. python의 f{}와 같음.
  paintGreeting(typedUserName);
}

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(savedUsername);
}
