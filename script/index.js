
import { onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";




const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(user);

        // ...
    } else {
        console.log("User is signed out");

        // ...
    }
});
