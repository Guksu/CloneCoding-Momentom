const loginForm=document.querySelector("#Login-form");
const loginInput=document.querySelector("#Login-form Input");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    localStorage.setItem("USERNAME_KEY", userName);  //("key값", value값)
    greetingPlus(userName);
}
function greetingPlus(username){
    //greeting.innerText= "Hello "+ userName;
    greeting.innerText= `Hello ${username}`;  
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const LSuserNAme= localStorage.getItem("USERNAME_KEY");

if(LSuserNAme === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    greetingPlus(LSuserNAme);
}