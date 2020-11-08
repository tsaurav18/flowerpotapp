// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC2WSd5kFu_1oYWgh63oQpPep0-s95uIJ0",
  authDomain: "flowerpotapp-33349.firebaseapp.com",
  databaseURL: "https://flowerpotapp-33349.firebaseio.com",
  projectId: "flowerpotapp-33349",
  storageBucket: "flowerpotapp-33349.appspot.com",
  messagingSenderId: "638592007258",
  appId: "1:638592007258:web:0d0555c5774fade531ec63",
  measurementId: "G-RXDSQRZEYH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
