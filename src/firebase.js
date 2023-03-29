import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Igq3YrjLsF5lKBTrzY2NT4qfTTh8Um0",
  authDomain: "goormchat.firebaseapp.com",
  projectId: "goormchat",
  storageBucket: "goormchat.appspot.com",
  messagingSenderId: "919539470815",
  appId: "1:919539470815:web:935f4d7afb11c6d76bf46a",
  measurementId: "G-KLPFC7D7JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default firebase;