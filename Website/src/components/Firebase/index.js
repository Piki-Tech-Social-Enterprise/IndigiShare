import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBAKBGkx2QZcIoekXzjAWI8Dob2o9nxhfw",
  authDomain: "indigishare-platform.firebaseapp.com",
  databaseURL: "https://indigishare-platform.firebaseio.com",
  projectId: "indigishare-platform",
  storageBucket: "indigishare-platform.appspot.com",
  messagingSenderId: "945171900343",
  appId: "1:945171900343:web:6e71786ec3f2a0de776a32",
  measurementId: "G-WV9F9SGVBS"
};
const Firebase = {
  app: firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app,
  database: firebase.database()
};

export default Firebase;
