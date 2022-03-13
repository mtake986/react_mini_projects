import {useState, useEffect} from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsjgHcNJ4esKkoapzj7ZR6FHc1EDoMwlY",
  authDomain: "loginout-cf0c4.firebaseapp.com",
  projectId: "loginout-cf0c4",
  storageBucket: "loginout-cf0c4.appspot.com",
  messagingSenderId: "683591956726",
  appId: "1:683591956726:web:2ad79e26f870f219db94d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout(){
  return signOut(auth);
}

// custom hook
export function useAuth(){
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub;
  }, [])
  return currentUser;
}
