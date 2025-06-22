import { db } from './firebase-config.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

// 🎞 Animation function
function animateSlots() {
  [slot1, slot2, slot3].forEach(slot => {
    slot.classList.add('spin');
    setTimeout(() => {
      slot.classList.remove('spin');
    }, 1000);
  });
}

// 🔁 Listen for spin command from admin
onValue(ref(db, 'command'), (snapshot) => {
  const cmd = snapshot.val();
  if (cmd === 'spin') {
    slot1.textContent = "🎰";
    slot2.textContent = "🎰";
    slot3.textContent = "🎰";
    animateSlots();
  }
});

// ✅ Listen for result update from admin
onValue(ref(db, 'result'), (snapshot) => {
  const result = snapshot.val();
  if (result) {
    slot1.textContent = result.slot1;
    slot2.textContent = result.slot2;
    slot3.textContent = result.slot3;
    animateSlots();
  }
});