require("firebase/firestore");
import firebase from "firebase";

    var firebaseConfig = {
        apiKey: "AIzaSyDWHQrasKoFv5Z01yiIFonmo57baMK-7wg",
        authDomain: "reactintroblog.firebaseapp.com",
        databaseURL: "https://reactintroblog.firebaseio.com",
        projectId: "reactintroblog",
        storageBucket: "reactintroblog.appspot.com",
        messagingSenderId: "291785331286",
        appId: "1:291785331286:web:c2a4fc9482052e72cda1f7"
    };
    firebase.initializeApp(firebaseConfig);

    var db= firebase.firestore();
    export const auth = firebase.auth();
    export const firestore  = firebase.firestore();
    export default db;