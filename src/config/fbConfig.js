import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDUyq8Gw9I3jETCvkEoLOqmy2Ko3u8xHOI",
  authDomain: "testplan-2d732.firebaseapp.com",
  databaseURL: "https://testplan-2d732.firebaseio.com",
  projectId: "testplan-2d732",
  storageBucket: "testplan-2d732.appspot.com",
  messagingSenderId: "412213629097",
  appId: "1:412213629097:web:ea50ccf63cfbdcb1db99b8",
  measurementId: "G-FN2YWBZR4T",
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
