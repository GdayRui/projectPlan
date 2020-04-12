import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB2d6bO7hyOJApGalvaa1s0ByO1H9oIUnY",
  authDomain: "project-plan-c4799.firebaseapp.com",
  databaseURL: "https://project-plan-c4799.firebaseio.com",
  projectId: "project-plan-c4799",
  storageBucket: "project-plan-c4799.appspot.com",
  messagingSenderId: "138596500531",
  appId: "1:138596500531:web:a90d78dd01b980e3534f46",
  measurementId: "G-KCQSSMLL64",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
