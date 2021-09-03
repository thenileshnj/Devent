// import * as firebase from "firebase";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC4JMi0BOyzXUeBFk-bzqkwAjQ7Txe2_2s",
  authDomain: "devent-nj.firebaseapp.com",
  databaseURL: "https://devent-nj-default-rtdb.firebaseio.com",
  projectId: "devent-nj",
  storageBucket: "devent-nj.appspot.com",
  messagingSenderId: "876207691504",
  appId: "1:876207691504:web:b38c10f018a95366e71435"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };