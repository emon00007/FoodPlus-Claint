// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqR6--pz3Yx02ogAhdUHE1Z6XGDFCP26s",
  authDomain: "food-share-plus.firebaseapp.com",
  projectId: "food-share-plus",
  storageBucket: "food-share-plus.appspot.com",
  messagingSenderId: "911312522553",
  appId: "1:911312522553:web:3ce3f46ca2128e61a56ce8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app