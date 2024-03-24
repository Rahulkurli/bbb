// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5vrxqte4k3wW9yxeBTxRjNoINnSYAmkA",
  authDomain: "player-f9849.firebaseapp.com",
  databaseURL: "https://player-f9849-default-rtdb.firebaseio.com",
  projectId: "player-f9849",
  storageBucket: "player-f9849.appspot.com",
  messagingSenderId: "431281719735",
  appId: "1:431281719735:web:cee31890923c854f9f0032",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db, app };
