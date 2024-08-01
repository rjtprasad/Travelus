// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq9Jb6hYCBHLSYeBUZ5p5yPz6AGYVx-m0",
  authDomain: "ai-trip-planner-23-07-24.firebaseapp.com",
  projectId: "ai-trip-planner-23-07-24",
  storageBucket: "ai-trip-planner-23-07-24.appspot.com",
  messagingSenderId: "893209133765",
  appId: "1:893209133765:web:a48d70760b63c9aba566ac",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
