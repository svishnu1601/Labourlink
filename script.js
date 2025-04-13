<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCRhNowE2mzzABQthb4aa3l7IaesobX2xE",
    authDomain: "contractorformapp.firebaseapp.com",
    databaseURL: "https://contractorformapp-default-rtdb.firebaseio.com",
    projectId: "contractorformapp",
    storageBucket: "contractorformapp.firebasestorage.app",
    messagingSenderId: "390437534121",
    appId: "1:390437534121:web:05153106247a8fa8c7ecb8"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Form submission event
document.getElementById("contractorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const contractorData = {
        name: document.getElementById("name").value,
        experience: document.getElementById("experience").value,
        specialization: document.getElementById("specialization").value,
        company: document.getElementById("company").value,
        location: document.getElementById("location").value,
        services: document.getElementById("services").value
    };

    database.ref('contractors').push(contractorData)
        .then(() = {
            alert("Data submitted successfully!");
            document.getElementById("contractorForm").reset();
        })
        .catch(error = console.error("Error saving data:", error));
});
</script>