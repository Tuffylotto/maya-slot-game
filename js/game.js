import { db }           from "./firebase-config.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const slots = [
  document.getElementById("slot1"),
  document.getElementById("slot2"),
  document.getElementById("slot3")
];

let intervals = [];

/* ── fast spin ────────────────────────────────────── */
function spinSlots() {
  intervals.forEach(clearInterval);
  intervals = slots.map(slot =>
    setInterval(() => {
      slot.textContent = Math.floor(Math.random() * 10);
    }, 100)
  );
}

/* ── slow down for a dramatic stop ─────────────────── */
function gradualStop(index, number, delay) {
  setTimeout(() => {
    clearInterval(intervals[index]);

    let steps = 10, speed = 100;
    (function slow() {
      if (steps-- > 0) {
        slots[index].textContent = Math.floor(Math.random() * 10);
        speed += 50;
        setTimeout(slow, speed);
      } else {
        slots[index].textContent = number;
      }
    })();
  }, delay);
}

/* ── start immediately ────────────────────────────── */
spinSlots();

/* ── listen to admin commands in real time ────────── */
onValue(ref(db, "command"), snap => {
  const cmd = snap.val();
  if (!cmd) return;

  if (cmd.action === "spin") {
    spinSlots();
  } else if (cmd.action === "stop") {
    const [a, b, c] = cmd.numbers;
    gradualStop(2, c, 0);      // right
    gradualStop(1, b, 3000);   // middle 3 s later
    gradualStop(0, a, 6000);   // left   6 s later
  }
});
