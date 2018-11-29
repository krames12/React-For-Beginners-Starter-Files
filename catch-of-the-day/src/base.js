import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA7esmMRcDsQfALAOL75KNvsACmP7Fz7eE",
  authDomain: "catch-of-the-day-nick-kramer.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-nick-kramer.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
