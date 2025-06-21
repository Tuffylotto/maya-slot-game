// Firebase v10 (modular) SDK
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// 🔴  PASTE YOUR OWN CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyAV-3T98ZzM4v2XtnArYhv1qlGIRfmhs8w",
  authDomain: "maya-slot-game-69f55.firebaseapp.com",
  databaseURL: "https://maya-slot-game-69f55-default-rtdb.firebaseio.com",
  projectId: "maya-slot-game-69f55",
  storageBucket: "maya-slot-game-69f55.firebasestorage.app",
  messagingSenderId: "805034138677",
  appId: "1:805034138677:web:053209d9f3f11bf77ae57c",
  measurementId: "G-HJWJ08NES2"
};

export const app = initializeApp(firebaseConfig);
export const db  = getDatabase(app);
