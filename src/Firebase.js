import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  //copy from my config propery of firebase
  apiKey: "AIzaSyDB0MmhxAA7xs_sTWJU3_XklHwWTie4GTk",
  authDomain: "clone-f187b.firebaseapp.com",
  databaseURL: "https://clone-f187b.firebaseio.com",
  projectId: "clone-f187b",
  storageBucket: "clone-f187b.appspot.com",
  messagingSenderId: "422854658142",
  appId: "1:422854658142:web:de1f959cbb7f902b9f8ccf",
  measurementId: "G-6GXT4MTC1M",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
