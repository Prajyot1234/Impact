import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDy94l9zi8ZNL4gOZ3C213W-9LxbfZ40Ec",
    authDomain: "onlineassesment-ba228.firebaseapp.com",
    projectId: "onlineassesment-ba228",
    storageBucket: "onlineassesment-ba228.appspot.com",
    messagingSenderId: "616099235410",
    appId: "1:616099235410:web:fb4b6271e219095222418b"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app() ;
const db = app.firestore();

export default db;