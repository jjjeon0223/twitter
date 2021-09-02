import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCgCB8CqTjoY4j8sJK-GEj-XzvB8WeA_Tc",
    authDomain: "twitter-8eff0.firebaseapp.com",
    projectId: "twitter-8eff0",
    storageBucket: "twitter-8eff0.appspot.com",
    messagingSenderId: "813490807972",
    appId: "1:813490807972:web:95cfa9b9832a66cfe7b231",
    measurementId: "G-LNPZCR8P5B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;