// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiwSHA0vYC6XuCvQPGIHwHeOyXVUTZcO0",
  authDomain: "testuser-1a4b4.firebaseapp.com",
  projectId: "testuser-1a4b4",
  storageBucket: "testuser-1a4b4.appspot.com",
  messagingSenderId: "716047392042",
  appId: "1:716047392042:web:cfbad243122d3a1384d253",
  measurementId: "G-FSC1VRFLF9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();