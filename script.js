// ✅ Firebase SDK ko Import Karna
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

// ✅ Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCm7N4WTGDSDkMS5J9fb2P14C-ZQBQQO3k",
    authDomain: "testwebsite-9f9c6.firebaseapp.com",
    databaseURL: "https://testwebsite-9f9c6-default-rtdb.firebaseio.com", // ✅ Make sure this is correct
    projectId: "testwebsite-9f9c6",
    storageBucket: "testwebsite-9f9c6.appspot.com",
    messagingSenderId: "17560662213",
    appId: "1:17560662213:web:a18446e9456914f551c0ac"
};

// ✅ Firebase Initialize Karna
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ✅ Contact Form Submit Handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Form submit hone se rokta hai

    // ✅ Input Values Get Karna
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let message = document.getElementById("message").value;

    // ✅ Data Validation
    if (name && email && contact && message) {
        let contactRef = ref(db, "contacts"); // "contacts" node me data store hoga

        let newContact = push(contactRef); // ✅ Push new data
        set(newContact, {
            name: name,
            email: email,
            contact: contact,
            message: message
        }).then(() => {
            alert("✅ Thank you, " + name + "! Your message has been sent.");
            document.getElementById("contactForm").reset(); // Form Reset
        }).catch((error) => {
            alert("❌ Error: " + error.message);
            console.error(error); // ✅ Debugging ke liye console me error show karega
        });
    } else {
        alert("⚠️ Please fill in all fields.");
    }
});