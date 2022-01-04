// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKMrlQm03mDmviZRngx2hGoRYE9y6SkaA",
  authDomain: "reactjs-coderhouse-bd748.firebaseapp.com",
  projectId: "reactjs-coderhouse-bd748",
  storageBucket: "reactjs-coderhouse-bd748.appspot.com",
  messagingSenderId: "288352496065",
  appId: "1:288352496065:web:8d1131a8bf5993cd7be740"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)