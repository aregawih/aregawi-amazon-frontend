// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "clone-a5498.firebaseapp.com",
  projectId: "clone-a5498",
  storageBucket: "clone-a5498.appspot.com",
  messagingSenderId: "86263270621",
  appId: "1:86263270621:web:46b61841e351aa299fdf34",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
