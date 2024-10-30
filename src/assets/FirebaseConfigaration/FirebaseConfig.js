// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyALS5lCmWEWFHYztJqhgmRhKKvFt_k3cTw",
  authDomain: "fir-gallery-8b0bc.firebaseapp.com",
  projectId: "fir-gallery-8b0bc",
  storageBucket: "fir-gallery-8b0bc.appspot.com",
  messagingSenderId: "435133834488",
  appId: "1:435133834488:web:ea2cc23f34059c5910c70d",
  measurementId: "G-HLPSL38KLE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

console.log("firebase");
