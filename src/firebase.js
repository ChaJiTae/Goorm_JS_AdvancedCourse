import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2Igq3YrjLsF5lKBTrzY2NT4qfTTh8Um0",
  authDomain: "goormchat.firebaseapp.com",
  projectId: "goormchat",
  storageBucket: "goormchat.appspot.com",
  messagingSenderId: "919539470815",
  appId: "1:919539470815:web:935f4d7afb11c6d76bf46a",
  measurementId: "G-KLPFC7D7JX"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export default firebase;