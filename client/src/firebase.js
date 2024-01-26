// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propert-ease-7d721.firebaseapp.com",
  projectId: "propert-ease-7d721",
  storageBucket: "propert-ease-7d721.appspot.com",
  messagingSenderId: "574466465777",
  appId: "1:574466465777:web:34eea774a35db889906e50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);