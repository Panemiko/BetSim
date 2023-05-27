import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyDSPdNxtnofFcbEUEjxlsuz2lvrcbevWpY",
  authDomain: "betsim-dev.firebaseapp.com",
  projectId: "betsim-dev",
  storageBucket: "betsim-dev.appspot.com",
  messagingSenderId: "893338885218",
  appId: "1:893338885218:web:5c5cf679fbbef00cd6c53b",
});

export const auth = getAuth();
export const db = getFirestore();
