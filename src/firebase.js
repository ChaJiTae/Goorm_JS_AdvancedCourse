import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2Igq3YrjLsF5lKBTrzY2NT4qfTTh8Um0",
  authDomain: "goormchat.firebaseapp.com",
  projectId: "goormchat",
  storageBucket: "goormchat.appspot.com",
  messagingSenderId: "919539470815",
  appId: "1:919539470815:web:935f4d7afb11c6d76bf46a",
  measurementId: "G-KLPFC7D7JX"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { firebase, auth, firestore, storage };