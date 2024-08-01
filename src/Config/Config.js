import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBPK0-0cMz98zmXtBml4ioKBqE7dab1998",
    authDomain: "iahms-d0137.firebaseapp.com",
    projectId: "iahms-d0137",
    storageBucket: "iahms-d0137.appspot.com",
    messagingSenderId: "1059252237093",
    appId: "1:1059252237093:web:df27e9e9dd2acecf96a0cc",
    measurementId: "G-H0CJJRVMYH"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
