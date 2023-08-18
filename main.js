// random username and password genaretor
const comUsername = document.getElementById("com-username");
const comPassword = document.getElementById("com-password");
let user_name = document.getElementById("user-name");
let user_pass = document.getElementById("user-pass");
let mess = document.querySelector("#mess");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmopqrstuvwxyz"
const number = "0123456789";
const symbole = "!@#$%^&*()";

const USname = upperCase + lowerCase;
function genUsername(){
    let lenght = 8;
    var username = "@";
    username += upperCase[Math.floor(Math.random() * upperCase.length)];
    username += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    while(lenght > username.length){
        username += USname[Math.floor(Math.random() * USname.length)]
    }
    comUsername.value = username;
}

const allChar = upperCase + lowerCase + number + symbole;
function genPassword(){
    let lenght = 6;
    var password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbole[Math.floor(Math.random() * symbole.length)];

    while(lenght > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }

    comPassword.value = password;
}




// Hacker screen and out of hack
function HackScreen(){
    document.querySelector(".hack-screen").style.display = "flex"

    let name = prompt("Username");
    let a = [
        "Initializing Hackin tool",
        "Connecting to Facebook",
        "Connecting to server 1",
        "Connecting faild !!!",
        "Retrying...",
        "Connecting to server 2",
        "Connecting Successfully...",
        `Username : ${name}`,
        "Trying Brute Force",
        "Anothoer 200K passwords tried...",
        "Match not found",
        "Another 200k passwords tried...",
        "Match found",
        "Accessing Account",
        "Mack Successful"
    ]

    let b = document.getElementById("screen");

    const Sleep = async (seconds) => {
        return new Promise((reslove, reject) => {
            setTimeout(() => { reslove(true) }, seconds * 1000)
        })
    }

    const showHack = async (message) => {
        await Sleep(2);
        // console.log(message);
        b.innerHTML = b.innerHTML + message + "<br>";
    }

    (async () => {
        for (let i = 0; i <= a.length - 1; i++) {
            await showHack(a[i]);
        }
    })()
}


document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".hack-screen").style.display = "none"

    // document.getElementById("screen").clear();
    // b.innerHTML = "";

})

// check the username and password is curect or not
function check(){
    if(user_name.value == '' && user_pass.value == ''){
        mess.innerHTML = "Please enter your username and password";
    }else if((user_name.value == comUsername.value) && (user_pass.value == comPassword.value)){
        HackScreen();
    }else if((user_name.value != comUsername.value) && (user_pass.value != comPassword.value)){
        mess.innerHTML = "Username & Password not match";
    }else if((user_name.value != comUsername.value) && (user_pass.value == comPassword.value)){
        mess.innerHTML = "Username is not match";
    }else if((user_name.value == comUsername.value) && (user_pass.value != comPassword.value)){
        mess.innerHTML = "Password is not match";
    }
}






