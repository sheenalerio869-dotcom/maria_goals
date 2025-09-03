import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBrModTcPAO4AztgmVahhqfvLpv8TP3J1I",
  authDomain: "maria-goals.firebaseapp.com",
  projectId: "maria-goals",
  storageBucket: "maria-goals.firebasestorage.app",
  messagingSenderId: "843079989093",
  appId: "1:843079989093:web:ebde9707051f2bc49e938c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)