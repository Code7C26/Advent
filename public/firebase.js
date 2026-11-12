
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDpetbeskWEHgdcXATKG7DoaQDamHdcfCc",
    authDomain: "advent-portal-78578.firebaseapp.com",
    projectId: "advent-portal-78578",
    storageBucket: "advent-portal-78578.firebasestorage.app",
    messagingSenderId: "555672095080",
    appId: "1:555672095080:web:39cd864ecfd70beb9eeedd",
    measurementId: "G-40KEMQXSFM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
