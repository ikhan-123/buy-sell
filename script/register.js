import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";
// import { log } from "console";



const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const myFiles = document.querySelector("#files");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);
    console.log(myFiles.files[0]);


    createUserWithEmailAndPassword(auth, email.value, password.value)

        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = "login.html"


        })
        .catch((error) => {
            const errorMessage = error.message;

        });


})