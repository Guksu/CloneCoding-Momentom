const login = document.getElementById("loginForm");
const loginInput = document.querySelector("#loginForm input");
const userName = document.getElementById("inputName");
const userKey = "username";

function submitName(event) {
  event.preventDefault();
  login.classList.add("hidden");
  localStorage.setItem(userKey, loginInput.value);
  showUserName();
}
function showUserName() {
  userName.innerText = `Hello ${localStorage.getItem(userKey)}`;
  userName.classList.remove("hidden");
}
if (localStorage.getItem(userKey) === null) {
  login.classList.remove("hidden");
  login.addEventListener("submit", submitName);
} else {
  showUserName();
}
