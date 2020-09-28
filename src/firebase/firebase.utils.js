import firebase from 'firebase/app';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyAnW5rHXro-P6ytxvqmJrq3-PUaTxApSbo",
    authDomain: "crud-c0329.firebaseapp.com",
    databaseURL: "https://crud-c0329.firebaseio.com",
    projectId: "crud-c0329",
    storageBucket: "crud-c0329.appspot.com",
    messagingSenderId: "927566504025",
    appId: "1:927566504025:web:4cb00da68d478c9e915148",
    measurementId: "G-H6MBW3RTGX"    
}
firebase.initializeApp(config);
export const database = firebase.database().ref('/notes');