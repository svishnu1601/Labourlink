// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA63JPR_aDdfXFRDcaShgSmczwvdDIL5zw",
  authDomain: "webproject-65316.firebaseapp.com",
  projectId: "webproject-65316",
  storageBucket: "webproject-65316.firebasestorage.app",
  messagingSenderId: "854978174033",
  appId: "1:854978174033:web:6ce725bb2c6f7fd651ac70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const submit = document.getElementById("loginButton");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Sanitize email to create a valid Firebase key
  const sanitizedEmail = email.replace(/[@.]/g, '_');
  console.log("Sanitized email:", sanitizedEmail); // Debug: Check sanitized email

  // Save sanitized email to local storage
  localStorage.setItem('sanitizedEmail', sanitizedEmail);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successful sign-in
      const user = userCredential.user;

      // Redirect to homepage
      window.location.href = "profile.html";
    })
    .catch((error) => {
      // Display error message
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// Logic for "Forgot Password" link
document.getElementById("forgot-password-link").addEventListener("click", function(event) {
  event.preventDefault();
  
  const email = prompt("Please enter your email address to reset your password:");

  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent. Please check your inbox.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Error: " + errorMessage);
      });
  }
});
