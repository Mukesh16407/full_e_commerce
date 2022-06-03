import * as firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDhpS8oR-SxHADxSydLEoyF-170l3jpQS4",
    authDomain: "e-commerce-cd6d2.firebaseapp.com",
    projectId: "e-commerce-cd6d2",
    storageBucket: "e-commerce-cd6d2.appspot.com",
    messagingSenderId: "145105046317",
    appId: "1:145105046317:web:39ab385ad51088bc96a1a4",
    measurementId: "G-DVNTJVL3J9"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth =firebase.auth();
export const googleAuthProvider = new firebase.auth.googleAuthProvider();