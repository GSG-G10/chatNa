// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAGDpi03nh-7yK8FoZ3_41MNSrU59sfd7Y",
  authDomain: "chatna-e722c.firebaseapp.com",
  projectId: "chatna-e722c",
  storageBucket: "chatna-e722c.appspot.com",
  messagingSenderId: "929695673221",
  appId: "1:929695673221:web:74e664b6c882c5d0b1b2ec",
  measurementId: "G-6MKYD5RLRB",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)

// const authentication = getAnalytics(app);
export default authentication;
