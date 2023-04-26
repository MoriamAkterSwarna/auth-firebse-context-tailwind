// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDrfXjOV5uACzFqWqRZW26YeS_sWoNEC0",
  authDomain: "auth-firebase-context-ta-1fa1a.firebaseapp.com",
  projectId: "auth-firebase-context-ta-1fa1a",
  storageBucket: "auth-firebase-context-ta-1fa1a.appspot.com",
  messagingSenderId: "458257760232",
  appId: "1:458257760232:web:6d5cf6bb08a05af64f2e5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app