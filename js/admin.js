import { db }     from "./firebase-config.js";
import { ref, set } from
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

/* ── helpers ───────────────────────────────────────── */
const $ = id => document.getElementById(id);

function send(command) {
  set(ref(db, "command"), { ...command, ts: Date.now() });
}

/* ── button wires ─────────────────────────────────── */
$("#stopButton").addEventListener("click", () => {
  send({
    action: "stop",
    numbers: [
      parseInt($("#num1").value || 0),
      parseInt($("#num2").value || 0),
      parseInt($("#num3").value || 0)
    ]
  });
});

$("#spinButton").addEventListener("click", () => {
  send({ action: "spin" });
});
import { db } from './firebase-config.js';
import { ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// This function sends the "spin" command
window.sendSpin = function () {
  set(ref(db, 'command'), 'spin')
    .then(() => alert("✅ SPIN command sent"))
    .catch((err) => alert("❌ Error: " + err.message));
};