import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBV0ar4B-CjSUDLQ2xbPvnuomT2u9i7zeQ",
  authDomain: "messenger-app-d4e52.firebaseapp.com",
  projectId: "messenger-app-d4e52",
  storageBucket: "messenger-app-d4e52.appspot.com",
  messagingSenderId: "354308824567",
  appId: "1:354308824567:web:fd3c4d75e7a82649a522f2",
  measurementId: "G-7RYSVGRPDL",
});

const db = firebaseApp.firestore();

export default db;
