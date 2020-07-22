const firebase = require('firebase');
// Your web app's Firebase configuration
var firebaseConfig = {
    'ADD firebase config here'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.firestore();


module.exports = {
    database: database,
    firebase: firebase,
}
