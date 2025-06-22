import { db } from './firebase-config.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

let spinInterval = null;

// 🎰 Start spinning random numbers
function startSpinning() {
  if (spinInterval) return; // already spinning

  spinInterval = setInterval(() => {
    slot1.textContent = Math.floor(Math.random() * 10);
    slot2.textContent = Math.floor(Math.random() * 10);
    slot3.textContent = Math.floor(Math.random() * 10);
  }, 100); // change every 100ms
}

// 🛑 Stop spinning and show result from Firebase
function stopSpinningAndShowResult(result) {
  clearInterval(spinInterval);
  spinInterval = null;

  slot1.textContent = result.slot1;
  slot2.textContent = result.slot2;
  slot3.textContent = result.slot3;
}

// 🔁 Listen for "spin" command
onValue(ref(db, 'command'), (snapshot) => {
  const cmd = snapshot.val();
  if (cmd === 'spin') {
    startSpinning(); // Start spinning
  }
});

// ✅ Listen for "result" values
onValue(ref(db, 'result'), (snapshot) => {
  const result = snapshot.val();
  if (result) {
    stopSpinningAndShowResult(result); // Stop and show result
  }
});