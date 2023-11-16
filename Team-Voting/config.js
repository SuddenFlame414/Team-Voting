import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCvrAawF98J5Vd4jpK814NW7bLcxkNSRJo",
    authDomain: "team-voting-8f0e2.firebaseapp.com",
    projectId: "team-voting-8f0e2",
    storageBucket: "team-voting-8f0e2.appspot.com",
    messagingSenderId: "723445766654",
    appId: "1:723445766654:web:ee39cbb0dffee8c6c788af"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();