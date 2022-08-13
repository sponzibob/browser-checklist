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
  paintGreeting(typedUserName);
  localStorage.setItem(USERNAME_KEY, typedUserName);
  //greeting.innerText = "Hello " + username; 이것은 `Hello ${username}`; 과 같은 결과를 나타낸다. python의 f{}와 같음.
}

function paintGreeting(username) {
  const date = new Date();
  const hours = date.getHours();
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  if (savedUsername === null) {
    if (hours <= 6) {
      greeting.innerText = `Good night, ${username}`;
    } else if (hours <= 12) {
      greeting.innerText = `Good morning, ${username}`;
    } else if (hours <= 18) {
      greeting.innerText = `Good afternoon, ${username}`;
    } else {
      greeting.innerText = `Good evening, ${username}`;
    }
  } else {
    if (hours <= 6) {
      greeting.innerText = `Good night, ${savedUsername}`;
    } else if (hours <= 12) {
      greeting.innerText = `Good morning, ${savedUsername}`;
    } else if (hours <= 18) {
      greeting.innerText = `Good afternoon, ${savedUsername}`;
    } else {
      greeting.innerText = `Good evening, ${savedUsername}`;
    }
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(savedUsername);
}

function reloadBrowser() {
  if (savedUsername === null) {
    location.reload(true);
  }
}
setInterval(reloadBrowser, 60000);
setInterval(paintGreeting, 60000);
