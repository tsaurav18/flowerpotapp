// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
import "firebase/firebase-auth";
const firebaseConfig = {
  apiKey: "AIzaSyBjrlBhdjui4_qvW4IKsTp_fj3X61LWYPk",
  authDomain: "potapp-d09d6.firebaseapp.com",
  databaseURL: "https://potapp-d09d6.firebaseio.com",
  projectId: "potapp-d09d6",
  storageBucket: "potapp-d09d6.appspot.com",
  messagingSenderId: "969443672817",
  appId: "1:969443672817:web:8a54332f49a2c920005f50",
  measurementId: "G-ZP2Y1826F0",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
// Create a root reference
const storageRef = firebase.storage();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, storageRef };
