// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKZEm0WIRZz8R3H8PHY2atHS0QIUCe2ko",
  authDomain: "coffee-store-31776.firebaseapp.com",
  projectId: "coffee-store-31776",
  storageBucket: "coffee-store-31776.firebasestorage.app",
  messagingSenderId: "670137622449",
  appId: "1:670137622449:web:b7cf8576a7dc860deca790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;