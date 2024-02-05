import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAEJ7fUwK5o7XPwe9yGxuYemteZKDYAB-g",
  authDomain: "schemes-made-easy-42044.firebaseapp.com",
  databaseURL: "https://schemes-made-easy-42044-default-rtdb.firebaseio.com",
  projectId: "schemes-made-easy-42044",
  storageBucket: "schemes-made-easy-42044.appspot.com",
  messagingSenderId: "591508506173",
  appId: "1:591508506173:web:ffac8888b2207a5f4c4c54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db= getDatabase(app);

export {auth, app, db}
