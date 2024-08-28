// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "your api key here",
  authDomain: "your authDomain here",
  projectId: "your projectId here",
  storageBucket: "your storageBucket here",
  messagingSenderId: "messagingSenderId",
  appId: "your appId here",
  measurementId: "your measurementId here"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { app, auth, db};