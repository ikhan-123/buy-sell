import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBPn_ub7hu7UC1BjUx81MeFwxUs_5-0dkU",
    authDomain: "buy--sell-a0694.firebaseapp.com",
    projectId: "buy--sell-a0694",
    storageBucket: "buy--sell-a0694.appspot.com",
    messagingSenderId: "449176735405",
    appId: "1:449176735405:web:fe84f8600ffe8ab0eac024",
    measurementId: "G-3YX1ZTJ65D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  