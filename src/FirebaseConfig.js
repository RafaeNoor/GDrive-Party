const firebase = require('firebase');
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2gQiDqYeglOrkvf-AOYM_3lkVo1KV4rE",
    authDomain: "gdrive-party.firebaseapp.com",
    databaseURL: "https://gdrive-party.firebaseio.com",
    projectId: "gdrive-party",
    storageBucket: "gdrive-party.appspot.com",
    messagingSenderId: "972384825776",
    appId: "1:972384825776:web:4d86471ac1053eafa8a675",
    measurementId: "G-TESCYMBQ9Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.firestore();


module.exports = {
    database: database,
    firebase: firebase,
}
