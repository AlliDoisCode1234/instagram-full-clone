import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtgmpxUpycc3GuSo5f3gHEDOuQaRAB-8g",
    authDomain: "instagram-full-clone.firebaseapp.com",
    projectId: "instagram-full-clone",
    storageBucket: "instagram-full-clone.appspot.com",
    messagingSenderId: "185699808585",
    appId: "1:185699808585:web:4aff5e365d240ba78d9698"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db