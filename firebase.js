import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBHaGYEIAVQfuUjBsk65CAeD4YXHAePblI",
    authDomain: "translator-app-1be99.firebaseapp.com",
    projectId: "translator-app-1be99",
    storageBucket: "translator-app-1be99.appspot.com",
    messagingSenderId: "235481478683",
    appId: "1:235481478683:web:59dd6d6b3d935c9276aabe"
  };

  firebase.initializeApp(config);

  export const db = firebase.firestore();
  
  export const auth = firebase.auth();
  