import firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyD4gACJdqgLwit6cipwg3x8jv9e38H40V0",
  authDomain: "bobsmesurvey-bd34c.firebaseapp.com",
  databaseURL: "https://bobsmesurvey-bd34c-default-rtdb.firebaseio.com",
  projectId: "bobsmesurvey-bd34c",
  storageBucket: "bobsmesurvey-bd34c.appspot.com",
  messagingSenderId: "449421906285",
  appId: "1:449421906285:web:b786b0767d6ad190c54a64",
  measurementId: "G-SH9YGNW7PV",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}
firebase.analytics();

export default firebase;
