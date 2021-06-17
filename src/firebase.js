import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBm7w30LjjFMS4qnUJwn4cuAoN5jhSctrA",
    authDomain: "kristineweaver-portfolio.firebaseapp.com",
    projectId: "kristineweaver-portfolio",
    storageBucket: "kristineweaver-portfolio.appspot.com",
    messagingSenderId: "693234165180",
    appId: "1:693234165180:web:5d4f6593905d84e0ec37b9",
    measurementId: "G-2R2BXG2YS1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();