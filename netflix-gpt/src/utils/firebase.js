// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpdP2rLBC5Tx8joGBXikND4EOuO37QtSA",
  authDomain: "netflixgpt-304c1.firebaseapp.com",
  projectId: "netflixgpt-304c1",
  storageBucket: "netflixgpt-304c1.appspot.com",
  messagingSenderId: "318970404382",
  appId: "1:318970404382:web:6e8cfeea6aa36ad23e180f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
