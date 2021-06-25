import firebase from "firebase/app";
import 'firebase/database';
import {
  isBoolean,
  isNumber
} from "../Utilities";

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
const app = firebase.apps.length === 0
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app;
const database = firebase.database();
const {
  REACT_APP_USE_EMULATOR,
  REACT_APP_DTB_PORT
} = process.env;
if (isBoolean(REACT_APP_USE_EMULATOR, true) && isNumber(REACT_APP_DTB_PORT)) { // && this.db._delegate._repoInternal.repoInfo_._host !== `localhost:${REACT_APP_DTB_PORT}`) {
  database.useEmulator('localhost', Number(REACT_APP_DTB_PORT));
  console.log(`Firebase.database.useEmulator is set to: 'localhost:${REACT_APP_DTB_PORT}'`);
}
const Firebase = {
  app,
  database
};

export default Firebase;
