import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwZVKm7ymhEdJhaTmBDBuAJoetUf9F3v4",
  authDomain: "weather-forecast-app-a3ab6.firebaseapp.com",
  projectId: "weather-forecast-app-a3ab6",
  storageBucket: "weather-forecast-app-a3ab6.appspot.com",
  messagingSenderId: "1069328843792",
  appId: "1:1069328843792:web:925fc67c284c99095df695",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();
const database = getDatabase(app);

export { auth, firestore, database };
