// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "portfolio-f0b9f.firebaseapp.com",
  projectId: "portfolio-f0b9f",
  storageBucket: "portfolio-f0b9f.appspot.com",
  messagingSenderId: "958194215843",
  appId: "1:958194215843:web:457cb1ca021dd20d3b0816",
  measurementId: "G-RXBNQB63YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}