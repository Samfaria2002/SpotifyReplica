import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCUODFNEfIwgsLWRDn3HlsoeTnY2d9JRTo",
    authDomain: "login-77993.firebaseapp.com",
    projectId: "login-77993",
    storageBucket: "login-77993.appspot.com",
    messagingSenderId: "901284254276",
    appId: "1:901284254276:web:3300988dd2a9fcb2e46211"
  };

const app = initializeApp(firebaseConfig);

export const auth = app.auth();