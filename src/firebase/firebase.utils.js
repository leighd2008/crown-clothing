import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_kIgwerQzHeeXKt0P_XepMmqISA3XEZA",
  authDomain: "crown-db-7569b.firebaseapp.com",
  databaseURL: "https://crown-db-7569b.firebaseio.com",
  projectId: "crown-db-7569b",
  storageBucket: "",
  messagingSenderId: "664179507379",
  appId: "1:664179507379:web:b8ee2d0a7d5569de"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
