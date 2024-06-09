import { db } from "./firebase.js"
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

export const agregarUsuario = async(documento)=>{
    const docRef = await addDoc(collection(db, "usuario"),documento)
};