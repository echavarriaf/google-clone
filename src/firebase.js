// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIrWuoMLHIJqX48y39_5AA-X4fM3mhOfQ",
  authDomain: "clone-d95b3.firebaseapp.com",
  databaseURL: "https://clone-d95b3.firebaseio.com",
  projectId: "clone-d95b3",
  storageBucket: "clone-d95b3.appspot.com",
  messagingSenderId: "341196305710",
  appId: "1:341196305710:web:72ea66c59dc2cf0efeb6bf",
  measurementId: "G-YY08XJ7KGY",
};
const firebase = require("firebase");

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
