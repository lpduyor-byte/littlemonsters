import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD51VOdW1eVI18Qi3k_NMoxX5ETsbAbSVo",
  authDomain: "little-monsters-fan-system.firebaseapp.com",
  projectId: "little-monsters-fan-system",
  storageBucket: "little-monsters-fan-system.firebasestorage.app",
  messagingSenderId: "409001311530",
  appId: "1:409001311530:web:911906835d0f8c8355b253",
  measurementId: "G-M0TFP2TE5P"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);