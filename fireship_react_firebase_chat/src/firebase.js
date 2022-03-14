import { useState, useEffect } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
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
const storage = getStorage();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub;
  }, [])
  return currentUser;
}

// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);

  // get the photo's url from fileRef and set it to currentUser's picture
  const photoURL = await getDownloadURL(fileRef);
  updateProfile(currentUser, {photoURL})

  setLoading(false);
  alert('uploaded file!!')
}
// async becasue we are dealing with an api call