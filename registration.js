// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, set, ref, get } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA63JPR_aDdfXFRDcaShgSmczwvdDIL5zw",
  authDomain: "webproject-65316.firebaseapp.com",
  databaseURL: "https://webproject-65316-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webproject-65316",
  storageBucket: "webproject-65316.firebasestorage.app",
  messagingSenderId: "854978174033",
  appId: "1:854978174033:web:6ce725bb2c6f7fd651ac70"
};

// Initialize Firebase and make db and auth available globally
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

window.onload = function () {
  // Register Button Event Listener
  const registerButton = document.getElementById("registerButton");
  if (registerButton) {
    registerButton.addEventListener("click", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Please fill in both email and password fields.");
        return;
      }

      // Use sanitized email as the key in Firebase Database
      const sanitizedEmail = email.replace(/[@.]/g, '_');
      console.log("Sanitized email:", sanitizedEmail); // Debug: Check sanitized email

      // Register user with Firebase Authentication
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("Account created successfully!");

          // After successful registration, write additional user data to Firebase Database
          const username = document.getElementById('full_name').value;
          const age = document.getElementById('age').value;
          const phone = document.getElementById('phone').value;
          const location = document.getElementById('location').value;
          const companyname = document.getElementById('company_name').value;
          const skill = document.getElementById('skill').value;
          const salary = document.getElementById('salary').value;
          const experience = document.getElementById('experience').value;
          const services = document.getElementById('services').value;
          // const availability = document.getElementById('availability').value;
          // const relocate = document.getElementById('relocate').checked;
          const role = document.getElementById('role').value;

          // Save data to local storage
          localStorage.setItem('sanitizedEmail', sanitizedEmail);
          localStorage.setItem('fullName', username);
          localStorage.setItem('age', age);
          localStorage.setItem('phone', phone);
          localStorage.setItem('location', location);
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('companyname', companyname);
          localStorage.setItem('services', services);
          localStorage.setItem('skill', skill);
          localStorage.setItem('experience', experience);
          // localStorage.setItem('availability', availability);
          localStorage.setItem('role', role);
          // localStorage.setItem('relocate', relocate ? 'yes' : 'no');
          localStorage.setItem('rate',salary);
      
          console.log("Data saved to local storage."); // Debug

          // Redirect to home page
          window.location.href = "login.html";

          // Write user data to Firebase Database
          writeDataInDB(sanitizedEmail, username, email, password, age, phone, location, companyname, services, skill, salary, experience,  role);
        })
        .catch((error) => {
          console.error("Error:", error.message); // Debug
          alert(error.message);
        });
    });
  }
};

// Function to write user data to Firebase Database
function writeDataInDB(sanitizedEmail, username, email, password, age, phone, location, companyname, services, skill,salary, experience,  role) {
  set(ref(db, 'users/' + sanitizedEmail), {
    FullName: username,
    Email: email,
    Password: password,
    Age: age,
    Phone: phone,
    Location: location,
    CompanyName: companyname,
    Services: services,
    Skill: skill,
    salary:salary,
    Experience: experience,
    // Availability: availability,
    // Relocate: relocate,
    Role: role

  })
  .then(() => {
    console.log('Data saved successfully to the database'); // Debug
  })
  .catch((error) => {
    console.error("Error writing to DB:", error); // Debug
  });
}

// Function to read all user data from Firebase Database
function readData() {
  const userRef = ref(db, 'users');

  get(userRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          console.log(childSnapshot.val()); // Debug
        });
      } else {
        console.log("No data available"); // Debug
      }
    })
    .catch((error) => {
      console.error("Error reading data:", error); // Debug
    });
}

// Call readData function
readData();
