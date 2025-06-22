import { db } from './firebase-config.js';
import { ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Get button elements
const stopButton = document.getElementById("stopButton");
const spinButton = document.getElementById("spinButton");

// 🚦 Stop/Set button: sends result to Firebase
stopButton.addEventListener("click", () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const num3 = document.getElementById("num3").value;

  if (num1 === "" || num2 === "" || num3 === "") {
    alert("❗ Please enter all 3 slot numbers");
    return;
  }

  const result = {
    slot1: parseInt(num1),
    slot2: parseInt(num2),
    slot3: parseInt(num3)
  };

  set(ref(db, 'result'), result)
    .then(() => alert("✅ Slots set successfully"))
    .catch(err => alert("❌ Error: " + err.message));
});

// ▶ Spin button: tells game to keep spinning
spinButton.addEventListener("click", () => {
  set(ref(db, 'command'), 'spin')
    .then(() => alert("▶ Spin started"))
    .catch(err => alert("❌ Error: " + err.message));
});