// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpetbeskWEHgdcXATKG7DoaQDamHdcfCc",
  authDomain: "advent-portal-78578.firebaseapp.com",
  projectId: "advent-portal-78578",
  storageBucket: "advent-portal-78578.firebasestorage.app",
  messagingSenderId: "555672095080",
  appId: "1:555672095080:web:39cd864ecfd70beb9eeedd",
  measurementId: "G-40KEMQXSFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);