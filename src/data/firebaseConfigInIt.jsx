// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigInIt = {
  apiKey: "AIzaSyCHvgoW8Mv_EhS9lfQ1arjeR76C09zfJIM",
  authDomain: "paint-plus-2b826.firebaseapp.com",
  projectId: "paint-plus-2b826",
  storageBucket: "paint-plus-2b826.appspot.com",
  messagingSenderId: "328490763140",
  appId: "1:328490763140:web:53a783a89e5e24c72693d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfigInIt);
const auth = getAuth(app);

export default auth;
