// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaeKKaTKQkUUwrhYSYqr99A3Hm3kTl1sc",
  authDomain: "super-chefs-bd.firebaseapp.com",
  projectId: "super-chefs-bd",
  storageBucket: "super-chefs-bd.appspot.com",
  messagingSenderId: "231261689281",
  appId: "1:231261689281:web:e64c7fb9ccd0e7a9404b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;