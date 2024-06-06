import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import { firebaseConfig } from "./credenciales";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)