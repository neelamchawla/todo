import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const fbConfig = {
    apiKey: "AIzaSyAGBi3vs2DcgGb0ZeiMaHjiPP7tKmzhcLw",
    authDomain: "todolist-d0763.firebaseapp.com",
    databaseURL: "https://todolist-d0763.firebaseio.com",
    projectId: "todolist-d0763",
    storageBucket: "todolist-d0763.appspot.com",
    messagingSenderId: "944610203625",
    appId: "1:944610203625:web:938cbacb72e592436c1d78",
    measurementId: "G-ZWDVJ78E8D"
  };

firebase.initializeApp(fbConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export const firestore = firebase.firestore();

export default firebase;