import { db } from './firebase-config.js';
import { ref, set, remove } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const spinButton = document.getElementById("spinButton");
const stopButton = document.getElementById("stopButton");

spinButton.addEventListener("click", () => {
  set(ref(db, 'command'), 'spin')
    .then(() => remove(ref(db, 'result')))
    .then(() => alert("▶ Spinning started"))
    .catch(err => alert("❌ Error: " + err.message));
});

stopButton.addEventListener("click", () => {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("❗ Please enter valid numbers");
    return;
  }

  const result = {
    slot1: num1,
    slot2: num2,
    slot3: num3
  };

  set(ref(db, 'result'), result)
    .then(() => alert("🛑 Result set"))
    .catch(err => alert("❌ Error: " + err.message));
});