// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7lMP7FWAnx2q9p1KR_z2A_cDAx2tsfq8",
  authDomain: "fir-auth-2fe34.firebaseapp.com",
  projectId: "fir-auth-2fe34",
  storageBucket: "fir-auth-2fe34.appspot.com",
  messagingSenderId: "197473595616",
  appId: "1:197473595616:web:7f5e463cfb9967458be085",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
