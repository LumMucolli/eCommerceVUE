import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBstkWLcw4JUQ_64tg_Mdd_qdG0CHCNYQ",
  authDomain: "ecommerce-36385.firebaseapp.com",
  projectId: "ecommerce-36385",
  storageBucket: "ecommerce-36385.appspot.com",
  messagingSenderId: "121028158746",
  appId: "1:121028158746:web:199c2893cc5af1cd6038a3",
  measurementId: "G-0LDK545J0Z"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { firebase, auth };
