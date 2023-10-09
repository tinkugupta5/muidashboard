// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_0knDayzFI2v3PAPwBJwc2S27v9V4o9o",
  authDomain: "react-firebase-48f4e.firebaseapp.com",
  projectId: "react-firebase-48f4e",
  storageBucket: "react-firebase-48f4e.appspot.com",
  messagingSenderId: "378996971062",
  appId: "1:378996971062:web:5e43ea2887aa791bbd2a97",
  measurementId: "G-99PF2MTDF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);