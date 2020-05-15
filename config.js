import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBCDOtGCzevY56V8qhRRylYESsdNYlszC8",
    authDomain: "booksantaapp.firebaseapp.com",
    databaseURL: "https://booksantaapp.firebaseio.com",
    projectId: "booksantaapp",
    storageBucket: "booksantaapp.appspot.com",
    messagingSenderId: "253290114705",
    appId: "1:253290114705:web:c061a0c8101853a8179930",
    measurementId: "G-5TB7MSE5V2"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();